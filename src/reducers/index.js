import counterreducer from './counter';
import loggedreducer from './islogged';
import  reducer  from "./reduser";
import{combineReducers} from 'redux'

const rootreducers = combineReducers({
    counterreducer,
    loggedreducer,
    reducer
})

export default rootreducers;
