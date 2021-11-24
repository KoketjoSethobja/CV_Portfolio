import './App.css';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Services from './components/Services';

function App() {
	return (
		<BrowserRouter>
			<Navbar />			
			<Home />
			<About />
			<Services />
			<Skills />
			<ContactMe />
		</BrowserRouter>		
	);
}

export default App;