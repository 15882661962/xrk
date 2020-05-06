import React, {Component} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
class XrkCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // var arr = []
    // for (let i in this.props.courseData) {
    //     arr.push(this.props.courseData[i]);
    // }
    const {courseData} = this.props;
    return (
      <View style={styles.course}>
        <CourseTitle
          title={this.props.title}
          color={this.props.color}
          navigation={this.props.navigation}
        />
        <View>
          <FlatList
            style={styles.coursenode}
            keyExtractor={(item, index) => index.toString()}
            data={courseData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <CourseList
                title={item.title}
                content={item.content}
                img={item.img}
                key={item.key}
                video={item.video}
                navigation={this.props.navigation}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

function CourseTitle(props) {
  return (
    <View style={styles.title}>
      <View style={[styles.titlecircle, {borderColor: props.color}]} />
      <Text style={styles.titletext}>{props.title}</Text>
      <TouchableOpacity
        style={styles.titlemore}
        onPress={() => {
          props.navigation.navigate('Recommend');
        }}>
        {/* <Text style={styles.moretext}>更多 ></Text> */}
        <Image
          style={styles.moreicon}
          source={require('../../images/xrk/icon-more-blue.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function CourseList(props) {
  var params = {
    video: props.video,
    title: props.title,
  };
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => {
        props.navigation.navigate('Video', {
          params: props.video,
        });
      }}>
      <Image style={styles.listimg} source={{uri: props.img}} />
      <Text style={styles.listtitle}>{props.title}</Text>
      <Text style={styles.listcontent}>{props.content}</Text>
    </TouchableOpacity>
  );
}
var styles=StyleSheet.create({
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
  titlecircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#53adf0',
  },
  titletext: {
    fontSize: 18,
    lineHeight: 50,
    paddingLeft: 10,
  },
  titlemore: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
  },
  moretext: {
    color: '#63b9f2',
    lineHeight: 50,
  },
  moreicon: {
    width: 21,
    height: 21,
  },
  coursenode: {
    display: 'flex',
    flexDirection: 'row',
  },
  list: {
    width: (width * 319) / 750,
    marginRight: 10,
  },
  listimg: {
    borderRadius: 8,
    width: (width * 319) / 750,
    height: (height * 180) / 1334,
    resizeMode: 'contain',
  },
  listtitle: {
    fontSize: 14,
    lineHeight: 30,
  },
  listcontent: {
    color: '#777',
    fontSize: 12,
  },
});

export default XrkCourse