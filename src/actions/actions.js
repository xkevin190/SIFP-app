import User from '../state/User'

export const TEST_ACTION = 'TEST_ACTION';

export function setState() {
  return {
    type: 'SETSTATE',
    payload:User
  }
}

export function logout(users) {
    return {
      type: 'LOGOUT',
      users
    }
  }