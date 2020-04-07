import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity, 
    ProgressViewIOS,
    Image
} from 'react-native'

class HomeGame extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.game}>
                <View style={styles.bg}>
                    <Image 
                    source={require('../../images/home/gamebg.png')}
                    style={styles.gamebg}
                    />
                </View>
                <Text style={styles.title}>{gameData.title}</Text>
                <View style={styles.slider}>
                    <Text style={styles.level}>{gameData.level}/{gameData.allLevel}关</Text>
                    <ProgressViewIOS 
                    styleAttr="Horizontal" 
                    progress={gameData.level/gameData.allLevel}
                    trackTintColor='#4c90d3'
                    progressTintColor='#fff'/>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity
                     style={styles.startbtn}
                      onPress={()=>{
                          this.props.navigation.navigate("Game")
                      }}>
                        <Text style={styles.starttext}>开始闯关（0/1）</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     style={styles.reviewbtn}
                     onPress={()=>{
                         this.props.navigation.navigate("Game")
                    }}>
                        <Text style={styles.reviewtext}>复习</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var gameData={
    title:'英语初学词汇',
    level:'34',
    allLevel:'83'
}

var styles=StyleSheet.create({
    game:{
        backgroundColor:'#fff',//'#5aa9f8'
        borderRadius:10,
        margin:15,
        padding:15,
        shadowColor:'#666',
        shadowOffset:{ height:3, width:3 },
        shadowOpacity:.4
    },
    bg:{
        position:'absolute',
        borderRadius:10,
        left:0,
        bottom:0,
        top:0,
        right:0,
        opacity:0.8
    },
    gamebg:{
        borderRadius:10,
        width:'100%',
        height:'100%'
    },
    title:{
        color:'#5aa9f8',
        fontSize:24
    },
    slider:{
        paddingTop:20,
        paddingBottom:20
    },
    level:{
        color:'#5aa9f8',
        marginBottom:10
    },
    btn:{
        height:50
    },
    startbtn:{
        backgroundColor:'rgba(255,255,255,0.6)',
        borderRadius:20,
        height:40,
        borderRadius:20,
        width:'60%',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
    },
    starttext:{
        justifyContent:'center',
        alignItems:'center',
        color:'#5aa9f8',
        fontSize:20
    },
    reviewbtn:{
        backgroundColor:'rgba(90,169,248,0.6)',
        borderStyle:"solid",
        borderColor:'#fff',
        borderWidth:1,
        height:40,
        borderRadius:20,
        width:'35%',
        position:'absolute',
        right:0,
        justifyContent:'center',
        alignItems:'center',
    },
    reviewtext:{
        color:'#fff',
        fontSize:20
    }
})

export default HomeGame