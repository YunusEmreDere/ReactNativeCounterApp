import { useAuth } from "@/components/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen(){
    const {login} = useAuth();
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if(username === "admin" && password === "1234"){
            login(username);
            router.replace("/");
        }else {
            Alert.alert("Hatalı Giriş", "Kullanıcı adı veya şifre hatalı");
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>

            <TextInput
            placeholder="Kullanıcı Adı"
            style={styles.input}
            value={username}
            onChangeText={setUsername}/>

            <TextInput
            placeholder="Şifre"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}/>

            <Button title="Giriş Yap" onPress={handleLogin}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        justifyContent:"center",
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
});