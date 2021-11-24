import React from 'react';

const About = () => {
    return (
        <div className="about-all w-full h-screen bg-white p-14">
            <div className="header w-full h-1/6 flex items-center justify-center">
                <h1 className="font-bold text-2xl">
                    About me
                </h1>                                
            </div>
            <div className="aboutme h-5/6 w-full flex items-center justify-center flex-row">
                <div className="leftside w-2/6 p-14 h-full">
                    <img className="w-full h-full rounded-lg" src="../me.jpg" alt="" />
                </div>
                <div className="rightside w-4/6 p-2">
                    <h1 className="font-bold my-2 text-xl">I'm Koketjo Sethobja and I'm a <span style={{color: "#121222"}}>Software Developer</span></h1>
                    <p className="my-2 overflow-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloremque quasi rerum suscipit consequatur, eligendi recusandae nam quia, quo ut quas sint numquam animi a! Ullam excepturi, illum tempore quam veritatis doloremque delectus totam voluptate autem blanditiis vitae esse libero corporis odio consequatur non deleniti molestias reiciendis obcaecati voluptatem quis iusto. Sequi similique aspernatur quae ab impedit natus minus enim cum dignissimos dolorum atque ea tempore recusandae dolorem ad, earum iure cumque aliquam, nemo iste eius cupiditate et, qui perferendis? Quos repellat blanditiis est veritatis provident, rerum qui commodi necessitatibus, quibusdam atque aliquam, nihil quis eaque ducimus quod rem consectetur.</p>
                    <button className="mt-2 text-white bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-md text-sm font-medium duration-500">Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About;