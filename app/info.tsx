import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function InfoScreen(){
    const {name,description} = useLocalSearchParams();

    return(
        <View style={styles.container}>
            <Text style = {styles.title}> {name} </Text>
            <Text style = {styles.description}> {description} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
    },
})