import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const ParthenonScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/Parthenon-Dusk.jpg')} style={{width: 310, height: 310}}/>
        <Text style={styles.headingStyle}>The Parthenon</Text>
        <Text style={styles.textStyle}>The former Temple of the Athenian Acropolis, dedicated to the goddess Athena</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default ParthenonScreen;