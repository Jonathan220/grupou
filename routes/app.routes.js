import React,{} from 'react';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    return(
        <Tab.Navigator 
        initialRouteName="Grupos"
        tabBarOptions={
            {
                activeTintColor:'tomato',
                inactiveTintColor:'#ccc'
            }
        }
        >
            <Tab.Screen options={
                    {
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="chat" color={color} size={32}/>
                        )
                    }
                } name="Grupos" component={Chat}/>
            <Tab.Screen options={
                    {
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons color={color} name="settings" size={32}/>
                        )
                    }
                } name="Configurações" component={Settings}/>
        </Tab.Navigator>
    )
}

export default AppRoutes;