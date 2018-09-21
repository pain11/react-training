import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import DashboardContainer from './DashboardContainer.jsx';

class LoginContainer extends React.Component {
  state = {
    email: '',
    password: '',
    isSubmitted: false,
    errors: {
      email: '',
      password: ''
    }
  }

  handleOnChange = (evt) => {
    this.setState(
      {
        [evt.target.name]: evt.target.value
      }
    );
  }

  handleOnSubmit = (evt) => {
    if(this.validateData()) {
      this.setState({ isSubmitted: true });
    }else{
      this.setState({ isSubmitted: false });
      evt.preventDefault();
    }
  }

  validateData() {
    if(this.state.email === '' || this.state.password === '') {
      alert('Email or Password cannot be blank');
      this.setState({
        errors: {
          email: 'cannot be blank',
          password: 'cannot be blank'
        }
      });
      return false
    }
    return true
  }

  render() {
    if(this.state.isSubmitted) {
      return (
        <DashboardContainer />
      )
    }else{
      return (
        <LoginForm
          handleOnChange = { this.handleOnChange }
          handleOnSubmit = { this.handleOnSubmit }
        />
      )
    }
  }
}

export default LoginContainer;
