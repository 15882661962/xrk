import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class XrkPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.plan}>
        <Image
          style={styles.smile}
          source={require('../../images/xrk/planbg.png')}
        />
        <Text style={styles.content}>想要跟着名师团队轻松备考拿高分吗？</Text>
        <TouchableOpacity
          style={styles.addbtn}
          onPress={() => {
            this.props.navigation.navigate('Plan');
          }}>
          <Text style={styles.addtext}> 添加学习计划 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  plan: {
    margin: 15,
    backgroundColor: '#f5f9fc',
    borderRadius: 8,
    alignItems: 'center',
  },
  smile: {
    width: width - 30,
    height: ((width - 30) * 399) / 687,
  },
  content: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    top: 40,
    right: 15,
    width: 200,
    flexWrap: 'wrap',
    lineHeight: 24,
    textAlign: 'right',
  },
  addbtn: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    backgroundColor: '#f2aa7f',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  addtext: {
    color: '#fff',
    fontSize: 18,
  },
});

export default XrkPlan