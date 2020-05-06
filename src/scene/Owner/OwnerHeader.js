import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class OwnerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  searchEvent() {
    this.props.navigation.navigate('Search');
  }
  scanEvent() {
    this.props.navigation.navigate('Scanner');
  }
  setEvent() {
    this.props.navigation.navigate('Set');
  }
  render() {
    const {userInfo} = this.props;
    const url =
      'http://www.7uao.com/upload/headimg/' + userInfo.UserId + '.jpg';
    return (
      <View style={styles.header}>
        <Image
          style={styles.headerimg}
          source={require('../../images/owner/background.png')}
        />
        <View
          style={[
            styles.menu,
            Platform.OS == 'ios' ? {marginTop: 50} : {marginTop: 30},
          ]}>
          <TouchableOpacity
            style={styles.search}
            onPress={() => {
              this.searchEvent();
            }}>
            <Image
              style={styles.searchicon}
              source={require('../../images/owner/iconsearch.png')}
            />
            <Text style={styles.searchText}>搜索向日葵内容</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              this.scanEvent();
            }}>
            <Image
              style={styles.menubtn}
              source={require('../../images/owner/iconscan.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btns}
            onPress={() => {
              this.setEvent();
            }}>
            <Image
              style={styles.menubtn}
              source={require('../../images/owner/iconset.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.vip}>
            <Image
              style={styles.vipicon}
              source={require('../../images/owner/vip.png')}
            />
            <Text style={styles.viptext}>盐选会员 为你盐选好内容</Text>
            <TouchableOpacity style={styles.vipbtn}>
              <Text style={styles.vipbtntext}>首月 9 元</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <View style={styles.headbg}>
                <Image style={styles.headimg} source={{uri: url}} />
              </View>
              <View style={styles.namebg}>
                <Text style={styles.nickname}>{userInfo.NickName}</Text>
                <View style={styles.scorebg}>
                  <Image
                    style={styles.scoreicon}
                    source={require('../../images/owner/iconscore.png')}
                  />
                  <Text style={styles.score}>阳光：{userInfo.Score / 100}</Text>
                  <Text style={styles.scoredetail}> </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.centerbg}>
                <View style={styles.centerpoint} />
                <Text style={styles.centerinfo}>个人主页</Text>
                <Text style={styles.centerdetail}> </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.data}>
              <DataList
                color={'#3e88f7'}
                count={'未开通'}
                title={'创作中心'}
                cutline={true}
              />
              <DataList
                color={'#000'}
                count={1}
                title={'关注'}
                cutline={true}
              />
              <DataList
                color={'#000'}
                count={0}
                title={'收藏夹'}
                cutline={true}
              />
              <DataList
                color={'#000'}
                count={0}
                title={'最近浏览'}
                cutline={false}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function DataList(props) {
  return (
    <TouchableOpacity
      style={styles.datalist}
      onPress={() => {
        alert('click');
      }}>
      <View style={styles.databox}>
        <Text style={[styles.datacount, {color: props.color}]}>
          {props.count}
        </Text>
        <Text style={styles.datatitle}>{props.title}</Text>
      </View>
      {props.cutline ? <View style={styles.dataline} /> : <View />}
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  header: {
    width: width,
    height: (width * 680) / 750,
  },
  headerbg: {
    width: width,
    position: 'absolute',
    top: 0,
    bottom: 0,
    borderColor: 'red',
    borderWidth: 1,
  },
  headerimg: {
    width: width,
    height: (width * 680) / 750,
    resizeMode: 'contain',
    position: 'absolute',
  },
  menu: {
    marginTop: 50,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  search: {
    backgroundColor: '#3c85f7',
    borderRadius: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  searchinput: {
    display: 'flex',
    color: '#fff',
  },
  searchicon: {
    width: 20,
    resizeMode: 'contain',
  },
  searchText: {
    color: '#91c1f8',
    paddingLeft: 10,
  },
  menubtn: {
    width: 30,
    height: 30,
  },
  btns: {
    marginLeft: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    paddingBottom: 25,
    marginBottom: 72,
  },
  info: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headbg: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headimg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#91c1f8',
    borderWidth: 1,
  },
  namebg: {
    marginLeft: 6,
  },
  nickname: {
    fontSize: 18,
  },
  scorebg: {
    marginTop: 10,
    backgroundColor: '#e8f2fe',
    height: 30,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scoreicon: {
    marginLeft: 2,
  },
  score: {
    color: '#438df7',
    lineHeight: 30,
    marginLeft: 5,
  },
  scoredetail: {
    color: '#438df7',
    marginLeft: 5,
    marginRight: 2,
  },
  centerbg: {
    position: 'absolute',
    right: 0,
    top: 25,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerpoint: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  centerinfo: {
    color: '#999999',
    fontSize: 16,
    marginLeft: 5,
    lineHeight: 30,
  },
  centerdetail: {
    color: '#d4d4d8',
    lineHeight: 30,
  },
  data: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  datalist: {
    width: '25%',
  },
  databox: {},
  datacount: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
  },
  datatitle: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
  },
  dataline: {
    width: 1,
    backgroundColor: '#ccc',
    height: 26,
    position: 'absolute',
    right: 0,
    top: 10,
  },
  vip: {
    backgroundColor: '#faedd9',
    margin: 15,
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    height: 70,
  },
  vipicon: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    width: (width * 40) / 750,
    resizeMode: 'contain',
  },
  viptext: {
    color: '#c69b5b',
    position: 'absolute',
    left: 30,
    bottom: 18,
    fontSize: 14,
  },
  vipbtn: {
    backgroundColor: '#ecc284',
    width: 100,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    bottom: 15,
  },
  vipbtntext: {
    color: '#6f4f23',
  },
});

export default OwnerHeader