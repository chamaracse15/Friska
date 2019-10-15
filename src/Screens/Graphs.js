import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet
} from 'react-native';

import Svg, {
  Polyline,
  Path,
  Line
} from 'react-native-svg';

const screen = Dimensions.get('window');
const SCRN_WIDTH = screen.width;
const SCRN_HEIGHT = screen.height;
const VIEW_HEIGHT = (SCRN_HEIGHT-15)/2;
const VIEW_WIDTH = SCRN_WIDTH-10;

export default class Graphs extends Component {
  constructor(props) {
    super(props);
    this.arr = new Array(VIEW_WIDTH/5);
    for(i = 0; i < VIEW_WIDTH/5; i++){
      this.arr[i] = i + 1;
    }
  }

  renderVerticalLines() {
    return this.arr.map((val) => {
      return(
        <Line
          key={val}
          x1={5*val}
          y1={0}
          x2={5*val}
          y2={VIEW_HEIGHT}
          stroke='blue'
          strokeWidth={0.75}
        />
      );
    });
  }

  render() {
    return(
      <View style={ styles.container }>
        <Svg
          height={VIEW_HEIGHT}
          width={VIEW_WIDTH}
        >
          {this.renderVerticalLines()}
          <Polyline
            points={ [10,10,20,12,30,20,40,60,60,70,95,90,100,85,150,250] }
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: (SCRN_WIDTH-10),
    height: (SCRN_HEIGHT-15)/2,
    flexDirection: 'row',
    position: 'absolute',
    left: 5,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(26, 26, 26)',
    borderWidth: 0.5,
  },
});
