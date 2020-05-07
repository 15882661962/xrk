import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {USER_INFO, USER_TOKEN} from '../redux/action/userActionTypes';

import SetItem from './Set/SetItem';
import SetShare from './Set/SetShare';

class SetScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      isShare: false,
    };
  }

  closeShare() {
    this.setState({
      isShare: false,
    });
  }
  menuClick = () => {
    alert('click');
  };
  render() {
    const {userInfo} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <SetItem
              icon={require('../images/set/icon-account.png')}
              title={'帐号'}
              content={userInfo.NickName}
              isSwitch={false}
              onPress={() => {
                this.props.navigation.navigate('Account');
              }}
            />
            <SetItem
              icon={require('../images/set/icon-recharge.png')}
              title={'充值账户'}
              content={userInfo.Score / 100}
              isSwitch={false}
              onPress={() => {
                this.props.navigation.navigate('Recharge');
              }}
            />
            <SetItem
              icon={require('../images/set/icon-cash.png')}
              title={'提现账户'}
              content={'¥0.00'}
              isSwitch={false}
              style={{color: '#53adf0'}}
              onPress={this.menuClick}
            />
          </View>
          <View style={styles.topDistance}>
            <SetItem
              icon={require('../images/set/icon-effect.png')}
              title={'自动发音次数'}
              content={'一次'}
              isSwitch={false}
              onPress={this.menuClick}
            />
            <SetItem
              icon={require('../images/set/icon-type.png')}
              title={'英语发音类型'}
              content={'一次'}
              isSwitch={false}
              onPress={this.menuClick}
            />
            <SetItem
              icon={require('../images/set/icon-feedback.png')}
              title={'帮助与反馈'}
              content={''}
              isSwitch={false}
              onPress={this.menuClick}
            />
            <SetItem
              icon={require('../images/set/icon-share.png')}
              title={'推荐给朋友'}
              content={''}
              isSwitch={false}
              onPress={() => {
                this.setState({isShare: true});
              }}
            />
          </View>
          <View style={styles.topDistance}>
            <SetItem
              icon={require('../images/set/icon-voice.png')}
              title={'音效'}
              switchValue={false}
              isSwitch={true}
            />
            <SetItem
              icon={require('../images/set/icon-night.png')}
              title={'被窝模式'}
              switchValue={true}
              isSwitch={true}
            />
            <SetItem
              icon={require('../images/set/icon-remind.png')}
              title={'提醒通知'}
              switchValue={false}
              isSwitch={true}
            />
            <SetItem
              icon={require('../images/set/icon-pk.png')}
              title={'允许陌生人pk我'}
              switchValue={true}
              isSwitch={true}
            />
          </View>
        </ScrollView>
        {this.state.isShare ? (
          <SetShare closeShare={this.closeShare.bind(this)} />
        ) : (
          <View />
        )}
        {/* <SetShare closeShare={this.closeShare.bind(this)}/> */}
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
  topDistance: {
    marginTop: 15,
  },
});

const mapStateToProps = state => {
  return {
    userInfo: state.UserReducer.userInfo,
    userToken: state.UserReducer.userToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: userToken => {
      dispatch({type: USER_TOKEN, userToken: userToken});
    },
    setUserInfo: userInfo => {
      dispatch({type: USER_INFO, userInfo: userInfo});
    },
  };
};

export default (SetScene = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetScene));
//export default SetScene