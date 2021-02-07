import { Modal, Button, Form } from 'react-bootstrap'
import './addBusinessForm.scss'

const AddBusinessForm = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Add Business</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='add__business__form'>
            <Form.Group>
              <Form.Label>Business Name</Form.Label>
              <Form.Control type='text' placeholder='Enter business name' />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type='tel' placeholder='Enter phone number' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter business email address'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter business website url'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Categories</Form.Label>
              <div className='add__business__form--categories'>
                <Form.Check type='checkbox' label='ISP' />
                <Form.Check type='checkbox' label='Software Development' />
                <Form.Check type='checkbox' label='Logistics' />
              </div>
              <Form.Control
                type='text'
                placeholder='Add more categories seperated by comma ( , )'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddBusinessForm
