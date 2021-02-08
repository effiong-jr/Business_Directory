import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/privateRouteHandler/ProtectedRoute'
import AdminDashboard from './screens/admin/Dashboard/AdminDashboard'
import AdminLogin from './screens/admin/Login/AdminLogin'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/login' component={AdminLogin} />
        <PrivateRoute exact path='/admin/dashboard'>
          <AdminDashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export default App
