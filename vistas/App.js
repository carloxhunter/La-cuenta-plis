import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Views/login';
import RegisterScreen from './Views/register';
import HomeScreen from './Views/home';
import MenuScreen from './Views/menu';
import MenuScreen2 from './Views/menu2';
import PedidosScreen from './Views/pedidos';
import PromosScreen from './Views/promos';
import HomefunctScreen from './Views/home2';


const RootStack = createStackNavigator(
  {
    Ingresar: LoginScreen,
    Registrar: RegisterScreen,
    HomeMesero: HomeScreen,
    Homefunct: HomefunctScreen,
    Menú: MenuScreen,
    Menu2:MenuScreen2,
    Pedidos: PedidosScreen,
    Promociones: PromosScreen,
  },
  {
    initialRouteName: 'Ingresar',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    
  },

  header: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 0,
    padding: 5,
  },

  user: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    alignItems: 'center',
  },

  footer: {
    flex: 0.3,
    flexDirection: 'row',
    marginTop: 0,
    padding: 5,
    alignItems: 'center',
  },

  footerLeft: {
    flex: 1,
  },

  footerRight: {
    flex: 1,
    marginEnd: 5,
  },

  texto: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  divider: {
    marginVertical: 2,
    backgroundColor: 'rgb(192, 192, 192)',
  },

  boton: {
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },

  body: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    resizeMode: 'contain',
    alignItems: 'center',
    marginTop: 10,
  },

  precio:{
    width:250,
    height: 250,
    
  },

  
});


