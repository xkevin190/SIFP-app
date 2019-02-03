
import {setData} from '../firebase'
 
const  setActions = new setData()
export const loaded = ()  =>{
    return {
      type: 'LOADED',
    }
  }  
  
  export const loading = ()  =>{
    return{
      type: 'LOADING',
    }
  }  
  
  export const login = (values,  navigation,  cb) => dispatch => {
      dispatch(loading())
      setActions.loginUser(values , navigation , cb, ()=>
        dispatch(loaded())  
      )
  }

  export const register = (values,  cb) => dispatch => {
    dispatch(loading())
    setActions.registerUser(values , cb , ()=>
      dispatch(loaded())  
    )
  }

  export const registerAlumno = (uid,  values , message , callback) => dispatch => { 
    dispatch(loading())
    setActions.setPerson(uid , values , message, callback, ()=>
      dispatch(loaded())  
    )
  }