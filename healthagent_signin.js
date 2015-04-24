/***********/

var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

casper.start('https://agentdev.nutraspace.com/').viewport(1200,800);

/***********/


/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('png/signPage.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="username"]'), "test7@healthagent.com")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="password"]'), "He@lth2014Agent")
});

casper.then(function (){
	casper.click(x('//*[@id="loginform"]/div[3]/div[2]/button[1]'));
});

casper.wait(3000,function (){
	casper.capture('png/homePage.png');
});

/***** END - Sign In ******/

/***********/

casper.then(function (){
	casper.exit();
});

casper.run();
