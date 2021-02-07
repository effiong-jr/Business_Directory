import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLogin from './screens/admin/Login/AdminLogin'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/admin/login' component={AdminLogin} />
      </Switch>
    </Router>
  )
}

export default App
