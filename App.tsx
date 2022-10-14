import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Modal} from './components/Modal'
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
  const [modal, setModal] = useState(false)

 
  useEffect(() => {
    axios.get('http://172.30.101.46:9090/api/estudiante/codigos/2010037630').then(response =>{
      console.log(JSON.stringify(response))
      console.log(response)
    setData(response.data)

    }).catch(error=> console.log(error))

    
    //setData(result)
    
   // getMoviesFromApi()


    

  }, [])

  
  const lol =codigos?.data.map(sd=>(sd.codigoUniversitario))
  
 // console.log(data)
  console.log(codigos)
  //console.log(lol)
  
  return (
    <View style={styles.container}>
     <Button
     title='chompiras'
     onPress={()=>setModal(prev=> !prev)}
     />

      <Modal show={modal} codigos={lol}/>
      <FlatList
      keyExtractor={item => item.codigoUniversitario.toString()}
      renderItem={item => <Text>{item.item.codigoUniversitario}</Text>}
      data={codigos?.data}

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
});
