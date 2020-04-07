import React,{Component} from 'react'
import { View, Modal,Text,Dimensions, Animated, BackHandler,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const {width,height}=Dimensions.get('window')

class Popup extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            popupHeight:250,
            animatedValue:new Animated.Value(0),
            cancelText:'取消',
            confirmText:'确定',
            title:'请选择',
            isHeader:true
        }
        this.showAnimated=Animated.timing(
            this.state.animatedValue,
            {
                toValue:1,
                duration:300
            }
        )
        this.hideAnimated=Animated.timing(
            this.state.animatedValue,
            {
                toValue:0,
                duration:300
            }
        )
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress)
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this.onBackPress)
    }

    onBackPress=()=>{
        if (this.state.show) {
            this.popupHeight()
            return true
        }else{
            return false
        }
    }

    popupHeight=()=>{
        this.state.animatedValue.setValue(1)
        this.hideAnimated.start(()=>{
            this.setState({show:false})
        })
    }

    onConfirm(){
        this.state.callback&&this.state.callback({confirm:true})
    }

    static show=(options,callback)=>{
        var cancelText=options.cancelText||'取消'
        var confirmText=options.confirmText||'确定'
        var title=options.title||'请选择'
        var isHeader=options.isHeader===false?false:true
        var popupHeight=options.popupHeight||250
        var content=options.content||(<Text>无内容</Text>)
        this.setState({
            show:true,
            cancelText,
            confirmText,
            title,
            isHeader,
            popupHeight,
            content,
            callback
        })
        this.state.animatedValue.setValue(0)
        this.showAnimated.start()
    }
    static hide=()=>{
        this.popupHeight()
    }

    render(){
        if (this.state.show) {
            const translateY=this.state.animatedValue.interpolate({
                inputRange:[0,1],
                outputRange:[this.state.isHeader?this.state.popupHeight+50:this.state.popupHeight,0]
            })
            return(
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.PopupPage}
                    activeOpacity={1}
                    onPress={this.popupHeight}
                    >
                        <View></View>
                    </TouchableOpacity>
                    <Animated.View 
                    style={{position: "absolute",
                            left: 0,
                            bottom: 0,
                            backgroundColor: "#FFF",
                            width: width,
                            height: this.state.popupHeight + 50,
                            transform: [
                                { translateY: translateY },
                            ]}}>
                        {this.header()}
                        {this.state.content}
                    </Animated.View>
                </View>
            )
        }else{
            return <View/>
        }
    }
}

header=()=>{
    if (this.state.isHeader) {
        return(
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                borderColor:'#eee',
                borderBottomWidth:1,
                height:50
            }}>
                <TouchableOpacity
                onPress={this.popupHeight}>
                    <Text style={{
                        color:'#999',
                        paddingLeft:15,
                        paddingRight:15,
                        height:50,
                        lineHeight:50
                    }}>
                        {this.state.cancelText}
                    </Text>
                </TouchableOpacity>
                <Text
                style={{
                    color:'#333',
                    fontSize:16
                }}
                >{this.state.title}</Text>
                <TouchableOpacity
                onPress={this.onConfirm.bind(this)}
                >
                    <Text style={{
                        color:'#333',
                        paddingLeft:15,
                        paddingRight:15,
                        height:50,
                        lineHeight:50
                    }}>
                    {this.state.confirmText}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        position: "absolute",
        left: 0,
        top: 0,
        width: width,
        height: height,
    },
    content:{

    },
    PopupPage: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Popup