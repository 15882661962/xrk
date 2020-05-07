import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 5,
      imgurl: require('../../images/login/splash.png'),
    };
  }
  UNSAFE_componentWillMount() {
    // this.timer=setInterval(() => {
    //     if (this.state.time>0) {
    //         this.setState({
    //             time:this.state.time-1
    //         })
    //     }else{
    //         clearInterval(this.timer)
    //         //关闭
    //     }
    // }, 1000);
  }
  componentDidMount() {
    this.getImg();
  }
  skip() {
    this.props.updateSplash();
  }
  getImg = () => {
    // var url='api/user/Share'
    // var params = {
    //     userName: 15882661962,
    //     partnerId: 3
    // }
    // Request.get(url,params).then((json)=>{
    //     this.setState({
    //     })
    // },(json)=>{
    //     this.setState({
    //     })
    // })
  };
  gotoPage() {}
  render() {
    const {time, imgurl} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imagebox}
          onPress={() => this.gotoPage()}>
          <Image
            style={styles.image}
            source={require('../../images/login/splash.png')}
          />
        </TouchableOpacity>
        <View style={styles.btnbox}>
          {/* {this.state.time==0?(
                    <TouchableOpacity 
                    onPress={()=>{this.skip()}} 
                    style={styles.close}
                    >
                    <Image 
                    style={styles.closeText} 
                    source={require('../../images/login/close.png')}/>
                    </TouchableOpacity>
                ):(
                    <TouchableOpacity 
                    onPress={()=>{this.skip()}} 
                    style={styles.skip}
                    >
                    <Text style={styles.skipText}>{`跳过${time}`}</Text>
                    </TouchableOpacity>
                )} */}
        </View>
        <View style={styles.bottom}>
          <Image source={require('../../images/login/logo1.png')} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
  },
  imagebox: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  btnbox: {
    position: 'absolute',
    height: 80,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  skip: {
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: 20,
    height: 32,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  close: {
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: 16,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  closeText: {
    width: 16,
    height: 16,
  },
  bottom: {
    height: 150,
    width: width,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen