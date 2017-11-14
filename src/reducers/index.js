import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import documents from './documents';
import prototypes from './prototypes';

export default combineReducers({
    form: formReducer,
    documents,
    prototypes
});
