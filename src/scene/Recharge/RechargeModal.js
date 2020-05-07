import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import * as WeChat from 'react-native-wechat';
import Request from '../../utils/request';
const appid = 'wx88ab517a21d1a79d';
const {width, height} = Dimensions.get('window');
_this = null;
class RechargeModal extends Component {
  constructor(props) {
    super(props);
    _this = this;
    this.state = {
      value: 0,
      open: false,
    };
  }
  componentDidMount() {
    WeChat.registerApp(appid).then(function() {
      //return WeChat.openWXApp()
    });
  }
  static openModal = () => {
    _this.setState({
      open: true,
    });
  };
  closeModal = () => {
    this.setState({
      open: false,
    });
  };
  wxPay = () => {
    WeChat.isWXAppInstalled().then(isInstalled => {
      if (isInstalled) {
        var url = 'api/pay/GetUnifiedOrder';
        var params = {
          userId: this.props.userInfo.UserId,
          partnerId: 99,
          total: '0.01',
        };
        Request.get(url, params).then(
          json => {
            var obj = JSON.parse(json);
            WeChat.pay({
              partnerId: obj.partnerid, // 商家向财付通申请的商家id
              prepayId: obj.prepayid, // 预支付订单
              timeStamp: obj.timestamp,
              package: obj.package,
              sign: obj.sign,
              nonceStr: obj.noncestr,
            })
              .then(requestJson => {
                alert(requestJson);
                if (requestJson.errCode == '0') {
                  //成功
                }
              })
              .catch(err => {
                alert(err);
              });
          },
          json => {
            alert(json);
          },
        );
      }
    });
  };
  render() {
    if (this.state.open) {
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={{margin: 20, fontSize: 18}}>选择充值金额</Text>
            <RadioForm style={styles.radioForm}>
              {radio_props.map((obj, i) => (
                <RadioButton
                  labelHorizontal={true}
                  key={i}
                  wrapStyle={{
                    width: (width - 60) / 2,
                  }}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.value === i}
                    onPress={value => {
                      this.setState({
                        value: value,
                      });
                    }}
                    borderWidth={1}
                    buttonInnerColor={'#2196f3'}
                    buttonOuterColor={
                      this.state.value === i ? '#2196f3' : '#777'
                    }
                    buttonSize={15}
                    buttonOuterSize={30}
                    buttonStyle={{
                      margin: 5,
                    }}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={value => {
                      this.setState({
                        value: value,
                      });
                    }}
                    labelStyle={{
                      fontSize: 18,
                      color: this.state.value === i ? '#2196f3' : '#777',
                    }}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              ))}
            </RadioForm>
            <TouchableOpacity style={styles.confirmbtn} onPress={this.wxPay}>
              <Text style={styles.confirmText}>确认</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closebtn} onPress={this.closeModal}>
              <Image
                source={require('../../images/login/close.png')}
                style={{width: 18, height: 18}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

var radio_props=[
  {
    label: '18个阳光',
    value: 0,
  },
  {
    label: '28个阳光',
    value: 1,
  },
  {
    label: '30个阳光',
    value: 2,
  },
  {
    label: '60个阳光',
    value: 3,
  },
  {
    label: '163个阳光',
    value: 4,
  },
  {
    label: '218个阳光',
    value: 5,
  },
];

var styles=StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    backgroundColor: '#00000060',
  },
  content: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 8,
  },
  radioForm: {
    width: width - 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
        
    height: 150,
  },
  confirmbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3982f7',
    marginTop: 30,
    marginBottom: 30,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
  closebtn: {
    backgroundColor: '#999',
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    right: -10,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
  },
});

export default RechargeModal;
