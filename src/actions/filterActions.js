//action types
const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export const selectAccount = (accountId) => {
  return {
    type: SELECT_ACCOUNT,
    accountId: accountId
  }
}
