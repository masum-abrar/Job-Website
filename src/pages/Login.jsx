import Swal from 'sweetalert2'
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { signInWithPopup} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";
import { Footer } from '../components/Footer';
import axios from 'axios';


export const Login = () => {
  // const [user,setUser] = useState('');
    const [Success,setSuccess] = useState('');
    const provider = new GoogleAuthProvider();
    const Gitprovider = new GithubAuthProvider();
    const { signInUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    // setloginSuccess=('');
    const HandleGoogleSignIn =()=>{
       signInWithPopup(auth,provider)
       .then(result => {
        const email = result.user.email;
        console.log(email);
      
        const user = { email }
        console.log(user)

        axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    Swal.fire({
                        title: "User Logged In Successfully",
                        icon: "success",
                        showClass: {
                            popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                        },
                        hideClass: {
                            popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                        }
                    });
                    navigate(location?.state ? location.state : '/')
                }
            })
    })
       .catch(error =>{
        console.log('error',error.message)
       })
    }
    const HandleGithubSignIn =()=>{
        signInWithPopup(auth,Gitprovider)
        .then(result =>{
            Swal.fire({
                title: "User Successfully loggedin",
                icon: "success",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
         const user =result.user;
         setSuccess('user logged in succesfully')
        
         console.log(user);
        })
        .catch(error =>{
         console.log('error',error.message)
        })
     }
    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            Swal.fire({
                                title: "User Logged In Successfully",
                                icon: "success",
                                showClass: {
                                    popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                                },
                                hideClass: {
                                    popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                                }
                            });
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                   animate__faster
                  `
                    }
                });
            });
    }
    
  return (
   <div>
     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6 mb-6 md:ml-[20%] lg:ml-[35%] relative top-24 bottom-20">
        <Helmet>
            <title>
                Real State | SignIn
            </title>
        </Helmet>
    <form onSubmit={handleLogIn} className="card-body ">
      <div className="form-control">
       
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button   className="btn btn-primary text-white">Login</button>
      </div>
      <div className="form-control mt-6">
        <button onClick={HandleGoogleSignIn} className="btn bg-red-600 text-white">Google Login</button>
      </div>
      <div className="form-control mt-6">
        <button onClick={HandleGithubSignIn} className="btn bg-black text-white">Github Login</button>
      </div>
    </form>
   
 <div>

 </div>
 
  </div>

   </div>
  
  )
}
