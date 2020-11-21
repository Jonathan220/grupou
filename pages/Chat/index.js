import React,{useState, useContext} from 'react';
import {Image,  Text, View, ActivityIndicator } from 'react-native';
import {UserContext} from '../../contexts/user';
import {
    Container,
    Texto
} from './style';

const Chat = () => {
    const {user} = useContext(UserContext);
    return (
        <Container>
            <Texto>{user.email}</Texto>
        </Container>
      );
}
export default Chat;