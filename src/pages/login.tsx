import { graphql, useStaticQuery } from 'gatsby';
import  React,{FormEvent,useEffect,useRef,useState} from 'react';
import '../styles/login.scss'
import {navigate} from 'gatsby'
import {GrClose,} from 'react-icons/gr';
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {BiError} from 'react-icons/bi'
export interface userObject {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    gender:string,
    marital:string,
    token:string,
}

const Login = ()=>{

    let userCacheRef = useRef(sessionStorage.getItem('user-object'))

    useEffect(()=>{
        userCacheRef.current && navigate('/admin')
    },[])

    const [userInput,setUserInput] = React.useState({
        email:'',
        password:'',
        isPassword:true,
        isSubmitting:false
    });

    const [error,setError] = useState({
        type:'',
        text:''
    })

    const {isPassword}= userInput

    const onChange = (e:any,)=>{
        setUserInput(prev=>({
            ...prev,
            [e?.target?.name]:e?.target?.value,
        }))
    }

    const setIsPassword = ()=>{
        setUserInput(prev=>({
            ...prev,
            isPassword:!isPassword
        }))
    }

    const payloadQuery = useStaticQuery(graphql`
        query AuthQuery{
            allAuthJson{
                edges {
                    node {
                        firstName,
                        lastName,
                        email,
                        password,
                        gender,
                        marital,
                        token,
                    }
                }
            }
        }
    `)


    const triggerToast = (error:string,type:'success' | 'error',successCb?:(args?:any)=>any)=>{
        setError({
            type,
            text:error
        });

        setTimeout(() => {
            setError({type:'',text:''});
            successCb && successCb()
        }, 2000);

    }

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        let users = payloadQuery?.allAuthJson?.edges;

        const {email,password} = userInput

        console.log('users',users,email,password);

        try{
            setUserInput(prev=>({
                ...prev,
                isSubmitting:true
            }))
            let user = users?.find((user:{node:userObject})=>(
                user?.node.email  ===email && user.node.password===password
            ));


            if (user) {
                console.log('user found',user);
                sessionStorage.setItem('user-object',JSON.stringify(user?.node))
                triggerToast('Logged in successfully','success',()=>navigate('/admin/'))
            }
            else{
                triggerToast('User credentials not found','error')

            }
        }
        catch(err){

            console.log('error caught',err)
        }
        finally{
            setUserInput(prev=>({
                ...prev,
                isSubmitting:false
            }))

        }


        // navigate('/newpage')        


    }

    const toast = 
        <div className='toastContainer'>

                <div className='toast'> 
                    <div className='cancel flexE'>
                        <GrClose 
                         onClick={()=>setError({text:'',type:''})}
                         fontSize={'13px'} cursor='pointer' />
                    </div>

                    <div className='toastChild alignC'>
                        <div>
                            {error.text}    
                        </div>

                        <div className='ml1 alignC'>
                            {error.type ==='error'? 
                                <BiError color='red'/>:
                                <BsFillCheckCircleFill color='green' />
                            }
                        </div>


                    </div>

                </div>

        </div>


    return(
        <div className='login'>
            {error.text && toast}

            <nav id="navbar">
                <div className="lendImg">
                <img src="/assets/Lendsquare.svg" />
                </div>
        
            </nav>
        
            <section id="pabloLogin">
                <img src="/assets/pablo.svg" />
            
                <form onSubmit={handleSubmit}>
                    <div className="logIn">
                        <div className="loginWrapper">
                            <h1>Welcome!</h1>
                            <p className="detail">Enter details to login.</p>
                        </div>
                
                        <div className="input">
                            <div className='label'>Email</div>
                            <div className='inputWrapper'>
                                <input
                                 name='email'
                                 onChange={e=>onChange(e)} 
                                 type={'text'} placeholder='Email' 
                                />
                            </div>
                        </div>


                        <div className="input">
                            <div className='label'>Password</div>
                            <div className='inputWrapper'>
                                <input
                                 name='password'
                                 onChange={e=>onChange(e)} 
                                 type={isPassword?'password':'text'} 
                                 placeholder={ isPassword?'********':'Password'} 
                                />
                                <div onClick={setIsPassword} className='showHide'>{isPassword?'show':'hide'}</div>
                            </div>
                        </div>
            
                        <p className="forgot">FORGOT PASSWORD?</p>
                
                        <button type='submit' className="loginButton">LOG IN</button>

                    </div>
                </form>
        
        
                
        
        
        
        
            
            </section>
  
        </div>
  
    )
}

export default Login