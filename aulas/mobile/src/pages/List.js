import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, AsyncStorage, Image, StyleSheet } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png'

export default function List() {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
       AsyncStorage.getItem('techs').then(storagedTechs => {
           const techsArray = storagedTechs.indexOf(',') != -1 ? storagedTechs.split(',').map(tech => {
               tech.trim();
           }) : [storagedTechs];

           setTechs(techsArray);
       });
    }, []);

    //Mapear as tecnologias para retornar quais os interesses do usuario
    //e montar cada componente com o seus locais cadastrados
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <ScrollView>
                {techs.map((tech, id) => <SpotList key={tech+id} tech={tech} /> )}
            </ScrollView>
        </SafeAreaView>
    ) 


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40
    }
});