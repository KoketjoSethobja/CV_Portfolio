import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <div className="navbar fixed w-full h-14 flex items-center justify-center" style={{backgroundColor: "#121222"}}>
            <div 
                className="links flex items-center justify-center" 
                id={showLinks ? "hidden" : ""}
            >
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">Home</a>
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">About</a>
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">Services</a>
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">Skills</a>
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">Projects</a>
                <a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="">Contact Us</a>
            </div> 
            <button 
                className="hidden duration-300"
                onClick={() => setShowLinks(!showLinks)}
            >
                {!showLinks ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>                                
        </div>
    )
}

export default Navbar;