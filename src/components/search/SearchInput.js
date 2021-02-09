import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { searchBusiness } from '../../redux/actions/businessActionTypes'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()

  const handleSearch = (e) => {
    setSearchValue(e.target.value)

    dispatch(searchBusiness(e.target.value))
  }

  return (
    <div className='col-xs-12 col-sm-8 col-md-6 mx-auto'>
      <Form.Control
        type='text'
        placeholder='Search business'
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchInput
