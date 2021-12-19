import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //para linka 

import _ from 'lodash'

/**
 * Quando for usar conexão com api
 */
import api from '../../services/api';
//import json from '../../services/json.json';

import logoImg from '../../assets/logo.png';

import styles from '../Incidents/styles';


export default function Ongs () {
    const [ongs, setOngs] = useState([]); //pega as ongs começa com array vazio
    const [total, setTotal] = useState(0); //mostrando total de ongs cadastradas
    const [page, setPage] = useState(1);//inicia pagina 1
    const [loading, setLoading] = useState(false)//armazena uma info quando esta buscando de 1 por vez

    const navigation = useNavigation();// inicia a function parece com history web


    function navigateBack() { //função para voltar
        navigation.goBack();
    }


    function navigateToRegisterOngs() {
        navigation.navigate('RegisterOng'); //manda para a rota 
    }


    async function loadOngs() {

        /**
         * Chamada do axios com api, para atv 2
         */
        const response = await api.get('ongs', {
            //params: { page }//avisa quantas paginas esta
        });
        //const response = json
        
        //Usando o lodash para fazer uma intersecção e iterar o objeto para pegar as ongs cadastradas
        var ongsFilter = _.intersectionBy(response.data, 'name');
        
        setOngs([...ongsFilter]) //onde vem os dados da api, as ongs ...
        //setTotal(ongsFilter.length);
        setTotal(ongsFilter.length);//total de ongs cadastradas
        setPage(page + 1); 
    }

    useEffect(() => {
        navigation.addListener('focus', ()=>setLoading(!loading))
        loadOngs();
    }, [loading, navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}> {total} Ongs Cadastradas</Text>.
           </Text>
            </View>

            <Text style={styles.title}>Seja um herói!</Text>
            {/* <Text style={styles.description} color="#1811e1">Cadastre sua ong <Feather name="arrow-right" size={15} color="#1811e1" />
                            <Feather /></Text> */}
            <TouchableOpacity //efeito no buttao
                style={styles.detailsButton}
                onPress={() => navigateToRegisterOngs()}//com erow function para nao inciar de vez
            >
                <Text style={styles.detailsButton}>Ou cadastre um novo caso</Text>
                <Feather name="plus-circle" size={24} color="black">
                </Feather>

            </TouchableOpacity> 

            <FlatList //para dar scrol na pagina
                data={ongs}// [1, 2, 3]-- array conteudo scrol  teste
                style={styles.incidentsList}
                keyExtractor={ong => String(ong.id)}//para nao dar erro
                showsVerticalScrollIndicator={false} // esconde a barra do scroll da tela
                onEndReached={loadOngs}
                ondEndReachedThreshold={0.2}//carrega a pagina quando estive quando no fim
                renderItem={({ item: ong }) => ( //funcão que passa jsx semore com ()

                    < View style={styles.incident}>

                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>{ong.name}</Text>

                        <Text style={styles.incidentsProperty}>TEL:</Text>
                        <Text style={styles.incidentsValue}>{ong.whatsapp}</Text>

                        <Text style={styles.incidentsProperty}>END:</Text>
                        <Text style={styles.incidentsValue}>{ong.city} - {ong.uf.toUpperCase()}</Text>
                    </ View>

                )}

            /> 
            <View style={styles.footerButtonOngs}>
                <View style={styles.buttonsDownCase}>
                        <TouchableOpacity //efeito no buttao
                            style={styles.detailsButton}
                            onPress={() => navigateBack()}//com erow function para nao inciar de vez
                        >
                            <Feather name="arrow-left" size={28} color="#fff" />
                            <Feather />
                            <Text style={styles.detailsButtonTextFooter}>Ver Casos</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}