import React, { FC } from "react"
import { View, Text } from "react-native"

interface Datum {
    codigoUniversitario: number;
    itemEstamento: number;
    tipo: number;
    idPtaDependenciaFijo: number;
    idDependencia: number;
    escuela: string;
    semestres: Semestre[];
}

 interface Semestre {
    idSemestre: number;
    semestre: string;
    observacion: string;
}
interface Props{
    dataa :Datum
}
export const Semestres:FC<Props> = ({ dataa }) => {

    if(dataa==null) return <Text>Cargandin</Text>
  return (
    <View style={{height:150}}>
        <Text>{dataa.codigoUniversitario}</Text>
        <Text>{dataa.escuela}</Text>
        <Text>{dataa.idPtaDependenciaFijo}</Text>
        <Text>{dataa.itemEstamento}</Text>
        <Text>{dataa.tipo}</Text>


        {
            dataa.semestres.map(ra=>(<Text style={{padding:2, backgroundColor:'blue',margin:2, color:'white'}} key={ra.idSemestre}>{ra.observacion}</Text>))
        }
    </View>
  )
}
