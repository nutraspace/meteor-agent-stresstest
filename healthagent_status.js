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

casper.then(function (){
	casper.capture('/var/www/html/png/status/status.png');
});

casper.then(function(){
	this.echo("\n");		
	this.echo("NOTE:");
	this.echo("1 - Open /var/www/html/png/status/status.png, if you don't see the landing page in the screenshot then run the healthagent_logout.js script");	
	this.echo("\n");
	this.echo("SCRIPTS:");	
	this.echo("1 - healthagent_status.js - check healthagent status");
	this.echo("2 - healthagent_logout.js - signout of healthagent");
	this.echo("3 - healthagent_signin.js - login to healthagent ");
	this.echo("4 - healthagent_signup_to_logout.js - performs all operations from signup to logout (Note: make sure you add a new email id in the script)");
	this.echo("5 - healthagent_signin_to_logout - performs all operations from signin to logout ");	
	this.echo("\n");
	this.echo("COMMAND:");	
	this.echo("casperjs --ssl-protocol=tlsv1 scriptname.js");
	
});

casper.then(function (){
	casper.exit();
});

casper.run();
