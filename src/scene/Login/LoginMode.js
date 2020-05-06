import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as WeChat from 'react-native-wechat';
const {width, height} = Dimensions.get('window');
const appid = 'wx88ab517a21d1a79d';
const wxurl = 'https://api.weixin.qq.com/sns/';
class LoginMode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    WeChat.registerApp(appid).then(function() {
      //return WeChat.openWXApp()
    });
  }

  wxLogin() {
    WeChat.sendAuthRequest('snsapi_userinfo', 'ares') //获取用户个人信息
      .then(response => {
        //getAccessToken(response.code)
        //login
        this.props.login(response.code);
      })
      .catch(error => {
        let errCode = Number(error.code); //0同意，-4拒绝，-2取消
        if (errorCode === -2) {
          dispatch(showDropdownAlert('error', '提示', '已取消授权登录'));
        } else {
          dispatch(showDropdownAlert('error', '提示', WechatAuthFailed));
        }
      });
  }
  getAccessToken(responseCode) {
    var AccessTokenUrl =
      wxurl +
      'oauth2/access_token?appid=' +
      appid +
      '&secret=' +
      secretID +
      '&code=' +
      responseCode +
      '&grant_type=authorization_code';
    fetch(AccessTokenUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(responseData => {
        this.getRefreshToken(responseData.refresh_token);
      })
      .catch(error => {
        if (error) {
          alert('error=' + error);
        }
      });
  }
  getRefreshToken(refreshtoken) {
    var getRefreshTokenUrl =
      wxurl +
      'oauth2/refresh_token?appid=' +
      appid +
      '&grant_type=refresh_token&refresh_token=' +
      refreshtoken;
    fetch(getRefreshTokenUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(responseData => {
        this.getUserInfo(responseData);
      })
      .catch(error => {
        if (error) {
          alert('error=' + error);
        }
      });
  }
  getUserInfo(responseData) {
    var getUserInfoUrl =
      wxurl +
      'userinfo?access_token=' +
      responseData.access_token +
      '&openid=' +
      responseData.openid;
    fetch(getUserInfoUrl, {
      method: 'GET',
      timeout: 2000,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(responseData => {
        alert('responseData=' + responseData);
      })
      .catch(error => {
        if (error) {
          alert('error=' + error);
        }
      });
  }
  installWechat() {
    var getWeChatUrl =
      'itms-apps://itunes.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124?mt=8';
    Linking.canOpenURL(getWeChatUrl)
      .then(supported => {
        if (!supported) {
          Alert.alert('提示', 'cant handle url:' + url, [
            {text: 'OK', onPress: () => {}},
          ]);
        } else {
          return Linking.openURL(getWeChatUrl);
        }
      })
      .catch(err => {
        Alert.alert('提示', 'An error occured:' + err, [
          {text: 'OK', onPress: () => {}},
        ]);
      });
  }
  qqLogin() {
    alert('请先安装QQ');
  }
  wbLogin() {
    alert('请先安装微博');
  }
  render() {
    return (
      <View style={styles.loginMode}>
        <Text style={styles.title}>其他登录方式</Text>
        <View style={styles.modes}>
          <TouchableOpacity
            style={[styles.mode, {backgroundColor: '#50c84d'}]}
            onPress={() => {
              this.wxLogin();
            }}>
            <Image
              style={styles.icon}
              source={require('../../images/login/login_weixin.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.mode, {backgroundColor: '#6facf0'}]}
            onPress={() => {
              this.qqLogin();
            }}>
            <Image
              style={styles.icon}
              source={require('../../images/login/login_qq.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.mode, {backgroundColor: '#f06950'}]}
            onPress={() => {
              this.wbLogin();
            }}>
            <Image
              style={styles.icon}
              source={require('../../images/login/login_weibo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  loginMode: {
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
  modes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 40,
    marginTop: 20,
  },
  mode: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default LoginMode