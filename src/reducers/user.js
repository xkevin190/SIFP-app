import {Map , List} from 'immutable'
import state from '../state/state'

setState = (state, newState) => state.mergeDeep(newState);

setdata = (state,node,payload) =>   state.set(node , Array.isArray(payload)? List(payload) : Map(payload))
search = (state,node,payload) => state.set(node , payload)

setList = (state,node,payload) => {
   return  state.set(node ,  state.get(node).push(payload))
  }

const initalState = state

const user = (state = initalState, action) => {
  switch (action.type) {
  
    case 'LOADING':{
        return state.set('loading' , true)
    }
    case 'LOADED':{
        return state.set('loading' , false)
    }
  default:
    return state;
  }
};

export default user;
