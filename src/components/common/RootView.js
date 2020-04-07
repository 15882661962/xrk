import React,{Component} from 'react'
import { AppRegistry, View,StyleSheet } from 'react-native'
import Loading from './Loading'
import Toast from './Toast'
import Popup from './Popup'
const originRegister=AppRegistry.registerComponent
AppRegistry.registerComponent=(appKey,component)=>{
    return originRegister(appKey,function(){
        const OriginAppComponent=component();
        return class extends Component{
            render(){
                return(
                    <View style={styles.container}>
                        <OriginAppComponent/>
                        <Popup/>
                        <Toast/>
                        <Loading/>
                    </View>
                )
            }
        }
    })
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        position:'relative'
    }
})