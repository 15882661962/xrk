import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';

const {width, height} = Dimensions.get('window');
import {TouchableOpacity} from 'react-native-gesture-handler';
class PkScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ad}>
          <Image style={styles.adimg} source={require('../images/pk/ad.png')} />
        </View>
        <View>
          <Text style={{color: '#777', lineHeight: 40}}>好友PK</Text>
          <View
            style={{backgroundColor: '#fff', borderRadius: 8, marginTop: 10}}>
            <View style={styles.pkitem}>
              <View style={[{backgroundColor: '#6ccd44'}, styles.iconbg]}>
                <Image
                  style={styles.icon}
                  source={require('../images/login/login_weixin.png')}
                />
              </View>
              <Text style={styles.pktext}>与微信好友PK</Text>
              <View style={styles.rightbtn}>
                <TouchableOpacity style={styles.pkbtn}>
                  <Image
                    style={styles.btnimg}
                    source={require('../images/pk/pkbtn.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.pkitem}>
              <View style={[{backgroundColor: '#63aaec'}, styles.iconbg]}>
                <Image
                  style={styles.icon}
                  source={require('../images/login/login_qq.png')}
                />
              </View>
              <Text style={styles.pktext}>与QQ好友PK</Text>
              <View style={styles.rightbtn}>
                <TouchableOpacity style={styles.pkbtn}>
                  <Image
                    style={styles.btnimg}
                    source={require('../images/pk/pkbtn.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{backgroundColor: '#fff', borderRadius: 8, marginTop: 10}}>
            <View style={styles.pkitem}>
              <View style={[{backgroundColor: '#f06950'}, styles.iconbg]}>
                <Image
                  style={styles.icon}
                  source={require('../images/login/login_weibo.png')}
                />
              </View>
              <Text style={styles.pktext}>与微博好友PK</Text>
              <View style={styles.rightbtn}>
                <TouchableOpacity style={styles.pkbtn}>
                  <Image
                    style={styles.btnimg}
                    source={require('../images/pk/pkbtn.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  ad: {
    borderRadius: 8,
    width: width - 30,
    backgroundColor: '#fff',
  },
  adimg: {
    width: width - 30,
    resizeMode: 'contain',
  },
  pkitem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  iconbg: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  icon: {
    width: 70,
    height: 70,
  },
  pktext: {
    fontSize: 16,
    color: '#777',
    marginLeft: 15,
  },
  pkbtn: {
    backgroundColor: '#eb6c67',
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  rightbtn: {
    position: 'absolute',
    right: 10,
  },
  btnimg: {
    width: 25,
    resizeMode: 'contain',
  },
});

export default PkScene;
