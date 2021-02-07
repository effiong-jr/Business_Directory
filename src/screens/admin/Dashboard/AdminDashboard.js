import BusinessCard from '../../../components/businessCard/BusinessCard'

import './adminDashboard.scss'

import NavHeader from '../../../components/Navbar/Navbar'
const AdminDashboard = () => {
  return (
    <>
      <NavHeader />
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
      </div>
    </>
  )
}

export default AdminDashboard
