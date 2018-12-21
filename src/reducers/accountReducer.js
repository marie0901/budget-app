// Account Reducer
import uniqid from 'uniqid';

const accountReducerDefaultState = [];

export default (state = accountReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return [
        ...state,
        { ...action.account,
          id: uniqid()
        }
      ];
    case 'DELETE_ACCOUNT':
      return state.filter(({ id }) => id !== action.accountId);
    case 'UPDATE_ACCOUNT':
      return state.map((account) => {
        if (account.id === action.accountId) {
          return {
            ...account,
            ...action.account
          };
        } else {
          return account;
        }
      });
    default:
      return state;
  }
};
