var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");

var x = require('casper').selectXPath;

/***** BEGIN - Landing Page ******/

casper.start('https://agentdev.nutraspace.com/').viewport(1280,1024);

casper.wait(3000,function(){
	this.echo(this.getTitle());
});

casper.then(function (){
	casper.capture('png/client/landingpage/LandingPage.png');
});

/***** END - Landing Page ******/

/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('png/client/signin/SignInPage.png');
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
	casper.capture('png/client/signin/HomePageAfterSignIn.png');
});

/***** END - Sign In ******/

/***** BEGIN - Operation - dashboard ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[1]/a/i'));
});

casper.wait(3000,function (){
	casper.capture('png/client/dashboard/dashboard.png');
});

/***** BEGIN - Operation - food ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[2]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/client/food/daily/food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div[3]/a/span'));
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Poly_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Selenium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Total_Sugars-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Iodine-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_E_Alpha_Taco-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Calories_from_Fat-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Vitamin_A_IU-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Magnesium-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Vitamin_B3-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Vitamin_B1-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Vitamin_C-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Folate-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_D_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Sodium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Calcium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Protein-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_A_RAE-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Cholesterol_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_B2-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Calories-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_B12-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_E_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Phosphorus-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Trans_Fatty_Acid-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Mono_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Molybdenum-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Saturated_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Copper-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Iron-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Carbohydrates-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Dietary_Fiber-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_B6-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Potassium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Zinc-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Vitamin_D_MCG-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/Fat_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a'));	
});

casper.then(function (){
	casper.capture('png/client/food/range/Vitamin_A_RE-food.png');
});

/***** END - Operation - food ******/

/***** BEGIN - Operation - stats ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[3]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/client/food/range/stats.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[4]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/client/goal/goal.png');
});

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[5]/a'));
});

casper.wait(2000,function (){
	casper.capture('png/client/provider/provider.png');
});

/***** BEGIN - Operation - profile ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[6]/a'));
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/general/general-profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/nutrition/nutrition-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/fitness/fitness-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/wearables_devices/wearables_devices-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/additional_diagnostics/additional_diagnostics-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/payment_settings/payment_settings-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[7]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/getting_started/getting_started-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[8]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/profile/dietary_needs/dietary_needs-profile.png');	
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
	casper.capture('png/client/search/typeahead_results-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="diabetes faqs"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/search/typeahead_selected-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-websearch"]'));		
});

casper.wait(2000,function (){
	casper.capture('png/client/search/results-search.png');	
});

/***** END - Operation - search ******/

/***** BEGIN - Operation - logit ******/

/*food*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/food/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[1]/div/header/span/div[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/food/select_food-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="food-search"]'), "burger")
});

casper.wait(10000,function (){
	casper.capture('png/client/logit/food/results_burger-logit.png');	
});

casper.then(function (){
	casper.click(x('//*[text()="Double Hamburger"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/food/select_DoubleHamburger-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-food"]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[6]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/food/select_-logit.png');	
});

/*meal*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/meal/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[2]/div/header/span/div[2]'));
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/meal/select_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Coffee"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/meal/select_coffee_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-meal"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/meal/display_inserted_coffee_meal-logit.png');
});

/*activity*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/activity/drawer-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Activity"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/activity/select_activity-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="main-easy-search"]'), "squash")
});

casper.wait(5000,function (){
	casper.capture('png/client/logit/activity/search_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="squash, general"]'));	
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/activity/select_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/activity/log_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[18]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('png/client/logit/activity/display_squash-logit.png');	
});

/***** END - Operation - logit ******/

/***** BEGIN - Operation - Messages_Notification ******/


/*notification*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('png/client/messages_notification/notification/drawer-Messages_Notification1.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[2]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('png/client/messages_notification/notification/Notification-Messages_Notification.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));
});

casper.wait(2000,function (){
	casper.capture('png/client/messages_notification/notification/drawer_closed-Messages_Notification.png');
});

/*messages*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('png/client/messages_notification/messages/drawer-Messages_Notification2.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[3]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('png/client/messages_notification/messages/Messages-Messages_Notification.png');
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
	casper.capture('png/client/logout/logoutPage.png');
});

/*****  END - Logout ******/

casper.then(function (){
	casper.exit();
});

casper.run();