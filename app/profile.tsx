import { useAuth } from "@/components/AuthContext";
import { useRouter } from 'expo-router';
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function ProfileScreen(){
    const {username, logout} = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.replace('/login');
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.username}>Kullanıcı: {username || 'Bilinmiyor'}</Text>

            <Button title="Çıkış Yap" onPress={handleLogout} color="#ef5350"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:20,
    },
    username: {
        fontSize: 18,
        marginBottom:40,
    },
});