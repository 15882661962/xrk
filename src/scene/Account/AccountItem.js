import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class AccountExit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerImg: this.props.headerImg,
    };
  }
  render() {
    const url =
      'https://www.7uao.com/upload/headimg/' + this.props.headerImg + '.jpg';
    return (
      <View style={styles.item}>
        {this.props.headerImg ? (
          <View style={styles.headerBox}>
            <Image source={{uri: url}} style={styles.headerImg} />
          </View>
        ) : (
          <Text style={styles.itemTitle}>{this.props.title}</Text>
        )}

        <View style={styles.itemRight}>
          <TouchableOpacity
            style={styles.itemTouch}
            onPress={() => {
              this.props.onPress();
            }}>
            <Text style={[styles.itemContent, this.props.style]}>
              {this.props.content}
            </Text>
            <Image
              source={require('../../images/set/icon-more.png')}
              style={styles.itemMore}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  headerBox: {
    borderColor: 'gray',
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#438df7',
    justifyContent: 'center',
    alignItems: 'center',
    left: 15,
  },
  headerImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  itemTitle: {
    left: 15,
    fontSize: 16,
  },
  itemRight: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 0,
    height: 60,
    width: width,
  },
  itemTouch: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  itemContent: {
    position: 'absolute',
    right: 40,
    color: '#777',
  },
  itemMore: {
    position: 'absolute',
    right: 15,
  },
});

export default AccountExit;
