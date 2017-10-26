import {combineReducers} from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';
//import InitialState from '../../assets/data'


/*
 ### Combining the reducers using the redux module combineReducers();
 ### which is the passed as a parameter to the Store. The store could 
 ### only be accessed or modified through the Reducer and the Actions.
 ### This is the beauty of the React-redux combination. Gives the MVC 
 ### sugar to developers project as the Java developers do.
*/
const reducers = combineReducers({
    reducer1: reducer1,
    reducer2: reducer2
});

export default reducers;