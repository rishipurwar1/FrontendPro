import authReducer from './authReducer'
import challengeReducer from './challengeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  challenge: challengeReducer
});

export default rootReducer