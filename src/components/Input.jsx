import React from 'react';

const Input = props => {
  return (
    // JSX element
    <div>
      <input
        type={ props.inputType }
        defaultValue=''
        required
        name={ props.name }
        onChange={ props.onChange }
      />
    </div>
  )
}

export default Input;
