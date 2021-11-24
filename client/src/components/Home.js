import React from 'react';

const Home = () => {
    return (
        <div className="w-full h-screen bg-gray-900 flex bg-cover flex items-center justify-center" style={{backgroundImage: "url('../Fade-In-Background.svg')"}}>
            <div className="w-2/4 p-24 text-white">
                <h1 className="text-2xl my-4">Hello, my name is</h1>
                <h1 className="text-5xl my-4 font-bold">Koketjo Sethobja</h1>
                <h1 className="text-2xl my-4">And I'm a Software Developer</h1>
                <button className="text-white bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-md text-sm font-medium duration-500">Contact Me</button>
            </div>
            <div className="w-2/4 p-24">
                <img src="../undraw_dev_productivity_umsq.svg" alt="" />
            </div>
        </div>
    )
}

export default Home;
