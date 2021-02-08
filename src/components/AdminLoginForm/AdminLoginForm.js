import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  loginRequest,
  loginSuccess,
  loginFailed,
} from '../../redux/actions/actionType'

import './adminLoginForm.scss'

const AdminLoginForm = () => {
  const history = useHistory()
  const userDetails = useSelector((state) => state.userLogin.userDetails)
  const hasError = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userDetails && userDetails.isAdmin) {
      return history.push('/admin/dashboard')
    }
  }, [history, userDetails])

  const adminLoginSchema = yup.object().shape({
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
  })

  const handleAdminLogin = (values, { setSubmitting }) => {
    const { email, password } = values

    dispatch(loginRequest())

    if (email === 'admin@email.com' && password === '@Password123') {
      dispatch(loginSuccess({ email }))
      history.push('/admin/dashboard')
      setSubmitting(false)
    } else {
      dispatch(loginFailed('Invalid email or password'))
      setSubmitting(false)
    }
  }

  return (
    <Card className='login__form'>
      <h3>Admin Login</h3>

      {/* Using Formik and Yup for input validation */}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={adminLoginSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleAdminLogin(values, { setSubmitting })
        }
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId='formAdminEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter admin email'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
              {props.errors.email && props.touched.email && (
                <div className='form__errors'>{props.errors.email}</div>
              )}
            </Form.Group>

            <Form.Group controlId='formAdminPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter admin password'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
              />
              {props.errors.password && props.touched.password && (
                <div className='form__errors'>{props.errors.password}</div>
              )}
            </Form.Group>

            {hasError && hasError.errorMessage && (
              <div className='text-danger text-center login__error__message'>
                *{hasError.errorMessage}
              </div>
            )}

            <Form.Group className='text-center'>
              <Button type='submit'>Log in</Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default AdminLoginForm
