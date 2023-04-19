import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const postSchema = yup.object().shape({
  name: yup.string().required('Enter Your Name Please'),
  password: yup.string().required('Enter Your Password Please').min(30, 'too short').max(200, 'too long'),
  phoneNumber: yup.string().required('Enter Phone Number Please').matches('^\\+964\\d{10}$', 'wrong'),
});

export default function Signup() {


  return (
    <main className="">
      <h1 className='text-center'>Sign Up To FULL THING</h1> <br />
            <div>
              <div >
                <Formik 
                  validationSchema={postSchema}
                  initialValues={{ name: '', password: '', phoneNumber: '' }}
                  onSubmit={(values) => {
                    axios
                      .post('https://jsonplaceholder.typicode.com/posts', {
                        ...values,
                      })
                      .then((response) => {
                        
                      });
                  }}
                >
                  {({ errors, touched }) => (
                    
                    <Form className=" justify-center">  
                      <Field type='text' name='name' placeholder="Enter your name" className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-400 rounded-md ml-5 mb-2"/> <br />
                      <ErrorMessage name='name' component='div' className='text-red-500 ml-5 text-sm'/> 

                      <Field type='text' name='password' placeholder="Enter your password" className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-400 rounded-md ml-5 mb-2"/> <br />
                      <ErrorMessage name='password' component='div'  className='text-red-500 ml-5 text-sm'/> 

                      <Field type='text' name='phoneNumber' placeholder="Enter your phoneNumber" className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-400 rounded-md ml-5 mb-2" /> <br />
                      <ErrorMessage name='phoneNumber' component='div' className='text-red-500 ml-5 text-sm'/>

                      <button type='submit' className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-4 py-2 ml-5 mt-10 hover:text-black">Sign Up</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
    </main>
  );
}
