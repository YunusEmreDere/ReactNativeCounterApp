import { Image, StyleSheet } from 'react-native'

export function FishImage (){
  
    return (
        <Image
            source= {{uri: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
            style = {styles.image}
            />
    )
  }

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    }
})

