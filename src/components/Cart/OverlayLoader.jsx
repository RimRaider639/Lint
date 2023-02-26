import React from 'react'
import { ModalOverlay, Modal, ModalContent } from '@chakra-ui/react'
import Loader from '../Loader'

const OverlayLoader = ({isOpen}) => {
  return (
    <Modal isOpen={isOpen} isCentered>
          <ModalOverlay/>  
          <ModalContent bgColor={'transparent'} shadow={false}>
            <Loader/>
          </ModalContent>
          
        </Modal>
  )
}

export default OverlayLoader