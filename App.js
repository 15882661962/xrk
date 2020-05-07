import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  DeviceEventEmitter,
  AppState,
  BackHandler,
  Platform,
  Alert,
  PixelRatio,
  Dimensions,
  StatusBar,
} from 'react-native';
//import {createAppContainer} from 'react-navigation'

//import configAppNavigator from './src/router/AppNavigator'
import AppNavigator from './src/router/AppNavigator';

import {Provider} from 'react-redux';
import configureStore from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
// import JPushModule from 'jpush-react-native';
import checkHotUpdate from './src/components/common/checkHotUpdate';
let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};

// type Props = {};

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px => PixelRatio.roundToNearestPixel(px);
let designSize = {width: 720, height: 1280}; //假设设计尺寸为：720*1280
let pxRatio = PixelRatio.get();
let win_width = Dimensions.get('window').width;
let win_height = Dimensions.get('window').height;
let width = dp2px(win_width);
let height = dp2px(win_height);
let design_scale = designSize.width / width;
height = height * design_scale;
let scale = 1 / pxRatio / design_scale;

const {store, persist} = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f4511E',
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillMount() {
    CodePush.disallowRestart(); //禁止重启
    checkHotUpdate(CodePush);
  }
  componentDidMount() {
    // JPushModule.getRegistrationID(registrationId => {
    //   alert(JSON.stringify(registrationId));
    // });
    // CodePush.allowRestart(); //加载完了，允许重启
    SplashScreen.hide();
    DeviceEventEmitter.addListener('theme_change', params => {
      this.setState({
        color: params,
      });
    });
    AppState.addEventListener('change', this._handleAppStateChange);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {};
  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'inactive') {
      console.log('挂起');
    } else if (nextAppState === 'active') {
      console.log('进入');
    } else {
      console.log('杀死');
    }
  };
  render() {
    //const AppNavigator=createAppContainer(configAppNavigator(this.state.isLoggedIn))
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <View style={styles.app}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <AppNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    //  width:width,
    //  height:height,
    //  transform: [{translateX: -width * .5}, {translateY: -height * .5}, {scale: scale}, {translateX: width * .5}, {translateY: height * .5}]
  },
});

App = CodePush(codePushOptions)(App);
export default App;
