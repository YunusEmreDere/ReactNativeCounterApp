import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CounterButtons } from "./components/CounterButtons";
import { CounterDisplay } from "./components/CounterDisplay";
import { FishImage } from "./components/FishImage";

export default function HomeScreen(){
  const[count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Balık Sayacı</Text>

      <FishImage/>

      <CounterDisplay count={count}/>

      <CounterButtons
      onIncrease={() => setCount(count + 1)}
      onDecrease={() => setCount(count - 1)}
      onReset={() => setCount(0)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E0F7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom: 20,
  },
})
