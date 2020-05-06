import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class RechargeRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordData: null,
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>交易记录</Text>
        <View style={styles.container}>
          {this.state.recordData == null ? (
            <Text style={{color: '#999'}}>还没有交易记录</Text>
          ) : (
            <Text>打印交易记录</Text>
          )}
        </View>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  title: {
    color: '#777',
    lineHeight: 40,
    paddingLeft: 15,
  },
  container: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
});

export default RechargeRecord