import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class RechargeBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  recharge = () => {
    this.props.onPress();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.balance}>0</Text>
        <Text style={styles.balanceDisc}>余额</Text>
        <TouchableOpacity style={styles.rechargebtn} onPress={this.recharge}>
          <Text style={styles.rechargeText}>充值</Text>
        </TouchableOpacity>
        <Text style={styles.tip}>*充值遇到问题可以拨打4008-***-***</Text>
      </View>
    );
  }
}

export default RechargeBalance;

var styles=StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 15,
  },
  balance: {
    fontSize: 24,
  },
  balanceDisc: {
    marginTop: 5,
    fontSize: 16,
    color: '#777',
  },
  rechargebtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3982f7',
    marginTop: 30,
  },
  rechargeText: {
    color: '#fff',
    fontSize: 16,
  },
  tip: {
    color: '#999',
    marginTop: 15,
  },
})