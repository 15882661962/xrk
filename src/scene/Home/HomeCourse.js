import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Dimensions} from 'react-native'
import { element } from 'prop-types'
const {width,height}=Dimensions.get('window')
class HomeCourse extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View style={styles.course}>
                <CourseTitle/>
                <View>
                    <CourseList
                     courseData={this.props.courseData}
                     navigation={this.props.navigation}
                     />
                </View>
                <CourseBottom/>
            </View>
        )
    }
}

function CourseTitle(){
  return(
    <View style={styles.header}>
      <Text style={styles.title}>推荐故事</Text>
      <TouchableOpacity style={styles.more}>
        <Text style={styles.moretext}>查看全部</Text>
        <Image source={require('../../images/home/icon-more.png')}/>
      </TouchableOpacity>
    </View>
  )
}

function CourseBottom(){
    return(
        <TouchableOpacity style={styles.bottom}>
            <Text style={styles.bottomtext}>更多故事推荐 ></Text>
        </TouchableOpacity>
    )
}

class CourseList extends React.Component{
    constructor(props){
        super(props)
    }
    courseItem(){
        var itemArr=[]
        for(var i=0;i<this.props.courseData.length;i++){
            let data=this.props.courseData[i]
            itemArr.push(
                <View style={styles.listnode} key={data.key}>
                    <View style={styles.imgnode}>
                        <View style={styles.imgpic}>
                            <Image style={styles.imgsource} source={{uri:data.img}}/>
                        </View>
                        <View style={styles.imgicon}>
                            <Text style={styles.icontext}>{data.icon}</Text>
                        </View>
                    </View>
                    <View style={styles.textnode}>
                        <View>
                            <Text style={styles.texttitle}>{data.title}</Text>
                            <Text style={styles.textcontent}>{data.content}</Text>
                        </View>
                        <View style={styles.btnnode}>
                            <Text style={styles.online}>{data.course}|{data.online}w人正在读</Text>
                            <TouchableOpacity style={styles.btn}
                             onPress={()=>{
                                 this.props.navigation.navigate('Read')
                             }}
                            >
                                <Text style={styles.btntext}>去阅读</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        return itemArr
    }
    render(){
        return(
            <View>
                {this.courseItem()}
            </View>
        )
    }
}

var styles=StyleSheet.create({
    course:{
        backgroundColor:'#f8f8f8',
        margin:15,
        borderRadius:10,
        padding:15
    },
    header:{
        borderBottomWidth:2,
        borderBottomColor:'#eee',
        borderStyle:"solid",
        paddingBottom:5,
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize:20,
        color:'#3e3e3e',
        lineHeight:40
    },
    more:{
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    moretext:{
        color:'#6f767a',
        marginRight:10
    },
    listnode:{
        height:130,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    imgnode:{
        width:100,
        height:130
    },
    imgpic:{
        position:'absolute',
        width:100,
        height:130
    },
    imgsource:{
        position:'absolute',
        left:0,
        top:-4,
        width:90,
        height:130,
        resizeMode:'contain'
    },
    imgicon:{
        width:20,
        height:20,
        backgroundColor:'#ec675e',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute'
    },
    icontext:{
        color:'#fff'
    }, 
    textnode:{
        width:width-145,
        height:130,
        paddingTop:10,
    },
    texttitle:{
        color:'#1e2330',
        fontSize:16
    },
    textcontent:{
        color:'#999999',
        fontSize:12,
        lineHeight:30
    },
    btnnode:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20
    },
    online:{
        fontSize:12,
        color:'#999999'
    },
    btn:{
        backgroundColor:'#469df8',
        width:90,
        height:30,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        right:20
    },
    btntext:{
        color:'#fff',
        fontSize:14
    },
    bottom:{
        borderTopColor:'#eee',
        borderTopWidth:2
    },
    bottomtext:{
        color:'#469df8',
        textAlign:'center',
        lineHeight:30,
        paddingTop:10
    }
})

export default HomeCourse