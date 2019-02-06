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
  const pruebas = firebase.database().ref('pruebas')
  const auth = firebase.auth()

export class getData { 
    getDataUser=(callback)=>{
        return new Promise( resolve => {
            sections.orderByChild('uidUser').equalTo(auth.currentUser.uid).on('value', function(snapshot) {
                const data = !snapshot.val() ? [] : Object.values(snapshot.val()) 
                resolve( callback(data) )
            });
        })              
    }

    async getDataPrubebas(id , callback){
       return new Promise( resolve => {
            pruebas.child(id).on('value' ,function(snapshot){
                resolve(callback(snapshot.val()))
            })
        })        
    }

    verifyUsers(cb, getsection){
        return new Promise(( resolve , reject) => {
            auth.onAuthStateChanged(function(user) {
                if (user) {
                     cb({
                        email:user.email,
                        uid: user.uid,
                        logeado:true
                    })

                    resolve(getsection())
                } else {
                    resolve(cb({logeado:false}))
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
            ...data,
            uidUser: auth.currentUser.uid
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

    editAlumnno =(uid, uidAlumnno, data , message , loaded)=>{
        sections.child(uid+"/alumnos/"+uidAlumnno).update({
            IMC:data
        }).then( async() =>{
            console.log('en firebase ', message)
            result = await calculate.getpeso(data, message)
            pruebas.child(uidAlumnno+'/medidas_antropometricas').update({
                 IMC:result
             })
        }).then( ()=>{  
            loaded()
        })
    }

    editSeccion =(uid, data)=>{
        sections.child(uid).update({
            ...data
        })
    }

    setPruebas= (data, uid, name )=>{
        pruebas.child(uid+`/${name}`).update({
            ...data,
        })
    }
     

    loginUser = (value, navigation, message , loaded) =>{
        auth.signInWithEmailAndPassword(value.email, value.password)
        .then(()=>{
            loaded()
            navigation.navigate('Sections')
        })
        .catch(function(error) {
            
            loaded()
            var errorMessage = error.message;
            message(errorMessage)
        });
    }    
       
    registerUser=(value, cb, loaded)=>{
        auth.createUserWithEmailAndPassword(value.email, value.password)
        .then( (data)=>{
            users.child(data.user.uid).set({
                email:data.user.email,
                uid: data.user.uid,
            })
        })
        .then(()=>{
            loaded()
            cb('Registro exitoso')
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            cb(error.message)
            loaded()
        });
    }

    sessionOff=(navigation)=>{

        auth.signOut().then( ()=>{
            navigation.navigate('initial')
        })
    }
   
}