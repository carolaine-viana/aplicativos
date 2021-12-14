import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

export function Profile() {
    const theme = useTheme();
    const navigation = useNavigation();
    const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
    const {user} = userAuth();

    function handleBack() {
        navigation.goBack()
    }

    function handleSignOut() {

    }

    function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
        setOption(optionSelected)
    }

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton
                                color={theme.colors.shape}
                                onPress={handleBack}
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
                            <Photo source={{ uri: 'http://github.com/carolaine.png' }} />
                            <PhotoButton onPress={() => { }}>
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


                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >

    )
} 
