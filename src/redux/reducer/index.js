import {combineReducers} from 'redux'
import UserReducer from './userReducer'
import SettingReducer from './settingReducer'

const rootReducer=combineReducers({//将多个reducer聚合成一个rootReducer
    UserReducer,
    SettingReducer
})

export default rootReducer