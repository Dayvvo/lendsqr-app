

import React from "react"
import { navigate } from "gatsby"
import useSession from "../hooks/useSession"

const PrivateRoute = ({ component: Component,path, location, ...rest }:any) => {

  // let session  = useSession()

  // let isLoggedIn = session?.getItem('user-object')
    
  // const shouldRedirect = !isLoggedIn && location.pathname?.includes(`/admin`);

  // console.log('should redirect',shouldRedirect)
  // if (shouldRedirect) {
  //   navigate("/")
  //   return null
  // }

  return <Component {...rest} />
}

export default PrivateRoute