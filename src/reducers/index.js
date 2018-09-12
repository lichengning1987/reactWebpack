import { combineReducers } from 'redux';

import tabListResult from './tabHeaderList'
import changeColorStyle from './addressBook'

const rootReducer = combineReducers({
  tabListResult,
  changeColorStyle
});

export default rootReducer;