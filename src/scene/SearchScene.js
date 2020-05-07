import React,{Component} from 'react'
import { View,Text,Image, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions, Button } from 'react-native'
const {width,height}=Dimensions.get('window')
class SearchScene extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Image
                        style={styles.searchIcon}
                         source={require('../images/owner/iconsearch.png')}/>
                        <TextInput
                        style={styles.searchInput}
                        placeholder='搜索向日葵内容'
                        autoFocus={true}
                        />
                    </View>
                    <TouchableOpacity
                    style={styles.cancel}
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                    >
                        <Text style={styles.cancelText}>
                            取消
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                    title='热搜'
                    />
                </View>
                <FlatList
                style={styles.coursenode}
                keyExtractor={(item,index)=>index.toString()}
                data={RankData}
                numColumns ={2}
                renderItem={({item})=>
                <RankList 
                title={item.title} 
                content={item.content}
                key={item.index}
                num={item.index}
                />}
                />
                <TouchableOpacity
                 style={styles.more}
                 onPress={()=>{
                    alert('热搜')
                }}
                 >
                    <Text style={styles.moreText}>更多热搜内容 ></Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function RankList(props){
    var params={
        video:props.video,
        title:props.title
    }
    return(
        <TouchableOpacity
         style={styles.list}
         onPress={()=>{
             alert('热搜')
         }}
         >
            <Text style={[styles.listindex,props.num<4?{color:'#f19b39'}:{color:'#bfbfbf'}]}>
                {props.num}
            </Text>
            <View>
                <Text style={styles.listtitle}>{props.title}</Text>
                <Text style={styles.listcontent}>{props.content}</Text>
            </View>
        </TouchableOpacity>
    )
}

var RankData=[
    {
        index:1,
        title:'全国确诊20471例',
        content:'最新疫情数据'
    },
    {
        index:2,
        title:'湖北红会3领导被免职',
        content:'专职副会长被免'
    },
    {
        index:3,
        title:'《我的英雄学院》',
        content:'漫画作者疑似受辱'
    },
    {
        index:4,
        title:'《野狼disco》并………………',
        content:'剧情反转'
    },
    {
        index:5,
        title:'立春',
        content:'2020年是双立春'
    },
    {
        index:6,
        title:'火神山医院投入使用',
        content:'为中国速度点赞'
    },
    {
        index:7,
        title:'央行投放1.2万亿',
        content:'确保流动性充足供应'
    },
    {
        index:8,
        title:'武汉方舱医院',
        content:'连夜开辟'
    }
]
var styles=StyleSheet.create({
    header:{
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:15
    },
    search:{
        flex:1,
        borderRadius:6,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#f0f0f0',
        marginRight:20,
        height:30
    },
    searchIcon:{
        width:20,
        resizeMode:'contain',
        marginLeft:5
    },
    searchInput:{
        marginLeft:10
    },
    cancel:{

    },
    cancelText:{
        color:'#3982f7'
    },
    list:{
        width:width/2,
        margin:15,
        display:'flex',
        flexDirection:'row'
    },
    listindex:{
        color:'#bfbfbf',
        fontSize:18,
        marginRight:10
    },
    listtitle:{
        fontSize:14
    },
    listcontent:{
        color:'#999',
        paddingTop:10
    },
    more:{
        height:40,
        borderBottomColor:'#ddd',
        borderBottomWidth:1
    },
    moreText:{
        color:'#3982f7',
        fontSize:16,
        lineHeight:40,
        textAlign:'center'
    }
})

export default SearchScene