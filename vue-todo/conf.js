// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // enter test file name here 
    specs: ['initiallyBlank.js']
    
    /* optional browsers
    multiCapabilities: [{
    	browserName: 'firefox'
  		}, {
    	browserName: 'chrome'
  		}, {
    	browserName: 'internet explorer'
  	}]
  	*/

}
