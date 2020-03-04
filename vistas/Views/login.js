import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO} from '../Images';
import * as SecureStore from 'expo-secure-store';

class LoginScreen extends React.Component<Props> {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.state = {username: '',
                  password:'',
                  tokentest:'',
                  baseUrl: 'http://192.168.43.157:4000/users/authenticate' };


  }

   onClickListener = async (viewId) => {
    //console.log("mm")
    if(this.state.username || this.state.username != ""){
      if(this.state.password || this.state.password != ""){
        //console.log("turko")
        
            await this.login()
            
  
         
      
        //this.props.navigation.navigate('Homefunct')
      }else{Alert.alert("password");}
  }else {Alert.alert("username");}}







  async login(){
    var that = this;
    var url = that.state.baseUrl;
    console.log(url);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":that.state.username,"password":that.state.password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then( async(result) => {
        
        var tokenfield = JSON.parse(result).token
        //var tokenstr = JSON.stringify(tokenfield)
        //console.log("result: "+result+" tokenfield: "+tokenfield+" tokenstr: "+tokenstr);
        if(typeof tokenfield === 'undefined' || tokenfield === null){
          console.log("error")
          Alert.alert("Error")
        }
        else{
        //var tokenfield = JSON.parse(result).token
        //console.log(result)
        //var tokenstr = JSON.stringify(tokenfield)
        //Alert.alert(tokenstr)
        
        //console.log(tokenfield)
        //console.log("yiro"+tokenstr+"pata")
        
          var idfield = JSON.parse(result).id
          console.log(idfield+" "+typeof idfield)
         await SecureStore.setItemAsync('secure_token',tokenfield)
        await SecureStore.setItemAsync('id', idfield)
        
        
        
        //const token = await SecureStore.getItemAsync('secure_token');
        //console.log("yiro"+tokenstr+"pata")
        //that.state.tokentest=tokenfield
          that.setState({tokentest:tokenfield})
          Alert.alert(
            'Su Token es',
            tokenfield, // <- this part is optional, you can pass an empty string
            [
              {text: 'Ir a Home', onPress: () => this.props.navigation.navigate('Homefunct')},
            ],
            {cancelable: false},
          );
        }



      })
      .catch(error => {
        Alert.alert("Error")
        console.log('error', error)});


  }


/*
onPress={() => this.props.navigation.navigate('Homefunct')} />
*/

 /* this.onClickListener
                //var that = this;
                console.log("yiro")
                 
                 console.log(this.state.tokentest)
                const token =  SecureStore.getItemAsync('secure_token');
                //Alert.alert("Token",that.state.tokentest, [{title:"ok",
                //onPress:()=> that.props.navigation.navigate("Homefunct")}])
              }*/



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
                fontSize:20,
                color:'white',
                backgroundColor: 'rgba(192, 192, 192, 0.1)',
              }}
              onChangeText={(username) => this.setState({username})}
            />
          </View>

          <View style={styles.user}>
            <FontAwesome name="key" size={50} color="white" />
            <TextInput
            secureTextEntry={true}
              placeholder="Ingrese Contraseña"
              placeholderTextColor="white"
              
              inputStyle={{ color: 'white', padding: 10, marginTop: 10, textSize:20 }}
              style={{
                fontSize:20,
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                padding: 10,
                marginStart: 10,
                marginTop: 10,
                color:'white',
                backgroundColor: 'rgba(192, 192, 192, 0.1)',
                
              }}
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>
        <View style={styles.boton}>
          <Button color="#9ACD32" title="Ingresar!" 
              onPress= {  this.onClickListener}/>

    


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