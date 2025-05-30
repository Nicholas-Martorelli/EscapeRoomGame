import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import BookshelfScreen from "./screens/BookshelfScreen";
import DeskScreen from "./screens/DeskScreen";
import SecretDoorScreen from "./screens/SecretDoorScreen";
import FinalRoomScreen from "./screens/FinalRoomScreen";
import LibriAntichi from "./screens/LibriAntichi";
import LibriProibiti from "./screens/LibriProibiti";
import CorridorScene from "./screens/CorridorScene";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
        <Stack.Screen name="Bookshelf" component={BookshelfScreen} />
        <Stack.Screen name="Desk" component={DeskScreen} />
        <Stack.Screen name="SecretDoor" component={SecretDoorScreen} /> 
        <Stack.Screen name="FinalRoomScreen" component={FinalRoomScreen} /> 
        <Stack.Screen name="LibriAntichi" component={LibriAntichi} /> 
        <Stack.Screen name="LibriProibiti" component={LibriProibiti}/>
        <Stack.Screen name="CorridorScene" component={CorridorScene}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

