/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { addPost } from '../../Services/Crud'; 
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    first_name: '',
    last_name: '',
    contact_no: '',
    Dob: '',
    Contact: '',
    Address: '',
  });
  const token = localStorage.getItem('Token');
  useEffect(()=>{

    if (!token) {
      navigate('/login');
    }
  },[token])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPost = async () => {
    if (
      postData.first_name === '' ||
      postData.last_name === '' ||
      postData.contact_no === '' ||
      postData.Dob === '' ||
      postData.Contact === '' ||
      postData.Address === ''
    ) {
      toast.error('Please fill all the fields');
      return;
    }
    try {
      await addPost(postData);
      toast.success('Post added successfully!');
      setPostData({
        first_name: '',
        contact_no: '',
        last_name: '',
        Dob: '',
        Contact: '',
        Address: '',
      });
      setTimeout(() => {
        navigate('/tables');
      }, 2000);
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-4">Add Post</h1>
      
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="userId">
            First Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            name='first_name'
            type="text"
            placeholder="Enter First Name"
            value={postData.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="userId">
            Last Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            name='last_name'
            placeholder="Enter Last Name"
            value={postData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="userId">
            Contact Num:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            name='contact_no'
            placeholder="Enter Contact Num"
            value={postData.contact_no}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="userId">
            Dob:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="date"
            name='Dob'
            placeholder="Enter Dob"
            value={postData.Dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="title">
            Contact:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name='Contact'
            type="number"
            placeholder="Enter Contact"
            value={postData.Contact}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="title">
            Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name='Address'
            placeholder="Enter Adsress"
            value={postData.Address}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleAddPost}
          >
            Add Post
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Index;
