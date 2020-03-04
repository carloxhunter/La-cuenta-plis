import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { Video } from 'expo-av';
import { Card, Input, Icon, Divider, Header,PricingCard } from 'react-native-elements';
import {FontAwesome} from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO} from '../Images';

class MenuScreen extends Component{
  saludo = () => {Alert.alert('Hola belleza!') }
  render(){

    return(
      <View style={styles.container} >
        <Image
        style={StyleSheet.absoluteFill}
        source={FONDO}
      />
      <Header
          backgroundColor='rgba(192, 192, 192, 0)'
          leftComponent={{ icon: 'settings', color: '#fff' }}
          centerComponent={{ text: 'Nombre Mesero', style: { color: '#fff' } }}
          rightComponent={{ icon: 'exit-to-app', color: '#fff' }}
      />
      <ScrollView>
      <View style={styles.body}>
        <Image 
        style={{ justifyContent : 'center'}}
        source={LOGO} 
        />
        </View>
      
        <View style={styles.body}>
        

        <PricingCard
          color="#631B33"
          title="Mojito"
          price = "$3000"
          info={['Tradicional','Sabores']}
          button={{ title: 'Modificar', icon: 'add-circle-outline' }}
          containerStyle = {styles.precio}
        />

        <PricingCard
          color="#631B33"
          title="Piña Colada"
          price = "$2500"
          info={['Tradicional','0% Alcohol']}
          button={{ title: 'Modificar', icon: 'add-circle-outline' }}
          containerStyle = {styles.precio}
        />
        
        </View>

        </ScrollView>
      </View>

    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor:'#631B33',
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


export default MenuScreen