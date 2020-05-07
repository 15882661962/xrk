import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
const {width,height}=Dimensions.get('window')
class HomeAd extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const {navigation}=this.props
        return(
            <View style={styles.container}>
                <TouchableOpacity
                 style={styles.ad}
                 onPress={()=>navigation.navigate("Web")}
                >
                    <View style={styles.iconbg}>
                        <Image style={styles.icon} source={require('../../images/home/ad.png')}/>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.title} numberOfLines={1}>日语开学，定制好课带你“飞”</Text>
                        <Text style={styles.content}>500+中外教名师等你选，助力扫清学……</Text>
                    </View>
                    <Image style={styles.more} source={require('../../images/home/icon-more.png')}/>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#f8f8f8',
        borderRadius:10,
    },
    ad:{
        width:width-30,
        padding:10,
        height:100,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    iconbg:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#4eabf5',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:70,
        resizeMode:'contain'
    },
    text:{
        marginLeft:10,
        width:width-140
    },
    title:{
        color:'#6f777a',
        fontSize:16,
        marginTop:5
    },
    content:{
        color:'#acb7c0',
        marginTop:15
    },
    more:{
        position:'absolute',
        right:10
    }
})

export default HomeAd