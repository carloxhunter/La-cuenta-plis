import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO} from '../Images';
import * as SecureStore from 'expo-secure-store';

class HomeScreen extends Component{
  //saludo = () => {Alert.alert('Hola belleza!') }
          constructor(props){
    super(props);
    this.local_data=this.local_data.bind(this);
    this.state={
          nombreuser:'',
          localid:'',
          localname:'',
          idcurrentuser:'',
          tokencurrentuser:'',
          desc:'',
          loc:'',
          baseUrl:'http://192.168.0.10:4000'};
    
    //this.user_data();
    }


  async componentDidMount(){
    var that = this
    await that.local_data()
  }


async local_data(){
  var that = this
  var token =  await SecureStore.getItemAsync('secure_token');
  var iduser = await SecureStore.getItemAsync('id');
  var username = await SecureStore.getItemAsync('username');
  var localid = await SecureStore.getItemAsync('localid');

  console.log(token+" "+iduser+" "+username+" "+localid)

 var url = this.state.baseUrl+"/locals/"+localid


var tokenstr = "Bearer "+token
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", tokenstr);

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.text())
  .then(async (result) => {
    console.log(result)
    var localname = JSON.parse(result).Local.localName
    var localdes = JSON.parse(result).Local.localDes
    var localloc = JSON.parse(result).Local.localLoc

    console.log(localname+localdes+localloc)

    if (typeof localname === 'undefined' || localname === null)localname=''
    if (typeof localdes === 'undefined' || localdes === null)localdes=''
    if (typeof localloc === 'undefined' || localloc === null)localloc=''


  //malapractica
  var username = await SecureStore.getItemAsync('username');
  var localid = await SecureStore.getItemAsync('localid');



    that.setState({nombreuser:username, localid:localid, localname:localname,
 idcurrentuser:iduser, tokencurrentuser:token,
 desc:localdes, loc:localloc})
    
    })
  
  
  
  .catch(error => console.log('error', error));






}



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
          centerComponent={{ text: this.state.nombreuser, style: { color: '#fff' } }}
          rightComponent={{ icon: 'exit-to-app', color: '#fff' }}
      />
      <ScrollView>
        
        <View style={styles.body}>
        
          <Text style={styles.welcome}>
          {this.state.localname}
        </Text>
        <Text style={styles.instructions}>
          {this.state.desc}
        </Text>
        <Text style={styles.instructions}>
          {'Visitanos en: '+this.state.loc}
        </Text>


        </View>
          <Card title="Menú" containerStyle = {styles.card}>
             <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER' 
              onPress={() => this.props.navigation.navigate('Menu2')}
              />
          </Card>
          <Card title="Pedidos" containerStyle = {styles.card}>
            <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER'
              onPress={() => this.props.navigation.navigate('Pedidos')}
              />

          </Card>
          <Card title="Promociones del Día" containerStyle = {styles.card}>
            <Button
              color='#631B33'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VER'
              onPress={() => this.props.navigation.navigate('Promociones')}
              /> 
          </Card>
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
   welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },

  
});


export default HomeScreen