import { combineReducers } from 'redux';
import tasks from './tasks';

const rootReducer = combineReducers({ tasks }); /* returns reducer onject like tasks */

export default rootReducer;