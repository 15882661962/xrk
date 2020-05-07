import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'
const width=Dimensions.get('window').width;
let gridData=[
    {
        icon:require('../../images/owner/grid1.png'),
        title:'在线问答',
        color:'#f2a63a',
        key:'1'
    },
    {
        icon:require('../../images/owner/grid2.png'),
        title:'家校圈',
        color:'#60b6f7',
        key:'2'
    },
    {
        icon:require('../../images/owner/grid3.png'),
        title:'微课堂',
        color:'#4396f7',
        key:'3'
    },
    {
        icon:require('../../images/owner/grid4.png'),
        title:'最新活动',
        color:'#ef8f47',
        key:'4'
    },
    {
        icon:require('../../images/owner/grid6.png'),
        title:'电子书包',
        color:'#5ecdd0',
        key:'5'
    },
    {
        icon:require('../../images/owner/grid7.png'),
        title:'付费咨询',
        color:'#5ecdd0',
        key:'7'
    },
    {
        icon:require('../../images/owner/grid8.png'),
        title:'我的书架',
        color:'#e97654',
        key:'8'
    },
    {
        icon:require('../../images/owner/grid5.png'),
        title:'更多服务',
        color:'#e97654',
        key:'6'
    }
]

class Grid extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity style={styles.grid} onPress={()=>{
                alert('click')
            }}>
                <View style={[styles.gridBox,{backgroundColor:'#fff'}]}>
                    <Image style={styles.gridImg} source={this.props.source}/>
                </View>
                <Text style={styles.gridText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

class OwnerGrid extends React.Component{
    render(){
        return(
            <FlatList 
                data={gridData}
                numColumns ={4}
                renderItem={({item})=>
                <Grid 
                title={item.title} 
                key={item.key} 
                source={item.icon}
                color={item.color}/>}
            />
        )
    }
}

const styles=StyleSheet.create({
    grid:{
        paddingTop:10,
        paddingBottom:10,
        width:width/4,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    gridBox:{
        width:60,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    gridImg:{
        width:width*60/750,
        resizeMode:'contain'
    },
    gridText:{
        textAlign:'center',
        fontSize:14,
        marginTop:5,
        color:'#666'
    }
})

export default OwnerGrid