import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {Provider} from 'react-redux';
import configureStore from './Store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>, 
document.getElementById('root'));
