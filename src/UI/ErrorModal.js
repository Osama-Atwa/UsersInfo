import Classes from "./ErrorModal.module.css";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={Classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverLay = (props) => {
  return (
    <Card className={Classes.modal}>
      <header className={Classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("erorrmodal-root")
      )}
    </Wrapper>
  );
};
export default ErrorModal;
