import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FishCounter () {

  const[count,setCount] = useState(0);

    return (
      <View style = {styles.container}>
        <Text style={styles.title}> Balik Sayaci </Text>

        <Image
        source={{uri: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={styles.image}
        />

        <Text style= {styles.counter} > Toplam Balik: {count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style = {styles.button} onPress={() => setCount(count + 1)}>
          <Text style = {styles.buttonText}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={() => setCount(count - 1)}>
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.resetButton} onPress={() => setCount(0)}>
          <Text style = {styles.buttonText}>Sıfırlar</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
counter:{
  fontSize: 32,
  marginBottom:20,
},
buttonText:{
  color:'white',
  fontSize:18,
},
resetButton:{
  backgroundColor:"#EF6C00",
  paddingVertical:12,
  paddingHorizontal:20,
  borderRadius:8,
  margin:6,
},
button:{
  backgroundColor:"#0277BD",
  paddingVertical: 12,
  paddingHorizontal:20,
  borderRadius:8,
  margin:6,
},
buttonRow:{
  flexDirection:"row",
  gap:12,
  flexWrap:"wrap",
  justifyContent:"center",
},
image:{
  width:150,
  height:150,
  marginBottom:20,
},
title:{
  fontSize:28,
  fontWeight:"bold",
  marginBottom:20,
}
})
