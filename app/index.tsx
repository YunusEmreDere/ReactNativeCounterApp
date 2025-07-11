import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from 'expo';
import React from "react";
import 'react-native-gesture-handler';
import HomeScreen from "./components/HomeScreen";
import InfoScreen from "./components/InfoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Info: {
    name:String;
    description:String;
  };
};

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title: 'Balık Sayacı'}}
        />
        <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{title: 'Balık Hakkında'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

registerRootComponent(App); 
