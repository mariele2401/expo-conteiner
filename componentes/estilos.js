import { StyleSheet } from "react-native;";

export const estilo = StyleSheet.create({
    cartao: {
        backgroundColor: '#fff',
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
});
