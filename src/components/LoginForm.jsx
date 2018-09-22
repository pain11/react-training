import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Label from './Label.jsx';

const LoginForm = props => {
  return (
    <form class="form-horizontal">
      <div class="form-group">
        <Label labelText='Email Address:' />
        <Input
          inputType='text'
          name='email'
          onChange={ props.handleOnChange }
        />
      </div>
      <div class="form-group">
        <Label labelText='Password:' />
        <Input
          inputType='password'
          name='password'
          onChange={ props.handleOnChange }
        />
      </div>
      <div class="form-group">
        <Button
          buttonText='Submit'
          isSubmitted={true}
          onSubmit={ props.handleOnSubmit }
        />
      </div>
    </form>
  )
}

export default LoginForm;
