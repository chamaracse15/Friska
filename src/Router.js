import React from 'react';

import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Communication from './Screens/Communication.js';
import Notifications from './Screens/Notifications.js';
import Health from './Screens/Health.js';
import Graphs from './Screens/Graphs.js';
import Profile from './Screens/Profile.js';

export const Tabs = TabNavigator(
  {
    Communication: {
      screen: Communication,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'bubble'} size={25} color={ tintColor } />
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'bell'} size={25} color={ tintColor } />
      },
    },
    Health: {
      screen: Health,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'heart'} size={25} color={ tintColor } />
      },
    },
    Graphs: {
      screen: Graphs,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'chart'} size={25} color={ tintColor } />
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name={'user'} size={25} color={ tintColor } />
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    initialRouteName: 'Health',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'rgb(153, 153, 153)',
      showLabel: false,
      showIcon: true,
      tabStyle: { padding: 10, backgroundColor: 'rgb(38, 38, 38)', },
      iconStyle: { height: 26, width: 26, },
      style: { backgroundColor: 'rgb(38, 38, 38)', }
    },
  }
);
