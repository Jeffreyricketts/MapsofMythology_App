import React from 'react-native';
import {Text, View, Button, StatusBar, ImageBackground} from 'react-native';
import styles from '../component/Style';
import background from '../assets/Greek_background.jpg';

const HomeScreen = props => {
  return (
    <View style={styles.viewStyle}>
      <StatusBar style="auto" backgroundColor="transparent" translucent={true} />

      <ImageBackground style={styles.imageStyle} source={background}>
        <Text style={styles.headingHomeStyle}>Maps of Mythology</Text>
        {/*<Text style={styles.textStyle}>Welcome Back to the Stage of History .....retold</Text>*/}
        <Button title="Start" onPress={() => props.navigation.navigate('Map')}/>
        <View style={styles.button} />
        <Button title="Codex" onPress={() => props.navigation.navigate('Codex')}/>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;