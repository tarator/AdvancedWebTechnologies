
# Chrome Developer Youtube Channel

https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw

# Fetch-API
Statt XMLHttpRequest oder $.ajax()

# Module Loading Standards:

* Common.js `require()`
* System.js
* ES6Modules

Wenn möglich ES6Modules verwenden (`import`, `export`)

# Gulp

ist ein Taskrunner der heute an Bedeutung schon verloren hat.
Kann noch für Spezialtasks benutzt werden (z.B. kopieren von Resourcen auf einen ftp-Server)

# Typescript

http://www.typescriptlang.org/


# Web Components

Moderne Technologie in alten Seiten verwenden (z.B. Angular Elements)

https://developer.mozilla.org/en-US/docs/Web/Web_Components

````javascript
customElements.define("x-star-rating", StarRating);
<x-star-rating value="3" number="5"></x-star-rating>
````

# NPM vs. Yarn

## Vorteile von YARN (früher)

* Vorteile von Yarn: man konnte bestimmen, wo der Cache liegt.
* //discuss: Ist es leicht von Yarn nach npm zu wechseln
* Vorteil von yarn WAR, dass es eine ```yarn.lock.json``` gab. Es gibt jetzt aber auch eine ```package.lock.json```

## package.json vs. package.lock.json

Package installieren: `npm i --save`
Paket deinstallieren mit npm uninstall

## SemVer

Semantic versioning "^7.4.3

## NPM

Alle global installierten Pakete auflisten: `npm list -g --depth=0`

````
npm i -g @angular/cli webpack webpack-cli gulp gulp-cli
````

# React

Achtung: die React-CLI heißt create-react-app
https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html

# Scaffolding

Use CLI's or yeoman (VS-Code Extension: https://code.visualstudio.com/api/get-started/your-first-extension)


# Webpack (Bundler)

Konfiguration: `webpack.config.js`

Webpack erstellt ein, oder mehrere Bundles. Wir beginnen mit `entry`.
Das sind die Bundles. Webpack erstellt dann einen Dependency-Tree.

Um webpack auszuführen: `webpack`



CS-Code extension: LiveServer


# Bazel

ist wie `webpack` eine Build-Engine aber auf einem höheren Level.

## Das Konzept des "Mono Repo"


# Typescript

`--lib` compiler option, falls ich neuere Sprachkonstrukte verwenden will.

# TS: let vs. var

`let` hat das neue Scoping Verhalten `{ ... }`

`var` kann "leveling-up". somit ist sowas möglich:

````javascript
// levelling up: das ist gültig!
index = 1
var index = 0;

// das funktioniert nicht (let hat kein levelling up)
foo = 1;
let foo = 0;

````




# TS Map function

````javascript

var fruits = [
    { name: 'apples', quantity: 2, price: 3, region: 'europe' },
    { name: 'bananas', quantity: 0, price: 5, region: 'caribean' },
    { name: 'cherries', quantity: 5, price: 8, region: 'europe' }
];


//map -> shape arr
var names = fruits.map(function(item) {
    return item.name;
});

var lables = fruits.map(function(item) {
    return {
        label: `${item.name} costs ${item.price}`,
        stockInEuro: item.quantity * item.price
    };
});
````


## TS Clone erstellen

Ein Object ist in JavaScript technisch gesehen ein Array of Key/Value pairs.
Diese Syntax erstellt einen Klon einer Instanz.

````typescript

class Cat {
    age: 2;
    name: 'Micifuz';
}



function useCat() {
    let c = { name: 'Minka', age: 2};
    console.log(c['name']); // gibt 'Minka' aus
}

// ... ist hier der spread Operator
// dies erzeugt einen shallow-clone (keinen deep-clone)
function getPersonClone(person: any) {
    return { ...person };
}


````
Für einen Deep-Clone kann die Bibliothek `lodash` verwendet werden.


# .NET Core vs .NET Framework

.NET Framework (bzw. Mono) (V 4.x) wurde durch .NET Core (v 2.x) abgelöst.

.NET 5 wird die beiden zusammenführen.
Mono ist tot.

NuGET ist das Package Repository für .NET
DotNet CLI entspricht node cli.

````bash
dotnet restore npm i
dotnet run

dotnet new webapi -n FirstApi
````
## CLI 

https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x

"Kestrel" ist in .NET der Console-based webserver.



# Serverseitige Node application

Hat in der `package.json` eine `main` Option.

Start mit `npm run start`



# SCSS vs. Sass

SCSS ist Sass mit CSS-Syntag.
Der Vorteil von SCSS ist, dass es kompatibel mit CSS ist.

Das bedeutet, dass ich mein bestehendes CSS nehmen kann und es reicht die Dateiendung von `*.css` nach `*.scss` zu ändern und ich habe gültiges `SCSS`

Scss:

````scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

````

Sass:

````scss
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
````

# Flexbox und CSS-Grids

## Flexbox
https://flexboxplayground.notonebit.com/

https://flexboxfroggy.com/#de

## Css-Grid
Spiel um Flexbox/CSS-Grid zu lernen:

https://cssgridgarden.com/#de

https://css-tricks.com/snippets/css/complete-guide-grid/



## Doku des Material-Design Flex-Layouts

Das Material Flex Layout hat direktiven für Flexbox und CSS-Grid

https://github.com/angular/flex-layout/wiki

ist eine "Erweiterung" von Flexbox




# Angular

## Schematics

Um z.B. `@angular/material` zu installieren sollte man Schematics verwenden: `npm add @angular/material`
Installiert nicht nur das Paket sondern macht noch andere notwendige Sachen.



Das `color` hier ist eine Angular-Directive

````
  <mat-toolbar color="secondary">
````


