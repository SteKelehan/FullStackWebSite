#Set Up
Going to need need two package managers:
###Backend (node.js)
- This project uses npm: (run npm install) 
- Create a server.js file in project dir
- once that is complete run npm init in the project folder and answer the q's to then generated your package.json file and the sever.js will bit the entrey point
- npm install express --save (so it will save to the package.json file) -> web framework (used for routeing) expressjs.com
- npm install ejs --save -> compines html and js 

###Front End (angular)
This porject uses bower: (run npm bower) You then create a bower.rc file and write where you would like bower to isntall its files. Once that is complete run bower init in the project folder ans q's and it will create a bower.json file
- bower install angular --save
- bower install bootstrap --save
- To remove unnessasary files there is a module called bower-installer. This allows you to when your bower.json file:

Add the line 
{
    "install": {
        "path" : ""client/libs"
    }
}

It will now save all the files needed to the new bothe defined above once you run the command bower-installer
###DB (Mongo)
This project is going to use the Mongo db


####Single Page Application
- Using routeing
- Need to install angular-route (cant add it to bower.json file and then run a bower-installer)

Using MVC strcture.
- Have a server.js file listening on a port 8080
- Runing ejs 
- Having all the page views stored in js along wiht app.js
- Each parcial page will have a html/css and a controller to controll teh html
- app.js controlls the routeing when someone is directed to x url the app.js renders the correct html and controller along with it.
- it is rendered in the index.ejs page under the div tag that says ng-views
- The html5Mode in the app.js stops the # in the URL taht comes defualt with angular (It's how angular deals with routeing)
- Use bootstrap for tempates and using angular-bootstrap 
- https://angular-ui.github.io/bootstrap/ (https://www.youtube.com/watch?v=FYUQmm-xfIY&list=PLZm85UZQLd2RyFN1IQWuOk8gBt0aJHE1F&index=6) 2:34