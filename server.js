const express = require('express');
const firebase = require('firebase/app');
require('firebase/firestore');

const app = express();


firebase.initializeApp({
    apiKey: "AIzaSyBq0N2cviz-ki6CkzC6Ti009QPcHLPmyzA",
    authDomain: "scheduler-f505c.firebaseapp.com",
    projectId: "scheduler-f505c",
    storageBucket: "scheduler-f505c.appspot.com",
    messagingSenderId: "1098147948175",
    appId: "1:1098147948175:web:3f2a12fac158e6b853f2fa",
    measurementId: "G-R95N9NBGKZ"
});

const db = firebase.firestore();

app.post('/courses', async (req, res) => {
  try {
    await db.collection('courses').add(req.body);
    res.send('Course added successfully!');
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).send('Error adding course');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
