import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { updateAccount } from '../actions/accountActions';
import Typography from '@material-ui/core/Typography';

export class AccountDetail extends React.Component {

  onSubmit = (account) => {
    this.props.updateAccount(account);
  };
  render() {
    return (
      <div>
        <div>
          <Typography variant='display1' align='center' gutterBottom>
            Update Account
          </Typography>
        </div>
        <div className="content-container">
          <AccountForm
            account={this.props.account}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAccount: (account) => dispatch(updateAccount(account))
});

const mapStateToProps = (state, props) => {
  const selectedAccount = state.accounts.find((account) => account.id === state.filter.accountId);
  return(
    {
    account: selectedAccount
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
