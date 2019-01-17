import {Map , List} from 'immutable'

setState = (state, newState) => state.mergeDeep(newState);

setdata = (state,node,payload) =>   state.set(node , Array.isArray(payload)? List(payload) : Map(payload))

setList = (state,node,payload) => {
    console.log(state.get(node).toJS())
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
  case 'REGISTER':{
    return setList(state, 'groupData', action.payload)
  }
  default:
    return state;
  }
};

export default test;