import axios from 'axios';

//action types
const ADD_ACCOUNT = 'ADD_ACCOUNT';
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
const SET_ACCOUNTS = 'SET_ACCOUNTS';

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

export const setAccounts = (accounts) => {
  return {
    type: SET_ACCOUNTS,
    accounts,
  }
}

export const startSetAccounts = () => {
  return ((dispatch, getState) => {


axios.get('http://127.0.0.1:8000/api/')
  .then (res => {
    console.log(res);
    dispatch(setAccounts(res.data));
  })

    })
};
