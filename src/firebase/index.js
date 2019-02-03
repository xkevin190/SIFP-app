import firebase from 'firebase'
import Calculate from './Fireutils';
import {loading, loaded} from '../actions/actions' 
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
  const pruebas = firebase.database().ref('pruebas')
  const auth = firebase.auth()

  export class getData { 
    getDataUser=(callback)=>{
        sections.on('value', function(snapshot) {
            const data = !snapshot.val() ? [] : Object.values(snapshot.val()) 
            return callback(data)
        });    
    }

    getDataPrubebas(id , callback){
        pruebas.child(id).on('value' ,function(snapshot){
            return callback(snapshot.val())
        })
    }

        verifyUsers(cb , loaded){
         return new Promise( resolve => {
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    resolve( cb({
                       email:user.email,
                       uid: user.uid,
                       logeado:true
                    }))
                } else {
                    resolve( cb({logeado:false}))
                }
                
            })
         })
        }
  }

export class setData extends getData {
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

      removeAlumno=(uidSection,uidAlumnos)=>{
        
        sections.child(uidSection+"/alumnos/"+uidAlumnos).remove()
    }

      setPerson =( uid , object, message, response ,loaded) =>{
        const key = sections.push().key  
        sections.child(uid+'/alumnos/'+ key).set({
            ...object
        }).then( async() =>{
           result = await calculate.getpeso(object, message)
           pruebas.child(key+'/medidas_antropometricas').set({
                IMC:result
            })
        }).then( ()=> {
            loaded(); 
            response('Registrado Correctamente')  
        }).catch( error =>{
            console.log(error)
        })
                
      }

      editAlumnno =(uid, uidAlumnno, data)=>{
        sections.child(uid+"/alumnos/"+uidAlumnno).update({
            ...data
        }).then( async() =>{
            result = await calculate.getpeso(data, message)
            pruebas.child(key+'/medidas_antropometricas').set({
                 IMC:result
             })
         })
    }

      editSeccion =(uid, data)=>{
          sections.child(uid).update({
              ...data
          })
      }

      setPruebas= (data, uid )=>{
        pruebas.child(uid+'/medidas_antropometricas').update({
            ...data,
        })}
     

        loginUser = (value, navigation, message , loaded) =>{
            auth.signInWithEmailAndPassword(value.email, value.password)
            .then(()=>{
                loaded()
                navigation.navigate('Sections')
            })
            .catch(function(error) {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                message(errorMessage)
            });
        }    
       
       registerUser=(value, cb, loaded)=>{
        auth.createUserWithEmailAndPassword(value.email, value.password)
        
        .then(()=>{
            loaded()
            cb('Registro exitoso')
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            cb(error.message)
          });
       }

       sessionOff=(navigation)=>{

           auth.signOut().then( ()=>{
             navigation.navigate('initial')
           })
       }

       
    
    }