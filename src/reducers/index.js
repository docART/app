import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import documents from './documents';
import insights from './insights';
import prototypes from './prototypes';

export default combineReducers({
    form: formReducer,
    router: routerReducer,
    documents,
    insights,
    prototypes
});
