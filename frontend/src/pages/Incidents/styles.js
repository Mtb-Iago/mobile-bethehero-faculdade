import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentsList: {
        marginTop: 32,
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,

    },
    incidentsProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',

    },
    incidentsValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
    detailsButtonTextFooter: {
        padding: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 17
    },
    footerButton: {
        width: '150%',
        backgroundColor:'#e02041',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: -25,
        overflow: 'hidden',
        marginTop: 20
    },footerButtonOngs: {
        width: '150%',
        backgroundColor:'#e02041',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: -25,
        overflow: 'hidden',
        marginTop: 20
    },
    buttonsDownCase: {
        width: '75%',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

});