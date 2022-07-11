The fullstack application is run and tested in Development mode.

Note:
The game contain front-end static build folder, so the game can be tested on localhost:3001
The front end code is also provided in different package/link


Requirements to run the application:
1. since the application is using the desktop version of MongoDb, so MongoDBCompass is required to be installed.
2. Nodejs, npm.

Steps to run the application: 
1. Install all the dependencies in the front-end package
2. Install all the dependencies in back-end package, install nodemon as devDependies
3. npm start - for front end (localhost:3000)
4. npm run dev - for backend (using nodemon) (localhost:3001)

Description:
Backend: 
The Application uses the cookies to save the JWT token, and allow user to call the backend API's after login.
All the routes are authenticated before giving access to the user (Using a file - middlewares/autheticateTokenMiddleware)
All the routes can be found in directory routes. 
The functions releated to these routes can be found in controllers directory. 
And the Database models related to these routes can be found in models directory.

The User model have 4 fields  (username, passward, email, and games)
The games field is an array. when a user select a game as his/her favourite, it goes inside this games array. it stays private to logged in user only.
User need to be login to access their favourite games.


FrontEnd:

The frontend uses redux for state management, and react-router for routes, And bootstrap as CSS library.
The prototype of application is created using Figma before implementing the real UI.

The front end application can be run without the need of backend, however features like Login, Signup, Add to favourite, Add new game can be restricted.
The main page is localhost:3000/dashboard
Other routes are also available to make application more intractive.

The User can search a game using a game name.
The user can see all the games based on Games genres
The User can see all the games based on game tags
The user can filter out the games based on the platform on which game runs.


