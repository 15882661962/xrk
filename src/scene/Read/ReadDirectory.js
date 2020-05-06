import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
class ReadDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <FlatList
          style={styles.grids}
          data={DirectoryData}
          renderItem={({item}) => (
            <DirectoryItem title={item.title} key={item.key} date={item.date} />
          )}
        />
      </View>
    );
  }
}

function DirectoryItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
}
let DirectoryData=[
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-25',
    key: 1,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-24',
    key: 2,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-23',
    key: 3,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-22',
    key: 4,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-21',
    key: 5,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-20',
    key: 6,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-19',
    key: 7,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-18',
    key: 8,
  },
  {
    date: '2019-02-02 00:35',
    title: '【2021考研】单词电台-17',
    key: 9,
  },
];

var styles=StyleSheet.create({
  container: {
    width: width,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    color: '#333',
    fontSize: 14,
  },
  date: {
    color: '#777',
    paddingTop: 5,
  },
});

export default ReadDirectory