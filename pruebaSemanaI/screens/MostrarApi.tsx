import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function MostrarApi() {


  const [data, setdata] = useState([])
  const API_MOVIE= "";

  useEffect(() => {
    fetch (API_MOVIE)
    .then( response => response.json())
    .then( datos => setdata(datos))
    .catch ( error => console.log(error) )  
  }, [])
  
  return (
    <View>
      
    </View>
  )
}

const styles = StyleSheet.create({})