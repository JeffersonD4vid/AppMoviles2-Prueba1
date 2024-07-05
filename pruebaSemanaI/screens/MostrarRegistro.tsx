import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set, onValue, update, remove} from "firebase/database";
import { db } from '../config/Config';
import Informacion from '../components/Informacion';

export default function MostrarRegistro() {

  const [lista, setlista] = useState("");


  //FUNCION MOSTRAR
  function leer (){

    const starCountRef = ref(db, 'autos/');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data)

    //Cambio de formato
    const listaTemp : any = Object.keys(data).map( (key) => ({
        key, ...data[key]
    }))

    //console.log(listaTemp);
    setlista(listaTemp)

});


  

}

  return (
    <View style={styles.content}>

      <Text style={{color:'#ffd', fontSize:40, fontWeight:400}}>Lista de autos</Text>
      <FlatList 
        data={lista}
        renderItem={ ( { item }: any) =>
          <View>
            <Informacion data={item}/>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex:1,
    backgroundColor:'#4F9B59',
    alignItems:'center',
    justifyContent:'center'
  }
})