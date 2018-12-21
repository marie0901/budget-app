import React from 'react';
import {TextField, Button} from '@material-ui/core';

export default class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.account ? props.account.id : '',
      name: props.account ? props.account.name : '',
      amount: props.account ? (props.account.amount / 100).toString() : '',
      error: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.account ? nextProps.account.id : '',
      name: nextProps.account ? nextProps.account.name : '',
      amount: nextProps.account ? (nextProps.account.amount / 100).toString() : '',
      error: ''
    });
  }

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

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide name and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        id: this.state.id,
        amount: parseFloat(this.state.amount, 10) * 100,
        name: this.state.name

      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
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


        <div>
          <Button
            type='submit'
            color='primary'
            variant='raised'
            >
            Save Account
          </Button>
        </div>
      </form>
    )
  }
}
