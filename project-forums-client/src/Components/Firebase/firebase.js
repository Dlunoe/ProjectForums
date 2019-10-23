import app from 'firebase/app';

// configs connection to firebase
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:19433408938:web:24b9d5713c3a14957703d3",
    measurementId: "G-79D7GWJWP1"
  };

  class Firebase {
      constructor(){
          app.initializeApp(config);
      }
  }

  export default Firebase;