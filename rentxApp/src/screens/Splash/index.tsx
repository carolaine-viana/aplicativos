import React, {useEffect} from 'react';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import {      
   Container, 
} from './styles';
import { useNavigation } from '@react-navigation/core';



export function Splash(){ 
    const splashAnimation = useSharedValue(0); // 0 => 50
    const navigation = useNavigation();

    const brandStyle = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value,
                [0, 50], //quando tiver do 0 a 50
                [1, 0]), //quando o brand sumir no 0 entra o logo
                transform: [
                    {
                        translateX: interpolate(splashAnimation.value,
                            [0, 50],
                            [0, -50] //fica no meio e depois vai pra canto
                        ),
                    }
                ]
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, .3, 1]),
                transform: [
                    {
                        translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0]) //faz a movimentacao de entrar na tela
                    }
                ]
        }
    })

    function startApp(){
        navigation.navigate('Home')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, //comeca com 0 a 50
            {duration: 1000},
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, [])
    
     return(
        <Container>
            <Animated.View style={[brandStyle, {position: 'absolute'}]}>
                <BrandSvg
                    width={80}
                    height={50}
                />
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSvg width={180} height={20}/>
            </Animated.View>

        </Container>
    )
} 
