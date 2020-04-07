import React,{Component} from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { transform } from '@babel/core'

const {width,height}=Dimensions.get('window')

class AddToast extends Component{
    constructor(props){
        super(props)
        this.state={
            message:props.message,
            time:props.time,
            fadeAnim:new Animated.Value(0)
        }
    }
    moveAni=new Animated.Value(height/12)
    opacityAni=new Animated.Value(0)
    dismissHandler=null
    componentDidMount(){
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue:1,
                    duration:500
                }
            ),
            Animated.delay(4000),
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue:0,
                    duration:500
                }
            )
        ])
        .start((res)=>{
            this.props.delete&&this.props.delete(res)
        })
    }
    
    render(){
        let {fadeAnim}=this.state
        const opacity=fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[0,1]
        })
        const translateY=fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[20,0]
        })
        return(
            <Animated.Text
            style={[styles.textContainer,{transform:[{translateY:translateY}]}]}
            >
                {this.props.children}
            </Animated.Text>
            // <View style={styles.container}>
            //     <Animated.View style={[styles.textContainer,
            //     {bottom:this.moveAni,opacity:this.opacityAni}
            //     ]}>
            //         <Text style={styles.defaultText}>
            //         {this.state.message}
            //         </Text>
            //     </Animated.View>
            // </View>
        )
    }
}

let key=0
class ToastView extends Component{
    constructor(props){
        super(props)
        this.state={
            toastList:[]
        }
    }
    static add=(value)=>{
        var toastList=this.state.toastList
        var toastAddState=true
        toastList.forEach((item,index)=>{
            if (item.text===value) {
                toastAddState=false
            }
        })
        if (toastAddState) {
            toastList.push({
                text:value,
                value:<AddToast
                key={key}
                delete={this.deleteToast.bind(this)}
                >{value}</AddToast>
            })
            key++
            this.setState({toastList:toastList})
        }
    }
    deleteToast(){
        var toastList=this.state.toastList
        toastList.splice(0,1)
        this.setState({
            toastList:toastList
        })
    }
    render(){
        return(
            <View style={styles.container}>
                {this.state.toastList.map((item,index)=>{
                    return item.value
                })}
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        flexDirection:'row',
        justifyContent:'center'
    },
    textContainer:{
        backgroundColor:'rgba(0,0,0,.6)',
        borderRadius:8,
        padding:10,
        bottom:height/8,
        maxWidth:width/2,
        alignSelf:'flex-end'
    },
    defaultText:{
        color:'#fff',
        fontSize:14
    }
})

export default ToastView