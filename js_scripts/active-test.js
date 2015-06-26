
var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");

var x = require('casper').selectXPath;

// get variables from command line
var email = casper.cli.get("email");
var password = casper.cli.get("password");	
var url = casper.cli.get("url");	

/* variables for profile*/
var name = 'Nancy Drew';	
var ethnicity = 'Caucasian'; //select - African, Alaska Native, Asian, Caucasian, Latino, American Indian, Pacific Islander, Other		
var gender = 'Male'; //select - Female OR Male
var age = '37';
var height_ft = '5';	
var height_in = '4';		
var start_weight = '149';
var desired_weight = '145';

var bp_systolic = '115';
var bp_diastolic = '65';	
var total_cholestrol = '130';		
var hdl_cholestrol = '35';
var ldl_cholestrol = '88';
var fasting_glucose_level = '98';	

/* variables for logit*/

var weight = '151';	
var waist = '34';		
var water = '7';
var smoker = 'No way, not me'; //select - I smoke tobacco OR No way, not me
var feeling = 'good'; //select - good, bad, ok
var new_meal_name = 'Meal Plan 1';
var meal_name = 'light_snack'; //select - light_breakfast, light_lunch, light_dinner, light_snack, medium_breakfast, medium_lunch, medium_dinner, medium_snack, heavy_breakfast, heavy_lunch, heavy_dinner, heavy_snack
var meal_time ='Snack'; //select- Morning, Mid-day, Evening, Snack
var meal_serving ='1'; //select- 1 Serving, 2 Serving, 3 Serving
var activity_name ='walk'; //select- jogging, yoga, cycling, tennis, soccer, walk
var activity_time ='Night'; //select- Morning, Mid-day, Evening, Night
var activity_duration ='1.5'; //select- 0.5 hr, 1 hr, 1.5 hrs, 2 hrs, 2.5 hrs, 3 hrs

// Clear stored cookies
phantom.clearCookies();

// open landing page
casper.start(url).viewport(1280,1024);

// if the account didn't logout previously then force the logout
casper.then(function (){
	// click on the logo to get to a start point(landing page)
	click_logo();		
	
	if (!casper.exists(x('//*[@id="email"]')))
		{			

			logout();
			
			casper.wait(5000, function (){
				casper.capture('/var/www/html/png/client/status/status.png');
			});					
			
			click_logo();		
		}
});

casper.wait(2000,function(){
	this.echo("--------------------------");	
	this.echo(email);	
	this.echo("--------------------------");	
});

casper.then(function (){	
	// Sign up new user
	signup();
	
	casper.then(function (){
		// If email id already exists (for this we check the error message on the screen) then user should sign in.
		if (casper.exists(x('//*[@id="registrationform"]/form/div[3]/div[1]/i')))
			{	
				signin();
				display_goal();
				
				light_breakfast();
				light_lunch();
				light_dinner();
				light_snack();		
				//medium_breakfast();
				//medium_lunch();
				//medium_dinner();
				//medium_snack();	
				//heavy_breakfast();
				//heavy_lunch();
				//heavy_dinner();
				//heavy_snack();	
				
				//logit_meal(meal_name,meal_time,meal_serving);	
				logit_activity(activity_name,activity_time,activity_duration);
				logit_feeling(feeling);
				logit_weight(weight);	
				logit_waist(waist);		
				logit_water(water);
				logit_smoker(smoker);	
				//health_search();	
			}
		else
			{
				create_profile(name,ethnicity,gender,age,height_ft,height_in,desired_weight,start_weight,bp_systolic,bp_diastolic,total_cholestrol,hdl_cholestrol,ldl_cholestrol,fasting_glucose_level);	
				select_goal();	
				//create_meal(new_meal_name);			
			}
	});		
	
	// logout once all the operations are complete
	logout();
});

casper.then(function (){
	casper.exit();
});

casper.run();

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

var click_logo = function (){
	
	casper.wait(5000,function (){
		casper.click(x('//*[@id="header-logo"]/a/img'));
	});		
	
}	

var create_meal = function (new_meal_name){
	
	casper.then(function (){
		casper.click(x('//*[text()="Food"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/food/daily/food.png');
	});	
	
	casper.then(function (){
		casper.click(x('//*[text()="Create Meal"]'));
	});	
	
	casper.wait(3000,function (){
		casper.capture('/var/www/html/png/client/signup/food/meal/click_meal-food.png');
	});			

	casper.then(function (){
		casper.sendKeys(x('//*[@id="meal"]'), new_meal_name)
	});		
	
	casper.wait(3000,function (){
		casper.capture('/var/www/html/png/client/signup/food/meal/enter_meal-food.png');
	});				

	casper.then(function (){
		casper.click(x('//*[@id="meal_form"]/a[1]/i'));
	});			

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/food/meal/save_meal-food.png');
	});		
	
}	

