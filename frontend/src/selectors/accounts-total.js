export default (accounts) => {
  return accounts
      .map((account) => account.amount)
      .reduce((sum, value) => sum + value, 0);
};
