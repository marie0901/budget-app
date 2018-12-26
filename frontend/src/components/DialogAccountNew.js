import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { addAccount } from '../actions/accountActions';

import {
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

}  from '@material-ui/core/';



export class DialogAccountNew extends React.Component {

  defaultState = {
    open: false,

    id: '',
    name:  '',
    amount:  '',
    error: ''
  };

  state = {
    open: false,

    id: '',
    name:  '',
    amount:  '',
    error: ''
  };



  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };



      handleAddAccountOpen = () => {
        this.setState({ open: true });
      };

      handleAddAccountClose = () => {
        this.setState(this.defaultState);
      };


      onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.name || !this.state.amount) {
          this.setState(() => ({ error: 'Please provide name and amount.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.props.addAccount({
            id: this.state.id,
            amount: parseFloat(this.state.amount, 10) * 100,
            name: this.state.name

          });
        }
        this.handleAddAccountClose();
      };



  render() {







    return (
    <div>

          <MenuItem
            component={Button}
            onClick={this.handleAddAccountOpen}
            variant="outlined"
            color="primary"
          >
            Add Account
          </MenuItem>

          <Dialog
            open={this.state.open}
            onClose={this.handleAddAccountClose}
            aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Add Account</DialogTitle>
          <DialogContent>
            <form className="form">
              {this.state.error && <p className="form__error">{this.state.error}</p>}

              <TextField
                type="text"
                placeholder="Name"
                className="text-input"
                value={this.state.name}
                onChange={this.onNameChange}
              />

              <TextField
                type="text"
                placeholder="Amount"
                className="text-input"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />

            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleAddAccountClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onSubmit} color="primary">
              Add Account
            </Button>
          </DialogActions>

        </Dialog>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAccount: (account) => dispatch(addAccount(account))
});

export default connect(undefined, mapDispatchToProps)(DialogAccountNew);
