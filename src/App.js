import React, { Component } from 'react';
import './App.css';

import UserModel from './Models/User.js';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<Router>
				<Route path="/" exact component={(props => <UserModel/>)}></Route>
			</Router>
		);
	}
}

export default App;
