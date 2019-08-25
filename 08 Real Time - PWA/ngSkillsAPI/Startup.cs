using System;
using System.Collections.Generic;
using System.Linq;
using JSNLog;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NLog.Extensions.Logging;
using NLog.Web;
using Swashbuckle.AspNetCore.Swagger;

namespace SkillsApi
{
    public class Startup
    {

        private readonly IHostingEnvironment env;

        public Startup(IHostingEnvironment environment)
        {
            env = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {

            //Config
            IConfigurationBuilder cfgBuilder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
            IConfigurationRoot configuration = cfgBuilder.Build();
            services.AddSingleton(typeof(IConfigurationRoot), configuration);

            //EF

            // SQL Server ... use "SQLServerDBConnection" ConString
            // var conStr = configuration["ConnectionStrings:SQLServerDBConnection"];
            // services.AddEntityFrameworkSqlServer ()
            //     .AddDbContext<SkillDBContext> (options => options.UseSqlServer(conStr));

            // SQLite ... use "SQLServerDBConnection" ConString
            var conStrLite = configuration["ConnectionStrings:SQLiteDBConnection"];
            services.AddEntityFrameworkSqlite().AddDbContext<SkillDBContext>(options => options.UseSqlite(conStrLite));

            //SignalR
            services.AddSignalR();

            //Cors

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            // services.AddCors (options => {
            //     options.AddPolicy ("AllowAll",
            //         builder => builder.WithOrigins ("http://localhost:4200")
            //         .AllowAnyMethod ()
            //         .AllowAnyHeader ()
            //         .AllowCredentials ());
            // });

            //Firebase
            var realm = configuration["Authentication:Firebase:Realm"];

            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = $"https://securetoken.google.com/{realm}";
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = $"https://securetoken.google.com/{realm}",
                        ValidateAudience = true,
                        ValidAudience = realm,
                        ValidateLifetime = true
                    };
                });

            //Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Skills API", Version = "v1" });
            });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            //Logging
            loggerFactory.AddNLog();
            env.ConfigureNLog("nlog.config");

            var jsnlogConfiguration = new JsnlogConfiguration();
            app.UseJSNLog(new LoggingAdapter(loggerFactory), jsnlogConfiguration);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseStatusCodePages();
            }

            //Startup File
            var options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");
            app.UseDefaultFiles(options);

            if (env.IsDevelopment())
            {
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = context =>
                    {
                        context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
                        context.Context.Response.Headers["Pragma"] = "no-cache";
                        context.Context.Response.Headers["Expires"] = "-1";
                    }
                });
            }
            else { app.UseStaticFiles(); }

            //Cors
            app.UseCors("AllowAll");

            //SignalR
            app.UseSignalR(routes =>
            {
                routes.MapHub<SkillHub>("/skillhub");
            });

            //Swagger
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Skills API V1");
                c.RoutePrefix = string.Empty;
            });

            // Uncomment this line to enable auth
            // app.UseAuthentication();

            app.UseMvcWithDefaultRoute();
        }
    }
}

//Publish to Azure: dotnet publish /p:PublishProfile=Azure /p:Configuration=Release