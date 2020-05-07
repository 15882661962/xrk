import React,{Component} from 'react'
import { View, Text,Image,StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
const {width,height}=Dimensions.get('window');
class GameScene extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require("../images/game/bg.png")}/>
                <View style={styles.header}>
                    <TouchableOpacity 
                    style={styles.backbtn}
                    onPress={()=>{this.props.navigation.goBack()}}
                    >
                        <Image source={require("../images/home/icon-back-blue.png")}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Image style={styles.startbtn} source={require("../images/game/startbtn.png")}/>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    bg:{
        width:width,
        height:height
    },
    header:{
        position:'absolute',
        top:40,
        width:width,
    },
    backbtn:{
        padding:15
    },
    btn:{
        alignItems:'center'
    },
    startbtn:{
        position:'absolute',
        bottom:70,
        width:162,
        resizeMode:'contain'
    }
})

export default GameScene