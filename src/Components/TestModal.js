import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Collection from './Collection'
import '../App.css'

const TestModal = props => {
  const [open, setOpen] = React.useState(false)
    return (
        <Modal className='modalStyles'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className='modalButton' icon='archive'></Button>}
    >
      <Modal.Header>Books Collection</Modal.Header>
      <Modal.Content className='modalContent'>
        <Modal.Description>
          <Collection data={props.data} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
}

export default TestModal 