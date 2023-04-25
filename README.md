# Sol:earth_americas: Travel MeetUp App :flight_departure:	
Solo allows solo travels to connect with others travelling alone by creating events to see the sites in a city and make new friends. The aim is to use technology to connect people, instead of being limited to staying in hostels to meet people. The app features a React-Native front end with a Java Spring backend and a PostgreSQL database. This was produced in two weeks for our Capstone Project as the final part of our studies on the Professional Software Development course at [CodeClan](https://codeclan.com/)

## The Team :wave:	
The team that brought you Solo are: [Jonathan Strandberg](https://github.com/jonstrandberg), [Gareth Evans](https://github.com/G3vans16), [Ben Barlow](https://github.com/benbeardyman) and [Maggie Amin](https://github.com/maggieAmin)

## Our Brief :clipboard:	

### Description

A mobile app connecting solo travellers enabling them to message arrange meet-ups. 

### Why?
Currently no market leading application which offers solo travellers the functionality to connect and meet with others and arrange activities based on their location.

### MVP

#### The app should be able to:

* Display a list of selected cities within which events can be created
* Users are able to create and/or join events within the cities
* Create an attractive, clean and functional front end using React Native
* Use Google Firebase to provide authentication and basic user profile info

### Potential Extensions

* Host detailed profile functionality in sql
database via Java Spring
* Embed map functionality into events
* Provide real-time one to one messaging
capability via Google Firebase Firestore
* Users can add current location and then
display this information in the city details

## Built With :building_construction:
* JavaScript
* React Native
* Java
* Spring Boot
* PostgreSQL

## Firing Up The App! :fire:

Now for the fun part!! These instructions should get you a copy of the app up and running on your local machine.

### Firebase setup
#### First you must setup and load a Firebase account

#### In Firebase console
* Go to [Firebase](https://firebase.google.com/)
* Click Get Started
* Click Add Project give project a name then click Continue
* De-select google analytics, then click Continue
* When project finishes building click web icon </>
* Add a project name to register with (same as project name) then click Register App
* Once app is registered copy the authentications from the firebaseConfig, to us in the next step.

#### In terminal:
```
cd client
npx expo install firebase
touch firebase.js
```

#### In VSCode (or your chosen editor) 
* open client
* add the following code to the firebase.js file replacing the auth configuration with the ones previously copied:
```
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: //ENTER YOUR APIKEY HERE,
  authDomain: //ENTER YOUR AUTHDOMAIN HERE,
  projectId: //ENTER YOUR PROJECTID HERE,
  storageBucket: //ENTER YOUR STORAGEBUCKET HERE,
  messagingSenderId: //ENTER YOUR MESSAGINGSENDERID HERE,
  appId: //ENTER YOUR APPID HERE
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
```

#### Return to the Firebase console
* Click Authentication then click Get Started
* Click :pencil2: Edit Configuration on Email/Password
* Check Enable then click Save

### Server

to create and seed database:

#### In Terminal
```
createdb solo_service
```

```
cd ../backend
idea .
```

navigate to ```application properties``` and update ```spring.datasource.username``` to the username of the device that you are running Solo on

Then run the file:
```
SoloServiceApplication
```

### Client

#### In Terminal
```
cd ../client
npm i
npx expo start
```

select the ios simulator to load the app (note you will need the simulator and expo installed on your device to start)
