import React,{Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'


class TaskItem extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <View>
                <TaskList taskData={this.props.taskData}/>
            </View>
        )
    }
}

class TaskList extends Component{
    constructor(props){
        super(props)
    }
    courseItem(){
        const {taskData}=this.props
        var itemArr=[]
        for(var i=0;i<taskData.length;i++){
            let data=taskData[i]
            itemArr.push(
                <View style={styles.container} key={data.key}>
                    <View style={styles.header}>
                        <Image style={styles.icon} source={{uri:data.img}}/>
                        <View style={{paddingLeft:8}}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.detail}>{data.detail}</Text>
                        </View>
                        <TouchableOpacity style={styles.morebtn}>
                            <Image source={require('../../images/home/icon-more.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.reward}>
                            <Text>{data.reward}</Text>
                        </View>
                        <TouchableOpacity style={styles.taskbtn}>
                            <Text style={styles.tasktext}>领任务</Text>
                        </TouchableOpacity>
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
    container:{
        backgroundColor:'#fff',
        borderRadius:8,
        margin:8,
        padding:15,
        marginBottom:0
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom:10,
    },
    icon:{
        width:40,
        height:40,
    },
    title:{
        fontSize:16
    },
    detail:{
        color:'#777',
        paddingTop:5
    },
    morebtn:{
        position:'absolute',
        right:6
    },
    content:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:15,
        borderTopColor:'#ddd',
        borderTopWidth:1,
        marginTop:5
    },
    taskbtn:{
        borderRadius:25,
        borderWidth:1,
        borderColor:'#0099fe',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:90
    },
    tasktext:{
        color:'#0099fe'
    },
})

export default TaskItem