import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore, { history } from '../store/ConfigureStore';
import RootContainer from './RootContainer';
// import './styles/styles.css';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
	      	<RootContainer />
	    	</ConnectedRouter>
	  	</Provider>
		)
	}
}

export default App;
