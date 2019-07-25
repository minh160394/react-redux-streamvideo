import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mystore = createStore(
    reducers,
    composeEnhancer(applyMiddleware(reduxThunk))
    );

ReactDOM.render(
    <Provider store={mystore}>
        <App />
    </Provider>, document.getElementById('root'));
