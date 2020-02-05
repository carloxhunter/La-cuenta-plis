import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import { Card, Input, Icon, Divider, Header, PricingCard, ListItem } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Video } from 'expo-av';

class RegisterScreen extends React.Component {
  saludo = () => {
    Alert.alert('Hola belleza!');
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/fondo.png')}
        style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.body}>
          <View style={styles.user}>
            <Input
              leftIcon={<FontAwesome name="user" size={20} color="white" />}
              label="Nombre de Usuario"
              placeholder=" Nombre Apellido"
              placeholderTextColor="white"
              maxLength={15}
              inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
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
            />
          </View>
          <View style={styles.user}>
            <Input
              secureTextEntry={true}
              leftIcon={<FontAwesome name="key" size={20} color="white" />}
              label="Confirmar contraseña"
              placeholder="*********"
              placeholderTextColor="white"
              maxLength={15}
              inputStyle={{ color: 'white', padding: 10, marginTop: 10 }}
            />
          </View>
        </View>

        <View style={styles.boton}>
          <Button color="#9ACD32" title="Registrar!" onPress={this.saludo} />
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
      </ImageBackground>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./assets/fondo.png')}
        style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
          </View>

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
                backgroundColor: '',
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
                backgroundColor: '',
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
      </ImageBackground>
    );
  }
}

class HomeScreen extends Component{
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
              title='VER' 
              onPress={() => this.props.navigation.navigate('Menú')}
              />
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

class MenuScreen extends Component{
  saludo = () => {Alert.alert('Hola belleza!') }
  render(){

    return(
      <ImageBackground source= { require('./assets/fondo.png')} style = {styles.container}>
      <ScrollView>
        <View style={styles.body}>
        <Header
          backgroundColor
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Nombre Mesero', style: { color: '#fff' } }}
          rightComponent={{ icon: 'exit-to-app', color: '#fff' }}
        />

        <PricingCard
          color="#A52A2A"
          title="Mojito"
          price = "$3000"
          info={['Tradicional','Sabores']}
          button={{ title: 'Agregar', icon: 'add-circle-outline' }}
          containerStyle = {styles.precio}
        />

        <PricingCard
          color="#A52A2A"
          title="Piña Colada"
          price = "$2500"
          info={['Tradicional','0% Alcohol']}
          button={{ title: 'Agregar', icon: 'add-circle-outline' }}
          containerStyle = {styles.precio}
        />
        
        </View>

        </ScrollView>
      </ImageBackground>

    )
  } 
}


const RootStack = createStackNavigator(
  {
    Ingresar: LoginScreen,
    Registrar: RegisterScreen,
    HomeMesero: HomeScreen,
    Menú: MenuScreen, 
  },
  {
    initialRouteName: 'Ingresar',
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
    marginTop: 25,
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
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  divider: {
    marginVertical: 2,
    backgroundColor: '#C0C0C0',
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
    textSize: 20,
  },

  
});
