import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/privateRouteHandler/ProtectedRoute'
import LandingPage from './screens/user/landingPage/LandingPage'
import AdminDashboard from './screens/admin/Dashboard/AdminDashboard'
import AdminLogin from './screens/admin/Login/AdminLogin'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '90vh' }}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/admin/login' component={AdminLogin} />
          <PrivateRoute exact path='/admin/dashboard'>
            <AdminDashboard />
          </PrivateRoute>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App
