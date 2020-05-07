import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');

function Grid(props) {
  return (
    <View style={[styles.grid, {paddingLeft: props.even ? 10 : 0}]}>
      <TouchableOpacity onPress={() => props.navigation.navigate(props.func)}>
        <View style={[styles.gridbg, {backgroundColor: props.color}]}>
          <View style={styles.text}>
            <Text style={styles.gridTitle}>{props.title}</Text>
            <Text style={styles.gridText}>{props.content}</Text>
          </View>
          <View style={styles.gridImg}>
            <Image style={styles.gridImage} source={{uri: props.source}} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

class GridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        style={styles.grids}
        data={this.props.gridData}
        numColumns={2}
        renderItem={({item}) => (
          <Grid
            title={item.title}
            content={item.content}
            key={item.key}
            even={item.even}
            source={item.icon}
            color={item.color}
            func={item.func}
            navigation={navigation}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  grids: {
    marginLeft: 15,
    marginRight: 15,
  },
  grid: {
    paddingTop: 10,
    paddingBottom: 10,
    width: (width - 30) / 2,
    paddingLeft: 10,
    height: 100,
  },
  gridbg: {
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
  },
  text: {
    padding: 10,
  },
  gridImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridImage: {
    width: 50,
    height: 50,
  },
  gridTitle: {
    fontSize: 16,
    lineHeight: 30,
  },
  gridText: {
    lineHeight: 30,
    color: '#666',
  },
});

export default GridList