import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
  },
  // For Hpme Screen image
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    width: '100%',
    height: '100',
  },
  textStyle: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
  },
  headingStyle: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 5,
  },
  // For HomeScreen
  headingHomeStyle: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 5,
  },
  // For Home button
  button: {
    textAlign: 'center',
    marginBottom: 2,
    padding: 1,
  },
  // For Map
  //mapStyle: {
  //...StyleSheet.absoluteFillObject,
  //width: '500',
  //height: '300',
  //justifyContent: 'flex-end',
  //alignItems: 'center',
  //position: 'absolute',
  //top: 0,
  //left: 0,
  //right: 0,
  //bottom: 0,
  //},
  //map: {
  //...StyleSheet.absoluteFillObject,
  //position: 'absolute',
  //top: 0,
  //left: 0,
  //right: 0,
  //bottom: 0,
  //},
});

export default styles;