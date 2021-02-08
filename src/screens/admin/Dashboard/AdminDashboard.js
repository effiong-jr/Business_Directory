import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RiAddCircleFill } from 'react-icons/ri'
import AddBusinessForm from '../../../components/addBusinessForm/AddBusinessForm'

import BusinessCard from '../../../components/businessCard/BusinessCard'

import './adminDashboard.scss'

import NavHeader from '../../../components/Navbar/Navbar'
const AdminDashboard = () => {
  const [showAddBusinessForm, setShowAddBusinessForm] = useState(false)

  const handleCloseAddBusinessForm = () => setShowAddBusinessForm(false)

  const businessList = useSelector((state) => state.businessList)

  return (
    <>
      <NavHeader />

      {/* Modal to add new business to Directory */}
      <AddBusinessForm
        show={showAddBusinessForm}
        handleClose={handleCloseAddBusinessForm}
      />

      <div className='admin__dashboard'>
        <p className='admin__dashboard--title text-center'>
          You currently have <strong>{businessList.length} </strong>
          {businessList.length === 1 ? 'business' : 'businesses'} listed in your
          directory
        </p>

        <div className='admin__dashboard--business__list'>
          {businessList.map((business) => (
            <BusinessCard key={business.id} businessInfo={business} />
          ))}
          {/* <BusinessCard />
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
          <BusinessCard /> */}
        </div>
        <div className='add__icon'>
          <RiAddCircleFill onClick={() => setShowAddBusinessForm(true)} />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
