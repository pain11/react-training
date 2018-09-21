import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import Label from './Label.jsx';

const LoginForm = props => {
  return (
    <div>
      <div className='row'>
        <Label labelText='Email' />
        <Input
          inputType='text'
          name='email'
          onChange={ props.handleOnChange }
        />
      </div>

      <div className='row'>
        <Label labelText='Password' />
        <Input
          inputType='password'
          name='password'
          onChange={ props.handleOnChange }
        />
      </div>

      <div className='row'>
        <Button
          buttonText='Submit'
          isSubmitted={true}
          onSubmit={ props.handleOnSubmit }
        />
        <Button
          buttonText='Cancel'
        />
      </div>
    </div>
  )
}

export default LoginForm;
