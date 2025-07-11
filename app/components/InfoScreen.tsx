import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParamList } from '../types';

type InfoScreenProps = NativeStackScreenProps<RootStackParamList,'Info'>;

export default function InfoScreen({route, navigation}:InfoScreenProps) {
    const {name,description} = route.params;
    return (
      <View style={{padding: 20}}>
        <Text style={{fontSize:24}}> {name} </Text>
        <Text style={{marginVertical:10}}>{description}</Text>
        <Button title='Geri Dön' onPress = {() => navigation.goBack()}/>
      </View>
    )
  }
