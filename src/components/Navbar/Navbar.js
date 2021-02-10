import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Button } from 'react-bootstrap'
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
      {/* <Navbar.Brand href='/'>Business Directory</Navbar.Brand> */}
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Business Directory
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {user && user.isAdmin ? (
            <>
              <div className='ml-auto text-right'>
                <Link to='/admin/dashboard' className='nav nav-link p-0 pb-1'>
                  Signed in as admin
                </Link>
                <Button
                  className='nav-button ml-auto'
                  variant='danger'
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Link to='/admin/login' className='ml-auto'>
              Admin Login
            </Link>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default NavHeader
