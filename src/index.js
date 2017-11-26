import createHistory from 'history/createBrowserHistory';
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { listPrototypesRequested } from './actions';
import DocumentEditor from './components/pages/DocumentEditor';
import PrototypeWizard from './components/pages/PrototypeWizard';
import PrototypeRecipe from './components/pages/PrototypeRecipe';
import PrototypeInsights from './components/pages/PrototypeInsights';
import PrototypeList from './components/pages/PrototypeList';
import PrototypeQuickRecipe from './components/pages/PrototypeQuickRecipe';
import Footer from './components/modules/Footer';
import reducers from './reducers';
import sagas from './sagas';

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
                <Route exact path="/prototypes/:name" component={PrototypeQuickRecipe}/>
                <Route exact path="/prototypes/:name/long" component={PrototypeRecipe}/>
                <Route exact path="/prototypes/:name/insights" component={PrototypeInsights} />
                <Route exact path="/prototypes/:name/recipes/:section/:file?" component={DocumentEditor} />
                <Route exact path="/prototype/form" component={PrototypeWizard}/>
                <Footer/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('process')
);

store.dispatch(listPrototypesRequested());
