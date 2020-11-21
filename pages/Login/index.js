import React,{useState,useContext} from 'react';
import {Image,  Text, View, ActivityIndicator } from 'react-native';

import {
    Container,
    CaixaLogin,
    Botao,
    BotaoTexto,
    ContainerBotoes,
    Input,
    InputTexto,
    ContainerButtons,
    Button,
    ButtonText,
    ForgotPassword,
    Logo,
    CaixaTextoChamada,
    TextoChamada,
    TextoGrupou
} from './styles';

import logoImg from '../../assets/logo.png';
import {UserContext} from '../../contexts/user';

const Login = () => {
    const {signIn,signUp} = useContext(UserContext);
    const [currentButton, setCurrentButton] = useState('professor');
    const [carregando, setCarregando] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSigIn(){
        try{
            signIn(email,password);
        }catch(e){
            console.warn(e);
        }
    }

    function handleSigUp(){
        setCarregando(true)
        try{
            signUp(email,password);
        }catch(e){
            console.warn(e);
        }
        finally{
            setCarregando(false)
        }
    }

    return (
        <Container>
            <Logo>
                <Image source={logoImg} style={{width:300,height:100}}/>
            </Logo>
            <CaixaTextoChamada>
                <TextoChamada>
                    Problemas para formar
                </TextoChamada>
                <TextoChamada>
                    um grupo de trabalho?
                </TextoChamada>
                <TextoChamada>
                    o <TextoGrupou>Grupou</TextoGrupou> resolve!
                </TextoChamada>
            </CaixaTextoChamada>
            <CaixaLogin>
                <ContainerBotoes>
                    <Botao onPress={()=> setCurrentButton('aluno')}
                    lastClick={currentButton == 'aluno' ? true:false}>
                        <BotaoTexto lastClick={currentButton == 'aluno' ? true:false}>
                            Aluno
                        </BotaoTexto>
                    </Botao>
                    <Botao onPress={()=> setCurrentButton('professor')}
                    lastClick={currentButton == 'professor' ? true:false}>
                        <BotaoTexto lastClick={currentButton == 'professor' ? true:false}>
                            Professor
                        </BotaoTexto>
                    </Botao>
                </ContainerBotoes>
                <InputTexto>Email</InputTexto>
                <Input value={email} placeholder="digite seu email"
                onChangeText={text => setEmail(text)}
                />
                <InputTexto>Senha</InputTexto>
                <Input value={password} placeholder="digite sua senha" secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                />
                <ForgotPassword>
                    esqueci minha senha
                </ForgotPassword>
                <ContainerButtons>
                    <Button onPress={()=>{handleSigUp()}}
                    invert={true}>
                        {carregando ? 
                        <ActivityIndicator color="#ae1b73"/>
                        :   
                        <ButtonText invert={true}>
                            Cadastre-se
                        </ButtonText> }
                    </Button>
                    <Button  onPress={()=>{handleSigIn()}}
                     invert={false}>
                        <ButtonText invert={false}>
                            Entrar
                        </ButtonText>
                    </Button>
                </ContainerButtons>
            </CaixaLogin>
        </Container>
      );
}
export default Login;