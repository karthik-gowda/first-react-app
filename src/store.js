import {createStore} from 'react-redux';
import rotateReducer from './reducers/rotateReducer';

function configureStore(state={rotate:true}){
    return createStore(rotateReducer,state);
}

export default configureStore;