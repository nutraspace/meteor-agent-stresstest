/*
Created by: Kiran Betgeri
Last edited by: Kiran Betgeri
File: healthagent_signin_to_logout.js
Company: NutraSpace, LLC
Created on: April 25 2015
Last edited on: April 27 2015
Version: 1.1
*/

var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");

var x = require('casper').selectXPath;

/***** BEGIN - Landing Page ******/

phantom.clearCookies();

casper.start('http://10.0.0.28:4000').viewport(1280,1024);

casper.wait(3000,function(){
	this.echo(this.getTitle());
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/landingpage/LandingPage.png');
});

/***** END - Landing Page ******/

/***** BEGIN - Sign In ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a'));
});

casper.wait(3000,function (){
	casper.capture('/var/www/html/png/client/signin/SignInPage.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="username"]'), "test9@healthagent.com")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="password"]'), "He@lth2014Agent")
});

casper.then(function (){
	casper.click(x('//*[@id="loginform"]/div[3]/div[2]/button[1]'));
});

casper.wait(10000,function (){
	casper.capture('/var/www/html/png/client/signin/HomePageAfterSignIn.png');
});

casper.then(function(){
	this.echo("STEP 1 - SignIn Operation Success");
});

/***** END - Sign In ******/

/***** BEGIN - Operation - dashboard ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[1]/a/i'));
});

casper.wait(3000,function (){
	casper.capture('/var/www/html/png/client/dashboard/dashboard.png');
});

casper.then(function(){
	this.echo("STEP 2 - Dashboard Operation Success");
});

/***** END - Operation - dashboard ******/

/***** BEGIN - Operation - profile ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[6]/a'));
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/general/general-profile.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/nutrition/nutrition-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/fitness/fitness-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/wearables_devices/wearables_devices-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/additional_diagnostics/additional_diagnostics-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/payment_settings/payment_settings-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[7]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/getting_started/getting_started-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[8]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/dietary_needs/dietary_needs-profile.png');	
});

casper.then(function(){
	this.echo("STEP 3 - Profile Operation Success");
});

/***** END - Operation - profile ******/

/***** BEGIN - Operation - goal ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[4]/a'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/goal.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="General Health & Wellness"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/select_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div[3]/div/div[4]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/adopted_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div[3]/div/div[1]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/progress_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div[3]/div/div[2]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/logs_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div[3]/div/div[3]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/rules_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[1]/div/div[3]/div/div[4]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/settings_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[2]/div/div[2]/div/div[4]/div/div[1]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/select_delete_GH&Wgoal-goal.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div[2]/div/div[2]/div/div[4]/div/div[2]/div/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/goal/confirm_delete_GH&Wgoal-goal.png');
});

casper.then(function(){
	this.echo("STEP 4 - Goal Operation Success");
});

/***** END - Operation - goal ******/


/***** BEGIN - Operation - logit ******/

/*food*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/food/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Food"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/food/select_food-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="food-search"]'), "burger")
});

casper.wait(10000,function (){
	casper.capture('/var/www/html/png/client/logit/food/results_burger-logit.png');	
});

casper.then(function (){
	casper.click(x('//*[text()="Double Hamburger"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/food/select_DoubleHamburger-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-food"]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[6]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/food/close-logit.png');	
});

/*meal*/

/* casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/meal/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="index-search-results-scroll"]/div[1]/div[2]/div/header/span/div[2]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/meal/select_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Coffee"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/meal/select_coffee_meal-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-meal"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/meal/display_inserted_coffee_meal-logit.png');
}); */

/*activity*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/drawer-logit.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="Activity"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/select_activity-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="main-easy-search"]'), "squash")
});

casper.wait(5000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/search_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="squash, general"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/select_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/log_squash-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[18]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/activity/close-logit.png');	
});

/*Disease*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Disease"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/select_disease-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "diabetes")
});

casper.wait(10000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/results_diabetes-logit.png');	
});

casper.then(function (){
	casper.click(x('//*[text()="diabetes insipidus, nephrogenic, type ii"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/select_diabetes-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/display_diabetes-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/disease/close-logit.png');	
});

/*Medication*/

/* casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/medication/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Medication"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/medication/select_medication-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "advil")
});

casper.wait(10000,function (){
	casper.capture('/var/www/html/png/client/logit/medication/results_advil-logit.png');	
});

casper.then(function (){
	casper.click(x('//*[text()="advil"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/medication/select_advil-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]"]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/medication/close-logit.png');	
});
 */
 
 /* Feeling */

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/feeling/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Feeling"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/feeling/select_feeling-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="good"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/feeling/select_good-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/feeling/display_good-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/feeling/close-logit.png');	
});

