var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'base3_test1.js' ],

	onPrepare : function() {
		// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory : 'c:/temp/screenshots'
		}).getJasmine2Reporter());
	}
};