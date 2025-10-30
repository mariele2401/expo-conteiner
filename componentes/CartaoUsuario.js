import React from "react";
import { View, Text, Image } from "react-native;"
import  estilo from '../style/style';
import fotos from '..;img/foto';

export default function CartaoUsuario({ nome, descricao, img }) {
    return (
        <View style={estilo.cartao}>
            <Image source={fotos[img]} style={estilo.foto} />
            <Text style={estilo.nome}>{nome} </Text>
            <Text style={estilo.descricao}>{descricao}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({

    caryao: {
        backgroundColor: '#e1f7f7',
        padding: 16,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    foto: { width: 80, height: 80, borderRadius: 40, marginBottom: 10, },
    nome: { fontSize: 18, fontWeight: 'bold' },
    descricao: { fontSize: 14, color: '#555', textAlign: 'center' },
})