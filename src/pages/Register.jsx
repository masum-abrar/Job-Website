import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { Footer } from '../components/Footer';



export const Register = () => {
   
  const { createUser } = useContext(AuthContext) ;
  
  const handleRegister = e => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      //console.log(name, email, password);

        
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "User Successfully Register",
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
            })
            .catch(error => {
                console.error(error);
            })
    }
  return (
   
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6 mb-6 lg:ml-[35%] relative ">
         <Helmet>
            <title>JOBI | SignUp</title>
         </Helmet>
         
    <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo Url</span>
        </label>
        <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
      </div>

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
        <button className="btn btn-primary">SignUp</button>
      </div>
    </form>
  </div>

    </div>
  )
}
