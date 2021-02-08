import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.userLogin.userDetails)
  // let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/admin/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
