# Cordova

[Cordova Home](https://cordova.apache.org/)

## Install Cordova

```
npm install -g cordova
cordova create [project_name]
```

### Add Plattform

Execute also when cloning from Github

```
cordova platform add browser | ios | android | windows
```

### Excuting in browser | iOS | Android

```
cordova run browser | android | ios
```

### Manage Plugins

- [Find Plugin using Cordova Plugin Search](https://cordova.apache.org/plugins/)
- Add Plugin:

```
cordova plugin add [plugin]
cordova plugin add cordova-device-plugin
cordova plugin add cordova-plugin-camera
```

- Remove Cordova Plugin

## Build & Deploy App

- [Enalble Developer Featues on Device](https://developer.android.com/studio/debug/dev-options)

```
cordova build android | ios --debug
```

- Deploy App using adb

```
adb install -r platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

## Configure Debugging

- Browser Based Debugging - open Chrome - Go to:

```
chrome://inspect/#devices
```

[Cordova Debug Tools](https://github.com/Microsoft/vscode-cordova)

### Cordova Simulate

[Cordova Simulate](https://cordova.apache.org/howto/2018/02/02/cordova-simulate.html)

```
npm install -g cordova-simulate
```

# Links & Readings

[Android Device Bridge - Gettings started](https://www.xda-developers.com/install-adb-windows-macos-linux/)

[Chrome Remote Debugging](https://software.intel.com/en-us/xdk/docs/using-remote-chrome-devtools-to-debug-android-cordova-apps)

[Apple Remote Debugging](https://software.intel.com/en-us/xdk/docs/using-web-inspector-remote-to-debug-ios-cordova-apps)

[Cordova Browser Platform Details](https://www.raymondcamden.com/2016/03/22/the-cordova-browser-platform)
