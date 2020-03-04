import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FONDO, LOGO, HAM} from '../Images';
import * as SecureStore from 'expo-secure-store';

class Home2 extends Component<Props>{

  constructor(props){
    super(props);
    this.user_data=this.user_data.bind(this);
    this.state={
          nombreuser:'',
          firstname:'',
          lastname:'',
          localid:'',
          localname:'',
          idcurrentuser:'',
          tokencurrentuser:'',
          baseUrl:'http://192.168.43.157:4000'};
    
    //this.user_data();
    }
  
  async componentDidMount(){
    var that = this
    await that.user_data()
  }
  
  async  user_data(){ 
    var that = this;
    //that.state.tokencurrentuser = await SecureStore.getItemAsync('secure_token');
    var token =  await SecureStore.getItemAsync('secure_token');
    //that.state.idcurrentuser = await SecureStore.getItemAsync('id');
    var id = await SecureStore.getItemAsync('id');
    //console.log('token: '+this.state.tokencurrentuser+" iduser: "+this.state.idcurrentuser)
    //console.log(' ')
    var tokenstr = "Bearer "+token
    var url = this.state.baseUrl+"/users/"+id
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    //myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTU5ZjFhOWJiMDg4ZDM4NGIxYWM3YzAiLCJpYXQiOjE1ODMxMDgzNjh9.l6KfzRA2-2q_Qe9pGO2FKLh-sWHxKA-8NZMBzOh_KJE");
    myHeaders.append("Authorization", tokenstr);
    //var xxxx='yiro?'
  var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(async (result) => {
          console.log(result)


        //mala practica
        var token =  await SecureStore.getItemAsync('secure_token');
        var id = await SecureStore.getItemAsync('id');

          var username = JSON.parse(result).username
          var firstname = JSON.parse(result).firstName
          var lastname = JSON.parse(result).lastName
          var localid = JSON.parse(result).local

          if (typeof username === 'undefined' || username === null){
            console.log(' ')
            username=''
          }else {
            //that.setState({nombreuser:username})
            //that.state.nombreuser=username
            await SecureStore.setItemAsync('username', username)
            console.log(username)
          }
          if (typeof firstname === 'undefined' || firstname === null){
            console.log(' ')
            firstname=''
          }else {
            console.log(firstname)
            //that.setState({firstname:firstname})
            //that.state.firstname=firstname
            }
          if (typeof lastname === 'undefined' || lastname === null){
            console.log(' ')
            lastname=''
          }else {
            console.log(lastname)
            //that.setState({lastname:lastname})
            //that.state.lastname=lastname
          }
          if (typeof localid === 'undefined' || localid === null){
            console.log(' ')
            localid=''
          }else {
            console.log(localid)
            await SecureStore.setItemAsync('localid', localid)
            //that.state.localid=localid
            }

          that.setState({nombreuser:username, firstname:firstname, lastname:lastname,
          localid:localid,localname:'',idcurrentuser:id, tokencurrentuser:token})
          //console.log(data)
          
          
          })
        .catch(error => console.log('error', error));


  }







  render(){
    var state = this.state
    console.log(state)
    
    return(
      
      <View style={styles.container} >
        <Image
        style={StyleSheet.absoluteFill}
        source={FONDO}
      />
      <Header
          backgroundColor='rgba(192, 192, 192, 0)'
          leftComponent={{ icon: 'settings', color: '#fff' }}
          centerComponent={{ text: this.state.nombreuser, style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'exit-to-app', color: '#fff', onPress:() => this.props.navigation.navigate('Ingresar') }} 
      />

  

      <ScrollView>
        
        <View style={styles.body}>
        <Image 
        style={{ justifyContent : 'center'}}
        source={LOGO} 
        />
        </View>
          <Text style={styles.welcome}>
          {'Bienvenido '+this.state.nombreuser}
        </Text>
        <Text style={styles.instructions}>
          {'¿Listo para la jornada de hoy?'}
        </Text>
        <Text style={styles.instructions}>
          {this.state.firstname+' '+this.state.lastname}
        </Text>

        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image 
        source={HAM} 
        />
            </View>

        
        
        </ScrollView>

        

      <View style={{borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    fontSize: 15}}>
            <Button
              color="#4682B4"
              title="Ir a local!"
              onPress={() => {
                if(this.state.localid =='') Alert.alert("No tiene un local asociado")
                else {this.props.navigation.navigate('HomeMesero')}}
              
              }
             
            />
          </View>


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
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },



  
});


export default Home2