var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");

var x = require('casper').selectXPath;

/***** BEGIN - Landing Page ******/

casper.start('https://agentdev.nutraspace.com/').viewport(1280,1024);

casper.wait(3000,function(){
	this.echo(this.getTitle());
});

casper.then(function (){
	casper.capture('C:/Projects/casperjs/workbook/png/landingPage.png');
});

/***** END - Landing Page ******/

/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/signPage.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="username"]'), "nutraspaceagent1@gmail.com")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="password"]'), "He@lth2014Agent")
});

casper.then(function (){
	casper.click(x('//*[@id="loginform"]/div[3]/div[2]/button[1]'));
});

casper.wait(3000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/homePage.png');
});

/***** END - Sign In ******/


/***** BEGIN - Operation - dashboard ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[1]/a/i'));
});

casper.wait(3000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/dashboard.png');
});

/***** BEGIN - Operation - food ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[2]/a'));
});

casper.wait(3000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/food.png');
});

/***** BEGIN - Operation - stats ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[3]/a'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/stats.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[4]/a'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/goal.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[5]/a'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/provider.png');
});

/***** BEGIN - Operation - profile ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[6]/a'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/general-profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/nutrition-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/fitness-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/wearables_devices-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/additional_diagnostics-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/payment_settings-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[7]'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/getting_started-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[8]'));	
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/dietary_needs-profile.png');	
});

/***** END - Operation - profile ******/

/***** BEGIN - Operation - search ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a/div'));	
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="websearch-search"]'), "diabetes")
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/typeahead_results-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="diabetes faqs"]'));	
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/typeahead_selected-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-websearch"]'));		
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/results-search.png');	
});

/***** END - Operation - search ******/

/***** BEGIN - Operation - logit ******/

casper.then(function (){
	casper.click(x('//*[@id="header-links"]/span'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/drawer-logit.png');
});

/*meal*/
/* casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[2]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/select_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Coffee"]'));	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-meal"]'));	
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/display_inserted_meal-logit.png');
}); */


/***** END - Operation - logit ******/

/***** BEGIN - Operation - Messages_Notification ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/drawer-Messages_Notification.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[2]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/Notification-Messages_Notification.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[3]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/Messages-Messages_Notification.png');
}); */
/***** END - Operation - Messages_Notification ******/

/*****  BEGIN - Logout ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[5]'));
});

casper.wait(3000,function (){
	casper.capture('C:/Projects/casperjs/workbook/png/logoutPage.png');
});

/*****  END - Logout ******/

casper.then(function (){
	casper.exit();
});

casper.run();