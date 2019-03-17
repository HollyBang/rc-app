import { combineReducers } from 'redux';
import constants from '../constants/constants';
import lang from '../languages/en/en'

const languageReducer = (state = lang, action) => {
    switch(action.type) {
        case constants.CHANGE_LANGUAGE_STORE: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
    return state;
};

const rootReducer = combineReducers({
    languages: languageReducer,
})
export default rootReducer;