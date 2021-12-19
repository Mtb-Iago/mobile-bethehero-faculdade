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
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [id, setId] = useState("")
    const [responseApi, setResponseApi] = useState("")

    function navigateBack() { //função para voltar
        navigation.goBack();
    }

    async function submit() {
        const response = await api.post('incidents', {
            "ong_id": id,
            "title": title,
            "description": description,
            "value": value
       });

       setResponseApi(response.data.id)
    }

    useEffect(()=> {
        //submit()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heroTitle}>Cadastre um caso</Text>
            <View style={styles.form}>
            <TextInput 
                placeholder="Titulo"
                onChangeText={(text)=>{setTitle(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Descrição do caso"
                onChangeText={(text)=>{setDescription(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="Valor"
                onChangeText={(text)=>{setValue(text)}}
                style={styles.inputText}
            />
            <TextInput 
                placeholder="id da ong"
                onChangeText={(text)=>{setId(text)}}
                style={styles.inputText}
            />
            <Button 
                title="Cadastrar caso"
                onPress={ ()=> {
                    submit()
                }}
            />
            <Text>{`Registrado com o id: ${responseApi}`}</Text>
            </View>
        </View>
    );
}