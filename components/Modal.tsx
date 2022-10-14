import React, { FC } from "react"
import { View, StyleSheet, Text, Button } from "react-native"


interface Props{
    codigos?:number[]
    show:boolean
    current:number
}
export const Modal:FC<Props> = ({ codigos, show, current }) => {
    console.log(codigos)

  return (
    <View style={show? styles.show: styles.unshow}>
        {
            codigos?.map(asd=>(<Button key={asd} disabled={current==asd ? true: false} title={asd.toString()}  onPress={()=>alert(`cambiaste al codigo ${asd} `)} />))
        }
    </View>
  )
}




const styles = StyleSheet.create({
    show: {
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      width:150,
      height:150,
      position:'absolute',
      left:0,
      top:40
    },
    unshow:{
        display:'none'
    }
  });
  