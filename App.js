import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity  } from 'react-native';

export default function App() {
  const [text, setText] = useState("Guess a number between 1-100");
  const [guess, setGuess] = useState('');
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = useState(0);

  const buttonPressed = () => {
    setCount(count => count + 1);  // Add +1 to count every time the button is pressed

    if (parseInt(guess, 10) === number) {
      Alert.alert('You guessed the number in ' + count + ' guesses');
      setCount(count => 0)
      setNumber(Math.floor(Math.random() * 100) + 1); // reset the number
    } else if (parseInt(guess, 10) < number) {
      setText('Your guess ' + guess + ' is too low');
    } else {
      setText('Your guess ' + guess + ' is too high');
    }  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input} 
        onChangeText={value => setGuess(value)}
        value={guess} />
      <TouchableOpacity style={styles.button} onPress={buttonPressed}>
        <Text style={styles.buttonText}>MAKE GUESS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: 100,
  },
  button: {
    backgroundColor: 'rgba(33,150,243,255)',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
