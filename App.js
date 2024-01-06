import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require("./assets/Space.png")} 
      resizeMode='cover'>
        <Text style={styles.text}>Brain jumble active fun stuff thing</Text>
        </ImageBackground>

     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    
  },
  text: {
    color: "orange",
    fontSize: 40,
    backgroundColor: "green"
  }


});
