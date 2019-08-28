using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillsApi
{
    //To manage Migrations & create the DB go to console:
    // (ef steht für Entity Framework)
    //[dotnet restore]
    //dotnet ef migrations add MIGRATION-NAME
    //dotnet ef database update

    public class SkillDBContext : IdentityDbContext
    {
        public SkillDBContext()
        {

        }

        public SkillDBContext(DbContextOptions<SkillDBContext> options) : base(options)
        {

        }
        // Collection for Skills
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Lesson> Lessons {get; set; }
    }
}
