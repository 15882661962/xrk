import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';

const {width, height} = Dimensions.get('window');
class StudyPlanScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.empty}>
          <Image
            style={styles.emptyimg}
            source={require('../images/plan/empty.png')}
          />
          <Text style={styles.emptytext}>暂无相关列表数据</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f9fc',
    width: width,
    height: height,
    alignItems: 'center',
  },
  empty: {
    marginTop: 150,
  },
  emptyimg: {
    width: 170,
    resizeMode: 'contain',
  },
  emptytext: {
    textAlign: 'center',
    color: '#777',
  },
});

export default StudyPlanScene