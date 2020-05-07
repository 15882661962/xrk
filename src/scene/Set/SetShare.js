import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet, 
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as WeChat from 'react-native-wechat'
const {width,height}=Dimensions.get('window')
const appid='wx88ab517a21d1a79d'
class SetShare extends Component {
 
  constructor(props) {
    super(props)
 
    this.state = {
      securetyTipViewY: new Animated.Value(height),
    }
  }
 
  componentDidMount() {
    this._showTipView()
    WeChat.registerApp(appid)
    .then(function(){
        //return WeChat.openWXApp()
    })
  }

  _showTipView = () => {
    Animated.timing(
      this.state.securetyTipViewY,
      {
        toValue: height-280,
        duration: 500,
      }
    ).start();
  }
 
  _hiddenTipView = () => {
    Animated.timing(
      this.state.securetyTipViewY,
      {
        toValue: height,
        duration: 500,
      }).start();
  }
 
  closeShare(){
    Animated.timing(
        this.state.securetyTipViewY,
        {
            toValue:height,
            duration:300
        }
    ).start(
      this.props.closeShare()
    )
  }
  wxShare(){
      WeChat.isWXAppInstalled()
      .then((isInstalled)=>{
          if (isInstalled) {
              WeChat.shareToSession({
                  type:'imageUrl',
                  description:'',
                  imageUrl: 'http://xrk.goldflow.cn/app/images/share.png'
              })
              .catch((error)=>{
                  alert(error.message)
              })
          }else{
              alert('请先安装微信')
          }
      })
      .catch((error)=>{
        alert(error)
      })
  }

  pyqShare(){
      WeChat.isWXAppInstalled()
      .then((isInstalled) => {
          if (isInstalled) {
              WeChat.shareToTimeline({
                  title:'分享的标题',
                  description: '分享的标题内容',
                  thumbImage: '../../images/login/logo.png',
                  type: 'news',
                  webpageUrl: '分享的链接'
              })
                  .catch((error) => {
                      alert(error.message);
                  });
          } else {
              alert('请安装微信');
          }
      }).catch((error)=>{
        alert(error)
      });
  }

  wbShare(){
      alert('分享到微博')
  }

  qqShare(){
      alert('分享到QQ')
  }

  render() {
    return (
      <TouchableOpacity style={styles.share} onPress={this.closeShare.bind(this)}>
        <Animated.View  style={[{top: this.state.securetyTipViewY},styles.content]}>
        <View style={styles.sharePlat}>
            <View>
                <TouchableOpacity 
                style={styles.plats}
                onPress={()=>{
                    this.wxShare()
                }}
                >
                    <Image
                    source={require('../../images/set/share_wx.png')}
                    style={styles.platsimg}
                    />
                </TouchableOpacity>
                <Text style={styles.platstext}>微信</Text>
            </View>
            <View>
                <TouchableOpacity
                style={styles.plats}
                onPress={()=>{
                    this.pyqShare()
                }}
                >
                <Image
                source={require('../../images/set/share_pyq.png')}
                style={styles.platsimg}
                />
                </TouchableOpacity>
                <Text style={styles.platstext}>朋友圈</Text>
            </View>
            <View>
                <TouchableOpacity 
                style={styles.plats}
                onPress={()=>{
                    this.wbShare()
                }}
                >
                <Image
                source={require('../../images/set/share_wb.png')}
                style={styles.platsimg}
                />
                </TouchableOpacity>
                <Text style={styles.platstext}>微博</Text>
            </View>
            <View>
                  <TouchableOpacity 
                  style={styles.plats}
                  onPress={()=>{
                      this.qqShare()
                  }}
                  >
                  <Image
                  source={require('../../images/set/share_qq.png')}
                  style={styles.platsimg}
                  />
                  </TouchableOpacity>
                  <Text style={styles.platstext}>QQ</Text>
              </View>
          </View>
          <TouchableOpacity 
          style={styles.cancelbtn}
          onPress={this.closeShare.bind(this)}>
            <Text>取消</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

var styles=StyleSheet.create({
  share:{
      width:width,
      height:height-80,
      backgroundColor:'rgba(102,102,102,0.6)',
      position:'absolute'
  },
  content:{
      position:'absolute',
      width:width,
      height:200,
  },
  sharePlat:{
      justifyContent:'space-around',
      alignItems:'center',
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#eee',
      borderTopLeftRadius:8,
      borderTopRightRadius:8,
      padding:15
  },
  plats:{
      width:60,
      height:60,
      backgroundColor:'#eee',
      borderRadius:4,
      justifyContent:'center',
      alignItems:'center'
  },
  platsimg:{

  },
  platstext:{
      color:'#7f7f7f',
      textAlign:'center',
      marginTop:15
  },
  cancelbtn:{
      height:80,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      paddingBottom:25
  }
})

export default SetShare

