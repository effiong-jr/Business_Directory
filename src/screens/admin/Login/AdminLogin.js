import AdminLoginForm from '../../../components/adminLoginForm/AdminLoginForm'
import NavHeader from '../../../components/Navbar/Navbar'
import './adminLogin.scss'

const AdminLogin = () => {
  return (
    <>
      <NavHeader />

      <div className='admin__login'>
        <AdminLoginForm />
      </div>
    </>
  )
}

export default AdminLogin
