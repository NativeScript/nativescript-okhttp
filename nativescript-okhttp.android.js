var application = require("application");
var utils = require("utils/utils");
 
module.exports = {
    getString: function(url) {
		
		// debugging code
		var policy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
        android.os.StrictMode.setThreadPolicy(policy);
		
        var client = new com.squareup.okhttp.OkHttpClient();
		var request = new com.squareup.okhttp.Request.Builder().url(url).build();
		var response = client.newCall(request).execute();
		var result = response.body().string();
        var json = utils.parseJSON(result);
        
		console.log("\n\n ======================================================= \n\n");
		console.log("client: " + (client != null) + "\n\n");
		console.log("request: " + (request != null) + "\n\n");
		console.log("response: " + (response != null) + "\n\n");
        console.log("json: " + json.id + "\n\n");
		console.log("\n\n ======================================================= \n\n");
    },
    getJSON: function(url) {
		
		// debugging code
		var policy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
        android.os.StrictMode.setThreadPolicy(policy);
		
        var client = new com.squareup.okhttp.OkHttpClient();
		var request = new com.squareup.okhttp.Request.Builder().url(url).build();
		var response = client.newCall(request).execute();
		var result = response.body().string();
        var json = utils.parseJSON(result);
        return json;
    }
};

// Public API

// getString
// getJSON<T>
// getImage

/*
var httpRequest = require("http/http-request");
global.moduleMerge(httpRequest, exports);
function getString(arg) {
    return new Promise(function (resolve, reject) {
        httpRequest.request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(function (r) {
            try {
                var str = r.content.toString();
                resolve(str);
            }
            catch (e) {
                reject(e);
            }
        }, function (e) { return reject(e); });
    });
}
exports.getString = getString;
function getJSON(arg) {
    return new Promise(function (resolve, reject) {
        httpRequest.request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(function (r) {
            try {
                var json = r.content.toJSON();
                resolve(json);
            }
            catch (e) {
                reject(e);
            }
        }, function (e) { return reject(e); });
    });
}
exports.getJSON = getJSON;
function getImage(arg) {
    return new Promise(function (resolve, reject) {
        httpRequest.request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(function (r) {
            r.content.toImage().then(function (source) { return resolve(source); }, function (e) { return reject(e); });
        }, function (e) { return reject(e); });
    });
}
exports.getImage = getImage;
*/