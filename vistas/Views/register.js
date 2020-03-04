import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO} from '../Images';

//var _this = this;

class RegisterScreen extends React.Component<Props> {
  
  //constructor con states (variables de estado de la clase q en este caso es la pantalla de registro)
  
  constructor(props) {
    super(props);
     this.register = this.register.bind(this);
     this.state = {username: '',
                  password:'',
                  firstName:'',
                  lastName:'',
                  baseUrl: 'http://192.168.0.10:4000/users/register' };
 
    }
 
    
      //listener el boton
      onClickListener = async (viewId) => {
        //Alert.alert(this.state.username+" "+this.state.password , "View_id "+viewId);
        if(this.state.username || this.state.username != ""){
          if(this.state.password || this.state.password!=""){
              if((this.state.firstName || this.state.firstName != "") && (this.state.lastName || this.state.lastName != "")){
                await this.register();
              //this.props.navigation.navigate('Ingresar')
              }else{
                Alert.alert("firstname or lastname");
              }
          }else{
          Alert.alert("password");
        }
        
      }else{
    Alert.alert("Please enter username");
  }
  }

    async register(){
      //Alert.alert('yirousername: '+this.state.username);
      
      var that = this;
      var url = that.state.baseUrl;
      console.log(url);
  
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"firstName":that.state.firstName,"lastName":that.state.lastName,"username":that.state.username,"password":that.state.password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(url , requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        //if(result == '{}') Alert.alert('Registro exitoso')
        //else Alert.alert(result)})
        if(result== '{}'){
        Alert.alert(
            'Registro exitoso',
            "", // <- this part is optional, you can pass an empty string
            [
              {text: 'Ir a Login', onPress: () => this.props.navigation.navigate('Ingresar')},
            ],
            {cancelable: false},
          );
        }
        else Alert.alert(result)

      })
      .catch(error => console.log('error', error));
        
        

  }
 



  
  
  
  saludo = () => {
    Alert.alert('Hola belleza!');
  }

  render() {
    return (
      <View style={styles.container} >
        <Image
        style={StyleSheet.absoluteFill}
        source={FONDO}
      />
        <Header
          backgroundColor='rgba(192, 192, 192, 0)'
          centerComponent={{ text: 'Registrarse', style: { color: '#fff', fontWeight: 'bold'} }}
        />
        <View style={styles.body}>
        <Image 
        style={{ justifyContent : 'center'}}
        source={LOGO} 
        />
        </View>
        <View style={styles.body}>
        <View style={styles.user}>
            <Input
                leftIcon={<FontAwesome name="user" size={20} color="white" />}
                label="Usuario"
                placeholder=" Nombre Usuario"
                placeholderTextColor="white"
                maxLength={15}
                inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
                onChangeText={(username) => this.setState({username})}
              />
          </View>

          <View style={styles.user}>
            <Input
              leftIcon={<FontAwesome name="user" size={20} color="white" />}
              label="Nombre"
              placeholder=" Nombre "
              placeholderTextColor="white"
              maxLength={15}
              inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
              onChangeText={(firstName) => this.setState({firstName})}
            />
          </View>

          <View style={styles.user}>
            <Input
              leftIcon={<FontAwesome name="user" size={20} color="white" />}
              label="Apellido"
              placeholder=" Apellido "
              placeholderTextColor="white"
              maxLength={15}
              inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
              onChangeText={(lastName) => this.setState({lastName})}
            />
          </View>

          <View style={styles.user}>
            <Input
              secureTextEntry={true}
              leftIcon={<FontAwesome name="key" size={20} color="white" />}
              label="Contraseña"
              placeholder="*********"
              placeholderTextColor="white"
              maxLength={15}
              inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>



        
        <View style={styles.boton}>
          <Button color="#9ACD32" title="Registrar!" onPress={this.onClickListener} />
        </View>



        
        <Divider style={styles.divider} />
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={styles.texto}>
              {' '}
              Ya tienes cuenta? Inicia sesión haciendo click en Ingresar!{' '}
            </Text>
          </View>

          <View style={styles.footerRight}>
            <Button
              color="#4682B4"
              title="Ingresar!"
              onPress={() => this.props.navigation.navigate('Ingresar')}
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
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
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
    padding: 25,
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


export default RegisterScreen