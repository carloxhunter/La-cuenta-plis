import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class PedidosScreen extends Component{
    saludo = () => {Alert.alert('Hola belleza!') }
    render(){
    
      return(
        <View style={styles.container} >
        <Header
            backgroundColor='rgba(192, 192, 192, 0)'
            leftComponent={{ icon: 'settings', color: '#fff' }}
            centerComponent={{ text: 'Nombre Mesero', style: { color: '#fff' } }}
            rightComponent={{ icon: 'exit-to-app', color: '#fff' }}
        />

        <ScrollView>
          <View style={styles.body}>
          </View>
            <Card title="Pedido" containerStyle = {styles.card}>
              <View style={styles.user}>
                  <Input
                    label="Nombre de Cliente"
                    placeholder=" Nombre Apellido"
                    placeholderTextColor="silver"
                    maxLength={15}
                    inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
                  />
              </View>
              <Button
                color='#631B33'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='INGRESAR' />
            </Card>
            <View style={styles.body}>
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
  
  
  export default PedidosScreen