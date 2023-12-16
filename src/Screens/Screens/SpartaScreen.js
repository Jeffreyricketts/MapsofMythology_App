import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';


const SpartaScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/Sparta.jpg')} style={{width: 310, height: 310}}/>
        <Text style={styles.headingStyle}>Sparta</Text>
        <Text style={styles.textStyle}>Home of the Legendary Spartans, current day Laconia. Home of the Greek Hero: Leonidas</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default SpartaScreen;