import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//add reducers here
const pitcherList = (state = [], action) => {
    console.log('pitcherList reducer.', action);

    if (action.type === 'PITCHERLIST_ADD') {
        console.log(`pitcher to add is: ${action.payload}`);
        return [...state, action.payload];
    }
    return state;
}

const catcherList = (state = [], action) => {
    console.log('catcherList reducer.', action);

    if (action.type === 'CATCHERLIST_ADD') {
        console.log(`catcher to add is: ${action.payload}`);
        return [...state, action.payload];
    }
    return state;
}

//create store here
const storeInstance = createStore (
    combineReducers(
        {pitcherList, catcherList}
    ),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* wrap Provider around App */}
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
