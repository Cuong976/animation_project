import React, { useEffect, useRef } from "react";
import { Animated,
         Text, 
         View, 
         StyleSheet, 
         Button, 
         SafeAreaView,
         Image,
         Easing,
        TouchableOpacity} from "react-native";



const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animaX = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start();
  };

  const fadeUFO = () => {
    Animated.timing(animaX, {
      toValue: 350,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  };

  const resetUFO = () => {
    Animated.timing(animaX, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const stopUFO = () => {
    Animated.timing(animaX, {}).stop();
  }

  useEffect(() => {
    fadeIn();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Welcom to animation react native!</Text>
      </Animated.View>

      <Animated.View
        style={
          {
            translateX: animaX
          }
        }
      >
        <Image source={require('./img/ufo_icon.png')} style={{width:50, height:50, marginVertical:10, marginLeft:5}}/>
      </Animated.View>
      <View style={styles.buttonRow}>
        <View style={{width:150, marginVertical:10}}>
          <Button title="Move UFO" onPress={fadeUFO} style={{marginVertical:10}}/>
        </View>

        <View style={{width:150, marginVertical:10}}>
          <Button title="Stop UFO"  onPress={stopUFO}/>
        </View>

        <View style={{width:150, marginVertical:10}}>
          <Button title="Reset UFO"  onPress={resetUFO}/>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fadingContainer: {
    padding: 20,
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "center",
    alignItems:"center",
    marginVertical: 16,
    width:"100%"
  },
  fadingX:{
    width:150,
    height:100
  }
});

export default App;