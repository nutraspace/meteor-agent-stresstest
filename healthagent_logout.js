/***********/

var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

casper.start('https://agentdev.nutraspace.com/').viewport(1200,800);

/***********/


/*****  BEGIN - Logout ******/

casper.wait(2000,function (){
	casper.capture('png/State_Before_logout.png');
});

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[5]'));
});

casper.wait(10000,function (){
	casper.capture('png/logoutPage.png');
});

/*****  END - Logout ******/

/***********/

casper.then(function (){
	casper.exit();
});

casper.run();
