import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
class ReadBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.book}>
        <View style={styles.input}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/home/course1.png')}
          />
        </View>
        <View>
          <Text style={styles.title}>【2021考研】备考必备锦囊</Text>
          <View style={styles.count}>
            <View style={styles.countbox}>
              <Text style={styles.countnum}>26</Text>
              <Text style={styles.counttext}>期数</Text>
            </View>
            <View style={styles.cutline} />
            <View style={styles.countbox}>
              <Text style={styles.countnum}>22054</Text>
              <Text style={styles.counttext}>订阅量</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>订阅社刊</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  book: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    width: width,
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
  },
  count: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  countbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  cutline: {
    width: 1,
    backgroundColor: '#ddd',
  },
  countnum: {
    fontWeight: 'bold',
    color: '#666',
    padding: 5,
  },
  counttext: {
    color: '#777',
    padding: 5,
  },
  btn: {
    backgroundColor: '#6ccd44',
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
  btnText: {
    color: '#fff',
  },
});

export default ReadBook;
