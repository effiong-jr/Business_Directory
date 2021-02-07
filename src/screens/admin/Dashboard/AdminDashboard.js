import { useState } from 'react'

import { RiAddCircleFill } from 'react-icons/ri'
import AddBusinessForm from '../../../components/addBusinessForm/AddBusinessForm'

import BusinessCard from '../../../components/businessCard/BusinessCard'

import './adminDashboard.scss'

import NavHeader from '../../../components/Navbar/Navbar'
const AdminDashboard = () => {
  const [showAddBusinessForm, setShowAddBusinessForm] = useState(false)

  const handleCloseAddBusinessForm = () => setShowAddBusinessForm(false)

  return (
    <>
      <NavHeader />

      {/* Modal to add new business to Directory */}
      <AddBusinessForm
        show={showAddBusinessForm}
        handleClose={handleCloseAddBusinessForm}
      />

      <div className='admin__dashboard'>
        <p className='admin__dashboard--title'>
          You currently have <strong>NO. OF Business</strong> business(s) listed
          in your directory
        </p>

        <div className='admin__dashboard--business__list'>
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
        </div>
        <div className='add__icon'>
          <RiAddCircleFill onClick={() => setShowAddBusinessForm(true)} />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
