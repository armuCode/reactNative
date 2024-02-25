/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const PositionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
  },
  cajaVerde: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    borderColor: 'white',
    borderWidth: 10,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject, //the same as before
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
  },
});
