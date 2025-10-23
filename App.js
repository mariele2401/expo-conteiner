import React from "react";
import {ScrollView} from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from "./componentes/Saudacao";

export default function App(){
  return(
    <ScrollView style={{padding:20}}>
     <Titulo />
     <Saudacao nome="Mariele"/>
     <Saudacao nome="Nicole"/>
     <Saudacao nome="Naty"/>
     <Saudacao nome="Manu"/>
    </ScrollView>
  )
}