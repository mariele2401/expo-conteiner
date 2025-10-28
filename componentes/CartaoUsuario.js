import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native;"

export default function CartaoUsuario({ nome, descricao, imagem }) {
    return (
        <View style={estilo.cartao}>
            <Image source={{ uri.imagem }} style={estilo.foto} />
            <Text style={estilos.nome}>{nome} </Text>
            <Text style={estilo.descricao}>{descricao}</Text>
        </View>
    )
}

const estilos = StyleSheet.creat({
    cartao{
        BackgroundColor:'#fff',
        paddig:16,
        marginTop:15,
        borderRadius:10,
        alignItens:'center'
        shadowColor:'#000'
        shadowOpacity:0,1,
        shadowOffset:(width:0,height:2),
        shadowRadius:5,
        
    }
})
