import { useSelector } from 'react-redux'
import Navbar from '../../../components/Navbar/Navbar'
import SearchInput from '../../../components/search/SearchInput'
import BusinessCard from '../../../components/businessCard/BusinessCard'

const LandingPage = () => {
  const businessList = useSelector((state) => state.businessList)

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
        <div className='d-flex justify-content-center align-items-center'>
          <p>No business list to display at this time.</p>
        </div>
      ) : (
        <div className='d-flex flex-wrap'>{displayBusinessList}</div>
      )}
    </>
  )
}

export default LandingPage
