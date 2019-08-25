# Progressive Web Apps

## Prerequisites: Skills REST Api from folder

Requires [.NET Core SDK v2.2.103](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.103-windows-x64-installer) and SQL Standard or Enterprise to be installed locally. If you want to use another version change connection string in appsettings.json.

Don't forget to create SQL Login `angular` with pwd `angular` as Sysadmin.

Go to folder where `*.csproj` is located, open console and run:

`dotnet restore` and then  
`dotnet run`

For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using `http://localhost:PORT/` and is not listening to the ip of your dev machine.

`dotnet run --urls http://0.0.0.0:5000` or
`dotnet run --urls https://0.0.0.0:5001`

---

## Setup & Gettings started

### Create Project with Service Worker

```
ng new ngSkillsPWA
cd ngSkillsPWA
ng add @angular/pwa --project ngSkillsPWA
```

Make sure you adjust your `environment.prod` to match IP config of your dev machine

```
export const environment = {
  production: true,
  apiURL: "https://API_DNS-or-IP/api/"
};
```

Create a prod build

```
ng build --prod [--watch] [--delete-output-path false]
```

## Deploy to Firebase

```
npm i -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Firebase Messaging

Test Messaging from Firebase:

![message-composer](_images/message-composer.png)

Test Messaging - execute in Console:

```
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=YOUR-SERVER-KEY' \
  -H 'Content-Type: application/json' \
  -d '{
 "notification": {
  "title": "Hello World",
  "body": "This is Message from Admin"
 },
 "to" : "YOUR-GENERATED-TOKEN"
}'
```

> YOUR-SERVER-KEY : Find out in Firebase console by open Setting > Cloud Messaging.

![server-key](_images/server-key.png)

> YOUR-GENERATED-TOKEN : you can find out in browser console because we log it in

![token](_images/token.png)

> Make sure you change token db to real time db

![real-time-db](_images/real-time-db.png)

## Tools

### Http-Server

Can be used to serve your Angular Production Build

```
npm install http-server -g
ng build --prod
cd .\dist\ngSkillsPWA\
http-server
```

#### Use loopback

No cert is needed to register service worker

![loopback](_images/loopback.png)

PWA can be installed

![install](_images/install.png)

#### Use ngrok

![ngrok](_images/http-server.png)

[ngrok](https://ngrok.com/) is a tool that provides an `https-secured tunnel` to `localhost` that enables
testing your PWAs. Requires registration but is free.

```
ngrok.exe http 8080
```

![ngrok](_images/ngrok.png)

### Other Tools

[Open Port Detection Tool](https://www.yougetsignal.com/tools/open-ports/)

[Getting Started with Lighthouse](https://developers.google.com/web/tools/lighthouse/)

---

## Links & Readings

[Let's encript](https://letsencrypt.org/)

[Certify the Web - IIS Tool](https://certifytheweb.com)

[manifest.json Reference](https://developers.google.com/web/fundamentals/web-app-manifest/)

[Create \*.pem-Certificate](https://www.cloudinsidr.com/content/how-to-install-the-most-recent-version-of-openssl-on-windows-10-in-64-bit/)

[Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/)
