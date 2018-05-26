import { combineReducers } from 'redux';
import {artists} from './artistReducer';

const rootReducers = combineReducers({artists});

export default rootReducers;