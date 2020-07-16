import React from 'react'
import { Modal } from '@material-ui/core'

const ModalBody = (props) => {
  return(
    <Modal
      open={props.open}
      onClose={props.close}
    >
      {props.body}
    </Modal>
  )
}

export default ModalBody