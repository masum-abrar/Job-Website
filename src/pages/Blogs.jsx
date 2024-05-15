import React from 'react';
import pic from '../assets/pic.jpg';
import pic4 from '../assets/node.png';
import { Helmet } from 'react-helmet-async';
export const Blogs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
       <Helmet>
        <title> JOBI | BLOG</title>
       
      </Helmet>
   
      <section className="mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
           
            <img src= {pic} alt="Access Token and Refresh Token" className="w-full rounded-md" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Access Token and Refresh Token</h2>
            <p className="mb-2">
              <strong>Access Token:</strong> An access token is a credential used by a client to access protected resources on behalf of a user.
              It is typically short-lived and grants limited access rights.
            </p>
        
            <p className="mb-2">
              <strong>Refresh Token:</strong> A refresh token is a credential used to obtain a new access token once the current access token expires.
              Unlike access tokens, refresh tokens are long-lived and are used to maintain the user's session without requiring frequent re-authentication.
            </p>
           
          
            <p className="mb-2">
              <strong>Storage on the Client Side:</strong> Access tokens should be stored securely on the client side to prevent unauthorized access.
              They are commonly stored in browser memory using mechanisms like sessionStorage or localStorage.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8" />

      <section className="mb-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
           
            <img src= {pic4} alt="Express.js vs NestJS" className="w-full rounded-md" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Express.js vs NestJS</h2>
            <p className="mb-2">
              <strong>Express.js:</strong> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
              It is known for its simplicity and is widely used for building APIs and web servers using Node.js.
            </p>
           
            <p className="mb-2">
              <strong>NestJS:</strong> NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
              It uses TypeScript as its primary language and is built with a modular architecture that allows developers to create highly maintainable and scalable applications.
            </p>
       
           
          </div>
        </div>
      </section>
    </div>
  );
};

