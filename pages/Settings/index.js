import React,{useState,useContext} from 'react';
import {Image,  Text, View, ActivityIndicator } from 'react-native';
import{UserContext} from '../../contexts/user';

import {
    Container,
    Texto,
    ContainerButtons,
    Button,
    ButtonText
} from './style';

const Settings = () => {
    const {signOut} = useContext(UserContext);
    return (
        <Container>
            <ContainerButtons>
                    <Button invert={true} onPress={()=> signOut()}>
                        <ButtonText invert={true}>
                            Sair
                        </ButtonText>
                    </Button>
                </ContainerButtons>
        </Container>
      );
}
export default Settings;