var logit_meal = function (meal_name,meal_time,meal_serving){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Meal"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/select_meal-logit.png');
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+meal_name+'"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/select_meal-logit.png');
	});
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="meal-search-results-scroll"]/div[1]/div/div/div[2]/div/div/div/button[1]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/serving_meal-logit.png');
	});	
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+meal_serving+'"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Set Serving Amount"]'));	
	});	

	casper.wait(2000,function (){
		casper.click(x('//*[@id="meal-search-results-scroll"]/div[1]/div/div/div[2]/div/div/div/button[2]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/meal_time-logit.png');
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+meal_time+'"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Set Meal Time"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/meal_log-logit.png');
	});		

	casper.wait(2000,function (){
		casper.click(x('//*[text()="Log this Meal"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/meal/display_inserted_meal-logit.png');
	});	
	
}	

var logit_medication = function (){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/medication/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Medication"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/medication/select_medication-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "advil")
	});

	casper.wait(10000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/medication/results_advil-logit.png');	
	});

	casper.then(function (){
		casper.click(x('//*[text()="advil"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/medication/select_advil-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]"]'));		
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/medication/close-logit.png');	
	});		
	
}	

var logit_disease = function (){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Disease"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/select_disease-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="modlog-enter-search"]'), "diabetes")
	});

	casper.wait(10000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/results_diabetes-logit.png');	
	});

	casper.then(function (){
		casper.click(x('//*[text()="diabetes insipidus, nephrogenic, type ii"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/select_diabetes-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/display_diabetes-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/disease/close-logit.png');	
	});	
	
}	

var logit_smoker = function (smoker){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/smoker/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Smoker"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/smoker/select_smoker-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="'+smoker+'"]'));	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/smoker/display_smoker-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/smoker/close-logit.png');	
	});	
	
}	

var logit_feeling = function (feeling){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/feeling/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Feeling"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/feeling/select_feeling-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="'+feeling+'"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/feeling/select_good-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/feeling/display_good-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/feeling/close-logit.png');	
	});	
	
}

var logit_weight = function (weight){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/weight/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Weight"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/weight/select_weight-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="modlog-enter-search"]'), weight)
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/weight/display_weight-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/weight/close-logit.png');	
	});	
	
}

var logit_waist = function (waist){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/waist_size/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Waist Size"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/waist_size/select_waist_size-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="modlog-enter-search"]'), waist)
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/waist_size/display_waist_size-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/waist_size/close-logit.png');	
	});	
	
}

var logit_water = function (water){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/water/drawer-logit.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="Water"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/water/select_water-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="modlog-enter-search"]'), water)
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modlog-enter"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/water/display_water-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[16]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/water/close-logit.png');	
	});		
	
}

var logit_activity = function (activity_name,activity_time,activity_duration){
	
	casper.then(function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/drawer-logit.png');
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="Activity"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/select_activity-logit.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="main-easy-search"]'), activity_name)
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/search_jogging-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[contains(text(),"'+activity_name+'")]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/select_jogging-logit.png');	
	});
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="-activity-buttons"]/div/button[1]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/activity_duration-logit.png');
	});	
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+activity_duration+'"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-activity-duration"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="-activity-buttons"]/div/button[2]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/activity_time-logit.png');
	});	
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+activity_time+'"]'));	
	});		
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Set Time"]'));	
	});		

	casper.wait(2000,function (){
		casper.click(x('//*[text()=" Log This"]'));	
	});	

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/log_jogging-logit.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[18]/div[1]/button/img'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signin/logit/activity/close-logit.png');	
	});		
	
}

