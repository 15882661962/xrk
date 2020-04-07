import React,{Component} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Switch, TouchableOpacity } from 'react-native-gesture-handler'
class AccountExit extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <View style={styles.item}>
                <TouchableOpacity
                onPress={()=>this.props.exitLogin()}
                >
                <Text style={styles.text}>退出当前帐号</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#eee',
        borderBottomColor:'#eee',
        height:60
    },
    text:{
        fontSize:18,
        textAlign:'center',
        lineHeight:60,
        color:'red'
    }
})

export default AccountExit