function getUserMedia_bound(options, successCallback, failureCallback) {
    // get browser specific user media
    var api = getUserMedia();
    if (api) {
        return api.bind(navigator)(options, successCallback, failureCallback);
    }
}

function getUserMedia() {
    return navigator.getUserMedia ||  // Opera
        navigator.webkitGetUserMedia ||  // chrome / safari
        navigator.mozGetUserMedia ||  // Firefox
        navigator.msGetUserMedia;  // MS
}

function getStream(type) {
    // check availability

    if (!getUserMedia()) {
        alert("User Media API not supported.");
        return;
    }

    // set constraints for request based on type
    var constraints = {};
    constraints[type] = true;

    // request User Media and implement link to video/audio
    getUserMedia_bound(
        constraints,
        function (stream) {
            var mediaControl = document.querySelector(type);

            // the real magic - different for moz and the rest
            if ("srcObject" in mediaControl) {
                mediaControl.srcObject = stream;
            } else if (navigator.mozGetUserMedia) {
                mediaControl.mozSrcObject = stream;
            }
        },
        function (err) {
            alert("Error: " + err);
        }
    );
}

function stopStream(type) {
    // check availability

    if (!getUserMedia()) {
        alert("User Media API not supported.");
        return;
    }

    // set constraints for request based on type
    var constraints = {};
    constraints[type] = true;

    // request User Media and implement link to video/audio
    getUserMedia_bound(
        constraints,
        function (stream) {
            var mediaControl = document.querySelector(type);
            // the real magic - different for moz and the rest
            if ("srcObject" in mediaControl) {
                mediaControl.srcObject = null;
            } else if (navigator.mozGetUserMedia) {
                mediaControl.mozSrcObject = null;
            }
            stream.getTracks().forEach(track => track.stop())
        },
        function (err) {
            alert("Error: " + err);
        }
    );
}


function grabScreenshot(e) {

    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const img = document.getElementById('screenshot_result');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    // Other browsers will fall back to image/png
    img.src = canvas.toDataURL('image/webp');
}

