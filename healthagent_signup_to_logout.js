/*
Created by: Kiran Betgeri
Last edited by: Kiran Betgeri
File: healthagent_signup_to_logout.js
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

/***** BEGIN - Sign Up ******/

casper.wait(10000,function (){
	casper.capture('/var/www/html//var/www/html/png/client/signup/Before_Signup.png');
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="email"]'), "test9@healthagent.com")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="password"]'), "He@lth2014Agent")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="password_confirmation"]'), "He@lth2014Agent")
});

casper.waitForSelector(x('//*[@id="registrationform"]/form/div[3]/div/button'),function (){
	casper.click(x('//*[@id="registrationform"]/form/div[3]/div/button'));
});

casper.wait(10000,function (){
	casper.capture('/var/www/html/png/client/signup/After_Signup.png');
});

casper.then(function(){
	this.echo("STEP 1 - SignUp Operation Success");
});

/***** END - Sign Up ******/

/***** BEGIN - Complete Profile ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[6]/a'));
});

/* general */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[1]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/general/empty_general-profile.png');
});

// >>> Upload Profile Image

casper.then(function (){
	casper.sendKeys(x('//*[@id="name"]/div/div/input'), "Nancy Drew")
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="gender"]/div/div/label[1]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="ethnicity"]/label[4]'));		
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="age"]/div/div/div/input'), "37")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="height_feet"]/div/input'), "5")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="height_inches"]/input'), "7")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="weight"]/div/div/div/input'), "210")
});

casper.then(function(){
    casper.evaluate(function() {
        document.querySelector('select[name = "activity_at_work"]').selectedIndex = 2; 
        return true;
    });
});

casper.then(function(){
    casper.evaluate(function() {
        document.querySelector('select[name = "health_insurance"]').selectedIndex = 2; 
        return true;
    });
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="phone_num"]/div/div/input'), "1237860710")
});

casper.then(function(){
    casper.evaluate(function() {
        document.querySelector('select[name = "toggle_sms"]').selectedIndex = 2; 
        return true;
    });
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/general/complete_general-profile.png');
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="general"]/div/div/div/nav/div/div/button'));		
});

/* nutrition */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[2]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/nutrition/empty_nutrition-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="vitamin_d_supp"]/label[1]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="veg_vegan"]/label[2]/i'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="omega_3_supp"]/label[1]'));		
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="other_supp"]/label[2]/i'));		
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/nutrition/complete_nutrition-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="nutrition"]/div[3]/div/nav/div/div/button'));		
});

/* fitness */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[3]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/fitness/empty_fitness-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="do_workout"]/label[2]'));
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="target_weight"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.click(x('//*[@id="joint_soreness"]/label[1]'));
});

casper.then(function (){
	casper.click(x('//*[@id="time_sitting_perday"]/label[4]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/fitness/complete_fitness-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="fitness"]/div[3]/nav/div/div/button'));		
});

/* wearables_devices */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[4]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/wearables_devices/wearables_devices-profile.png');	
});

// >>> connect wearables_devices

casper.then(function (){
	casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span'));
});

casper.then(function (){
	casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span[1]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/wearables_devices/connect_wearables_devices-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span[2]'));
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[2]/button'));		
});

/* additional_diagnostics */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[5]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/additional_diagnostics/empty_additional_diagnostics-profile.png');	
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="blood_pressure_systolic"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="blood_pressure_diastolic"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cholesterol_total"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cholesterol_hdl"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cholesterol_ldl"]/div/div/div/input'), "180")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="glucose_fasting"]/div/div/div/input'), "180")
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/additional_diagnostics/complete_additional_diagnostics-profile.png');	
});

// >>> add diseases and medication

casper.wait(2000,function (){
	casper.click(x('//*[@id="biometrics"]/div[6]/div/div/div/nav/div/div/button'));		
});

/* payment_settings */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[6]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/payment_settings/empty_payment_settings-profile.png');	
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="addressInfo"]/div/div[1]/input'), "10227 N MacArthur Blvd")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="addressInfo"]/div/div[2]/input'), "264")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="addressInfo"]/div/div[3]/input'), "Irving")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="addressInfo"]/div/div[4]/input'), "TX")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="addressInfo"]/div/div[5]/input'), "75063")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cardInfo"]/div/div[1]/input'), "Nancy Drew")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cardInfo"]/div/div[2]/input'), "4111111111111111")
});

casper.then(function (){
	casper.sendKeys(x('//*[@id="cardInfo"]/div/div[3]/input'), "04/20")
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/payment_settings/complete_payment_settings-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="payment"]/form/div[3]/div/button[1]'));		
});

casper.wait(5000,function (){
	casper.capture('/var/www/html/png/client/profile/payment_settings/subscription_payment_settings-profile.png');	
});

// >>> subscribe to a plan

/* getting_started */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[7]'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/getting_started/getting_started-profile.png');	
});

casper.then(function (){
	casper.click(x('//*[@id="overview"]/div[9]/div[1]/a'));
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/getting_started/list_modlog_getting_started-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[text()="General Health"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/getting_started/select_GH_modlog_getting_started-profile.png');	
});

casper.wait(2000,function (){
	casper.click(x('//*[@id="main-callback-modcat"]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/getting_started/select_GH_modlog_getting_started-profile.png');	
});

/* dietary_needs */
casper.then(function (){
	casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[1]/div/div/div/div[2]/div/a[8]'));	
});

casper.wait(2000,function (){
	casper.capture('/var/www/html/png/client/profile/dietary_needs/dietary_needs-profile.png');	
});

casper.then(function(){
	this.echo("STEP 2 - Profile Operation Success");
});

/***** END - Complete Profile ******/

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

casper.then(function(){
	this.echo("STEP 3 - Goal Operation Success");
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
	casper.click(x('//*[text()="food"]'));	
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
	this.echo("STEP 7 - Provider Operation Success");
});

/***** END - Operation - provider ******/

/***** BEGIN - Operation - dashboard ******/

casper.then(function (){
	casper.click(x('//*[@id="horizontal-nav"]/div[1]/a/i'));
});

casper.wait(3000,function (){
	casper.capture('/var/www/html/png/client/dashboard/dashboard.png');
});

casper.then(function(){
	this.echo("STEP 8 - Dashboard Operation Success");
});

/***** END - Operation - dashboard ******/

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
	this.echo("STEP 10 - Messages & Notification Operation Success");
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