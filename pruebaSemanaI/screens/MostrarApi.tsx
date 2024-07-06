import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import InformacionApi from '../components/InformacionApi';


export default function MostrarApi() {


  const [data, setdata] = useState([])
  const API_MOVIE= "https://jritsqmet.github.io/web-api/series.json";

  useEffect(() => {
    fetch (API_MOVIE)
    .then( response => response.json())
    .then( datos => setdata(datos))
    .catch ( error => console.log(error) )  
  }, [])



  
  return (
    <View >
      <Text style={{color:'#000', fontSize:45, fontWeight:700, textAlign:'center', backgroundColor:'#024'}}>Peliculas</Text>
        <FlatList 
          data={data.series}
          renderItem={ ( { item }) =>
          <InformacionApi data={item} />
          }
        />

    </View>
  )
}

const styles = StyleSheet.create({

})