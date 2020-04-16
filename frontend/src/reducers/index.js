import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import entitiesReducer from "./entitiesReducer";
import journalReduced from "./journalReduced";
import scheduleReducer from "./scheduleReducer";

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    entities: entitiesReducer,
    journal: journalReduced,
    schedule: scheduleReducer
});