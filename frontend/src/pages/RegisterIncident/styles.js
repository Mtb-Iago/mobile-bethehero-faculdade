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
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,


    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action: {
        backgroundColor: "#e02041 !important",
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    form: {
        margin: "auto",
        marginTop: 16,
        justifyContent: "center"
    },
    inputText: {
        margin: 10,
        width: "100%",
        padding: 5,
        backgroundColor: "#fff"
    }

});
