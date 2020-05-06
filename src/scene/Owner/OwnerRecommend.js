import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
class OwnerRecommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeClass: props.typeClass,
    };
  }
  _renderItem = ({item}) => {
    switch (this.state.typeClass) {
      case 'doubt':
        return <Doubt title={item.title} account={item.account} />;
        break;
      case 'enjoy':
        return <Enjoy title={item.title} img={item.img} />;
        break;
      case 'video':
        return (
          <Video
            title={item.title}
            img={item.img}
            answer={item.answer}
            account={item.account}
          />
        );
        break;
      case 'idea':
        return (
          <Idea
            title={item.title}
            content={item.content}
            scan={item.scan}
            account={item.account}
          />
        );
        break;
      case 'table':
        return (
          <Table
            title={item.title}
            img={item.img}
            scan={item.scan}
            account={item.account}
          />
        );
        break;
      case 'feature':
        return (
          <Feature
            title={item.title}
            img={item.img}
            scan={item.scan}
            account={item.account}
          />
        );
        break;
    }
  };
  render() {
    var arr = [];
    for (let i in this.props.data) {
      arr.push(this.props.data[i]);
    }
    return (
      <View style={styles.recommend}>
        <ItemTitle
          icon={this.props.icon}
          title={this.props.title}
          more={this.props.more}
          isMore={this.props.isMore}
        />
        <View style={styles.content}>
          <FlatList
            data={arr}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}

function ItemTitle(props) {
  return (
    <View style={styles.header}>
      <Image style={styles.headericon} source={{uri: props.icon}} />
      <Text style={styles.headertitle}>{props.title}</Text>
      {props.isMore ? (
        <View style={styles.headermore}>
          <TouchableOpacity>
            <Text style={styles.moretext}>{props.more} ></Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}

function Doubt(props) {
  return (
    <View style={[styles.fullwidth, styles.doubt]}>
      <Text style={styles.doubttitle}>{props.title}</Text>
      <View style={styles.itembottom}>
        <Text style={styles.accounttext}>{props.account} 人关注</Text>
        <View style={styles.rightbtn1}>
          <TouchableOpacity style={styles.graybtn}>
            <Text style={styles.graytext}>忽略</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightbtn}>
          <TouchableOpacity style={styles.bluebtn}>
            <Text style={styles.bluetext}>回答</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Enjoy(props) {
  return (
    <View style={styles.enjoy}>
      <Image style={styles.enjoyimg} source={{uri: props.img}} />
      <Text style={styles.enjoytitle}>{props.title}</Text>
    </View>
  );
}

function Video(props) {
  return (
    <View style={styles.fullwidth}>
      <View style={styles.imgandtext}>
        <Image style={styles.imgandimage} source={{uri: props.img}} />
        <Text style={styles.imgandtexts}>{props.title}</Text>
      </View>
      <View style={styles.itembottom}>
        <Text style={styles.accounttext}>{props.answer}个视频回答 </Text>
        <Text style={styles.accounttext}>{props.account}人关注</Text>
        <View style={styles.rightbtn}>
          <TouchableOpacity style={styles.bluebtn}>
            <Text style={styles.bluetext}>拍回答</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Idea(props) {
  return (
    <View style={styles.fullwidth}>
      <Text style={styles.ideatitle}>{props.title}</Text>
      <Text style={styles.ideacontent}>{props.content}</Text>
      <View style={styles.itembottom}>
        <Text style={styles.accounttext}>{props.scan}人浏览 </Text>
        <Text style={styles.accounttext}>{props.account}人关注</Text>
        <View style={styles.rightbtn}>
          <TouchableOpacity style={styles.bluebtn}>
            <Text style={styles.bluetext}>写想法</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Table(props) {
  return (
    <View style={styles.fullwidth}>
      <View style={styles.imgandtext}>
        <Image style={styles.imgandimage} source={{uri: props.img}} />
        <Text style={styles.imgandtexts}>{props.title}</Text>
      </View>
      <View style={styles.itembottom}>
        <Text style={styles.accounttext}>{props.scan}条精选内容 </Text>
        <Text style={styles.accounttext}>{props.account}次浏览</Text>
      </View>
    </View>
  );
}

function Feature(props) {
  return (
    <View style={styles.fullwidth}>
      <View style={styles.imgandtext}>
        <Image style={styles.imgandimage} source={{uri: props.img}} />
        <Text style={styles.imgandtexts}>{props.title}</Text>
      </View>
      <View style={styles.itembottom}>
        <Text style={styles.accounttext}>{props.scan}次浏览 </Text>
        <Text style={styles.accounttext}>{props.account}关注</Text>
      </View>
    </View>
  );
}

var styles=StyleSheet.create({
  recommend: {
    marginTop: 5,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  headericon: {
    width: 18,
    height: 18,
  },
  headertitle: {
    left: 5,
    lineHeight: 35,
  },
  headermore: {
    position: 'absolute',
    height: 35,
    right: 15,
  },
  moretext: {
    fontSize: 12,
    color: '#777',
    lineHeight: 35,
    textAlign: 'right',
  },
  doubt: {
    padding: 15,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 8,
  },
  enjoy: {
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 10,
  },
  enjoyimg: {
    width: 55,
    height: 55,
  },
  enjoytitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    width: 55,
    flexWrap: 'wrap',
    lineHeight: 14,
  },
  ideacontent: {
    color: '#666',
    lineHeight: 30,
  },
  fullwidth: {
    margin: 15,
    width: width - 30,
  },
  imgandtext: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgandimage: {
    width: 55,
    height: 55,
  },
  imgandtexts: {
    marginLeft: 10,
  },
  bluebtn: {
    width: 80,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#edf5fe',
  },
  bluetext: {
    color: '#3982f7',
    lineHeight: 30,
    textAlign: 'center',
  },
  graybtn: {
    width: 80,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#f7f7f7',
  },
  graytext: {
    color: '#a2a2a2',
    lineHeight: 30,
    textAlign: 'center',
  },
  itembottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  accounttext: {
    color: '#777',
  },
  rightbtn: {
    position: 'absolute',
    right: 0,
  },
  rightbtn1: {
    position: 'absolute',
    right: 90,
  },
});

export default OwnerRecommend