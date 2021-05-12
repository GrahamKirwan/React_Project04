import React from 'react';
import reactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return (
      <div className={classes.backdrop} onClick={props.onConfirm} />
  );
;}

const ErrorModal = (props) => {
  return (
    <div>
      {reactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.querySelector('#backdrop'))}
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
