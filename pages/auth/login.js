/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import { CgKey } from 'react-icons/cg';

export default function login() {
  return (
    <main className=" text-center flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Image
        src="/bckground.jpg"
        alt=""
        fill
        priority
        className=" object-cover"
      />
      <div className=" h-full px-8 py-6 bg-gray-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-gray-100">
        <section>
          <div className='items-center flex flex-col justify-center'><img
            src='/logo.png'
            alt=''
          /></div>
          <div className=" relative flex items-center">
            <BsFillPersonFill
              color="white"
              className=" absolute pointer-events-none mx-2"
            />
            <input
              type="text"
              className="px-4 py-0.5 rounded-xl bg-bluegray pl-8 text-white"
            />
          </div>
          <br />
          <div className=" relative flex items-center">
            <IoMail
              color="white"
              className=" absolute pointer-events-none mx-2"
            />
            <input
              type="text"
              className="px-4 py-0.5 rounded-xl bg-bluegray pl-8 text-white"
            />
          </div>
          <br />
          <div className=" relative flex items-center">
            <CgKey className=" absolute pointer-events-none mx-2 bg-white rounded" />
            <input
              type="password"
              className="px-4 py-0.5 rounded-xl bg-bluegray pl-8 text-white"
            />
          </div>
          <br />
          <a href="">
            <button className=" text-xs font-light text-white my-7 font-Inter">
              Forgot Password?
            </button>
          </a>
          <br />
          <button
            type="submit"
            autoCorrect="False"
            className="bg-blue-600 py-1.5 px-5 rounded-2xl my-2 mx-12 text-sm text-white font-medium font-Inter"
          >
            LOGIN
          </button>
        </section>
      </div>
    </main>
  );
}
