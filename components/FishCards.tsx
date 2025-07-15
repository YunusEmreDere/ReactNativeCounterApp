import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  name:string,
  description:string,
};

export default function FishCards ({name,description}: Props){
  const router = useRouter();

  return(
    <TouchableOpacity
    onPress={() =>
      router.push({
        pathname: '/info',
        params: {
          name,
          description,
        },
      })
    }
  
  >
    <View style = {styles.cards}>
      <Text style = {styles.name}> {name} </Text>
      <Text style = {styles.description}> {description} </Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cards:{
    backgroundColor: '#fff',
    padding:20,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, height:4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation:4,
  },
  name: {
    fontSize:24,
    fontWeight:'bold',
    marginBottom: 6,
    color: '#*277BD',
    fontFamily:'Inter_700Bold',
  },
  description:{
    fontSize: 16,
    color: '#444',
    fontFamily:'Inter_400Regular',
  }
})

