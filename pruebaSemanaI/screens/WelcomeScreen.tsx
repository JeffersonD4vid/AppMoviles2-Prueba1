import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any) {
  return (
    <ImageBackground 
    source={{uri:"https://img.freepik.com/free-photo/off-road-car-wilderness_23-2151483062.jpg?t=st=1720138801~exp=1720142401~hmac=5d9c4b2d8c59d039853f37feb8d94cf4028fe835c5ce2394c3ba8c573e467300&w=360"}}
    style={styles.imgBackground}
    >

      <Text style={{ color:'#63D8E8', fontSize:40, fontWeight:'bold' }}>Jefferson Malan</Text>
  

      <TouchableOpacity style={styles.button} 
                        onPress={()=> navigation.navigate('BottomTab')}
                        >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

  </ImageBackground>
  )
}

const styles = StyleSheet.create({

    imgBackground:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'


    },

    button:{
        backgroundColor:'#0df2c9',
        borderRadius:20,
        padding:10,
        width:'50%',
        marginTop:60
      },
    
      buttonText:{
        color:'#000',
        fontSize:22,
        textAlign:'center',
        fontWeight:'600'
    }
})