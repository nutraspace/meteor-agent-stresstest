/*
Created by: Kiran Betgeri
Last edited by: Kiran Betgeri
File: healthagent_signup_to_logout.js
Company: NutraSpace, LLC
Created on: April 25 2015
Last edited on: April 27 2015
Version: 1.1
*/

/***********/

var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

phantom.clearCookies();

casper.start('http://10.0.0.28:4000').viewport(1280,1024);

/***********/


/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('/var/www/html/png/signPage.png');
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
	casper.capture('/var/www/html/png/homePage.png');
});

/***** END - Sign In ******/

/***********/

casper.then(function (){
	casper.exit();
});

casper.run();
