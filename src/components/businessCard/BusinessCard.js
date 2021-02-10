import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FaPhoneAlt, FaGlobeAmericas } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { deleteBusiness } from '../../redux/actions/businessActionTypes'
import AddBusinessForm from '../../components/addBusinessForm/AddBusinessForm'

import './businessCard.scss'

const BusinessCard = ({ businessInfo }) => {
  const [showModal, setShowModal] = useState(false)
  const {
    businessName,
    categories,
    description,
    email,
    id,
    images,
    phone,
    website,
  } = businessInfo

  const dispatch = useDispatch()
  const isAdmin = useSelector((state) => state.userLogin.userDetails)

  const handleClose = () => setShowModal(false)

  const handleEdit = () => {
    setShowModal(true)
  }

  const handleDelete = () => {
    dispatch(deleteBusiness(id))
  }

  return (
    <>
      <AddBusinessForm
        show={showModal}
        handleClose={handleClose}
        businessInfo={businessInfo}
      />
      <Card className='business__card'>
        <h3 className='text-center'>{businessName}</h3>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              {/* <Col>
              <MdBusinessCenter />
            </Col> */}
              <Col className='business__card--description'>{description}</Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col xs='1'>
                <FaPhoneAlt />
              </Col>
              <Col>{phone}</Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col xs='1'>
                <BiMailSend />
              </Col>
              <Col>
                <a href={`mailto:${email}`}>{email}</a>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col xs='1'>
                <FaGlobeAmericas />
              </Col>
              <Col>
                <a href={website} target='_blank' rel='noreferrer'>
                  {website}
                </a>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col xs='1'>
                <HiOutlineUserGroup />
              </Col>
              <Col className='business__card--category'>
                {categories.join(', ')}
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>

        <div className='business__card--images'>
          <div className='business__card--image mx-2'>
            <Image src={images[0]} alt='business_img' fluid />
          </div>
          <div className='business__card--image mx-2'>
            <Image src={images[1]} alt='business_img' fluid />
          </div>
        </div>

        {/* Check if the user is an admin ? show edit and delete btns else hide btns */}
        {isAdmin.isAdmin && (
          <div className='business__card--action__btns'>
            <Button variant='secondary' onClick={handleEdit}>
              Edit
            </Button>
            <Button variant='danger' onClick={handleDelete}>
              Delete
            </Button>
          </div>
        )}
      </Card>
    </>
  )
}

export default BusinessCard
