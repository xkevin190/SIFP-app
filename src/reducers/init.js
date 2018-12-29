import {TEST_ACTION} from '../actions/actions';
import User from '../state/User'

const InitialState = User

setState = (payload) => {
    console.log(payload)
    User.set(payload)
} 

const test = (state = InitialState, action) => {
  switch (action.type) {
  case TEST_ACTION: {
    return action.payload;
  }
  case 'LOGOUT':{
     console.log('entro aqui')
     this.setState(action.users)
  }
  default:
    return state;
  }
};

export default test;