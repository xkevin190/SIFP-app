import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyA1xOlfqvy-8CtBzc78SC8yc9ZGG1UVfJA",
    authDomain: "sipfandroid-ab01c.firebaseapp.com",
    databaseURL: "https://sipfandroid-ab01c.firebaseio.com",
    projectId: "sipfandroid-ab01c",
    storageBucket: "sipfandroid-ab01c.appspot.com",
    messagingSenderId: "813845215873"
  };

  firebase.initializeApp(config);

  const users = firebase.database().ref('users')
  const sections = firebase.database().ref('sections')

  export class getData {
    getDataUser=(callback)=>{
        sections.on('value', function(snapshot) {
           return callback(snapshot.val())
        });    
    }
  }

  export class setData {
      setSections =(data)=>{
        const key = sections.push().key
        sections.child(key).set({
            uid:key,
            ...data
        })
      }
  }