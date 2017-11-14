import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { listPrototypesRequested } from './actions';
import PrototypeWizard from './components/pages/PrototypeWizard';
import PrototypeList from './components/modules/PrototypeList';
import PrototypeEditor from './components/modules/PrototypeEditor';
import Footer from './components/modules/Footer';
import reducers from './reducers';
import sagas from './sagas';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(sagas);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={PrototypeList}/>
                <Route exact path="/prototypes/:name" component={PrototypeEditor}/>
                <Route exact path="/prototypes/:name/quick" component={PrototypeQuickRecipe}/>
                <Route exact path="/prototype/form" component={PrototypeWizard}/>
                <Footer/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('process')
);

store.dispatch(listPrototypesRequested());
