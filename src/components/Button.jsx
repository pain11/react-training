import React from 'react';

const Button = props => {
  return (
    // JSX element
    <div class="col-sm-offset-2 col-sm-10">
      <button
        id={props.index}
        class="btn btn-default"
        onClick={ props.onSubmit }
      >
      { props.buttonText }
      </button>
    </div>
  )
}

export default Button;
