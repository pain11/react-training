import React from 'react';

const Button = props => {
  return (
    // JSX element
    <div>
      <button
        onClick={ props.onSubmit }
      >
      { props.buttonText }
      </button>
    </div>
  )
}

export default Button;
