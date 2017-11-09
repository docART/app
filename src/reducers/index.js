import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import prototypes from './prototypes';

export default combineReducers({
    form: formReducer,
    prototypes
});
