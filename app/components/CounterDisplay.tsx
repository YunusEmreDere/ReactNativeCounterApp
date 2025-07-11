import { StyleSheet, Text } from 'react-native';

type Props = {
  count: number;
}

export function CounterDisplay(props: Props){

    return (
      <Text style= {styles.counter}>
        Toplam balık: {props.count}
      </Text>
    )
  }

const styles = StyleSheet.create({
    counter: {
        fontSize: 24,
        marginBottom: 20,
    }
})

