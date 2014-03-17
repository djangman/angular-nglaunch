angular-nglaunch
================

A headstart on an actual working SPA, that retrieves data from a PHP backend, for those who want to start with the brilliant ng-boilerplate, but would like a working Service, injecting that Service into a Controller, and at least one Jasmine test that is using the jasmine $httpBackend mock.

## Quick Intro Explanation, for all audiences, even those new to AngularJS:

### If you're seeking a boilerplate code setup for your first real App in AngularJS, there are many to choose from.  I know of Angular-Seed, Yeoman, and there's of course, the excellent ngBoilerplate. ( https://github.com/ngbp/ngbp ).

I chose ngBoilerplate, and the second I got a glance at the code after cloning it to my PC, I was definitely enthused. 
Benefits:
* You have a complete Grunt configuration set up for you, and are thus forced to learn this brilliant Build system, with  an excellent pre-written config file all written
* You're all set up with Jasmine testing.. with an example spec.js files already there, and a Karma task written for you in the Grunt file!
* The Angular Code that @joshdmiller starts you off with, is consistent with the latest conventions of the way Angular is written, including using the ui-router, instead of the built-in routing system, $routeProvider.


### Let's jump to the specific steps to get started.

* If you haven't already, go to https://github.com/ngbp/ngbp, and clone ngBoilerplate to your machine.
* Spend a couple of hours reading the code and absorbing the goodness, and notice how Josh is using the templateCache component of angular. His Build configuration enables you to have a separate tpl.html file (we're talking about views now), in the **src** ( where you do your actual work ), and when you run Grunt, all of the amazing stuff happens and your **build** directory,  how has your executable code, and you'll notice you not have the tpl.html files present on the build side (unlike the js files)... instead you have the **templates-app.js** file.   I know, major runon sentence.

* At this point, you could either just start coding, or you could decide to use my starter app, and clone this repo, angular-launchoff, into a **separate** directory.
* It's basically, like further training wheels.. I'll do things in a controller, and I write a Factory service, and inject it into the controller.   So you'll have the benefit of starting off from that point.  ( please, if my code is rife with suckiness and wrongness,.. please say so.. so it's a learning experience for me too )
* And the Service will actually retrieve code from your backend.. so yes.. you will need a php backend working either on a XXAMP/WAMP/MAMP, etc,.. on your local machine, or on on a live host.. but I'm going to commit the 2 PHP files as well, and include in those files the backend code for getting data from your mysql server.

### Look at the files that you now have in that separate directory from cloning this repo.. 

They are mostly files that relate to the "home" view.  The directory structure matches that of your ngbp,.. or the src/app branch, anyway, and I've completely replaced the app/home files, which before had Text, with an actual working ajax ( aka SPA ) app that.    
* In your ng-boilerplate install, rename the files in the src/app/home directory, before you copy mine over them, in case you want to keep the original.  It isn't like you have to... obviously the originals are always available from the ngbp repo anyway.
* Copy my files over them and replacing the remainders (that are not in src/app/home), such as src/app/app.js, main.less, you're ready to put to use the backend php scripts that I included.
* Copy the PHP files into your desired document root folder, or wherever, in your PHP installation
* Replace the blank mysql auth details in ajax.php, with your own
* In the noteService.js file, replace the path to your own ajax.php path
* Do a grunt build
* Copy the files that have just been updated under bin folder, into your web document root, whether it's your wamp, live host, etc..  and then when you navigate to your www.mydomain.com/yourappname, the app should be workoing



