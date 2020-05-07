import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Request from '../../utils/request';

import TimerButton from './TimerButton';
var reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNum: '15882661962',
      checkcode: '',
      password: '',
      TimerEnable: true,
    };
  }
  mobileChange(mobileNum) {
    this.setState({
      mobileNum: mobileNum,
      TimerEnable: reg.test(mobileNum),
    });
  }
  login() {
    this.props.updateLogin();
  }
  regist() {
    var url = 'api/user/Register';
    var params = {
      partnerId: 99,
      mobileNum: this.state.mobileNum,
      checkCode: this.state.checkcode,
      nickname: '',
      spreadId: '',
      password: this.state.password,
    };
    Request.get(url, params).then(
      json => {
        this.login();
      },
      json => {
        this.login();
      },
    );
  }
  getCode() {
    var url = 'api/tools/ShowCheckcode';
    var params = {
      userName: this.state.mobileNum,
      partnerId: 99,
      mobileNum: this.state.mobileNum,
    };
    Request.get(url, params).then(
      json => {
        alert('验证码已发送，请注意查看手机');
      },
      json => {
        alert('验证码已发送，请注意查看手机');
      },
    );
  }
  render() {
    return (
      <View style={styles.login}>
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/login/icon-email.png')}
          />
          <TextInput
            value={this.state.mobileNum}
            style={styles.inputText}
            placeholder="请输入手机号"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              this.mobileChange(text);
            }}
          />
        </View>
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/login/icon-code.png')}
          />
          <TextInput
            placeholder="请输入验证码"
            placeholderTextColor={'#fff'}
            style={styles.inputText}
            onChangeText={text => {
              this.setState({checkcode: text});
            }}
          />
          <TimerButton
            enable={this.state.TimerEnable}
            timerCount={60}
            onClick={shouldStartCounting => {
              this.getCode(shouldStartCounting);
            }}
          />
        </View>
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/login/icon-password.png')}
          />
          <TextInput
            style={styles.inputText}
            placeholder="请输入密码"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
        </View>
        <TouchableOpacity
          style={[styles.registerBtn, styles.btns]}
          onPress={this.regist.bind(this)}>
          <Text style={styles.btnText}>注册</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btns, styles.loginBtn]}
          onPress={this.login.bind(this)}>
          <Text style={styles.loginText}>已有账号，去登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  login: {
    width: width,
    height: height,
  },
  input: {
    width: '70%',
    left: '15%',
    marginTop: 0,
    marginBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  inputIcon: {
    width: (width * 60) / 750,
    resizeMode: 'contain',
  },
  inputText: {
    position: 'absolute',
    left: 50,
    right: 0,
    color: '#fff',
    height: 40,
    bottom: 10,
  },
  btns: {
    width: '70%',
    left: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
    marginTop: 30,
  },
  getcodeBtn: {
    position: 'absolute',
    height: 40,
    right: 0,
    bottom: 0,
  },
  getcodeText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 40,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  registerBtn: {
    borderColor: '#fff',
    borderWidth: 1,
  },
  loginBtn: {
    marginTop: 0,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Regist