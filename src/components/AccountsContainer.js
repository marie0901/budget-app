import React, { Component } from "react";
import AccountList from './AccountList';
import AccountDetail from './AccountDetail';
import AccountNew from './AccountNew';

class AccountsContainer extends Component {
  render() {
    return (
      <div>
        <h2>HELLO Accounts</h2>
        <AccountList />
        <AccountDetail />
        <AccountNew />

      </div>
    );
  }
}

export default AccountsContainer;
