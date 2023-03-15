import React from 'react';
import { useModal } from '../../context/Modal';

function buttonElement(buttonText, onClick) {
    return (<button onClick={onClick}>{buttonText}</button>)
}

function imageElement(img, onClick) {
  return (<img 
            src={img} 
            onClick={onClick}
         />)
}

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  img
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  if (img) {
    return imageElement(img, onClick)
  } else {
    return buttonElement(buttonText, onClick);
  }
}

export default OpenModalButton;
