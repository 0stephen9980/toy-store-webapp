import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function UserAuthenticateComponent() {
  const history = useNavigate();

  const [open, setOpen] = useState(true);

  const handleCloseModel = () => {
    setOpen(false);
    history("/");
  };
  return (
    <Modal
      onClose={handleCloseModel}
      closeOnOverlayClick={false}
      isOpen={open}
      isCentered
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>This the model which is opened</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseModel}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UserAuthenticateComponent;
