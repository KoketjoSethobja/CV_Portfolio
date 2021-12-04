import React from 'react';

const Home = () => {
    return (
        <div className="home-div w-full h-screen bg-gray-900 flex bg-cover flex items-center justify-center bg-fixed" style={{backgroundImage: "url('../Fade-In-Background.svg')"}}>
            <div className="leftside w-2/4 p-24 text-white">
                <h1 className="text-2xl my-4">Hello, my name is</h1>
                <h1 className="text-5xl my-4 font-bold">Koketjo Sethobja</h1>
                <h1 className="text-2xl my-4">And I'm a <span style={{color: "#00ADB5"}}>Software Developer</span></h1>
                <button className="text-white bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-md text-sm font-medium duration-500">Contact Me</button>
            </div>
            <div className="rightside w-2/4 p-24">
                <img src="../undraw_dev_productivity_umsq.svg" alt="" />
            </div>
        </div>
    )
}

export default Home;
