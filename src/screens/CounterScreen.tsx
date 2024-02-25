/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {counter}</Text>
      <Fab title="+1" onPress={() => setCounter(counter + 1)} position="br" />
      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
    </View>
  );
};

export default CounterScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
