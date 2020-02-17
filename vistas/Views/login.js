import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO} from '../Images';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Image
        style={StyleSheet.absoluteFill}
        source={FONDO}
      />
        <Header
          backgroundColor='rgba(192, 192, 192, 0)'
          centerComponent={{ text: 'Iniciar Sesión', style: { color: '#fff', fontWeight: 'bold'} }}
        />
        <View style={styles.body}>
          <Image 
          style={{ justifyContent : 'center'}}
          source={LOGO} 
          />
          

          <View style={styles.user}>
            <FontAwesome name="user" size={50} color="white" />
            <TextInput
              placeholder="Ingrese Usuario"
              placeholderTextColor="white"
              maxLength={15}
              style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                padding: 10,
                marginStart: 10,
                marginTop: 10,
                backgroundColor: 'rgba(192, 192, 192, 0.1)',
              }}
            />
          </View>

          <View style={styles.user}>
            <FontAwesome name="key" size={50} color="white" />
            <TextInput
              placeholder="Ingrese Contraseña"
              placeholderTextColor="white"
              style={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                padding: 10,
                marginStart: 10,
                marginTop: 10,
                backgroundColor: 'rgba(192, 192, 192, 0.1)',
              }}
            />
          </View>
        </View>
        <View style={styles.boton}>
          <Button color="#9ACD32" title="Ingresar!" 
              onPress={() => this.props.navigation.navigate('HomeMesero')} />
        </View>

        <Divider style={styles.divider} />

        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={styles.texto}>
              {' '}
              Nuevo? Crea tu usuario haciendo click en Registrarse!{' '}
            </Text>
          </View>

          <View style={styles.footerRight}>
            <Button
              color="#4682B4"
              title="Registrarse!"
              onPress={() => this.props.navigation.navigate('Registrar')}
              style={styles.boton}
            />
          </View>
        </View>
      </View>
    );
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
    marginStart: 20,
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


export default LoginScreen