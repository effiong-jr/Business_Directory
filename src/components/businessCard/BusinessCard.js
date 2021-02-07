import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { MdBusinessCenter } from 'react-icons/md'
import { FaPhoneAlt, FaGlobeAmericas } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'

import './businessCard.scss'

const BusinessCard = () => {
  return (
    <Card className='business__card'>
      <h3 className='text-center'>Business Name</h3>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>
              <MdBusinessCenter />
            </Col>
            <Col>Description</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>
              <FaPhoneAlt />
            </Col>
            <Col>Phone Number</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>
              <BiMailSend />
            </Col>
            <Col>Email</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>
              <FaGlobeAmericas />
            </Col>
            <Col>Website Url</Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>
              <HiOutlineUserGroup />
            </Col>
            <Col>Categories</Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>

      <div>Image goes here</div>
      <div className='business__card--action__btns'>
        <Button variant='secondary'>Edit</Button>
        <Button variant='danger'>Delete</Button>
      </div>
    </Card>
  )
}

export default BusinessCard
