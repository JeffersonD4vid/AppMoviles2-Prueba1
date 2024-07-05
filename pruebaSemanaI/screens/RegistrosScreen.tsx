import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

//FIREBASE
import { db } from "../config/Config";
import { ref, set } from "firebase/database";





export default function RegistrosScreen() {

  const [autoID, setautoId] = useState("");
  const [monto, setmonto] = useState("}");
  const [categoria, setcategoria] = useState("");
  const [descripcion, setdescripcion] = useState("")


  //FUNCION GUARDAR
  function guardarRegistro(autoID:string, monto:string, categoria:string, descripcion:string) {
   
    try {
      set(ref(db, 'autos/' + autoID), {
        amount: monto,
        category: categoria,
        description : descripcion
      });
      Alert.alert("Menasaje", "Se agregado el registro correctamente")
    
    } catch (error) {
      console.log(error);
      
    }
  
    setautoId("")
    setmonto("")
    setcategoria("")
    setdescripcion("")
  }

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-photo/off-road-car-wilderness_23-2151483062.jpg?t=st=1720138801~exp=1720142401~hmac=5d9c4b2d8c59d039853f37feb8d94cf4028fe835c5ce2394c3ba8c573e467300&w=360",
      }}
      style={styles.content}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "800",
          marginBottom: 70,
        }}
      >
        Registro de Autos
      </Text>
      <View
        style={{
          height: 300,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          style={styles.inputTxt}
          placeholder="Ingrese el ID"
          placeholderTextColor={"#fff"}
          onChangeText={(texto)=>setautoId(texto)}
          value={autoID}
        />
        <TextInput
          style={styles.inputTxt}
          placeholder="Ingresar el monto"
          placeholderTextColor={"#fff"}
          onChangeText={(texto)=>setmonto(texto)}
          value={monto}


        />
        <TextInput
          style={styles.inputTxt}
          placeholder="Categoria"
          placeholderTextColor={"#fff"}
          onChangeText={(texto)=>setcategoria(texto)}
          value={categoria}

        />
        <TextInput
          style={styles.inputTxt}
          placeholder="Descripcion"
          placeholderTextColor={"#fff"}
          onChangeText={(texto)=>setdescripcion(texto)}
          value={descripcion}

        />
      </View>

      <TouchableOpacity style={styles.btn} 
                        onPress={()=>guardarRegistro(autoID, monto, categoria, descripcion)}>
        <Text style={styles.btnTxt}>Registrar</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  inputTxt: {
    backgroundColor: "#0005",
    height: 50,
    width: "80%",
    borderRadius: 20,
    textAlign: "center",
    color:'#fff'
  },

  btn:{
    width:'50%',
    height:50,
    borderRadius:40,
    backgroundColor:'#32DEB4',
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,

  },

  btnTxt:{
    textAlign:'center',
    fontWeight:'500',
    fontSize:20
  }
  
});
