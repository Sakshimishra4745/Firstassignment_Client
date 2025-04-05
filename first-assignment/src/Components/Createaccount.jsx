import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import { UseContext } from '../Context/Appcontext';
const Createaccount = () => {
    const navigate = useNavigate();
    const { formData, setFormData } = useContext(UseContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();

    }

    const handleChange = (e) => {
        const { name, type, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleClick = () => {
        const { fullname, email, password, company, agency } = formData;
        if (fullname && email && password && company && agency) {
            setFormData(formData);
            navigate('/storage');
        } else {
            alert("Please fill in all required fields.");
        }
    };
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <form onSubmit={handleSubmit} className='bg-gray p-6 rounded-lg border border-gray-300'>

                <h1 className="text-2xl font-semibold">
                    Create your<br />
                    <span className="flex items-center">
                        PropX Account
                       
                    </span>
                  
                </h1>
                <br />
                <div className="relative w-[280px] mb-6">
                    <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-medium text-purple-600">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 bg-gray-50 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="relative w-[280px] mb-6">
                    <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-medium text-purple-600">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 bg-gray-50 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="relative w-[280px] mb-6">
                    <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-medium text-purple-600">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300  bg-gray-50 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="relative w-[280px] mb-6">
                    <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-medium text-purple-600">
                        Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 bg-gray-50 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="relative w-[280px] mb-6">
                    <label className="absolute -top-2 left-3 bg-gray-50 px-1 text-sm font-medium text-purple-600">
                        Are you an Agency
                    </label>
                    <input
                        type="radio"
                        yes

                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300  bg-gray-50 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="w-[280px] mb-6">
                    <label className="block mb-2 text-sm font-medium text-purple-600">
                        Are you an Agency?<span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="flex items-center gap-4 px-3 py-2 border border-gray-300 rounded-md">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="agency"
                                value="yes"
                                onChange={handleChange}
                                required
                                className="accent-purple-600"
                            />
                            <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="agency"
                                value="no"
                                onChange={handleChange}
                                required
                                className="accent-purple-600"
                            />
                            <span>No</span>
                        </label>
                    </div>
                </div>
                <div>
                    <button onClick={handleClick} className='h-[40px] w-[280px] bg-purple-600 text-center text-white'>
                        create account
                    </button>
                </div>


            </form>
        </div>
    )
}

export default Createaccount
