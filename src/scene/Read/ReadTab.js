import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
class ReadTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.check, styles.checkon]}>
          <Text style={[styles.text, styles.texton]}>目录</Text>
        </View>
        <View style={styles.check}>
          <Text style={styles.text}>简介</Text>
        </View>
        <View style={styles.check}>
          <Text style={styles.text}>相关</Text>
        </View>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
    marginTop: 0,
  },
  check: {
    borderBottomWidth: 1,
    borderBottomColor: '#666',
    padding: 10,
    width: (width - 30) / 3,
  },
  checkon: {
    borderBottomWidth: 2,
    borderBottomColor: '#6ccd44',
  },
  text: {
    color: '#666',
    textAlign: 'center',
  },
  texton: {
    color: '#6ccd44',
  },
});

export default ReadTab;
