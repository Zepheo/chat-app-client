import { combineReducers } from 'redux';
import User from './User';

const rootReducer = combineReducers({User});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;