import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

    type Props = {
        onIncrease: () => void;
        onDecrease: () => void;
        onReset: () => void;
    }

export function CounterButtons ({onIncrease, onDecrease, onReset}: Props){
    return (
      <View style = {styles.buttonRow}>
        <TouchableOpacity style = {styles.button} onPress={onIncrease}>
            <Text style = {styles.buttonText}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={onDecrease}>
            <Text style= {styles.buttonText}>-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.resetButton} onPress={onReset}>
            <Text style = {styles.buttonText}>Sıfırlar</Text>
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0277BD',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 6,
  },
  resetButton: {
    backgroundColor: '#EF6C00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});