import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDQdebO5chIy1FedB5HQC1HTg_b8ABvwpw",
    authDomain: "palantr-6dc5b.firebaseapp.com",
    databaseURL: "https://palantr-6dc5b.firebaseio.com",
    projectId: "palantr-6dc5b",
    storageBucket: "palantr-6dc5b.appspot.com",
    messagingSenderId: "254551174861"
};
var fire = firebase.initializeApp(config);

export default fire;