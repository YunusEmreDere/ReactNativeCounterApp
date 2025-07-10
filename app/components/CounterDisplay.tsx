import { StyleSheet, Text } from 'react-native'

export function CounterDisplay({count}: {count: number}){

    return (
      <Text style= {styles.counter}>
        Toplam balık: {count}
      </Text>
    )
  }

const styles = StyleSheet.create({
    counter: {
        fontSize: 24,
        marginBottom: 20,
    }
})

