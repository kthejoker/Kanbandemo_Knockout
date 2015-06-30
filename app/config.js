require.config({
  // make bower_components more sensible
  // expose jquery 
  paths: {
    "bower_components": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
	"text" : "../bower_components/text/text",
	"domReady" : "../bower_components/domReady/domReady",
	"jquery-ui" : "../bower_components/jqueryui-master/ui"
	
  },
  map: {
    "*": {
      "knockout": "../bower_components/knockout.js/knockout-debug",
      "ko": "../bower_components/knockout.js/knockout-debug"
    }
  }
});

// Use the debug version of knockout it development only
// When compiling with grunt require js will only look at the first 
// require.config({}) found in this file
/*require.config({
  map: {
    "*": {
      "knockout": "../bower_components/knockout.js/knockout-2.3.0.debug",
      "ko": "../bower_components/knockout.js/knockout-2.3.0.debug"
    }
  }
}); */

if (!window.requireTestMode) {
  require(['main'], function(){ });
}

