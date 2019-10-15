import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';

const screen = Dimensions.get('window');
const SCRN_WIDTH = screen.width;
const SCRN_HEIGHT = screen.height;
const BUTTON_WIDTH = SCRN_WIDTH - 20;
const BUTTON_HEIGHT = 40;

export default class Communication extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.buttonContainer, { left: 10, top: 10 },]}>
          <TouchableOpacity style={styles.button}>
            <Text style={ {color: 'rgb(179, 179, 179)',} }>LEAVE REQUEST</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, { left: 10, top: 60 },]}>
          <TouchableOpacity style={styles.button}>
            <Text style={ {color: 'rgb(179, 179, 179)',} }>BREAK REQUEST</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonContainer, { left: 10, top: 110 },]}>
          <TouchableOpacity style={styles.button}>
            <Text style={ {color: 'rgb(179, 179, 179)',} }>EMERGENCY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgb(26, 26, 26)',
    borderRadius: 20,
  },
});
