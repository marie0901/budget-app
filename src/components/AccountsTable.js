import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});





const AccountsTable =  (props) =>
{
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      {
        props.accounts.length === 0 ? (
          <div>
            <span>No accounts</span>
          </div>
        ) : (


          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
            props.accounts.map(account => {
              return (

                <TableRow key={account.id}>
                  <TableCell component="th" scope="row">
                    {account.id}
                  </TableCell>
                  <TableCell align="right">{account.name}</TableCell>
                  <TableCell align="right">{account.amount}</TableCell>
                  </TableRow>
                );
              })
            }

            </TableBody>
          </Table>





          )
      }
    </Paper>
  );
}


const mapStateToProps = (state) => {
  return {
    accounts: (state.accounts ? state.accounts : []),
    selectedAccountId: (state.filter ? state.filter.accountId : ''),
  };
};
export default withStyles(styles)(connect(mapStateToProps)(AccountsTable))
