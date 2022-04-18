Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function captureImage() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img src="' + data_url + '" id="capture_image">';
    });
}
console.log("ml5verion=", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Jtd7zXwdV/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}