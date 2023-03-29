import React from 'react'
import { Nav, SideBar } from '../components/dashboard';
import Wrapper from "../widgets/wrapper";
import {useStaticQuery,graphql,navigate} from 'gatsby'
import useUsersQuery from '../hooks/useUsersQuery';

const Home = () => {

    const user= {}

    const payloadQuery = useUsersQuery();
    const payload:[] = payloadQuery?.allUsersJson?.edges 

    console.log('payload-data',payload)

    const userStatistics = (type:'total' | 'savings' | 'loan')=>{
        return type==='total'? payload.length: type==='savings'? 
        payload.filter((entry:{node:any})=>entry?.node?.personal?.activeSavings !=='Nil').length :
        payload.filter((entry:{node:any})=>entry?.node?.personal?.activeLoan !=='Nil' ).length
    }


    const goToUser = (id:string)=>{
        navigate('/admin/user',{
            state:id
        })
    }


    return (
 
        <Wrapper>
            
            <Nav user={user} />

            <section id="sidebar">

                <SideBar  />

                <div className="userContent">
                <div className="topContent">

                <section id="userCards">
                <div className="cards">
                <div className="cardWrap">
                    <div className="redIcon">
                    <p>USERS</p>
                    <p className="number"> {userStatistics('total')} </p>
                    </div>
                </div>
                </div>

                <div className="cards">
                <div className="cardWrap">
                    <div className="redIcon">
                    <p>LOANS</p>
                    <p className="number"> {userStatistics('loan')} </p>
                    </div>
                </div>
                </div>

                <div className="cards">
                <div className="cardWrap">
                    <div className="redIcon">
                    <p>SAVINGS</p>
                    <p className="number"> {userStatistics('savings')} </p>
                    </div>
                </div>
                </div>

                </section>

            <section id="Tables">
                <table className='tableRow'>
                    <tr>
                        <th>ID</th>
                        <th>FULL NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>ACTIVE SAVINGS</th>
                        <th>ACTIVE LOAN</th>

                    </tr>

                    {payload.map(((entry:any,index:number)=>{
                        
                        let {node} = entry || {};

                        let {personal} = node || {};
                        return(

                            <tr onClick={()=>goToUser(personal?.id)} className='tableRows' key={index}>
                                <td>{personal?.id} </td>
                                <td>{personal?.firstName} {personal?.lastName} </td>
                                <td>{personal?.email}</td>
                                <td> {personal?.phone} </td>
                                <td> {personal?.activeSaving} </td>
                                <td> {personal?.activeLoan} </td>

                            </tr>

                        )
                    }))}
                    

                </table>
            </section>
            </div>

                </div>


            </section>

        </Wrapper>

    );    
};

export default Home;