# Setting up and loading Firebase:

### In Firebase console
* Go to [Firebase](https://firebase.google.com/)
* Click Get Started
* Click Add Project give project a name then click Continue
* De-select google analytics, then click Continue
* When project finishes building click web icon </>
* Add a project name to register with (same as project name) then click Register App
* Once app is registered copy the authentications from the firebaseConfig, to us in the next step.

### In terminal:
* npx expo install firebase

### In VSCode (or your chosen editor) 
* in the project root create a file named firebase.js
* add the following code to the file replacing the auths with the ones previously copied:
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

### Return to the Firebase console
* Click Authentication then click Get Started
* Click :pencil2: Edit Configuration on Email/Password
* Check Enable then click Save
