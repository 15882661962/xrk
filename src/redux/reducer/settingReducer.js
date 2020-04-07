import {FIRST_INSTALL} from '../action/settingActionTypes'
import {handleActions, handleAction} from 'redux-actions'

const initialState={
    firstInstall:true
}
const handler={}

handler[FIRST_INSTALL]=(state,action)=>{
    const {firstInstall}=action
    return{
        ...state,
        firstInstall
    }
}
export default handleActions(handler,initialState)