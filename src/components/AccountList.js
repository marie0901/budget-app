import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { selectAccount } from '../actions/filterActions';


export const AccountListItem = ({ id, amount, name, onClick }) => (
  <div
    className="list-item"
  >
    <div onClick = {onClick} id = {id}>
      {name}
    </div>
    <div>
      {numeral(amount / 100).format('$0,0.00')}
    </div>
  </div>
);



export class AccountList extends React.Component {
  selectAccount = (e) => {
  this.props.selectAccount(e.target.id);
  console.log(e.target.id);
  };
  render() {
    return (
  <div className="content-container">
    <div className="list-body">
      {
        this.props.accounts.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No accounts</span>
          </div>
        ) : (
            this.props.accounts.map((account) => {
              return <AccountListItem key={account.id} {...account} onClick={this.selectAccount}/>;
            })
          )
      }
    </div>
  </div>
)
}
}

const mapStateToProps = (state) => {
  return {
    accounts: (state.accounts ? state.accounts : [])
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectAccount: (accountId) => dispatch(selectAccount(accountId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
