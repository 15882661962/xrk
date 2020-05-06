import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TabNavigator from '../router/TabNavigator';
import LoadingScene from '../scene/LoadingScene';
import LoginScene from '../scene/LoginScene';
import SetScene from '../scene/SetScene';
import AccountScene from '../scene/AccountScene';
import ScannerScene from '../scene/ScannerScene';
import VideoScene from '../scene/VideoScreen';
import SearchScene from '../scene/SearchScene';
import RechargeScene from '../scene/RechargeScene';
import GameScene from '../scene/GameScene';
import TaskScene from '../scene/TaskScene';
import PkScene from '../scene/PkScene';
import ReadScene from '../scene/ReadScene';
import PlanScene from '../scene/PlanScene';
import RecommendScene from '../scene/RecommendScene';
import GroupScene from '../scene/GroupScene';
import WebScene from '../scene/WebScene';

const scannerStackNavigator = createStackNavigator({
  Scanner: {
    screen: ScannerScene,
    navigationOptions: {
      headerTitle: '扫描二维码',
      headerStyle: {
        backgroundColor: '#0078e7',
      },
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity style={{width: 50}}>
          <Image
            source={require('../images/home/icon-back.png')}
            style={{left: 15}}
          />
        </TouchableOpacity>
      ),
    },
  },
});

//export default function configAppNavigator(isLoggedIn) {
//return createSwitchNavigator({
//     return createStackNavigator({
//         Loading:{
//             screen:LoadingScene,
//             navigationOptions:{
//                 headerShown:false
//             }
//         },
//     }, {
//       //initialRouteName: isLoggedIn ? 'Home' : 'Login'
//       initialRouteName:'SystemIntroduction'
//     });
// };

const Router = createStackNavigator(
  {
    Loading: {
      screen: LoadingScene,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScene,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: TabNavigator, //Main
      navigationOptions: {
        headerShown: false,
      },
    },
    Set: {
      screen: SetScene, //setStackNavigator
      navigationOptions: ({navigation}) => ({
        headerTitle: '设置',
        headerStyle: {
          backgroundColor: '#f5f5f5', //'#0078e7'
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Account: {
      screen: AccountScene, //accountStackNavigator
      navigationOptions: ({navigation}) => ({
        headerTitle: '帐号',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Scanner: {
      screen: ScannerScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '扫描二维码',
        headerStyle: {
          backgroundColor: '#000000', //'#0078e7'
        },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Video: {
      screen: VideoScene, //accountStackNavigator
      navigationOptions: ({navigation}) => ({
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#000',
          shadowColor: '#000',
        },
        headerBackTitle: '视频标题',
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Search: {
      screen: SearchScene,
      navigationOptions: {
        headerShown: false,
      },
    },
    Recharge: {
      screen: RechargeScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '充值帐户',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Game: {
      screen: GameScene,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
    Task: {
      screen: TaskScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '任务',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View>
            <TouchableOpacity
              style={{width: 50}}
              onPress={() => {
                alert('click');
              }}>
              <Image
                source={require('../images/task/header_task.png')}
                style={{width: 30, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        ),
      }),
    },
    Pk: {
      screen: PkScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'PK',
        headerStyle: {
          backgroundColor: '#eb7874',
        },
        headerTintColor: '#fff',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View>
            <TouchableOpacity
              style={{width: 50}}
              onPress={() => {
                alert('click');
              }}>
              <Image
                source={require('../images/pk/invite.png')}
                style={{width: 30, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>
        ),
      }),
    },
    Read: {
      screen: ReadScene,
      navigationOptions: ({navigation}) => ({}),
    },
    Plan: {
      screen: PlanScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '学习计划',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Recommend: {
      screen: RecommendScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '推荐词书',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Group: {
      screen: GroupScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '组队',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
    Web: {
      screen: WebScene,
      navigationOptions: ({navigation}) => ({
        headerTitle: '防疫登记',
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 50}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image 
              source={require('../images/home/icon-back-blue.png')}
              style={{left: 15}}
            />
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    initialRouteName: 'Loading',
  },
);

const RootStack = createAppContainer(Router);
export default RootStack;

var styles=StyleSheet.create({
  tabIcon: {
    width: 23,
    resizeMode: 'contain',
  },
});
