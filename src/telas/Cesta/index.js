import React from "react";
import {StyleSheet, FlatList, View, ScrollView } from 'react-native';

import Detalhes from "./componentes/detalhes";
import Topo from'./componentes/topo';
import Item from './componentes/item'
import Texto from '../../componentes/texto'

export default function Cesta({ topo, detalhes, itens }) {
    return <>        
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <> 
                <Topo {...topo} />
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>               
                </View>                    
            </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 30,
        lineHeight: 32
    }
});