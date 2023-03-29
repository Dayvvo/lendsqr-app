import { graphql, useStaticQuery } from "gatsby"



const useUsersQuery = ()=>{


    const getUsers = useStaticQuery(graphql`
        query UsersQuery{
            allUsersJson{
                edges {
                    node {
                        personal{
                            firstName,
                            lastName,
                            email,
                            bvn,
                            gender,
                            marital,
                            accountBalance,
                            bank,
                            accountNo,
                            education,
                            activeSaving,
                            phone,
                            activeLoan,    
                                        
                        }
                        employment{
                            employmentStatus,
                            sector,
                            employmentDuration,
                            officeEmail,
                            salary,
                            officeName
                        }
                        guarantor {
                            firstName,
                            lastName,
                            phone,
                            email,
                            relationship
                        }
                    }
                }
            }
        }
    `)


    return getUsers

}

export default useUsersQuery;