var select_goal = function (){
	
	casper.then(function (){
		casper.click(x('//*[text()="Goals"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/goal.png');
	});
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[3]/div/div[2]/div/div[2]/div/div/div[1]/div/span/a/div/i'));	
	});			

	casper.wait(2000,function (){
		casper.click(x('//*[text()="General Health & Wellness"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/select_GH&Wgoal-goal.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="SUBSCRIBE"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/adopted_GH&Wgoal-goal.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="RULES"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/rules_GH&Wgoal-goal.png');
	});

	casper.then(function (){
		casper.click(x('//*[text()="SETTINGS"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/settings_GH&Wgoal-goal.png');
	});
	
}

var create_profile = function (name,ethnicity,gender,age,height_ft,height_in,desired_weight,start_weight,bp_systolic,bp_diastolic,total_cholestrol,ldl_cholestrol,fasting_glucose_level){

	casper.then(function (){
		casper.click(x('//*[text()="Profile"]'));
	});

	/* general */

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/general/empty_general-profile.png');
	});

	// >>> Upload Profile Image

	casper.then(function (){
		casper.sendKeys(x('//*[@id="name"]/div/div/input'), name)
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+gender+'"]'));		
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+ethnicity+'"]'));		
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="age"]/div/div/div/input'), age)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="height_feet"]/div/input'), height_ft)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="height_inches"]/input'), height_in)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="weight"]/div/div/div/input'), start_weight)
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
		casper.capture('/var/www/html/png/client/signup/profile/general/complete_general-profile.png');
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="general"]/div/div/div/nav/div/div/button'));		
	});

	/* nutrition */
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Nutrition"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/nutrition/empty_nutrition-profile.png');	
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
		casper.capture('/var/www/html/png/client/signup/profile/nutrition/complete_nutrition-profile.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="nutrition"]/div[3]/div/nav/div/div/button'));		
	});

	/* fitness */
	casper.then(function (){
		casper.click(x('//*[text()="Fitness"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/fitness/empty_fitness-profile.png');	
	});

	casper.then(function (){
		casper.click(x('//*[@id="do_workout"]/label[2]'));
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="target_weight"]/div/div/div/input'), desired_weight)
	});

	casper.then(function (){
		casper.click(x('//*[@id="joint_soreness"]/label[1]'));
	});

	casper.then(function (){
		casper.click(x('//*[@id="time_sitting_perday"]/label[4]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/fitness/complete_fitness-profile.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="fitness"]/div[3]/nav/div/div/button'));		
	});

	/* wearables_devices */
	casper.then(function (){
		casper.click(x('//*[text()="Wearables and Devices"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/wearables_devices/wearables_devices-profile.png');	
	});

	// >>> connect wearables_devices

	/* casper.then(function (){
		casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span'));
	});

	casper.then(function (){
		casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span[1]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/wearables_devices/connect_wearables_devices-profile.png');	
	});

	casper.then(function (){
		casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[1]/div/div/span[2]'));
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="wearables"]/div/div[1]/div[2]/div/div[2]/button'));		
	}); */

	/* additional_diagnostics */
	casper.then(function (){
		casper.click(x('//*[text()="Additional Diagnostics"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/additional_diagnostics/empty_additional_diagnostics-profile.png');	
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="blood_pressure_systolic"]/div/div/div/input'), bp_systolic)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="blood_pressure_diastolic"]/div/div/div/input'), bp_diastolic)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="cholesterol_total"]/div/div/div/input'), total_cholestrol)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="cholesterol_hdl"]/div/div/div/input'), hdl_cholestrol)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="cholesterol_ldl"]/div/div/div/input'), ldl_cholestrol)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="glucose_fasting"]/div/div/div/input'), fasting_glucose_level)
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/additional_diagnostics/complete_additional_diagnostics-profile.png');	
	});

	// >>> add diseases and medication

	casper.wait(2000,function (){
		casper.click(x('//*[@id="biometrics"]/div[6]/div/div/div/nav/div/div/button'));		
	});

	/* payment_settings */
	casper.then(function (){
		casper.click(x('//*[text()="Payment Settings"]'));
	});

	casper.waitForSelector(x('//*[@id="payment"]/form/div[3]/div/button[1]'),function (){
		casper.capture('/var/www/html/png/client/signup/profile/payment_settings/empty_payment_settings-profile.png');	
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
		casper.capture('/var/www/html/png/client/signup/profile/payment_settings/complete_payment_settings-profile.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="payment"]/form/div[3]/div/button[1]'));		
	});

	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/payment_settings/subscription_payment_settings-profile.png');	
	});

	// >>> subscribe to a plan

	/* getting_started */
	casper.then(function (){
		casper.click(x('//*[text()="Getting Started"]'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/getting_started/getting_started-profile.png');	
	});

	casper.then(function (){
		casper.click(x('//*[@id="overview"]/div[7]/div[1]/a'));
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/getting_started/list_modlog_getting_started-profile.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="General Health"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/getting_started/select_GH_modlog_getting_started-profile.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-modcat"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/getting_started/select_GH_modlog_getting_started-profile.png');	
	});

	/* dietary_needs */
	casper.then(function (){
		casper.click(x('//*[text()="Dietary Needs"]'));
	});			
	

	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signup/profile/dietary_needs/dietary_needs-profile.png');	
	});
	
}	

