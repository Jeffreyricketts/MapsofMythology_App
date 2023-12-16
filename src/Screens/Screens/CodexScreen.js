import React from 'react-native';
import {Text, View, Button, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Blackgold_background.jpg';

const CodexScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <ImageBackground style={styles.imageStyle} source={background}>
        <Text style={styles.headingHomeStyle}>Maps of Mythology</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('The Parthenon')}>The Parthenon</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Theatre of Dionysus')}>Theatre of Dionysus</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Temple of Apollo')}>Temple of Apollo</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Temple of Zeus')}>Temple of Zeus</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Sparta')}>Sparta</Text>
        <Text style={styles.textStyle} onPress={() => props.navigation.navigate('Knossos')}>Knossos</Text>
        <Button title="Map" onPress={() => props.navigation.navigate('Map')} />
      </ImageBackground>
    </View>
  );
};

export default CodexScreen;