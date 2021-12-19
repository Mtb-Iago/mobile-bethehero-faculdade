import React from 'react';
import 'react-native-gesture-handler'; // na documentação diz ser necessario
import { NavigationContainer } from '@react-navigation/native';//essencial para as rotas
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Ongs from './pages/Ongs';
import RegisterOng from './pages/RegisterOng';
import RegisterIncident from './pages/RegisterIncident';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Ongs" component={Ongs} />
                <AppStack.Screen name="RegisterOng" component={RegisterOng} />
                <AppStack.Screen name="RegisterIncident" component={RegisterIncident} />
            </ AppStack.Navigator>
        </NavigationContainer>
    );
}