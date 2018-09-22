import React from 'react';
import Button from './Button.jsx';

const EmailList = props => {
  return (
    <table>
      <tbody>
        {
          props.emails.map((data, index) => (
            <tr id={data.id}>
              <td>{data.subject}</td>
              <td><Button buttonText='Show' index={data.id} onSubmit={props.onSubmit} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default EmailList;
