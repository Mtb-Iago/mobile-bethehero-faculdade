import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';


export default function RegisterIncident() {
    const navigation = useNavigation();
    const route = useRoute();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUf] = useState("")
    const [responseApi, setResponseApi] = useState("")

    function navigateBack() { //função para voltar
        navigation.goBack();
    }

    async function submit() {
        const response = await api.post('ongs', {
            "name": name,
	        "email": email,
	        "whatsapp": whatsapp,
	        "city": city,
	        "uf": uf
       });
       setResponseApi(response.data.id)
    }

    useEffect(()=> {
        
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heroTitle}>Cadastre sua ONG</Text>
            <View style={styles.form}>
            <TextInput 
                placeholder="Name"
                onChangeText={(text)=>{setName(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Email"
                onChangeText={(text)=>{setEmail(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Whatsapp"
                onChangeText={(text)=>{setWhatsapp(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Cidade"
                onChangeText={(text)=>{setCity(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Uf"
                onChangeText={(text)=>{setUf(text)}}
                style={styles.inputText}
            />
            <Button 
                title="Cadastrar ONG"
                onPress={ ()=> {
                    submit()
                }}
            />
            <Text>{`Seu id: ${responseApi}`}</Text>
            </View>
        </View>
    );
}