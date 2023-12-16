import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const THDionysusScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/DionysusTheatre.jpg')} style={{width: 300, height: 300}}/>
        <Text style={styles.headingStyle}>Theatre of Dionysus</Text>
        <Text style={styles.textStyle}>The Ancient Theatre of the Acropolian slopes, dedicated to the god Dionysus</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default THDionysusScreen;