var logout = function (){
	
	casper.then(function (){
		casper.click(x('//*[@id="header-tools"]/div'));
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="Logout"]'));
	});

	casper.wait(10000,function (){
		casper.capture('/var/www/html/png/client/logout/logoutPage.png');
	});

	casper.then(function(){
		this.echo("Logout Operation");
	});	
	
}

var signup = function (){

	casper.wait(5000, function (){
		casper.capture('/var/www/html/png/client/signup/signup/SignUpPage.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="email"]'), email)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="password"]'), password)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="password_confirmation"]'), password)
	});

	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signup/signup/SignUpPage_fillform.png');
	});

	casper.waitForSelector(x('//*[@id="registrationform"]/form/div[3]/div/button'),function (){
		casper.click(x('//*[@id="registrationform"]/form/div[3]/div/button'));
	});

	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signup/signup/SignUp_registered.png');
	});		
	
	casper.then(function(){
		this.echo("Signup Operation");
	});		
}

var signin = function (){
	
	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signin/signin/SignInPage.png');
	});	

	casper.then(function (){
		casper.click(x('//*[@id="power"]/div[3]/div/div/div[1]/div/ul/li/a/span'));
	});

	casper.wait(5000,function (){
		casper.capture('/var/www/html/png/client/signin/signin/SignInPage.png');
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="username"]'), email)
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="login-password"]'), password)
	});

	casper.then(function (){
		casper.click(x('//*[@id="loginform"]/div[3]/div[2]/button[1]'));
	});

	casper.wait(10000,function (){
		casper.capture('/var/www/html/png/client/signin/signin/HomePageAfterSignIn.png');
	});

	casper.then(function(){
		this.echo("SignIn Operation");
	});			

}

var light_breakfast = function (){		
	logit_food('Corn flakes Cereal','Corn flakes Cereal','1','Morning','Cup');
	logit_food('Orange Juice', 'Orange Juice','1','Morning','Cup');		
	logit_food('Milk', '2% Milk','1','Morning','Cup');
}	

var medium_breakfast = function (){	
	logit_food('Apple','Fresh Apple','1','Morning','Cup');
	logit_food('Doughnut', 'Glazed Doughnut','2','Morning','Each');		
}	

var heavy_breakfast = function (){	
	logit_food('Pancakes', 'Plain Pancakes','6','Morning','Each');
	logit_food('scrambled egg', 'scrambled egg','3','Morning','Each');
	logit_food('Strawberry Jam', 'Strawberry Jam','4','Morning','Tablespoon');
	logit_food('Salted Butter', 'Salted Butter','2','Morning','Tablespoon');		
}	

var light_lunch = function (){		
	logit_food('Bean & cheese Burrito', 'Bean & cheese Burrito','1','Mid-day','Each');
}	

var medium_lunch = function (){		
	logit_food('Fried Rice bowl', 'Fried Rice bowl','1','Mid-day','Bowl');
}

var heavy_lunch = function (){		
	logit_food('burger', 'Double Hamburger','1','Mid-day','Each');
	logit_food('fries', 'Waffle French fries','2','Mid-day','Small');	
}

var light_dinner = function (){	
	logit_food('taco', 'Crunchy Taco','2','Evening','Each');
}

var medium_dinner = function (){	
	logit_food('Sweet potato Casserole', 'Sweet potato Casserole','1','Evening','Side');
	logit_food('nuggets', 'chicken nuggets','1','Evening','Each');	
}

var heavy_dinner = function (){	
	logit_food('Battered Fried chicken leg', 'Battered Fried chicken leg','2','Evening','Each');
	logit_food('ranch', 'Ranch Salad Dressing','2','Evening','Tablespoon');	
}

var light_snack = function (){	
	logit_food('Milk Chocolate bar', 'Milk Chocolate bar','1','Snack','Each');
	logit_food('Chocolate chip Cookie', 'Chocolate chip Cookie','1','Snack','Each');	
}

var medium_snack = function (){	
	logit_food('pasta', 'Spaghetti Pasta','2','Snack','Cup');
	logit_food('vanilla', 'Vanilla Ice cream','1','Snack','Cup');
}

