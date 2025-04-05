import React, { useContext } from 'react';
import { UseContext } from '../Context/Appcontext';

const Storage = () => {
  const { formData } = useContext(UseContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
   
      <div className="w-full max-w-md h-[720px] bg-gray-200 border border-gray-500 flex flex-col overflow-hidden">
        
    
        <div className="h-[70px] w-full bg-white flex items-center justify-center font-bold text-xl shadow-sm">
          Account Settings
        </div>

   
        <div className="flex items-center bg-gray-200 p-6 mt-6 mx-4 ">
          <img
            src="https://media.gettyimages.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=gi&k=20&c=TWakDzE5LVcAGztV1fGQ8-Ca3EHk8m9lAaAeBW_HVUc="
            alt="Profile"
            className="h-[100px] w-[100px] rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="text-black font-bold text-lg">{formData.fullname}</h2>
            <p className="text-gray-500">{formData.email}</p>
            <p className="text-gray-400">{formData.company}</p>
          </div>
        </div>


        <div className="mt-6 px-6 text-gray-700 text-sm leading-relaxed flex-1 overflow-y-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam ex maiores facere culpa, minima officia architecto excepturi
            repudiandae esse dolore praesentium odit voluptatem consequatur sed ipsam
            laboriosam officiis rerum! Numquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Storage;
