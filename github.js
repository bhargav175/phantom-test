var page = require('webpage').create();
page.open('http://github.com/bhargav175', function() {
  page.render('github.png');
  phantom.exit();
});