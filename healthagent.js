var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");

var x = require('casper').selectXPath;

/***** BEGIN - Landing Page ******/

casper.start('https://agentdev.nutraspace.com/').viewport(1280,1024);

casper.wait(3000,function(){
	this.echo(this.getTitle());
});

casper.then(function (){
	casper.capture('png/landingPage.png');
});

/***** END - Landing Page ******/

/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('png/signPage.png');
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

casper.wait(10000,function (){
	casper.capture('png/homePage.png');
});

/***** END - Sign In ******/

/***** BEGIN - Operation - dashboard ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[1]/a/i'));
});

casper.wait(3000,function (){
	casper.capture('png/dashboard.png');
});

/***** BEGIN - Operation - food ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[2]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div[3]/a/span'));
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Poly_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Selenium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Total_Sugars-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Iodine-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_E_Alpha_Taco-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Calories_from_Fat-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.then(function (){
	casper.capture('png/Vitamin_A_IU-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.then(function (){
	casper.capture('png/Magnesium-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.then(function (){
	casper.capture('png/Vitamin_B3-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.then(function (){
	casper.capture('png/Vitamin_B1-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.then(function (){
	casper.capture('png/Vitamin_C-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Folate-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_D_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Sodium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Calcium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Protein-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_A_RAE-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Cholesterol_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_B2-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Calories-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_B12-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_E_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Phosphorus-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Trans_Fatty_Acid-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Mono_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Molybdenum-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Saturated_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Copper-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Iron-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Carbohydrates-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Dietary_Fiber-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_B6-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Potassium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Zinc-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Vitamin_D_MCG-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/Fat_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a'));	
});

casper.then(function (){
	casper.capture('png/Vitamin_A_RE-food.png');
});

/***** END - Operation - food ******/

/***** BEGIN - Operation - stats ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[3]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/stats.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[4]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/goal.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[5]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/provider.png');
});

/***** BEGIN - Operation - profile ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[6]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));
});

casper.wait(2000,function (){
	casper.capture('png/general-profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/nutrition-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));
});

casper.wait(2000,function (){
	casper.capture('png/fitness-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));
});

casper.wait(2000,function (){
	casper.capture('png/wearables_devices-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));
});

casper.wait(2000,function (){
	casper.capture('png/additional_diagnostics-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));
});

casper.wait(2000,function (){
	casper.capture('png/payment_settings-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[7]'));
});

casper.wait(2000,function (){
	casper.capture('png/getting_started-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[8]'));	
});

casper.wait(2000,function (){
	casper.capture('png/dietary_needs-profile.png');	
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
	casper.capture('png/typeahead_results-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="diabetes faqs"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/typeahead_selected-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-websearch"]'));		
});

casper.wait(2000,function (){
	casper.capture('png/results-search.png');	
});

/***** END - Operation - search ******/

/***** BEGIN - Operation - logit ******/

/*food*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[1]/div/header/span/div[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/select_food-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="food-search"]'), "burger")
});

casper.wait(10000,function (){
	casper.capture('png/results_burger-logit.png');	
});

casper.then(function (){
	casper.click(x('//*[text()="Double Hamburger"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/select_DoubleHamburger-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-food"]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[6]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('png/select_-logit.png');	
});

/*meal*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[2]/div/header/span/div[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/select_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Coffee"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/select_coffee_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-meal"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/display_inserted_coffee_meal-logit.png');
});

/*activity*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Activity"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/select_activity-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="main-easy-search"]'), "squash")
});

casper.wait(5000,function (){
	casper.capture('png/search_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="squash, general"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/select_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('png/log_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[18]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('png/display_squash-logit.png');	
});

/***** END - Operation - logit ******/

/***** BEGIN - Operation - Messages_Notification ******/


/*notification*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer-Messages_Notification1.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[2]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('png/Notification-Messages_Notification.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer_closed-Messages_Notification.png');
});

/*messages*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('png/drawer-Messages_Notification2.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[3]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('png/Messages-Messages_Notification.png');
});

/***** END - Operation - Messages_Notification ******/


/*****  BEGIN - Logout ******/

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

casper.then(function (){
	casper.exit();
});

casper.run();