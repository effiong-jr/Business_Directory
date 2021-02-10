import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteBusiness } from '../../redux/actions/businessActionTypes'
import AddBusinessForm from '../../components/addBusinessForm/AddBusinessForm'

const TableView = ({ businessInfo, index }) => {
  const [showModal, setShowModal] = useState(false)

  const {
    businessName,
    categories,
    description,
    id,
    email,
    phone,
    website,
  } = businessInfo

  const dispatch = useDispatch()

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
      <tr>
        <td>{index + 1}</td>
        <td>{businessName}</td>
        <td>{description}</td>
        <td>{phone}</td>

        <td>
          <a href={`mailto:${email}`}>{email}</a>
        </td>
        <td>
          <a href={`${website}`}>{website}</a>
        </td>
        <td>{categories.join(', ')}</td>
        <td>
          <div className='d-flex'>
            <Button variant='dark' className='btn-sm mr-2' onClick={handleEdit}>
              Edit
            </Button>
            <Button variant='danger' className='btn-sm' onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableView
