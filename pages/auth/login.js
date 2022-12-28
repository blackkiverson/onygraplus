import React from 'react';
import Image from 'next/image';

export default function login() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Image
        src="/bckground.jpg"
        alt=""
        fill
        priority
        className=" object-cover"
      />
      <div className="h-full px-5 py-10 bg-gray-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-gray-100">
        <form className=' flex-col'>
          <input type="text" className='px-3 py-0.5 rounded-lg my-4'/>
          <br/>
          <input type="text" className='px-3 py-0.5 rounded-lg my-4'/>
          <br/>
          <input type="text" className='px-3 py-0.5 rounded-lg my-4'/>
          <br />
          <a href=''><button className=' text-sm font-light text-white my-10'>Forgot Password?</button></a>
          <br/>
          <button type="submit" className='bg-blue-800 py-1 px-3 rounded-lg my-2 mx-12 text-md text-white font-semibold'>LOG IN</button>
        </form>
      </div>
    </main>
  );
}
