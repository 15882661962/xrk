import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Switch
} from 'react-native';
 
const { width, height } = Dimensions.get("window");
 
class SetItem extends Component {
  constructor(props) {
    super(props)
 
    this.state = {
      switchValue:props.switchValue
    }
  }
 
  render() {
    return (
      <View style={styles.item}>
        <View>
          <Image
           style={styles.headericon}
              source={this.props.icon}
              />
          </View>
          <Text style={styles.itemTitle}>
          {this.props.title}
        </Text>
        <View style={styles.itemRight}>
          {this.props.isSwitch?(
            <Switch 
            onValueChange = {(value)=> {
              this.setState({switchValue: value})
            }}
            value={this.state.switchValue}
            //onTintColor={'#2e9dec'}
            style={styles.switch}
            />
          ):(
          <TouchableOpacity
            style={styles.itemTouch}
            onPress={()=>{
                this.props.onPress()
            }}
            >
            <Text style={[styles.itemContent,this.props.style]}>
              {this.props.content}
            </Text>
            <Image 
            source={require('../../images/set/icon-more.png')} 
            style={styles.itemMore}/>
          </TouchableOpacity>
          )}
          </View>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  item:{
      display:'flex',
      flexDirection:'row',
      height:60,
      alignItems:'center',
      borderBottomColor:'#eee',
      borderBottomWidth:1,
      width:width,
      backgroundColor:'#fff'
  },
  headericon:{
      width:30,
      height:30,
      marginLeft:15
  },
  itemTitle:{
      left:15,
      fontSize:16
  },
  itemRight:{
      position:'absolute',
      right:0,
      height:60,
      width:width,
      alignItems:'flex-end',
      justifyContent:'center'
  },
  switch:{
      right:15,
  },
  itemTouch:{
      width:width,
      justifyContent:'center',
      alignItems:'center',
      height:60
  },
  itemContent:{
      position:'absolute',
      right:40,
      color:'#777'
  },
  itemMore:{
      position:'absolute',
      right:15
  }
})

export default SetItem

