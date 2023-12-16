import React, {useState} from 'react-native';
import {View, StyleSheet, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {locationOfInterest} from '../component/markers';
import {useNavigation} from '@react-navigation/native';

const MapScreen = props => {

  const ShowLocationOfInterest = () => {
    const navigation = useNavigation();

    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          onPress={() => navigation.navigate(item.onPress)}
        />
      );
    });
  };

  return (
    <View style={styles.mapStyle}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        //Parthenon
        initialRegion={{
          latitude: 37.971523,
          longitude: 23.726591,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}>
        {ShowLocationOfInterest()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    width: '500',
    height: '300',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default MapScreen;