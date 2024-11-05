import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
// import AppNavigator from "./src/navigation/AppNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);


  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          black: require("./assets/fonts/Inter_18pt-Black.ttf"),
          bold: require("./assets/fonts/Inter_18pt-Bold.ttf"),
          semi_bold: require("./assets/fonts/Inter_18pt-SemiBold.ttf"),
          light: require("./assets/fonts/Inter_18pt-Light.ttf"),
          medium: require("./assets/fonts/Inter_18pt-Medium.ttf"),
          regular: require("./assets/fonts/Inter_18pt-Regular.ttf"),
          thin: require("./assets/fonts/Inter_18pt-Thin.ttf"),
          montserrat_regular: require("./assets/fonts/Montserrat-Regular.ttf"),
          montserrat_medium: require("./assets/fonts/Montserrat-Medium.ttf"),
          montserrat_semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
        });
      } catch (error) {
        console.error("Error loading fonts: ", error);
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayout}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>

    </SafeAreaProvider>
  );
}
