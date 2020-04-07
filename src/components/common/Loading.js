import React,{Component} from 'react'
import {Dimensions, View, Text,StyleSheet, ActivityIndicator} from 'react-native'
const {width,height}=Dimensions.get('window')
_this=null
class Loading extends Component{
    constructor(props){
        super(props)
        _this=this
        this.state={
            show:false
        }
    }
    static show=()=>{
        _this.setState({show:true})
    }
    static hide=()=>{
        _this.setState({show:false})
    }
    render(){
        if (this.state.show) {
            return(
                <View style={styles.LoadingPage}>
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='#2e9dec'/>
                        <Text style={styles.loadingtext}>
                            {this.props.loadingtext}
                        </Text>
                    </View>
                </View>
            )
        }else{
            return <View/>
        }
    }
}

export default Loading

const styles=StyleSheet.create({
    LoadingPage:{
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center"
    },
    loading:{
        width:100,
        height:100,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7
    },
    loadingtext:{
        color:'#fff',
        marginTop:20,
        textAlign:'center'
    }
})