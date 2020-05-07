import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as WeChat from 'react-native-wechat';
import ReadBook from './Read/ReadBook';
import ReadTab from './Read/ReadTab';
import ReadDirectory from './Read/ReadDirectory';
const appid = 'wx88ab517a21d1a79d';
class ReadScene extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    WeChat.registerApp(appid).then(function() {
      //return WeChat.openWXApp()
    });
  }

  wxShare() {
    WeChat.isWXAppInstalled()
      .then(isInstalled => {
        if (isInstalled) {
          WeChat.shareToSession({
            title: '微信好友测试的链接',
            description: '分享的标题内容',
            thumbImage: '分享的标题图片',
            type: 'news',
            webpageUrl: '分享的链接',
          }).catch(error => {
            Alert.alert(error.message);
          });
        } else {
          alert('请先安装微信');
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  static navigationOptions = ({navigation}) => {
    //const params = navigation.state.params || '考研必备';
    let navigationOptions = {
      headerTitle: '考研必备',
      headerStyle: {
        backgroundColor: '#f2f2f2',
        //shadowColor:'#f2f2f2'
      },
      headerTintColor: '#000',
      headerBackTitle: '考研必备',
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
              this.wxShare();
            }}>
            <Image
              source={require('../images/read/share.png')}
              style={{width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      ),
    };
    return navigationOptions;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ReadBook />
          <ReadTab />
          <ReadDirectory />
        </ScrollView>
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

export default ReadScene;
