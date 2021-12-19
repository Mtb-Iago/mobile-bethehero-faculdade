import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'; //para linka 

/**
 * Quando for usar conexão com api
 */
import api from '../../services/api';
//import json from '../../services/json.json';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Incidents() {
    const [incidents, setIncidents] = useState([]); //pega as incidentse começa com array vazio
    const [total, setTotal] = useState(0); //mostrando total de casos cadastrados
    const [page, setPage] = useState(1);//inicia pagina 1
    const [loading, setLoading] = useState(false)//armazena uma info quando esta buscando de 1 por vez

    const navigation = useNavigation();// inicia a function parece com history web



    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident }); //manda para a rota 
    }

    function navigateToOngs() {
        navigation.navigate('Ongs'); //manda para a rota 
    }

    function navigateToRegisterIncidents() {
        navigation.navigate('RegisterIncident'); //manda para a rota 
    }

    async function loadIncidents() {
        
        const response = await api.get('incidents', {});
       
       setIncidents([...response.data]) //onde vem os dados da api, os casos ...
       setTotal(response.headers['x-total-count']);//total de casos cadastrados
       setPage(page + 1);
       setLoading(false);
    }
    useEffect(() => {
        navigation.addListener('focus', ()=>setLoading(!loading))
        loadIncidents();
    }, [loading, navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                    Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
           </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>
            
                <TouchableOpacity //efeito no buttao
                style={styles.detailsButton}
                onPress={() => navigateToRegisterIncidents()}//com erow function para nao inciar de vez
            >
                <Text style={styles.detailsButton}>Ou cadastre um novo caso</Text>
                <Feather name="plus-circle" size={24} color="black">
                </Feather>

            </TouchableOpacity> 

            <ScrollView >                
                {
                 incidents.length && incidents.map((item, index) => (
                     <View key = {index} style = {styles.incident}>
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentsValue}>{item.name}</Text>

                        <Text style={styles.incidentsProperty}>CASO:</Text>
                        <Text style={styles.incidentsValue}>{item.title}</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentsValue}>{
                            Intl.NumberFormat(
                                'pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                })
                                .format(item.value)
                        }
                        </Text>

                        <TouchableOpacity //efeito no buttao
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(item)}//com erow function para nao inciar de vez
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-left" size={28} color="#e02041" />
                            <Feather />


                        </TouchableOpacity>


                     </View>
                  ))
               }
                </ScrollView>

        <View
        style={styles.footerButton}>
            <TouchableOpacity //efeito no buttao
                style={styles.detailsButton}
                onPress={() => navigateToOngs()}//com erow function para nao inciar de vez
            >
                <Text style={styles.detailsButtonTextFooter}>Ver todas as Ongs</Text>
                <Feather name="arrow-right" size={28} color="#fff" />
                <Feather />


            </TouchableOpacity>

        </View>
        </View>
    );
}