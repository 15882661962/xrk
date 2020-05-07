import React from 'react';
import {View, ScrollView} from 'react-native';

import XrkPlan from './Xrk/XrkPlan';
import XrkCourse from './Xrk/XrkCourse';
import XrkData from '../moke/XrkData.json';
class XrkScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var xrkData = XrkData.result.xrk_data;
    var arr = [];
    for (let i in xrkData) {
      arr.push(xrkData[i]);
    }
    return (
      <ScrollView>
        <View>
          <XrkPlan navigation={this.props.navigation} />
          {arr.map((item, index) => {
            return (
              <XrkCourse
                key={item.index}
                title={item.title}
                color={item.color}
                courseData={item.data}
                navigation={this.props.navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default XrkScene;
