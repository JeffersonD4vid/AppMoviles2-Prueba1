import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Informacion( props: any) {


    return (
      <View>
        <Text>{props.data.autoID}</Text>
        <Text>{props.data.amount}</Text>
        <Text>{props.data.comment}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({})