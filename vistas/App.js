import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { Video } from 'expo-av';

class Prueba extends Component{
  saludo = () => {Alert.alert('Hola belleza!') }


  render(){

    return(
      <ImageBackground source= { require('./assets/sakura.jpg')} style = {styles.container}>
        <ScrollView>
        <View style = {styles.header}>

          <View style={styles.headerLeft}>
            <Image source= { require('./assets/snack-icon.png')} style = {styles.logo} />
          </View>

          <View style={styles.headerRight}>
            <Button title = "Login" onPress = {this.saludo} style = {styles.boton}/>
          </View>

        </View>

        <View style={[styles.body, styles.negrita]}>
          <TouchableOpacity>
            <Text> "LaCuentaPlis!" </Text>
            <TextInput placeholder = "Ingrese Usuario" placeholderTextColor = "white" maxLength = {15} style = {{ borderWidth : 1, borderColor : "black", padding : 5, marginTop : 10, backgroundColor : 'pink' }}></TextInput>

            <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay={false}
              useNativeControls={true}
              isLooping
              style={{ width: 300, height: 300 }}
            />

          </TouchableOpacity>
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />
          <Image source= { require('./assets/Shaoran.PNG')} style = {styles.logo} />

        </View>
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
    marginTop : 25
  },

  header: {
    flex: 0.4,
    flexDirection : 'row',
    marginTop : 25,
    padding: 5
  },

  headerLeft: {
    flex : 1,
    //backgroundColor : 'white'
  },

  headerRight: {
    flex : 1,
    //backgroundColor : 'white'
  },

  negrita:{
    fontWeight : 'bold'
  },

  boton : {
    backgroundColor : 'pink',
    borderRadius : 5,
    padding : 20
  },

  body: {
    flex : 1,
    //backgroundColor : 'white',
    alignItems : 'center'
  },

  logo:{
    width : 100,
    height : 100,
    borderRadius : 50,
    resizeMode : 'contain',
    alignItems : 'center'
  },


})


export default Prueba