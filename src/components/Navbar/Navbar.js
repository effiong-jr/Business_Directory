import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { logout } from '../../redux/actions/loginActionType'

const NavHeader = () => {
  const user = useSelector((state) => state.userLogin.userDetails)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logout())
    history.push('/admin/login')
  }

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Business Directory</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Form inline className='mx-auto'>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
        {user && user.isAdmin ? (
          <Button
            className='nav-button'
            variant='danger'
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : null}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavHeader
