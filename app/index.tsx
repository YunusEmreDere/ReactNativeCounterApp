import { CounterButtons } from "@/components/CounterButtons";
import { useCounter } from "@/components/CounterContext";
import { CounterDisplay } from "@/components/CounterDisplay";
import FishCards from "@/components/FishCards";
import { FishImage } from "@/components/FishImage";
import { fishList } from "@/components/fishData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){

const {count, setCount, index, setIndex} = useCounter();

const currentFish = fishList[index];

const handleIncrease = () => {
    setCount(count + 1);
    setIndex((index + 1) % fishList.length);
  }

  const handleDecrease = () => {
    setCount(count - 1);
    setIndex((index - 1 + fishList.length) % fishList.length)
  }


  const handleReset = () => {
    setCount(0);
    setIndex(0);
  }

  useEffect(() => {
    console.log("Balik sayisi degisti:", count);
  },[count]);

  useEffect(() => {
    const loadData = async () => {
      const savedCount = await AsyncStorage.getItem('counter');
      if (savedCount !== null){
        setCount(parseInt(savedCount));
      }

      const saveIndex = await AsyncStorage.getItem('fishIndex');
      if(saveIndex !== null){
        setIndex(parseInt(saveIndex));
      }
    };
    loadData()
  },[])

  useEffect(() => {
    AsyncStorage.setItem('fishIndex', index.toString());
  },[index]);

  useEffect(() => {
    AsyncStorage.setItem('counter', count.toString());
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