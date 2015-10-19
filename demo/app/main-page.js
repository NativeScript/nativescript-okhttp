var socialShare = require("nativescript-social-share");
var imageSource = require("image-source");
var okHttp = require("nativescript-okhttp");

function pageLoaded(args) {
    getString("http://www.google.com/");
	getJSON("https://api.github.com/gists/c2a7c39532239ff261be");
	getImage("http://i.imgur.com/sXG9IHW.jpg");
}
exports.pageLoaded = pageLoaded;

function getString(url) {
    var result = okHttp.getString(url);
    console.log(result);
}
exports.getString = getString;

function getJSON(url) {
    var json = okHttp.getJSON(url);
    console.log("JSON url: " + json.url);
}
exports.getJSON = getJSON;

function getImage(url) {
    var inputStream = okHttp.getImage(url);
    var image = imageSource.fromData(inputStream);
    socialShare.shareImage(image);
}
exports.getImage = getImage;