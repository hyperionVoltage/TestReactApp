import {StyleSheet, Dimensions, Platform} from 'react-native';

let screenWidth = Dimensions.get('window').width / 15;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fffff2',
  },
  cardtitle: {
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
  },
  cardimage: {
    height: screenHeight * 0.6,
    width: '100%',
  },
  fullcardimage: {
    height: screenHeight,
    width: '100%',
    resizeMode: 'stretch',
  },
  icon: {
    fontSize: screenWidth,
    color: 'gold',
  },
  iconnotfound: {
    fontSize: screenWidth,
    color: 'red',
  },
  averagerating: {
    ...Platform.select({
      ios: {
      fontSize: screenWidth,
    }, android: {
      fontSize: screenWidth - 7,
    },
    }),
  },
  cardbody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export {styles};
