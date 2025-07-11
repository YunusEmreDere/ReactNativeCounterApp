import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CounterButtons } from "./CounterButtons";
import { CounterDisplay } from "./CounterDisplay";
import FishCards from "./FishCards";
import { FishImage } from "./FishImage";
import { fishList } from "./fishData";

export default function HomeScreen(){

const[count, setCount] = useState(0);
  
const[index, setIndex] = useState(0);
const currentFish = fishList[index];

const handleIncrease = () => {
    setCount(count + 1);
    setIndex((prev) => (prev + 1) % fishList.length);
  }

  const handleDecrease = () => {
    setCount(count - 1);
    setIndex((prev) => (prev - 1 + fishList.length) % fishList.length)
  }

  const handleReset = () => {
    setCount(0);
    setIndex(0);
  }

  useEffect(() => {
    console.log("Balik sayisi degisti:", count);
  },[count]);

  if(!currentFish){
    return(
        <View style={styles.container}>
            <Text style = {styles.title}>
                Veri Yükleniyor veya Boş
            </Text>
        </View>
    );
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Balık Sayacı</Text>

      <FishImage/>

      <CounterDisplay count={count}/>

      <CounterButtons
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onReset={handleReset}
      />

      <FishCards
      name={currentFish.name}
      description={currentFish.description}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center', 
    },
    title:{
        fontSize:24,
        marginBottom:20,

    }
})