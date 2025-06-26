import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import registerImage from '../assets/login-illustration.jpg'; // Replace with your image path
import { motion } from 'framer-motion';
export const Register = () => {
    const { createUser } = useContext(AuthContext);
  
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        try {
            await createUser(email, password);
            showSuccessAlert("Registration successful!");
            // You can add additional logic here like updating user profile with name/photo
        } catch (error) {
            showErrorAlert(`Registration failed: ${error.message}`);
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
            icon: "error",
            showClass: { popup: "animate__animated animate__fadeInUp animate__faster" },
            hideClass: { popup: "animate__animated animate__fadeOutDown animate__faster" }
        });
    };

    return (
         <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
            <Helmet>
                <title>JOBI | Sign Up</title>
            </Helmet>

            {/* Left Side - Image */}
             <div className="flex flex-col lg:flex-row shadow-xl w-full max-w-6xl bg-white rounded-xl overflow-hidden mt-14">
             <div className="hidden lg:block lg:w-1/2 relative">
                <img 
                    src={registerImage} 
                    alt="Career illustration" 
                    className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-sky-900/40 to-indigo-900/20 flex items-end p-12">
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
    >
        <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-200 inline-block">
                Launch Your Career
            </span>
        </h2>
        <div className="flex items-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 mr-4"></div>
            <p className="text-sky-100/90 text-xl font-light tracking-wide">
                Join thousands of professionals growing their careers
            </p>
        </div>
    </motion.div>
</div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                   <div className="text-center mb-12">
 <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="text-center mb-12 backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20"
>
  <h1 className="text-4xl font-bold text-gray-800 mb-3">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
      Join Our Community
    </span>
  </h1>
  <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto mb-4 rounded-full"></div>
  <p className="text-gray-600 text-lg">Create your account in seconds</p>
</motion.div>
</div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Abrar khan"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                name="photo"
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                                required
                            />
                        </div>

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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
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
                            Create Account
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-sky-600 hover:text-sky-700 font-medium">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}