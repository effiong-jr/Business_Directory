import AdminLoginForm from '../../../components/AdminLoginForm/AdminLoginForm'
import NavHeader from '../../../components/Navbar/Navbar'
import './adminLogin.scss'

const AdminLogin = () => {
  return (
    <>
      <NavHeader />

      <div className='admin__login'>
        <AdminLoginForm formTitle='AdminLogin' />
      </div>
    </>
  )
}

export default AdminLogin
