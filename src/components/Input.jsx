import React from 'react';

const Input = props => {
  return (
    // JSX element
    <div class="col-sm-10">
      <input
        type={ props.inputType }
        class="form-control"
        defaultValue=''
        required
        name={ props.name }
        onChange={ props.onChange }
      />
    </div>
  )
}

export default Input;
