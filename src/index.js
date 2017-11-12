import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { listPrototypesRequested } from './actions';
import PrototypeWizard from './components/pages/PrototypeWizard';
import PrototypeList from './components/modules/PrototypeList';
import Navbar from './components/modules/Navbar';
import Footer from './components/modules/Footer';
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
                <Navbar/>
                <Route exact path="/" component={PrototypeList}/>
                <Route exact path="/prototype/form" component={PrototypeWizard}/>
                <Footer/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('process')
);

store.dispatch(listPrototypesRequested());
