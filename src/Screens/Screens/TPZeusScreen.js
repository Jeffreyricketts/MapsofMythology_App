import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const TPZeusScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/Statue-of-Zeus-at-Olympia.jpg')} style={{width: 310, height: 300}}/>
        <Text style={styles.headingStyle}>Temple of Zeus</Text>
        <Text style={styles.textStyle}>Located at Olmpia, this Ancient temple was dedicated to the thunder god Zeus. He was known as the head of the Olympian gods</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default TPZeusScreen;