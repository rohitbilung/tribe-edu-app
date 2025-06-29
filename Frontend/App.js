import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import KhadiaDetailScreen from './src/screens/KhadiaDetailScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SongsAndInstrumentsScreen from './src/screens/SongsAndInstruments/SongsAndInstrumentsScreen';
import SongsListScreen from './src/screens/SongsAndInstruments/SongsListScreen';
import SongDetailScreen from './src/screens/SongsAndInstruments/SongDetailScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Khadia Detail" component={KhadiaDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SongsAndInstruments" component={SongsAndInstrumentsScreen } options={{ headerShown: false }} />
        <Stack.Screen name="SongsList" component={SongsListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SongDetail" component={SongDetailScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
