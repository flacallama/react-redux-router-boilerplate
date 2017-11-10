import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import setCurId from './setCurId';


const rootReducer = combineReducers({
  form: formReducer,
  // setCurId

})

export default rootReducer;
