import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Input, Divider } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.boton}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

class LoginScreen extends React.Component {
  saludo = () => {
    Alert.alert('Hola belleza!');
  };

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
          <Button color="#9ACD32" title="Ingresar!" onPress={this.saludo} />
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
              onPress={() => this.props.navigation.navigate('Register')}
              style={styles.boton}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'Login',
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
});
