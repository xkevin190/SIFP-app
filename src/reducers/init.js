import {Map , List} from 'immutable'

setState = (state, newState) => state.mergeDeep(newState);

setdata = (state,node,payload) =>   state.set(node , Array.isArray(payload)? List(payload) : Map(payload))
search = (state,node,payload) => state.set(node , payload)

setList = (state,node,payload) => {
   return  state.set(node ,  state.get(node).push(payload))
  }


const test = (state = Map(), action) => {
  switch (action.type) {
  case 'SETSTATE': {
    return this.setState(state, action.payload)
  }
  case 'LOGOUT':{
    return setdata(state,'logout', action.users)
  }
  case 'DATA_SECTIONS':{
    return setdata(state, 'groupData', action.payload)
  }
  case 'DATA_PRUEBAS':{
    return setdata(state, 'pruebas', action.payload)
  }
  case 'SEARCH':{
    return search(state, 'search', action.payload)
  }
  case 'VERIFYING':{
    return setdata(state, 'user' , action.payload)
  }
 
  default:
    return state;
  }
};

export default test;