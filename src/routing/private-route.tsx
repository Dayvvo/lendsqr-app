

import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component,path, location, ...rest }:any) => {
  
  let isLoggedIn = sessionStorage.getItem('user-object')
    
  const shouldRedirect = !isLoggedIn && location.pathname?.includes(`/admin`);

  console.log('should redirect',shouldRedirect)
  if (shouldRedirect) {
    navigate("/")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute