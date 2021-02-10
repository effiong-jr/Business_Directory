import { useSelector } from 'react-redux'
import Navbar from '../../../components/Navbar/Navbar'
import SearchInput from '../../../components/search/SearchInput'
import BusinessCard from '../../../components/businessCard/BusinessCard'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const businessList = useSelector((state) => state.businessList)
  const user = useSelector((state) => state.userLogin.userDetails)

  const displayBusinessList = businessList.map((business) => (
    <BusinessCard key={business.id} businessInfo={business} />
  ))

  return (
    <>
      <Navbar />
      <div className='mt-4 mb-5'>
        <SearchInput />
      </div>
      {displayBusinessList.length === 0 ? (
        <div className=' text-center'>
          <p>No business list to display at this time.</p>
          {user.hasOwnProperty('isAdmin') && (
            <p className='mt-5'>
              <Link to='/admin/dashboard'>Back to admin dashboard</Link>
            </p>
          )}
        </div>
      ) : (
        <div className='d-flex flex-wrap'>{displayBusinessList}</div>
      )}
    </>
  )
}

export default LandingPage
