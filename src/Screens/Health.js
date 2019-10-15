import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { Circle } from 'react-native-progress';
import FloatingButton from './CustomComponents/FloatingButton.js';

const screen = Dimensions.get('window');
//const BUTTON_HEIGHT = (screen.height-106)/5;
const BUTTON_WIDTH = (screen.width-30)/2;
const BOTTOM_BUTTON_HEIGHT = screen.height-(110+2*BUTTON_WIDTH);
const FULL_CURVE = BUTTON_WIDTH/2;

export default class Health extends Component {

  render() {
    return(
      <View style={styles.container}>
        <FloatingButton
          initTopPos={15}
          initLeftPos={15}
          endTopPos={10}
          endLeftPos={10}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          shaping={{ borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 32,
                    borderTopLeftRadius: 32,
                  }}
          val={74}
          unit={'BPM'}
        />

        <FloatingButton
          initTopPos={15}
          initLeftPos={15+BUTTON_WIDTH}
          endTopPos={10}
          endLeftPos={20+BUTTON_WIDTH}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          shaping={{ borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 32,
                    borderTopLeftRadius: 32,
                  }}
          val={31}
          unit={'Celcius'}
        />

        <FloatingButton
          initTopPos={15+BUTTON_WIDTH}
          initLeftPos={15}
          endTopPos={20+BUTTON_WIDTH}
          endLeftPos={10}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          shaping={{ borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 32,
                  }}
          val={38}
          unit={'Percent'}
        />

        <FloatingButton
          initTopPos={15+BUTTON_WIDTH}
          initLeftPos={15+BUTTON_WIDTH}
          endTopPos={20+BUTTON_WIDTH}
          endLeftPos={20+BUTTON_WIDTH}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          shaping={{ borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 32,
                    borderTopRightRadius: 32,
                    borderTopLeftRadius: 0,
                  }}
          val={32}
          unit={'Celcius'}
        />

        <Circle
          style={ {position: 'absolute', top: 30+2*BUTTON_WIDTH,} }
          size={BOTTOM_BUTTON_HEIGHT}
          progress={0.75}
          showsText={true}
          formatText={(progress) => { return 75 + '%'; }}
          thickness={10}
          color={'rgb(26, 26, 26)'}
          borderColor={'rgb(26, 26, 26)'}
          borderWidth={0.5}
        />

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
    height: BUTTON_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'rgb(26, 26, 26)',
  },
});
