import { StyleSheet, Text, View } from 'react-native';

type Props = {
    name: String;
    description: String;
}

export default function FishCards(props: Props) {
    return (
      <View style={styles.cards}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
    cards:{
        backgroundColor:"#669bbc",
        padding:20,
        borderRadius:10,
        margin:10,
    },
    name:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:8,
    },
    description:{
        fontSize:16,
    }
})