import React from 'react';
 
const ContactMe = () => {
    return (
        <div className="contactme w-full h-screen p-24 overflow-auto">
            <div className="contactme-header h-1/6 w-full flex items-center justify-center flex-col">
                <h1 className="font-bold text-4xl">Contact Me</h1>
            </div>
            <div className="contactme-form-div h-5/6 w-fullflex items-start justify-center flex-col p-12">
                <h1 className="font-bold text-lg mb-5">Message me</h1>
                <form action="" className="contactme-form flex w-full items-center justify-center flex-col">
                    <div className="form-email-name flex items-center justify-center w-full m-2 flex-row">
                        <input className="inputtext mr-2 w-2/4 shadow border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-900" type="text" placeholder="Name"/>
                        <input className="inputemail shadow w-2/4 border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-900"type="text" placeholder="Email"/>
                    </div>
                    <input className="w-full m-2 shadow border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-900" type="text" placeholder="Subject"/>
                    <textarea className="w-full m-2 shadow border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-900 overflow-auto" name="message" placeholder="Message..."/>
                    <button className="w-1/4 text-lg mr-2 rounded-lg px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 duration-500">Send</button>
                </form>
            </div>
        </div>
    )
}
 
export default ContactMe;