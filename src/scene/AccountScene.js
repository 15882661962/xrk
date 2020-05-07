import React from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
//import ImageCropPicker from 'react-native-image-crop-picker'
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {USER_INFO, USER_TOKEN} from '../redux/action/userActionTypes';
import Request from '../utils/request';
import AccountItem from './Account/AccountItem';
import AccountExit from './Account/AccountExit';

class AccountScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: {
        //保存选择的图片信息
      },
      videoSource: {},
    };
  }
  onClickChoosePicture = () => {
    const options = {
      title: '',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = {uri: response.uri};
        this.setState(
          {
            avatarSource: source,
          },
          () => {
            this._unloadHeadImage();
          },
        );
      }
    });
  };

  onClickChooseVideo = () => {
    const options = {
      title: '选择视频',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '录制视频',
      chooseFromLibraryButtonTitle: '选择视频',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  };
  _unloadHeadImage = () => {
    const {userInfo} = this.props;
    var url = 'api/tools/UploadImg';
    let formData = new FormData();
    formData.append('file', this.state.avatarSource);
    formData.append('userName', userInfo.UserName);
    formData.append('partnerId', 16);
    formData.append('type', 'headimg');
    formData.append('id', userInfo.UserId);
    Request.post(url, formData).then(
      json => {},
      json => {
        alert(JSON.stringify(json));
      },
    );
  };
  // actionSheet(){
  //     ActionSheetIOS.showActionSheetWithOptions({
  //         options:[
  //             '拍照',
  //             '从相册中选择',
  //             '取消'
  //         ],
  //         //title:'',
  //         cancelButtonIndex:2,
  //         //destructiveButtonIndex:0
  //     },
  //     (index) => {
  //         switch(index){
  //             case 0:
  //                 this.openCamera()
  //             break;
  //             case 1:
  //                 this.openAlbum()
  //             break;
  //         }
  //     });
  // }

  // openCamera=()=>{
  //     //mediaType:photo,video
  //     const option={width:300,height:400,mediaType:'photo',cropping:true}
  //     ImageCropPicker.openCamera(option).then(image=>{
  //         alert(image)
  //     },(error)=>{
  //         alert(error)
  //     })
  // }

  // openAlbum=()=>{
  //     //multiple:true多张
  //     const option={width:300,height:400,mediaType:'photo',cropping:true}
  //     ImageCropPicker.openPicker(option).then(image=>{
  //         alert(image)
  //     },(error)=>{
  //         alert(error)
  //     })
  // }

  exitLogin() {
    Alert.alert('退出登录', '退出后，下次需要重新登录', [
      {
        text: '取消',
      },
      {
        text: '确定',
        onPress: () => {
          this.props.setToken('');
          this.props.setUserInfo('');
          this.props.navigation.replace('Loading');
        },
      },
    ]);
  }
  render() {
    const {userInfo} = this.props;
    return (
      <View style={StyleSheet.container}>
        <ScrollView>
          <View>
            <AccountItem
              headerImg={true}
              content={'更改头像'}
              headerImg={userInfo.UserId}
              onPress={() => {
                this.onClickChoosePicture();
              }}
            />
            <AccountItem
              title={'用户名'}
              content={userInfo.UserName}
              onPress={() => {
                console.log(0);
              }}
            />
            <AccountItem
              title={'昵称'}
              content={userInfo.NickName}
              onPress={() => {
                console.log(0);
              }}
            />
            <AccountItem
              title={'安全设置'}
              onPress={() => {
                console.log(0);
              }}
            />
          </View>
          <View style={styles.topDistance}>
            <AccountItem
              title={'手机号'}
              content={userInfo.Mobile}
              style={{color: '#53adf0'}}
              onPress={() => {
                console.log(0);
              }}
            />
            <AccountItem
              title={'微信账号'}
              content={userInfo.NickName}
              style={{color: '#53adf0'}}
              onPress={() => {
                console.log(0);
              }}
            />
            <AccountItem
              title={'QQ帐号'}
              content={'未绑定'}
              style={{color: '#999'}}
              onPress={() => {
                console.log(0);
              }}
            />
            <AccountItem
              title={'新浪微博帐号'}
              content={'未绑定'}
              style={{color: '#999'}}
              onPress={() => {
                console.log(0);
              }}
            />
          </View>
          <View style={styles.topDistance}>
            <AccountExit
              navigation={this.props.navigation}
              exitLogin={() => {
                this.exitLogin();
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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

export default (AccountScene = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountScene));
//export default AccountScene