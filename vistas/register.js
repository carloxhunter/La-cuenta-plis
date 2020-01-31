import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { Video } from 'expo-av';

function Separator() {
  return <View style={styles.separator} />;
}

class Prueba extends Component{
  saludo = () => {Alert.alert('Hola belleza!') }


  render(){

    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image source= { require('./assets/logo.png')} style = {styles.logo} />
        </View>

        <View style={styles.body}>
          <View style = {styles.user}>
            <View style = {styles.userLeft}>
              <Text style={styles.texto} > Nombre : </Text>
            </View>
            <View style = {styles.userRight}>
              <TextInput placeholder = "Nombre Usuario" placeholderTextColor = "white" maxLength = {15} style = {{ borderWidth : 2, borderColor : "white", borderRadius : 5, padding : 10, marginTop : 10, backgroundColor : '' }}></TextInput>
            </View>
          </View>
          <View style = {styles.user}>
            <View style = {styles.userLeft}>
              <Text style={styles.texto} > Contraseña : </Text>
            </View>
            <View style = {styles.userRight}>
              <TextInput placeholder = "Ingrese Contraseña" placeholderTextColor = "white" style = {{ borderWidth : 2, borderColor : "white", borderRadius : 5, padding : 10,  marginTop : 10, backgroundColor : '' }}></TextInput>
            </View>
          </View>
          <View style = {styles.user}>
            <View style = {styles.userLeft}>
                  <Text style={styles.texto} > Confirme Contraseña : </Text>
            </View>
            <View style = {styles.userRight}>
                  <TextInput placeholder = "Confirmar Contraseña" placeholderTextColor = "white" style = {{ borderWidth : 2, borderColor : "white", borderRadius : 5, padding : 10,  marginTop : 10, backgroundColor : '' }}></TextInput>
            </View>
          </View>
        </View>

        <View style = {styles.boton}>
          <Button color = '#9ACD32' title = "Registrar!" onPress = {this.saludo}/>
        </View>
      
        <Separator />
        
        <View style = {styles.footer}>

          <View style={styles.footerLeft}>
            <Text style={styles.texto} > Ya tienes cuenta? Inicia sesión haciendo click en Ingresar! </Text>
          </View>

          <View style={styles.footerRight}>
            <Button color = '#4682B4' title = "Ingresar!" onPress = {this.saludo} style = {styles.boton}/>
          </View>

        </View>
      </View>



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

  header: {
    flex: 0.3,
    flexDirection : 'row',
    marginTop : 25,
    padding: 5,
  },

  user: {
    flex: 0.5,
    flexDirection : 'row',
    marginTop : 10,
    padding: 5,
    alignItems : 'center'
  },

 userLeft: {
    flex : 1,
  },

  userRight: {
    flex : 1,
  },

  footer: {
    flex: 0.3,
    flexDirection : 'row',
    marginTop : 20,
    padding: 5,
    alignItems : 'center'
  },

  footerLeft: {
    flex : 1,
  },

  footerRight: {
    flex : 1,
    marginEnd : 10
  },

  texto :{
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  separator: {
    marginVertical: 2,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  boton : {
    borderRadius : 5,
    padding : 20,
    alignItems : 'center',
  },

  body: {
    flex : 1,
    alignItems : 'center'
  },

  logo:{
    resizeMode : 'contain',
    alignItems : 'center',
    marginTop : 10
  },

})


export default Prueba