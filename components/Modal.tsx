import React, { FC } from "react"
import { View, StyleSheet, Text } from "react-native"


interface Props{
    codigos?:number[]
    show:boolean
}
export const Modal:FC<Props> = ({ codigos, show }) => {
    console.log(codigos)

    const data = JSON.stringify(codigos)
  return (
    <View style={show? styles.unshow: styles.show}>

        {
            codigos?.map(asd=>(<Text key={asd}>{asd}</Text>))
        }
    </View>
  )
}




const styles = StyleSheet.create({
    show: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100,
      width:150
    },
    unshow:{
        display:'none'
    }
  });
  