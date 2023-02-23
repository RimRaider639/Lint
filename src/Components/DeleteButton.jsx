import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
  } from '@chakra-ui/react'
  import { DeleteIcon } from '@chakra-ui/icons';

  function DeleteButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>{<DeleteIcon/>}</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{<DeleteIcon/>}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>This product will be deleted. Do you want to continue?</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Delete
              </Button>
              <Button variant='ghost'>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DeleteButton;