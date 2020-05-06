import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {groupData} = this.props;
    return (
      <View style={styles.course}>
        <GroupTitle
          title={this.props.title}
          desc={this.props.desc}
          color={this.props.color}
          navigation={this.props.navigation}
        />
        <View>
          <FlatList
            style={styles.coursenode}
            keyExtractor={(item, index) => index.toString()}
            data={groupData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <GroupItem
                title={item.title}
                finish={item.finish}
                img={item.img}
                key={item.key}
                all={item.all}
                join={item.join}
                target={item.target}
                color={this.props.color}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

function GroupTitle(props) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={[styles.titletext, {color: props.color}]}>
          {props.title}
        </Text>
        <View style={[styles.arrowbg, {backgroundColor: props.color}]}>
          <Text style={{color: '#fff'}}>></Text>
        </View>
      </View>
      <Text style={{color: '#999'}}>{props.desc}</Text>
    </View>
  );
}

function GroupItem(props) {
  return (
    <View style={styles.list}>
      <View style={[styles.listbg, {backgroundColor: props.color}]} />
      <Image style={styles.listimg} source={{uri: props.img}} />
      <Text style={styles.listtitle}>{props.title}</Text>
      <Text style={styles.listfinish}>{props.finish}</Text>
      <Text style={{color: '#777', padding: 5}}>目标 {props.target}</Text>
      <TouchableOpacity style={[styles.btnbg, {borderColor: props.color}]}>
        <Text style={{color: props.color}}>加入</Text>
      </TouchableOpacity>
      <View style={styles.joined}>
        <Text style={{color: '#fff'}}>
          {props.join}/{props.all}
        </Text>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  course: {
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titletext: {
    fontSize: 18,
    lineHeight: 50,
  },
  arrowbg: {
    width: 18,
    height: 18,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  coursenode: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  list: {
    alignItems: 'center',
    padding: 30,
    paddingBottom: 15,
    marginRight: 10,
  },
  listbg: {
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.1,
  },
  listimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  listtitle: {
    fontSize: 14,
    lineHeight: 30,
    padding: 5,
  },
  listfinish: {
    color: '#777',
    fontSize: 12,
    padding: 5,
  },
  btnbg: {
    height: 36,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  joined: {
    position: 'absolute',
    top: 15,
    right: 0,
    backgroundColor: '#ccc',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    padding: 5,
  },
});

export default GroupList;
