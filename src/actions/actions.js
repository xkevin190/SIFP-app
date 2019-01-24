import state from '../state/state'
import { getData } from '../firebase'
export const TEST_ACTION = 'TEST_ACTION';

export function setState() {
  return {
    type: 'SETSTATE',
    payload:state
  }
}

const get = new getData()
export const sectionsData = () => dispatch  =>{
   get.getDataUser( (data) =>{ 
      dispatch({
        type:'DATA_SECTIONS',
        payload:data
      })
    } 
  )  
}

export function logout(users) {
    return {
      type: 'LOGOUT',
      users
    }
  }


export const getPruebas = (id) => dispatch  =>{
  get.getDataPrubebas(id, (data) =>{ 
     dispatch({
       type:'DATA_PRUEBAS',
       payload:data
     })
   } 
 )  
}

