import React from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import HomeSwiper from './Home/Homeswiper';
import GridList from './Home/Homegrid';
import HomeGame from './Home/HomeGame';
import HomeAd from './Home/HomeAd';
import HomeCourse from './Home/HomeCourse';
import HomeSign from './Home/HomeSign';

import HomeData from '../moke/HomeData.json';
class HomeScene extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.navigation.setParams({rightOnPress: this.rightBtnOnPress});
  }

  rightBtnOnPress = () => {
    HomeSign._openModal();
  };
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    let navigationOptions = {
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#f2f2f2',
        shadowColor: '#f2f2f2',
      },
      //headerTintColor:'#fff',
      headerLeft: () => {
        var date = new Date();
        var hour = date.getHours().toString();
        if (hour >= 8 && hour < 12) {
          var source = require('../images/home/hi-morning.png');
        } else if (hour >= 12 && hour < 18) {
          var source = require('../images/home/hi-noon.png');
        } else {
          var source = require('../images/home/hi-night.png');
        }
        return (
          <Image
            style={{width: 120, resizeMode: 'contain', left: 15}}
            source={source}
          />
        );
      },
      headerRight: () => (
        <Animated.View>
          <TouchableOpacity style={{width: 50}} onPress={params.rightOnPress}>
            <Image
              source={require('../images/home/new.png')}
              style={{width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </Animated.View>
      ),
    };
    return navigationOptions;
  };

  render() {
    var courseData = HomeData.result.course_data;
    var gridData = HomeData.result.grid_data;
    return (
      <View style={styles.container}>
        <ScrollView>
          <HomeSwiper />
          <HomeGame navigation={this.props.navigation} />
          <View>
            <GridList navigation={this.props.navigation} gridData={gridData} />
          </View>
          <HomeAd navigation={this.props.navigation} />
          <HomeCourse
            navigation={this.props.navigation}
            courseData={courseData}
          />
        </ScrollView>
        <HomeSign />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScene;