var heavy_snack = function (){	
	logit_food('pizza', 'Cheese Pizza','2','Snack','Slice');
	logit_food('Coke', 'Coke Soda','1','Snack','Bottle');
}

var logit_food = function (food_search, food_select, serving_amount, meal_time, units){	
	open_logit();
	open_logit_food();	
	search_food(food_search);		
	select_food(food_select);	
	click_serving_amount();	
	click_units();
	select_units(units);
	set_units();
	select_serving_amount(serving_amount);	
	set_serving_amount();
	click_meal_time();	
	select_meal_time(meal_time);	
	set_meal_time();	
	log_this_food();
	close_logit();
}

var display_goal = function (){
	
	casper.then(function (){
		casper.click(x('//*[text()="Goals"]'));
	});
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/goal/display_goal.png');	
	});			

}

var close_logit = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="power"]/div[1]/div[6]/div[1]/button/img'));		
	});
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/close_logit.png');	
	});		
	
}

var open_logit = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-logit"]/i'));
	});
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/open_logit.png');	
	});			
	
}

var open_logit_food = function (){
	
	casper.then(function (){
		casper.click(x('//*[text()="Food"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/open_logit_food.png');
	});	
	
}

var log_this_food = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Log this Food"]'));	
	});
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/log_this_food.png');
	});		
}

var click_serving_amount = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="food-search-results-scroll"]/div[1]/div[1]/div/div/div[1]/div/button[1]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/click_serving_amount.png');
	});		
}

var select_serving_amount = function (amount){
	
	casper.then(function (){
		casper.sendKeys(x('//*[@id="servings-search"]'), amount)
	});		
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/select_serving_amount.png');
	});		
}

var set_serving_amount = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Set Serving Amount"]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/set_serving_amount.png');
	});		
}

var click_units = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Select Units"]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/click_units.png');
	});		
}

var select_units = function (units){
	
	casper.wait(2000,function (){
		casper.click(x('//*[contains(text(),"'+units+'")]'));			
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/select_units.png');
	});		
}

var set_units = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Select"]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/set_units.png');
	});		
}

var click_meal_time = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="food-search-results-scroll"]/div[1]/div[1]/div/div/div[1]/div/button[2]'));	
	});	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/click_meal_time.png');
	});		
}

var select_meal_time = function (meal_time){
	
/* 	casper.wait(2000,function (){
		casper.click(x('//*[contains(text(),"'+meal_time+'")]'));			
	});	 */
	
	if (meal_time=='Morning')
	{		
		casper.wait(2000,function (){
			casper.click(x('//*[@id="meal-times-search-results-scroll"]/div[1]/div[1]'));			
		});			
	}
	else if (meal_time=='Mid-day')
	{		
		casper.wait(2000,function (){
			casper.click(x('//*[@id="meal-times-search-results-scroll"]/div[1]/div[2]'));			
		});			
	}	
	else if (meal_time=='Evening')
	{		
		casper.wait(2000,function (){
			casper.click(x('//*[@id="meal-times-search-results-scroll"]/div[1]/div[3]'));			
		});			
	}
	else 
	{		
		casper.wait(2000,function (){
			casper.click(x('//*[@id="meal-times-search-results-scroll"]/div[1]/div[4]'));			
		});			
	}
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/select_meal_time.png');
	});		
}

var set_meal_time = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="Set Meal Time"]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/set_meal_time.png');
	});		
}

var search_food = function (food_search){
	
	casper.then(function (){
		casper.sendKeys(x('//*[@id="food-search"]'), food_search)		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/search_food.png');
	});		
}

var select_food = function (food_select){
	
	casper.wait(2000,function (){
		casper.click(x('//*[text()="'+food_select+'"]'));	
	});	
	
	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/logit/food/select_food.png');
	});		
}

var health_search = function (){
	
	casper.wait(2000,function (){
		casper.click(x('//*[@id="header-tools"]/a/div/i'));	
	});

	casper.then(function (){
		casper.sendKeys(x('//*[@id="websearch-search"]'), "diabetes")
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/search/typeahead_results-search.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[text()="diabetes faqs"]'));	
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/search/typeahead_selected-search.png');	
	});

	casper.wait(2000,function (){
		casper.click(x('//*[@id="main-callback-websearch"]'));		
	});

	casper.wait(2000,function (){
		casper.capture('/var/www/html/png/client/signup/search/results-search.png');	
	});
	
}


