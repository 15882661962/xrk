import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
var _this = null;
const {width, height} = Dimensions.get('window');
class HomeSign extends Component {
  constructor(props) {
    super(props);
    _this = this;
    this.state = {
      modalVisible: false,
      num: 3,
    };
  }

  static _openModal = () => {
    _this.setState({
      modalVisible: true,
    });
  };

  _closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  sign = () => {
    alert('签到');
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          // onRequestClose={()=>{
          //     alert('close')
          // }}
        >
          <View style={styles.container}>
            <View style={styles.sign}>
              <View style={styles.signbg}>
                <View style={styles.signcontent}>
                  <Text style={{lineHeight: 40}}>
                    今日可获得{this.state.num}元
                  </Text>
                  <FlatList
                    style={styles.signdates}
                    data={signData}
                    numColumns={3}
                    renderItem={({item}) => (
                      <SignContent
                        img={item.img}
                        text={item.text}
                        key={item.key}
                      />
                    )}
                  />
                  <TouchableOpacity
                    style={styles.signbtn}
                    onPress={this._closeModal}>
                    <Text style={styles.signbtntext}>签到</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.signclose}
                  onPress={this._closeModal}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../images/login/close.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.signeddate}>
                <View style={styles.datebg}>
                  <Text style={styles.datenum}>1</Text>
                </View>
                <Text style={styles.datetext}>连续签到天数</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

function SignContent(props) {
  return (
    <View style={styles.dateBox}>
      <Image source={props.img} />
      <Text style={{color: '#999'}}>{props.text}</Text>
    </View>
  );
}

var signData = [
  {
    img: require('../../images/home/coin-gold.png'),
    text: '第1天',
    key: 1,
  },
  {
    img: require('../../images/home/coin-gray.png'),
    text: '第2天',
    key: 2,
  },
  {
    img: require('../../images/home/coin-gray.png'),
    text: '第3天',
    key: 3,
  },
  {
    img: require('../../images/home/coin-gray.png'),
    text: '第4天',
    key: 4,
  },
  {
    img: require('../../images/home/coin-gray.png'),
    text: '第5-9天',
    key: 5,
  },
  {
    img: require('../../images/home/coin-gray.png'),
    text: '第10天+',
    key: 6,
  },
];

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    marginTop: 50,
  },
  signbg: {
    backgroundColor: '#5fa1f8',
    height: 300,
    borderRadius: 8,
  },
  signcontent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 70,
    padding: 20,
    alignItems: 'center',
  },
  signdates: {},
  signbtn: {
    backgroundColor: '#469df8',
    height: 40,
    borderRadius: 50,
    width: 150,
    alignItems: 'center',
    marginTop: 20,
  },
  signbtntext: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 40,
  },
  signeddate: {
    position: 'absolute',
    top: -25,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  signclose: {
    position: 'absolute',
    right: -15,
    top: -15,
    backgroundColor: '#99999960',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  datebg: {
    backgroundColor: '#fff',
    borderRadius: 6,
    height: 50,
  },
  datenum: {
    color: '#5fa1f8',
    fontSize: 30,
    padding: 10,
  },
  datetext: {
    color: '#fff',
    lineHeight: 40,
  },
  dateBox: {
    width: 80,
    height: 80,
    alignItems: 'center',
  },
});

export default HomeSign;
