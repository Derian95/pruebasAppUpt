import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {useState, useEffect, useMemo} from 'react'
import {Modal} from './components/Modal'
import { Semestres } from './components/Semestres';
// interface CodigosEstudiantes{
//   data:Codigos[]
// }

// interface Codigos{
//   codigoUniversitario:string
//   itemEstamento:number
//   tipo:number
//   idPtaDependenciaFijo:number
//   idDependencia:number
//   escuela:string
//   semestres:Semestres[]
// }

// interface Semestres{
//   idSemestre:number
//   semestre:string
//   observacion:string
// }


  export interface Semestre {
      idSemestre: number;
      semestre: string;
      observacion: string;
  }

  export interface Datum {
      codigoUniversitario: number;
      itemEstamento: number;
      tipo: number;
      idPtaDependenciaFijo: number;
      idDependencia: number;
      escuela: string;
      semestres: Semestre[];
  }

  export interface RootObject {
      data: Datum[];
      success: boolean;
      mensajeError?: any;
  }

export default function App() {
  const [codigos, setData] = useState<RootObject>()
  const [newSemes, setNewSemes] = useState<Semestre[]>()
  const [modal, setModal] = useState(false)
  const [currentNumber, setCurrentNumbee] = useState<number>(0)

  const codes=useMemo(() => codigos?.data.map(sd=>(sd.codigoUniversitario)), [codigos])
 
  const newSem =()=>{
    axios.post('http://172.30.101.46:9090/api/estudiante/semestresestudiados',{codigoUniversitario:2017058960,itemEstamento:1}).then(response =>{
      //console.log(JSON.stringify(response))
      //console.log(response)
      console.log("COMO1")
      console.log(response.data.data)
      setNewSemes(response.data.data)

    }).catch(error=> console.log(error))
  }


  useEffect(() => {
    axios.get('http://172.30.101.46:9090/api/estudiante/codigos/2010037630').then(response =>{
      //console.log(JSON.stringify(response))
      //console.log(response)
      console.log("COMO")
      setCurrentNumbee(response.data.data[0].codigoUniversitario )
    setData(response.data)

    }).catch(error=> console.log(error))

    newSem()
    //setData(result)
    
   // getMoviesFromApi()


    

  }, [])

  
  
 // console.log(data)
  //console.log(codigos)
  //console.log("RAAAAAAAAAAAAAA")
  console.log(currentNumber)
  console.log('newSemes')
  console.log(newSemes)
  
  return (
    <View style={styles.container}>
     <Button
     title='chompiras'
     onPress={()=>setModal(prev=> !prev)}
     />


       <Semestres dataa={codigos?.data[0] as Datum} /> 
      <Modal show={modal} codigos={codes} current={currentNumber }/>
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical:50,
    marginTop:10,
    
  },
});
