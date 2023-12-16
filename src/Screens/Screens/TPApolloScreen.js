import React from 'react-native';
import {Text, View, Button, Image, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const TPApolloScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Image source={require('../assets/TempleApollo.jpg')} style={{width: 300, height: 300}}/>
        <Text style={styles.headingStyle}>Temple of Apollo</Text>
        <Text style={styles.textStyle}>The Ancient temple and Sanctuary, dedicated to the sun god Apollo. Said to be home to the Oracle of Delphi</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default TPApolloScreen;