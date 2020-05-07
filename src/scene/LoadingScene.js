import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {connect} from 'react-redux';
import {USER_INFO, USER_TOKEN} from '../redux/action/userActionTypes';

import Ad from '../scene/Login/SplashScreen';
const {width, height} = Dimensions.get('window');
global.jwtToken = '';
global.userInfo = {};

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: true,
    };
  }
  componentDidMount() {
    SplashScreen.hide(); //隐藏启动屏
    if (this.state.ad) {
      if (this.props.userToken && this.props.userInfo) {
        jwtToken = this.props.userToken;
        userInfo = this.props.userInfo;
        this.props.navigation.replace('Home');
      } else {
        this.props.navigation.replace('Login');
      }
    }
  }
  render() {
    return (
      <View style={styles.login}>
        <Image
          style={styles.background}
          source={require('../images/login/background.jpg')}
        />
        <View style={styles.logo}>
          <Image source={require('../images/login/logo.png')} />
        </View>
        <Ad />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userToken: state.UserReducer.userToken,
    userInfo: state.UserReducer.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: userToken => {
      dispatchEvent({type: USER_TOKEN, userToken: userToken});
    },
    setUserInfo: userInfo => {
      dispatchEvent({
        type: USER_INFO,
        userInfo: userInfo,
      });
    },
  };
};
var styles = StyleSheet.create({
  login: {
    width: width,
    height: height,
  },
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
});
//export default Loading
export default (Loading = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading))