import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { TiDeleteOutline } from 'react-icons/ti'
import { Formik, FieldArray } from 'formik'
import * as yup from 'yup'
import {
  addBusiness,
  updateBusiness,
} from '../../redux/actions/businessActionTypes'
import './addBusinessForm.scss'

const AddBusinessForm = ({ show, handleClose, businessInfo = {} }) => {
  const dispatch = useDispatch()

  const addBusinessSchema = yup.object().shape({
    businessName: yup.string().required('Required'),
    description: yup.string().required('Required'),
    phone: yup.number().required('Required'),
    email: yup.string().email().required('Required'),
    website: yup.string(),
    categories: yup.array().of(yup.string()),
  })

  const handleAddBusiness = (values, { setSubmitting }) => {
    dispatch(
      addBusiness({
        ...values,
        id: uuidv4(),
        images: [
          ' https://placeimg.com/160/160/any',
          ' https://placeimg.com/160/160/any',
        ],
      })
    )
    handleClose()
    setSubmitting(false)
  }

  const handleUpdateBusinessDetails = (values, { setSubmitting }) => {
    dispatch(
      updateBusiness({
        ...businessInfo,
        ...values,
      })
    )
    handleClose()
    setSubmitting(false)
  }

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
          <Formik
            initialValues={{
              businessName: businessInfo.businessName || '',
              description: businessInfo.description || '',
              phone: businessInfo.phone || '',
              email: businessInfo.email || '',
              website: businessInfo.website || '',
              categories: businessInfo.categories || [],
            }}
            validationSchema={addBusinessSchema}
            onSubmit={(values, { setSubmitting }) =>
              businessInfo.hasOwnProperty('id')
                ? handleUpdateBusinessDetails(values, { setSubmitting })
                : handleAddBusiness(values, { setSubmitting })
            }
          >
            {(props) => (
              <Form
                onSubmit={props.handleSubmit}
                className='add__business__form'
              >
                <Form.Group>
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type='text'
                    name='businessName'
                    placeholder='Enter business name'
                    value={props.values.businessName}
                    onChange={props.handleChange}
                  />
                  {props.errors.businessName && props.touched.businessName && (
                    <div className='form__errors'>
                      {props.errors.businessName}
                    </div>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='description'
                    placeholder='Describe this business'
                    value={props.values.description}
                    onChange={props.handleChange}
                  />
                  {props.errors.description && props.touched.description && (
                    <div className='form__errors'>
                      {props.errors.description}
                    </div>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type='tel'
                    name='phone'
                    placeholder='Enter phone number'
                    value={props.values.phone}
                    onChange={props.handleChange}
                  />
                  {props.errors.phone && props.touched.phone && (
                    <div className='form__errors'>{props.errors.phone}</div>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Enter business email address'
                    value={props.values.email}
                    onChange={props.handleChange}
                  />
                  {props.errors.email && props.touched.email && (
                    <div className='form__errors'>{props.errors.email}</div>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control
                    type='text'
                    name='website'
                    placeholder='Enter business website url'
                    value={props.values.website}
                    onChange={props.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Categories</Form.Label>
                  <div className='add__business__form--categories'>
                    <FieldArray
                      name='categories'
                      render={(arrayHelpers) => (
                        <div className='w-100'>
                          {/* Category field to add new business */}
                          {props.values.categories &&
                          props.values.categories.length > 0
                            ? props.values.categories.map((category, index) => (
                                <div key={index} className='d-flex mt-3'>
                                  <Form.Control
                                    type='text'
                                    placeholder='Enter category'
                                    value={props.category}
                                    name={`categories.${index}`}
                                    onChange={props.handleChange}
                                  />
                                  <Button
                                    className='p-2'
                                    variant='danger'
                                    type='button'
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <TiDeleteOutline
                                      style={{ fontSize: '1.8rem' }}
                                    />
                                  </Button>
                                </div>
                              ))
                            : null}
                          <div className='d-flex justify-content-center mt-3'>
                            <Button
                              variant='secondary'
                              type='button'
                              onClick={() => arrayHelpers.push(props.values)}
                            >
                              Add Category
                            </Button>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                </Form.Group>
                <Form.Group className='add__business__form--cta__btns'>
                  <div>
                    <Button variant='secondary' onClick={handleClose}>
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button variant='primary' type='submit'>
                      Save
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddBusinessForm
