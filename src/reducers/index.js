import { combineReducers } from "redux";

//Reducers
import settingsReducer from './settingsReducer';
import vacationInfoReducer from './vacationInfoReducer';
import vacationTimeReducer from './vacationTimeReducer';
import companySettingsReducer from './companySettingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  companySettings: companySettingsReducer,
  vacationInfo: vacationInfoReducer,
  vacationTime: vacationTimeReducer,
})

export default rootReducer;