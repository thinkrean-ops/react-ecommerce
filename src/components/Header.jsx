import React, { useState } from "react";

import { Link } from "react-router-dom";


function Header() {

  const [isActiveNavbar, setisActiveNavbar] = useState(false)

  return (
    <>
      <header className=" bg-white border-b border-gray-600 py-4 font-jost flex justify-between items-center px-8 lg:px-40">
        <div className="flex items-center gap-2">
          <button onClick={() => setisActiveNavbar(true)} className="inline-block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>

          <h2 className="font-bold "> PUTHEA-Ecommerce</h2>
        </div>

        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <Link to="/" className="hover:underline decoration-yellow-600">
              {" "}
              Home
            </Link>
          </li>

          <li>
            <Link to="/products " className="hover:underline decoration-yellow-600">
              {" "}
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact " className="hover:underline decoration-yellow-600">
              {" "}
              Contact
            </Link>
          </li>

          <li>
            <Link to="/about " className="hover:underline decoration-yellow-600">
              {" "}
              About
            </Link>
          </li>
        </ul>

        <div className="flex item-center gap-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6  hover:text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6  hover:text-yellow-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </header>


      <header className={`${isActiveNavbar ? '-left-0' : '-left-full'} absolute transition-all duration-300 ease-in-out top-0 z-[999] p-4 w-[260px] bg-black text-white min-h-screen`} >


        <div className="flex justify-end ">
          <button onClick={() => setisActiveNavbar(false)} className=" p-2 border border-white border-dashed rounded-full hover:bg-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </button>
        </div>


        <div className="flex flex-col gap-4 mt-4">

          <Link to="/ " className=" hover:bg-gray-500 focus:bg-orange-300 text-white rounded-md">Home</Link>
          <Link to="/products " className=" hover:bg-gray-500 focus:bg-orange-300 text-white rounded-md">Products</Link>
          <Link to="/contact " className=" hover:bg-gray-500 focus:bg-orange-300 text-white rounded-md">Contact</Link>
          <Link to="/about " className=" hover:bg-gray-500 focus:bg-orange-300 text-white rounded-md">About</Link>
        </div>
      </header>
    </>
  )
}



export default Header;
