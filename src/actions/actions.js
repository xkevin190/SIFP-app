export const TEST_ACTION = 'TEST_ACTION';


export function logout(users) {
    return {
      type: 'LOGOUT',
      users
    }
  }