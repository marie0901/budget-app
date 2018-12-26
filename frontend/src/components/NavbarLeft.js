import React from 'react';
import { connect } from 'react-redux';

import styles from '../styles';

import {
  NavLink,
  withRouter,
} from "react-router-dom";

import AccountList from './AccountList';
import DialogAccountNew from './DialogAccountNew';

import {
  MenuItem,
  MenuList,
}  from '@material-ui/core/';


class NavbarLeft extends React.Component {

  render() {
    const pathname = this.props.location.pathname;
    return (
          <MenuList>
            <MenuItem
              component={NavLink}
              exact to = '/'
              selected={pathname ==='/'}
            >
              Budget
            </MenuItem>

            <MenuItem
              component={NavLink}
              to = '/accounts'
              selected={pathname ==='/accounts'}
            >
              Accounts
            </MenuItem>

            <AccountList />

            <DialogAccountNew />

          </MenuList>

)
}
}

const mapStateToProps = (state, props) => {
  const selectedAccount = state.accounts.find((account) => account.id === state.filter.accountId);
  return(
    {
    account: selectedAccount
    })
};

export default withRouter(connect(mapStateToProps)(NavbarLeft));
