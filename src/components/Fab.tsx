/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface PropsFab {
  title: string;
  onPress?: () => void;
  position: 'br' | 'bl';
}

export const Fab = ({title, onPress, position = 'br'}: PropsFab) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[
          style.fabLocation,
          position === 'bl' ? style.left : style.right,
        ]}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          style.fabLocation,
          position === 'bl' ? style.left : style.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const style = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#5856d6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {right: 25},
  left: {left: 25},
});
