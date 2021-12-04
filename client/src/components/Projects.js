import React from 'react';
 
const Projects = () => {
    return (
        <div className="service-all p-24 w-full h-screen bg-red-500 text-white" style={{backgroundColor: "#121222"}}>
            <div className="header h-1/6 w-full flex items-center justify-center font-bold text-4xl">
                Projects
            </div>
            <div className="services h-5/6 w-full flex justify-center p-10 items-center">
                <div className="leftside bg-gray-800 rounded-lg w-2/4 h-full p-4 mx-2 flex justify-center items-center flex-col">
                    <div className="h-2/5 mb-2">
                        <img className="h-full" src="../javaproject.svg" alt="" />
                    </div>                    
                    <h1 className="font-bold text-xl mb-2">Account System (Discovery Vitality)</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo perspiciatis neque, nemo at ut cumque!</p>
                    <button className="mt-2 text-white bg-gray-900 hover:bg-gray-700 px-6 py-3 rounded-md text-sm font-medium duration-500">View Project</button>
                </div>
                <div className="rightside bg-gray-800 rounded-lg h-full w-2/4 p-4 mx-2 flex justify-center items-center flex-col">
                    <div className="h-2/5 mb-2">
                        <img className="h-full" src="../Screenshot (126).png" alt="" />
                    </div>
                    <h1 className="font-bold text-xl mb-2">Image Gallery Website</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure quas nam maxime officiis cupiditate!</p>
                    <button className="mt-2 text-white bg-gray-900 hover:bg-gray-700 px-6 py-3 rounded-md text-sm font-medium duration-500">View Project</button>
                </div>
            </div>
        </div>
    )
}
 
export default Projects;