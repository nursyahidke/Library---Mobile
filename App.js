import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'

import { Provider } from 'react-redux';
import store from './src/public/Store'


import Login from './src/screens/Login'
import Signup from './src/screens/Signup'
import Home from './src/screens/Home'
import History from './src/screens/History'
import Details from './src/screens/Details'
import Profile from './src/screens/Profile'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    header: null
  },
  Signup: {
    screen: Signup,
    header: null
  },
  History: {
    screen: History,
    header: null
},
    Profile: {
        screen: Profile,
        header: null
    },
    Details: {
        screen: Details,
        header: null
},
Home: {
    screen: Home,
    header: null
    },
    
},
{
    defaultNavigationOptions: {
      header: null
    },
  })

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return(
        <Provider store={store}>
          <AppContainer />
        </Provider>
    )
  }
}