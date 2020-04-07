import React,{Component} from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'
import {USER_INFO,USER_TOKEN} from '../redux/action/userActionTypes'
import RechargeBalance from '../scene/Recharge/RechargeBalance'
import RechargeRecord from '../scene/Recharge/RechargeRecord'
import RechargeModal from '../scene/Recharge/RechargeModal'
class RechargeScene extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    recharge=()=>{
        RechargeModal.openModal()
    }
    render(){
        const {userInfo}=this.props
        return(
            <View>
                <RechargeBalance
                onPress={this.recharge}
                />
                <RechargeRecord/>
                <RechargeModal
                userInfo={userInfo}
                />
            </View>
        )
    }
}

const mapStateToProps=state=>{
    return{
        userInfo:state.UserReducer.userInfo,
        userToken:state.UserReducer.userToken
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setToken:userToken=>{
            dispatch({type:USER_TOKEN,userToken:userToken})
        },
        setUserInfo:userInfo=>{
            dispatch({type:USER_INFO,userInfo:userInfo})
        }
    }
}

export default (RechargeScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(RechargeScene));
//export default RechargeScene