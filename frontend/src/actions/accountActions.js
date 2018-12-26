//action types
const ADD_ACCOUNT = 'ADD_ACCOUNT';
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    account: account
  }
}


export const updateAccount = (account) => {
  return {
    type: UPDATE_ACCOUNT,
    accountId: account.id,
    account: account
  }
}

export const deleteAccount = (accountId) => {
  return {
    type: DELETE_ACCOUNT,
    accountId: accountId,
  }
}
