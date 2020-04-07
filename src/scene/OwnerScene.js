import React from 'react'
import { 
    View, ScrollView
} from 'react-native'
import {connect} from 'react-redux'
import {USER_INFO,USER_TOKEN} from '../redux/action/userActionTypes'

import OwnerHeader from './Owner/OwnerHeader'
import OwnerGrid from './Owner/OwnerGrid'
import OwnerRecommend from './Owner/OwnerRecommend'

import OwnerData from '../moke/OwnerData.json'

class OwnerScene extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{}
        }
    }
    UNSAFE_componentDidMount(){
        
    }
    render(){
        var arr = []
        var ownerData=OwnerData.result.owner_data
        var arr = []
        for (let i in ownerData) {
            arr.push(ownerData[i]);
        }
        return(
            <ScrollView>
                <View>
                    <OwnerHeader 
                    navigation={this.props.navigation}
                    userInfo={this.props.userInfo}
                    />
                    <OwnerGrid/>
                    {arr.map((item, index) => {
                            return (
                                <OwnerRecommend 
                                key={item.index}
                                typeClass={item.typeClass}
                                icon={item.icon}
                                title={item.title} 
                                isMore={item.isMore}
                                more={item.more}
                                data={item.data}/>
                            );
                    })}
                </View>
            </ScrollView>
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

export default (OwnerScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(OwnerScene));

//export default OwnerScene