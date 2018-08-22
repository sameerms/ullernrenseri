import { combineReducers } from 'redux';
import bestillinger from './bestillinger';
import visibilityFilter from './visibilityFilter';


export default combineReducers({
  bestillinger,
  visibilityFilter

})