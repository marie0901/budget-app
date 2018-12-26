import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { addAccount } from '../actions/accountActions';

export class AccountNew extends React.Component {
  onSubmit = (account) => {
    this.props.addAccount(account);
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Account</h1>
          </div>
        </div>
        <div className="content-container">
          <AccountForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAccount: (account) => dispatch(addAccount(account))
});

export default connect(undefined, mapDispatchToProps)(AccountNew);
