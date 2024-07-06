import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";



export default function InformacionApi(props: any) {

  console.log(props.data);


  type Juegos ={
    name: string,
    description:string,
    image:string,
  }

  function informacion( juegos: Juegos ){
    Alert.alert("Información", `${juegos.name}\n${props.data.metadata.temporada}`);
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.contenData} 
        onPress={()=>informacion(props.data)}
        >
        <Text style={{color:'#000', fontSize:20, fontWeight:'600'}}>{props.data.titulo}</Text>
        <Image style={styles.img} source={{ uri: props.data.info.imagen }} />
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd",
  },

  contenData: {
    flex: 2,
    backgroundColor: "#0199",
    padding: 20,
    width: "80%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:24,
  },

  img: {
    height: 100,
    width: 100,
    resizeMode: "center",
  },
});
