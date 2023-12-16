import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const headerNav = ({navigation}) => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
  });
} 

export default headerNav;