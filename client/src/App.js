import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Services from './components/Services';
import Projects from './components/Projects';
import MyFooter from './components/MyFooter';

function App() {

	const [showLinks, setShowLinks] = useState(false)

	return (
		<BrowserRouter>
			<div>
				{/* <Navbar />			 */}
				<div className="navbar fixed w-full h-14 flex items-center justify-center" style={{backgroundColor: "#121222"}}>
					<div 
						className="links flex items-center justify-center" 
						id={showLinks ? "hidden" : ""}
					>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#home">Home</a>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#about">About</a>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#services">Services</a>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#skills">Skills</a>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#projects">Projects</a>
						<a className="link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium duration-500 mx-1" href="#contact">Contact</a>
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
				<div id="home">
					<Home />
				</div>		
				<div id="about">
					<About />
				</div>	
				<div id="services">
					<Services />
				</div>	
				<div id="skills">
					<Skills />
				</div>	
				<div id="projects">
					<Projects />
				</div>	
				<div id="contact">
					<ContactMe />
				</div>																	
				<MyFooter />
			</div>			
		</BrowserRouter>		
	);
}

export default App;