import { Card, Form, Button } from 'react-bootstrap'
import './adminLoginForm.scss'

const AdminLoginForm = () => {
  return (
    <Card className='login__form'>
      <h2>Admin Login</h2>
      <Form>
        <Form.Group controlId='formAdminEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter admin email' />
        </Form.Group>

        <Form.Group controlId='formAdminPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter admin password' />
        </Form.Group>

        <Form.Group className='text-center'>
          <Button>Log in</Button>
        </Form.Group>
      </Form>
    </Card>
  )
}

export default AdminLoginForm
