import React from "react"
import { Router } from "@reach/router"
import User from '../routes/user'
import PrivateRoute from "../routing/private-route"
import Home from "../routes"
const App = () => (
    <Router basepath="/admin" >
      <PrivateRoute path={'/'} component={Home} />
      <PrivateRoute path="/user" component={User} />
      <PrivateRoute path="/loans" />
      <User path="/app/login" />
    </Router>
)

export default App