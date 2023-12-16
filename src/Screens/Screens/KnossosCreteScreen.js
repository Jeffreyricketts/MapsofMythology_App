import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const KnossosCreteScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/Minotaur.jpg')} style={{width: 310, height: 310}}/>
        <Text style={styles.headingStyle}>Knossos</Text>
        <Text style={styles.textStyle}>Located on the island of Crete, Knossos was home to the Minotaur and the Labyrinth</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default KnossosCreteScreen;