import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList} from 'react-native';
import { Video } from 'expo-av';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem} from 'react-native-elements';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

class Prueba extends Component{
  saludo = () => {Alert.alert('Hola belleza!') }
  render(){
  
    return(
      <ImageBackground source= { require('./assets/fondo.png')} style = {styles.container}>
      <ScrollView>
        <Header
          backgroundColor
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Nombre Mesero', style: { color: '#fff' } }}
          rightComponent={{ icon: 'exit-to-app', color: '#fff' }}
        />
        <View style={styles.body}>
        </View>
          <Card title="Menú" containerStyle = {styles.card}>
             <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER' />
          </Card>
          <Card title="Mesas" containerStyle = {styles.card}>
            <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER' />
          </Card>
          <Card title="Promociones del Día" containerStyle = {styles.card}>
            <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER' /> 
          </Card>
        </ScrollView>
      </ImageBackground>
    )
  } 
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent : 'center',
    flexDirection : 'column',
    marginTop : 25,
    backgroundColor : '#A52A2A'
  },

  body: {
    flex : 1,
    alignItems : 'center'
  },

  card:{
    marginStart: 80,
    width:200,
    height:120,
  },

})


export default Prueba