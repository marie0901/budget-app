import React, { Component } from "react";
import { connect } from 'react-redux';


class AccountHeader extends Component {
  render() {
    return (
      <div>
        Account {this.props.account.name}. Amount {this.props.account.amount}
      </div>
    );
  }

}
const mapStateToProps = (state, props) => {
  const selectedAccount = state.accounts.find((account) => account.id === state.filter.accountId) || {};
  return(
    {
    account: selectedAccount
    })
};
export default connect(mapStateToProps)(AccountHeader);
