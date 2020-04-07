import {USER_TOKEN,USER_INFO} from '../action/userActionTypes'
import {handleActions} from 'redux-actions'

const initialState={
    userToken:'',
    userInfo:{}
}
const handler={}

handler[USER_TOKEN]=(state,action)=>{
    const {userToken} =action
    return{
        ...state,
        userToken
    }
}

handler[USER_INFO]=(state,action)=>{
    const {userInfo}=action
    return{
        ...state,
        userInfo
    }
}

export default handleActions(handler,initialState)