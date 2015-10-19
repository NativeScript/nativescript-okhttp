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
        return result;
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
    },
    getImage: function(url)
    {
        // debugging code
		var policy = new android.os.StrictMode.ThreadPolicy.Builder().permitAll().build();
        android.os.StrictMode.setThreadPolicy(policy);
        
        var client = new com.squareup.okhttp.OkHttpClient();
		var request = new com.squareup.okhttp.Request.Builder().url(url).build();
        var response = client.newCall(request).execute();
        
        var inputStream = response.body().byteStream();   
        return inputStream;
    }
};