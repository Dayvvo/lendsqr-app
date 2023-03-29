import React from 'react'
import { Nav, SideBar, UserInfo } from '../components/dashboard'
import Wrapper from '../widgets/wrapper'
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/dashboard.scss';
import useUsersQuery from '../hooks/useUsersQuery';

const User = ({path,location}:{path?:any, location?:any})=>{


    const userSession = sessionStorage.getItem('user-object');

    const user  = userSession? JSON.parse(userSession):{}

    const id = location

    console.log('user session',id);

    const getUsers = useUsersQuery();

    const payload = getUsers?.allUsersJson?.edges[0]?.node
    {};

    return(
        <Wrapper>
    
            <Nav user={user} />

            <section id="sidebar">

            <SideBar  />

            <UserInfo  user={payload} />

            </section>
    
        </Wrapper>
    )

}

export default User;