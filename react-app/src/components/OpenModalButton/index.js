import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  img,
  icon, // icon classname for i tag
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  if (img) {
    return (<img src={img} onClick={onClick} />)
  } else {
    return (<button onClick={onClick}>
      {icon && <i className={icon} />}
      {buttonText}
    </button>)
  }
}

export default OpenModalButton;
