/***********/

var casper = require('casper').create();

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

casper.start('https://agentdev.nutraspace.com/').viewport(1200,800);

casper.then(function (){
	casper.capture('png/status/status.png');
});

casper.then(function(){
	this.echo("\n");		
	this.echo("NOTE:");
	this.echo("1 - Open png/status/status.png, if you don't see the landing page in the screenshot then run the healthagent_logout.js script");	
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
