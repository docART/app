import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { listPrototypesRequested } from './actions';
import MainView from './components/pages/MainView';
import SecondView from './components/pages/SecondView';
import SharePrototypeSecondForm from './components/modules/SharePrototypeSecondForm';
import reducer from './reducers';
import sagas from './sagas';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/prototype/1" component={MainView}/>
                <Route path="/prototype/2" component={SecondView} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(listPrototypesRequested());
