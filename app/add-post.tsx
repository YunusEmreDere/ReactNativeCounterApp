import { usePost } from "@/components/PostContext";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function AddPostScreen(){
    const {addPost} = usePost();
    const navigation = useNavigation();

    const [username, setUserName] = useState('');
    const [title, SetTitle] = useState('');
    const [content, SetContent] = useState('');
    const [imageUrl, SetImageUrl] = useState('');

    const handleSubmit = () => {
        if (!username || !title || !content) return;

        addPost({
            id: Date.now(),
            username,
            title,
            content,
            imageUrl,
            likes: 0,
        });

        navigation.goBack();
    };

    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <Text style={styles.label}>Kullanıcı Adı</Text>
            <TextInput style={styles.input} value={username} onChangeText={setUserName}/>

            <Text style={styles.label}>Başlık</Text>
            <TextInput style={styles.input} value={title} onChangeText={SetTitle}/>
            
            <Text style={styles.label}>İçerik</Text>
            <TextInput style={[styles.input, {height:100}]} value={content} onChangeText={SetContent} multiline/>
            
            <Text style={styles.label}>Resim URL</Text>
            <TextInput style={styles.input} value={imageUrl} onChangeText={SetImageUrl}/>
            
            <Button title="Gönder" onPress={handleSubmit}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding: 16,
    },
    label:{
        fontWeight: 'bold',
        marginTop: 12,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 8,
        marginTop: 4,
    },
});