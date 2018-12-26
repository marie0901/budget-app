// Account Reducer

const filterReducerDefaultState = {
  accountId: null,
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SELECT_ACCOUNT':
      return {
        ...state,
        accountId: action.accountId
      };

      default:
      return state;
  }
};
