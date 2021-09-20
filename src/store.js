import {applyMiddleware, createStore} from 'redux';
import rotateReducer from '../src/redux/reducers/rotateReducer';
import logger from 'redux-logger';

function configureStore(state={rotate:true}){
    return createStore(rotateReducer,state, applyMiddleware(logger));
}

export default configureStore;