import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminDashboard from './screens/admin/Dashboard/AdminDashboard'
import AdminLogin from './screens/admin/Login/AdminLogin'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
      </Switch>
    </Router>
  )
}

export default App
