var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );

    document
      .getElementById("populateDetailsButton")
      .addEventListener("click", this.populateDeviceDetails);

    document
      .getElementById("useCamera")
      .addEventListener("click", this.openCamera);
  },

  // deviceready Event Handler
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent("deviceready");
    console.log(navigator.camera);
  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector(".listening");
    var receivedElement = parentElement.querySelector(".received");

    listeningElement.setAttribute("style", "display:none;");
    receivedElement.setAttribute("style", "display:block;");

    console.log("Received Event: " + id);
  },

  populateDeviceDetails: function() {
    var deviceDetails = "";
    deviceDetails += "<br/>Cordova:" + device.cordova;
    deviceDetails += "<br/>model:" + device.model;
    deviceDetails += "<br/>platform:" + device.platform;
    deviceDetails += "<br/>uuid:" + device.uuid;
    deviceDetails += "<br/>version:" + device.version;
    deviceDetails += "<br/>manufacturer:" + device.manufacturer;
    deviceDetails += "<br/>isVirtual:" + device.isVirtual;
    deviceDetails += "<br/>serial:" + device.serial;
    document.querySelector("#deviceDetails").innerHTML = deviceDetails;
  },

  openCamera: function(selection) {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    };

    navigator.camera.getPicture(
      function cameraSuccess(imageUri) {
        // You may choose to copy the picture, save it somewhere, or upload.
        var elem = document.getElementById("imageFile");
        elem.src = imageUri;
      },
      function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
      },
      options
    );
  }
};

app.initialize();
