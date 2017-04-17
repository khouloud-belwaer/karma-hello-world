# karma-hello-world
This is a demo of Jasmine/karma set up of a simple hello world app
Install the dependencies by running "npm install" in the root folder and voila you are all set. 
Otherwise, if you are setting up jasmin/karma in your app for the fist time, follow these steps:
  Install npm (if you haven't already) from https://nodejs.org/en/download/
  If you are the first developer setting up node dependencies for the first time for your project, (go to your project root folder and)     run "npm init" and it will ask you a series of questions. (refer this ). This will create the package.json file for your project (along   with the node_modules).
  Then install the dependencies, run 
    npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
    npm install -g karma-cli
    npm install angular angular-ui-router angular-mocks --save-dev
  Again if this is the first time, karma is being configured in your project run "karma init" to create karma.config.js.