/* Weight */

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/weight/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Weight"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/weight/select_weight-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "220")
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/weight/display_weight-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/weight/close-logit.png');	
});

/*Waist Size*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/waist_size/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Waist Size"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/waist_size/select_waist_size-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "42")
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/waist_size/display_waist_size-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/waist_size/close-logit.png');	
});

/*Water*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/water/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Water"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/water/select_water-logit.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "7")
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/water/display_water-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/water/close-logit.png');	
});

/*Smoker*/

casper.then(function (){
	casper.click(x('//*[@id="main-logit"]/i'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/smoker/drawer-logit.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Smoker"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/smoker/select_smoker-logit.png');
});

casper.then(function (){
	casper.click(x('//*[@id="modlog-enter-search-results-scroll"]/div[1]/div[2]/div[2]/span'));	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/smoker/display_smoker-logit.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/logit/smoker/close-logit.png');	
});

casper.then(function(){
	this.echo("STEP 4 - Logit Operation Success");
});

/***** END - Operation - logit ******/

/***** BEGIN - Operation - food ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[2]/a'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/daily/food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div[3]/a/span'));
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Poly_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Selenium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Total_Sugars-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Iodine-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_E_Alpha_Taco-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Calories_from_Fat-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_A_IU-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Magnesium-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_B3-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_B1-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_C-food.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Folate-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_D_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Sodium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Calcium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Protein-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_A_RAE-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Cholesterol_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_B2-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Calories-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_B12-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_E_IU-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Phosphorus-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Trans_Fatty_Acid-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Mono_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Molybdenum-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Saturated_Fat-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Copper-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Iron-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Carbohydrates-food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Dietary_Fiber-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_B6-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Potassium-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Zinc-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_D_MCG-food.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/food/range/Fat_food.png');
});

/* casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div[2]/div'));	
}); */

casper.wait(2000,function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a'));	
});

casper.then(function (){
	casper.capture('/var/www/html/png/client/food/range/Vitamin_A_RE-food.png');
});

casper.then(function(){
	this.echo("STEP 5 - Food Operation Success");
});

/***** END - Operation - food ******/

/***** BEGIN - Operation - stats ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[3]/a'));
});

casper.then(function (){
	casper.click(x('//*[text()="Activity"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/stat/activity/activity-stat.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Water H2O"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/stat/water/water-stat.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Weight"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/stat/weight/weight-stat.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Feeling"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/stat/feeling/feeling-stat.png');
});

casper.then(function (){
	casper.click(x('//*[text()="Waist Size"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/stat/waist_size/waist-stat.png');
});

casper.then(function(){
	this.echo("STEP 6 - Stats Operation Success");
});

/***** END - Operation - stats ******/

/***** BEGIN - Operation - provider ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[5]/a'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/provider/provider.png');
});

casper.then(function(){
	this.echo("STEP 8 - Provider Operation Success");
});

/***** END - Operation - provider ******/

/***** BEGIN - Operation - search ******/

casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/a/div'));	
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="websearch-search"]'), "diabetes")
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/search/typeahead_results-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="diabetes faqs"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/search/typeahead_selected-search.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-websearch"]'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/search/results-search.png');	
});

casper.then(function(){
	this.echo("STEP 9 - Search Operation Success");
});

/***** END - Operation - search ******/

/***** BEGIN - Operation - Messages_Notification ******/


/*notification*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/messages_notification/notification/drawer-Messages_Notification1.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[2]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/messages_notification/notification/Notification-Messages_Notification.png');
});

casper.then(function (){
	casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/messages_notification/notification/drawer_closed-Messages_Notification.png');
});

/*messages*/
casper.then(function (){
	casper.click(x('//*[@id="header-tools"]/div'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/messages_notification/messages/drawer-Messages_Notification2.png');
});

casper.then(function (){
	casper.click(x('//*[@id="right-index-search-results-scroll"]/div[1]/div[3]/div/header'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/messages_notification/messages/Messages-Messages_Notification.png');
});

casper.then(function(){
	this.echo("STEP 10 - Message & Notification Operation Success");
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
	casper.capture('/var/www/html/png/client/logout/logoutPage.png');
});

casper.then(function(){
	this.echo("STEP 11 - Logout Operation Success");
});

/*****  END - Logout ******/

casper.then(function (){
	casper.exit();
});

casper.run();