/*
                         Created by: Dan Sweetnam                                    
                         Last modified from: Dan Sweetnam
                         File: new_status.js                                
                         Company: NutraSpace, LLC                             
                         Created on: April 25 2015                                    
                         Last edited on: May 5 2015                                 
                         Version: 0.17                                     
 */

//Casper Setup Vars
var startDate = new Date();
var postRunDate = new Date();
var longWait = 20000;
var resX = 1280;
var resY = 800;

// Site Auth Vars
var access = {
userName: '',
passWord: '',
};

// Site Vars
var config = {
url: 'http://10.0.0.28:4001/login',
clickvalue: "form input[type=submit][value=Login]",
loginheadertext: 'HealthAgent',
sitetestname: 'HealthAgent',
introwelcomemsg: 'HealthAgent',
assert: 'title',
};

/********************************************************************************/

// BELOW ARE THE TESTS

casper.test.begin(config.sitetestname, 0, function(test) {
  test.comment(' Loading ' + config.url);
  casper.start(config.url, function() {

    this.endTime = new Date();
    var title = this.evaluate(function () {
      return document.title;
    });

    casper.then(function() {
      currentSub='Waiting with timeout ' + longWait + 'ms for input #username to be visible';
      this.waitUntilVisible('input#username', function() {
        currentSub='Assert that input #username exists';
        test.assertExists('input#username', currentSub);
      }, function() {
        currentSub='Assert that input #username exists';
        test.assertExists('input#username', currentSub);
        casper.exit(1);
      }, longWait);
    });

    casper.then(function() {
      currentSub='Waiting with timeout ' + longWait + 'ms for input #password to be visible';
      this.waitUntilVisible('input#password', function() {
        currentSub='Assert that input #password exists';
        test.assertExists('input#password', currentSub);
      }, function() {
        currentSub='Assert that input #password exists';
        test.assertExists('input#password', currentSub);
        casper.exit(1);
      }, longWait);
    });

    casper.then(function() {
      test.done();
    });

  }); 

});

var preRunDate = new Date();
casper.run();

