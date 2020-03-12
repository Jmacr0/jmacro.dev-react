import React from 'react';
import { Welcome } from './components/Welcome';
import { Introduction } from './components/Introduction';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import AOS from 'aos';
import { Footer } from './components/Footer';

function App() {
	AOS.init();

	return (
		<React.Fragment>
			<Navigation />
			<Welcome />
			<Introduction />
			<Projects />
			<Contact />
			<Footer />
		</React.Fragment>
	);
}

export default App;
