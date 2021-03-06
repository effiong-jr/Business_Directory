import { useState } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

import { useSelector } from 'react-redux'

import { Button, Table } from 'react-bootstrap'
import { RiAddCircleFill } from 'react-icons/ri'

import NavHeader from '../../../components/Navbar/Navbar'
import AddBusinessForm from '../../../components/addBusinessForm/AddBusinessForm'
import BusinessCard from '../../../components/businessCard/BusinessCard'
import TableView from '../../../components/tableView/TableView'

import SearchInput from '../../../components/search/SearchInput'

import './adminDashboard.scss'

const AdminDashboard = () => {
  const [showAddBusinessForm, setShowAddBusinessForm] = useState(false)
  const [showAsCard, setShowAsCard] = useState(true)

  const handleCloseAddBusinessForm = () => setShowAddBusinessForm(false)

  const businessList = useSelector((state) => state.businessList)

  const tableView = businessList.map((business, index) => (
    <TableView key={business.id} index={index} businessInfo={business} />
  ))

  const cardView = businessList.map((business) => (
    <BusinessCard key={business.id} businessInfo={business} />
  ))

  return (
    <>
      <NavHeader />

      {/* Modal to add new business to Directory */}
      <AddBusinessForm
        show={showAddBusinessForm}
        handleClose={handleCloseAddBusinessForm}
      />

      <div className='admin__dashboard container'>
        <div className='mb-3'>
          <SearchInput />
        </div>
        <p className='admin__dashboard--title text-center'>
          You currently have <strong>{businessList.length} </strong>
          {businessList.length === 1 ? 'business' : 'businesses'} listed in your
          directory
        </p>

        <Button
          variant='info'
          className='btn btn-sm ml-auto mb-3'
          onClick={() => setShowAsCard(!showAsCard)}
        >
          {showAsCard ? 'View as Table' : 'View as cards'}
        </Button>

        <div className='admin__dashboard--business__list'>
          {showAsCard === false ? (
            <>
              <Table
                id='table-to-xls'
                striped
                bordered
                responsive
                hover
                size='sm'
                className='container'
              >
                <thead>
                  {businessList.length > 0 && (
                    <tr>
                      <th colSpan='8' className='text-right'>
                        {/* Button to export table as an excel document */}
                        <ReactHTMLTableToExcel
                          as={Button}
                          id='test-table-xls-button'
                          className='download-table-xls-button btn btn-sm'
                          table='table-to-xls'
                          filename='Business_List'
                          sheet='Business_List'
                          buttonText='Export to Excel (.xls)'
                        />
                      </th>
                    </tr>
                  )}
                  <tr>
                    <th>#</th>
                    <th>Business Name</th>
                    <th>Description</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Categories</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{tableView}</tbody>
              </Table>
            </>
          ) : (
            cardView
          )}
        </div>
        <div className='add__icon'>
          <RiAddCircleFill onClick={() => setShowAddBusinessForm(true)} />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
