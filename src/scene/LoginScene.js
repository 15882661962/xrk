import React from 'react'
import { 
    View, 
    Image,
    StyleSheet,
    Dimensions,
    Toast,
    ActivityIndicator,
    Text,
    Button
} from 'react-native'
import {connect} from 'react-redux'
import {
    USER_INFO,
    USER_TOKEN
} from '../redux/action/userActionTypes'

import Loading from '../components/common/Loading'

import Request from '../utils/request'
import Login from './Login/Login'
import Regist from './Login/Regist'
import LoginMode from './Login/LoginMode'
import SplashScreen from './Login/SplashScreen'

const {width,height}=Dimensions.get('window')

class LoginScene extends React.Component{
    constructor(props){
        super(props)
        this.state={
            login:true,
            splashScreen:false
        }
    }
    loginByAccount(userName,password){
        if (!userName || !password) {
            Toast.showToast('请您先完善登录信息！');
            return;
          }
        var url='api/user/Login'
        var params = {
            userName: userName,
            password: password,
            partnerId:99
        }
        Request.get(url,params).then((json)=>{
            var userInfo=json.Data
            this._getUserInfo(userInfo.UserName);
        },(json)=>{
            alert(json)
        })
    }
    loginByWechat(code){
        var url='api/wechat/GetWechatUserInfo'
        var params = {
            code: code,
            partnerId:99
        }
        Request.get(url,params).then((json)=>{
            var userInfo=json.Data
            this._getUserInfo(userInfo.unionid);
        },(json)=>{
            alert(json)
        })
    }
    _getUserInfo=(userName)=>{
        var url='api/user/FirstOrDefault'
        var params = {
            userName: userName,
            partnerId: 99
        }
        Request.get(url,params).then((json)=>{
            Loading.show();
            this.props.setToken(json)
            this.props.setUserInfo(json)
            this.props.navigation.replace('Home')
        },(json)=>{
            alert(json)
        })
    }
    updateLogin(){
        this.setState({
            login:!this.state.login
        })
    }
    updateSplash(){
        this.setState({
            splashScreen:!this.state.splashScreen
        })
    }
    render(){
        return(
            <View style={styles.login}>
                <Image style={styles.background} source={require('../images/login/background.jpg')}/>
                <View style={styles.logo}>
                    <Image source={require('../images/login/logo.png')} />
                </View>
                <LoginMode
                login={(code)=>{this.loginByWechat(code)}}
                />
                {this.state.login?
                <Login
                updateLogin={this.updateLogin.bind(this)}
                login={(userName,password)=>{this.loginByAccount(userName,password)}}
                navigation={this.props.navigation}/>
                :
                <Regist
                updateLogin={this.updateLogin.bind(this)}
                navigation={this.props.navigation}/>}
                {this.state.splashScreen?
                <SplashScreen
                updateSplash={this.updateSplash.bind(this)}
                />
                :<View/>}
                <Loading loadingtext={'正在登录…'}/>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    login:{
        width:width,
        height:height
    },  
    background:{
        width:width,
        height:height,
        resizeMode:'cover',
        position:'absolute',
        bottom:0
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:80
    }
})
const mapStateToProps = state => {
    return {
      userToken: state.UserReducer.userToken,
      userInfo: state.UserReducer.userInfo
    };
  };
  
  // Dispatch 方法
  const mapDispatchToProps = dispatch => {
    return {
      setToken: userToken => {
        dispatch({ type: USER_TOKEN, userToken: userToken });
      },
      setUserInfo: userInfo => {
        dispatch({ type: USER_INFO, userInfo: userInfo });
      }
    };
  };
  
  export default (LoginScene = connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginScene));
  
//export default LoginScene