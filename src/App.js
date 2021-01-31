import React, { Component} from 'react';
//import CatComponent from './CatComponent';
//import MouseComponent from './MouseComponent';
import CatComponent from './CatComponent.js'
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'
//import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';



class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				
			</div>
		);
	}
}

export default App;
