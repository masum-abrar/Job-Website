import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import axios from 'axios';
import Swal from 'sweetalert2';
import loginImage from '../assets/login-illustration.jpg'; // Replace with your image path
import { motion } from 'framer-motion';

export const Login = () => {
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleAuth = async (authFunction, provider, authType) => {
        try {
            const result = await signInWithPopup(auth, provider);
            const email = result.user.email;
            const user = { email };

            const res = await axios.post('https://job-server-site.vercel.app/jwt', user, { withCredentials: true });
            if (res.data.success) {
                showSuccessAlert(`${authType} login successful!`);
                navigate(location?.state ? location.state : '/');
            }
        } catch (error) {
            showErrorAlert(`${authType} login failed: ${error.message}`);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInUser(email, password);
            const user = { email };
            const res = await axios.post('https://job-server-site.vercel.app/jwt', user, { withCredentials: true });
            if (res.data.success) {
                showSuccessAlert("Login successful!");
                navigate(location?.state ? location.state : '/');
            }
        } catch (error) {
            showErrorAlert(`Login failed: ${error.code}`);
        }
    };

    const showSuccessAlert = (message) => {
        Swal.fire({
            title: message,
            icon: "success",
            showClass: { popup: "animate__animated animate__fadeInUp animate__faster" },
            hideClass: { popup: "animate__animated animate__fadeOutDown animate__faster" }
        });
    };

    const showErrorAlert = (message) => {
        Swal.fire({
            title: message,
            icon: "warning",
            showClass: { popup: "animate__animated animate__fadeInUp animate__faster" },
            hideClass: { popup: "animate__animated animate__fadeOutDown animate__faster" }
        });
    };

    return (
         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
            <Helmet>
                <title>JOBI | LOGIN</title>
            </Helmet>

          <div className="flex flex-col lg:flex-row shadow-xl w-full max-w-6xl bg-white rounded-xl overflow-hidden mt-14">
              {/* Left Side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <img 
                    src={loginImage} 
                    alt="Career illustration" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-indigo-900/50 flex items-end p-12">
                    
                      <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full"
                        >
                            <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-200 inline-block">
                                   Find Your Dream Job
                                </span>
                            </h2>
                            <div className="flex items-center">
                                <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 mr-4"></div>
                                <p className="text-sky-100/90 text-xl font-light tracking-wide">
                                  Join thousands of professionals advancing their careers
                                </p>
                            </div>
                        </motion.div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
               <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="text-center mb-10"
>
  <motion.h1
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
    className="text-3xl font-bold text-gray-900 mb-2"
  >
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
      Welcome Back
    </span>
     <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mb-4 rounded-full mt-3"></div>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-gray-600"
  >
    Sign in to access your account
  </motion.p>
</motion.div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <a href="#" className="text-sm text-sky-600 hover:text-sky-700">Forgot password?</a>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">OR CONTINUE WITH</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => handleAuth(signInWithPopup, provider, "Google")}
                            className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            onClick={() => handleAuth(signInWithPopup, gitProvider, "GitHub")}
                            className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.195 22 16.418 22 12.017 22 6.484 17.522 2 12 2z" fill="#000000"/>
                            </svg>
                            GitHub
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <a href="/register" className="text-sky-600 hover:text-sky-700 font-medium">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}