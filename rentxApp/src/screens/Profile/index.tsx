import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
    Section,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { PasswordInput } from '../../components/PasswordInput';
import { userAuth } from '../../hooks/auth';
import * as ImagePicker from 'expo-image-picker';
import { Button } from '../../components/Button';
import * as Yup from 'yup';

export function Profile() {
    const {user, signOut, updateUser} = userAuth();
    const theme = useTheme();
    const navigation = useNavigation();
    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const [avatar, setAvatar] = useState(user.avatar); //pega o avatar padrao q vier
    const [name, setName] = useState(user.name);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected)
    }

    async function handleAvatarSelect(){
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        if(result.cancelled){
            return;
        }
        if(result.uri){
            setAvatar(result.uri);
        }
    }

    async function handleSignOut(){
        Alert.alert('Tem certeza?', 'Se você sair, irá precisar de internet para conectar-se novamente.', [
            {
                text: 'Cancelar',
                onPress: () => {},
                style: "cancel",
            },
            {
                text: 'Sair',
                onPress: () => signOut()
            }
        ]
        );
    } 

    async function handleProfileUpdate(){
        try{
            const schema = Yup.object().shape({
                driverLicense: Yup.string().required('CNH obrigatoria'),
                name: Yup.string().required('Nome é obrigatorio')
            })
            const data = {name, driverLicense};
            await schema.validate(data);
            
            await updateUser({
                id: user.id,
                user_id: user.user_id,
                email: user.email,
                name,
                driver_license: driverLicense,
                avatar,
                token: user.token
            })

            Alert.alert('Perfil atualizado!')

        }catch(error: any){
            console.log(error)
            if(error instanceof Yup.ValidationError){
                Alert.alert('opa', error.message)
            }
            Alert.alert('nao foi possivel atualizar o perfil')
        }
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton
                                color={theme.colors.shape}
                                onPress={() => navigation.goBack()}
                            />
                            <HeaderTitle>Editar Perfil</HeaderTitle>
                            <LogoutButton onPress={handleSignOut}>
                                <Feather
                                    name="power"
                                    size={24}
                                    color={theme.colors.shape}
                                />
                            </LogoutButton>
                        </HeaderTop>

                        <PhotoContainer>
                            { !!avatar && <Photo source={{ uri: avatar}} />}
                            <PhotoButton onPress={handleAvatarSelect}>
                                <Feather
                                    name="camera"
                                    size={24}
                                    color={theme.colors.shape}
                                />
                            </PhotoButton>
                        </PhotoContainer>

                    </Header>

                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Options>
                            <Option
                                active={option === 'dataEdit'}
                                onPress={() => handleOptionChange('dataEdit')}
                            //ou: setOption(optionSelected)

                            >
                                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
                            </Option>

                            <Option
                                active={option === 'passwordEdit'}
                                onPress={() => handleOptionChange('passwordEdit')}
                            >
                                <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
                            </Option>
                        </Options>

                        {
                            option === 'dataEdit' ?

                                <Section>
                                    <Input
                                        iconName="user"
                                        placeholder='Nome'
                                        autoCorrect={false}
                                        defaultValue={user.name}
                                        onChangeText={setName}
                                    />

                                    <Input
                                        iconName="mail"
                                        editable={false}
                                        defaultValue={user.email}
                                    />

                                    <Input
                                        iconName="credit-card"
                                        placeholder='CNH'
                                        keyboardType='numeric'
                                        defaultValue={user.driver_license}
                                        onChangeText={setDriverLicense}
                                    />
                                </Section>
                                
                                :

                                <Section>
                                    <PasswordInput
                                        iconName="lock"
                                        placeholder='Senha atual'
                                        autoCorrect={false}
                                    />

                                    <PasswordInput
                                        iconName="lock"
                                        placeholder='Nova senha'
                                        autoCorrect={false} />

                                    <PasswordInput
                                        iconName="credit-card"
                                        placeholder='Repetir a senha'
                                        autoCorrect={false}
                                    />
                                </Section>

                        }

                        <Button
                            title="Salvar alteraçōes"
                            onPress={handleProfileUpdate}
                        />

                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >

    )
} 
