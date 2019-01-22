import firebase from 'firebase'
import Calculate from './Fireutils';

 const calculate = new Calculate()

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
            const data = !snapshot.val() ? [] : Object.values(snapshot.val()) 
            return callback(data)
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

      removeSections=(uid)=>{
          sections.child(uid).remove()
      }

      setPerson =( uid , object) =>{
        const key = sections.push().key  
        sections.child(uid+'/alumnos/'+ key).set({
            ...object
        }).then( async() =>{
           result = await calculate.getpeso(object)
           sections.child(uid+'/alumnos/'+ key+'/medidas_antropometricas').set({
                IMC: result
            })
        })
      }
  }