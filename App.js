import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Restaruant,
  OrderDelivery
} from './screens/Index';
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator                
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Tabs'}
            >
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Restaruant" component={Restaruant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
