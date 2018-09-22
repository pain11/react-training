import React from 'react';

const Label = props => {
  return (
    <div>
      <label class="control-label col-sm-2">{ props.labelText }</label>
    </div>
  )
}

export default Label;
