import React from 'react';
import { connect } from 'react-redux';
import { selectAccount } from '../actions/filterActions';
import { withRouter, NavLink, Link } from "react-router-dom";
import {
  ExpandLess,
  ExpandMore,
}  from '@material-ui/icons/';

import {
  MenuItem,
  Collapse,
  ListItemText,
  Button
}  from '@material-ui/core/';


export const AccountListItem = ({ id, amount, name, onClick }) => (
  <Button component = {Link}
     to={`/account/${id}`} onClick = {onClick} id = {id}
  >
    {name}
  </Button>
);

export const AccountListItemMenu = ({ id, amount, name, onClick, selectedAccountId, pathname  }) =>
{
  const to = `/account/${id}`;
  return (
    <MenuItem
      to={to}
      key={id}
      onClick = {onClick} id = {id}
      component={Link}
      className={'classes.nested'}
      selected={pathname ===  to}
    >
      {name}
    </MenuItem>
  );
}



export class AccountList extends React.Component {
  state = {
    open: true,
  };

  selectAccount = (e) => {
    this.props.selectAccount(e.target.id);
  };

  handleAccountsClick = () => {
    const isOpen = this.state.open;
    this.setState({ open: !isOpen});
  }

  render() {
      const pathname = this.props.location.pathname;
      return (
        <div>


      <MenuItem
        onClick={this.handleAccountsClick}
      >
        In the Budget
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </MenuItem>

      <Collapse in={this.state.open} timeout="auto" unmountOnExit>

           <div>
             {
               this.props.accounts.length === 0 ? (
                 <div>
                   <span>No accounts</span>
                 </div>
               ) : (
                   this.props.accounts.map((account) => {
                     return <AccountListItemMenu
                              key={account.id}
                              {...account}
                              selectedAccountId = { this.props.selectedAccountId }
                              onClick={this.selectAccount}
                              pathname = {pathname}
                            />;

                   })
                 )
             }
           </div>

           </Collapse>

  </div>
)
}
}

const mapStateToProps = (state) => {
  return {
    accounts: (state.accounts ? state.accounts : []),
    selectedAccountId: (state.filter ? state.filter.accountId : ''),
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectAccount: (accountId) => dispatch(selectAccount(accountId))
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(AccountList));
