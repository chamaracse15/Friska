import React, { Component } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

export default class FloatingButton extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      initTopPos,
      initLeftPos,
    } = this.props;

    this.animatedValue = new Animated.ValueXY({ x: initLeftPos, y: initTopPos });
  }

  componentDidMount() {
    setTimeout(() => {
      this.startAnimation();
    },100);
  }

  startAnimation() {
    const {
      endTopPos,
      endLeftPos,
    } = this.props;

    Animated.spring(
      this.animatedValue,
      {
        toValue: { x: endLeftPos, y: endTopPos },
        bounciness: 25,
        speed: 2,
      }
    ).start();
  }

  render() {
    const {
      containerStyle,
      buttonStyle,
      shaping,
      val,
      unit,
    } = this.props;

    return (
      <Animated.View style={
        [containerStyle,
        {
          top: this.animatedValue.y,
          left: this.animatedValue.x,
          elevation: 15
        }, shaping]
      }>
        <TouchableOpacity style={ buttonStyle } >
          <Text style={ {color: 'rgb(179, 179, 179)', fontSize: 45,} }>{ val }</Text>
          <Text style={ {position: 'absolute', top: 105, color: 'rgb(179, 179, 179)', fontSize: 14,} }>{ unit }</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
