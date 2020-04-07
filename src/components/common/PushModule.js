import React,{Component} from 'react'
import {Text,StyleSheet,View,Button} from 'react-native'
import JPushModule from 'jpush-react-native'
class PushModule extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        JPushModule.initPush()
        JPushModule.getInfo(map=>{
            console.log(map)
        })
        //点击推送通知回调
        JPushModule.addReceiveOpenNotificationListener(map=>{
            console.log("进行一系列操作")
        })
        //接收推送通知回调
        JPushModule.addReceiveNotificationListener(message=>{
            console.log(message)
        })
    }
    //在应用内部进行消息的触发
    render(){
        return(
            <View style={styles.container}>
                <Button
                    title="点击推送"
                    onPress={()=>{
                        JPushModule.sendLocalNotification({
                            build:1,//通知样式
                            id:5,//通知的id，可用于取消通知
                            extra:{key1:'value1',key2:'value2'},//需要传递的参数
                            fireTime:new Date().getTime(),//通知触发的时间
                            badge:8,//本地推送触发后应用角标的badge值（iOS）
                            subtitle:'subtitle',//子标题（iOS）
                            title:'通知',
                            content:'您有未读消息'
                        })
                    }}
                />
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        paddingTop:20
    }
})