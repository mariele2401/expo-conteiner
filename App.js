import React from "react";
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/CartaoUsuario"
import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App() {
  return <ScrollView >
    <Titulo />
    <Saudacao nome='Mariele' />
    <FotoPerfil />

    <CartaoUsuario
      nome='Marcela'
      descricao='Programador Mobile'
      img='perfil100'
      />
      
      <CartaoUsuario
      nome='Suzana'
      descricao='Depertamento de TI'
      img='perfil101'
      />
      
  </ScrollView>

}