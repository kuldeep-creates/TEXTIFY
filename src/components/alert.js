import React from 'react';

function Alert(props) {
  return (
    props.alart && (
      <div
        className={`alert alert-${props.alart.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alart.type}</strong>: {props.alart.msg}
      </div>
    )
  );
}

export default Alert;
