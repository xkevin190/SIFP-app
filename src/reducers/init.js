import {Map} from 'immutable'

setState = (state, newState) => state.mergeDeep(newState);

setdata = (state,node,payload) =>   state.set(node , payload)


const test = (state = Map(), action) => {
  switch (action.type) {
  case 'SETSTATE': {
    return this.setState(state, action.payload)
  }
  case 'LOGOUT':{
    return setdata(state,'logout', action.users)
  }
  case 'REGISTER':{
    return setdata(state, 'groupData', action.payload)
  }
  default:
    return state;
  }
};

export default test;