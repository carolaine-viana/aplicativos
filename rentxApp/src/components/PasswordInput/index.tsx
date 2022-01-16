import React, { useState } from 'react'
import { View, Text, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { Container, IconContainer, InputText } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const [isPasswordVisible, setisPasswordVisible] = useState(true);
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false); //se ta preenchido
  const [isFilled, setIsFilled] = useState(false); //se o foco ta nele

  function handleInputFocus(){
      setIsFocused(true);
  }

  function handleInputBlur(){ 
      setIsFocused(false);
      setIsFilled(!!value);
  }

  function handlePasswordVisibileChange() {
    setisPasswordVisible((prevState) => !prevState)
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        isFocused={isFocused}
        autoCorrect={false}
        {...rest}
      />

      <BorderlessButton onPress={handlePasswordVisibileChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}
