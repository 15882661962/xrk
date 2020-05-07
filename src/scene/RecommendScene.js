import React from 'react'
import { 
    View, 
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    Image
} from 'react-native'

const {width,height}=Dimensions.get('window')
class RecommendScene extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Image style={styles.titleicon} source={require("../images/recommend/icon-poem.png")}/>
                    <Text style={styles.titletext}>诗词歌赋</Text>
                </View>
                <View style={{margin:15}}>
                    
                </View>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{

    },
    title:{
        padding:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    titleicon:{
        width:32,
        height:32
    },
    titletext:{
        marginLeft:5,
        color:'#666'
    },
})

export default RecommendScene