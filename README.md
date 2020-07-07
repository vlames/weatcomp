# Weatcomp

### Description
WeatComp is a weather application that is designed to help fellow people make a choice among events that depend on weather in United States. The application asks a user for a city and state inputs and then provides weather information for that city. A user can add multiple cities by filling out the form multiple times. When a few cities are displayed, a person can decide on which outside event to attend to based on the current temperature and how the temperature actually feels.

### Start and terminate application manually
#### Dependencies
1. Install [NPM](https://www.npmjs.com/get-npm)
2. Install [Node.js LTS](https://nodejs.org/en/) if not installed already
3. Obtain [OpenWeatherMap API Key](https://home.openweathermap.org/users/sign_up)
#### Process to start the application
1. Open terminal and clone this repository to your computer by ```git clone https://github.com/vlames/weatcomp.git```
2. Change the current working directory to ```/weatcomp```
3. Run ```npm install --save-dev``` to install all packages the application requires
4. While in the same directory, create a file named ```.env.local```
5. In the file, type and save the following: ```REACT_APP_API_KEY=PLACE_YOUR_KEY_HERE```
6. Run ```npm start``` to start the application on your computer
#### Process to terminate the application
* In the same terminal session, type ```CTRL + C```
#### Important
* Allow some time for ```npm start``` to start the application. It might not be immediate
* When submitting city and state for the first time, allow some time for the app to process
* Sometimes, the weather icon does not appear imediately. Allow some time and it will.

### Access application on the web
* In your favorite browser, go to address: [https://vlames.github.io/weatcomp](https://vlames.github.io/weatcomp)

### Credits
* [React environment variables](https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d)