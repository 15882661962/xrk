import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const swiperHeight = (width * 233) / 640;
class HomeSwiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSwiper: false,
      bannerData: [
        'http://image.xrkgxw.com/img/app/home/swiper1.png',
        'http://image.xrkgxw.com/img/app/home/swiper2.png',
        'http://image.xrkgxw.com/img/app/home/swiper3.png',
      ],
    };
    this.handleItemPress = this.handleItemPress.bind(this);
  }
  handleItemPress(item) {
    this.props.onPressItem(item);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.cycle_view}>
            {this.state.bannerData == null ? (
              <View style={styles.slide} />
            ) : (
              <Swiper
                height={swiperHeight}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                horizontal={true}
                paginationStyle={{bottom: 10}}
                showsPagination={true}>
                {this.renderSwiper()}
              </Swiper>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

  renderSwiper() {
    var itemArr = [];
    for (var i = 0; i < this.state.bannerData.length; i++) {
      let url = this.state.bannerData[i];
      itemArr.push(
        <TouchableOpacity key={i}>
          <Image source={{uri: url}} style={styles.swiper_image} />
        </TouchableOpacity>,
      );
    }
    return itemArr;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: swiperHeight,
    margin: 15,
    borderRadius: 10,
  },
  scroll: {
    flex: 1,
    height: swiperHeight,
    borderRadius: 10,
  },
  cycle_view: {
    height: swiperHeight,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb',
    height: swiperHeight,
  },
  swiper_image: {
    width: Dimensions.width,
    height: swiperHeight,
  },
});

export default HomeSwiper;
