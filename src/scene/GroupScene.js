import React,{Component} from 'react'
import { View, Text, ScrollView } from 'react-native'

import GroupList from '../scene/Group/GroupList'
import GroupData from '../moke/GroupData.json'
class GroupScene extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        var groupData=GroupData.result.group_data;
        var arr = []
        for (let i in groupData) {
            arr.push(groupData[i]);
        }
        return(
            <ScrollView>
                <View>
                    {arr.map((item, index) => {
                        return (
                            <GroupList 
                            key={item.index}
                            title={item.title}
                            desc={item.desc} 
                            color={item.color}
                            groupData={item.data}
                            navigation={this.props.navigation}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

export default GroupScene