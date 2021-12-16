import React, { useEffect } from 'react';

import checked from '../../assets/lottiefiles/checked.json';
import LottieView from 'lottie-react-native';


import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
} from 'react-native-reanimated';

import {
    Container,
} from './styles';

export function ConfirmAnimation() {
    const splashAnimation = useSharedValue(0); // 0 => 50

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 50], //quando tiver do 0 a 50
                [1, 0]), //quando o brand sumir no 0 entra o logo

            transform: [
                {
                    translateY: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, 50] //fica no meio e depois vai pra canto
                    ),
                }
            ]
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, .3, 1]),

            transform: [
                {
                    translateY: interpolate(splashAnimation.value, [0, 50], [50, 0]) //faz a movimentacao de entrar na tela
                }
            ]
        }
    })

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, //comeca com 0 a 50
            {duration: 5000},
            
        )
    }, [])

    return (
        <Container>
            <Animated.View style={[brandStyle]}>
                <LottieView
                    source={checked}
                    style={{ height: 200 }}
                    autoPlay
                    resizeMode="contain"
                    loop={false}
                />

            </Animated.View>
        </Container>
    )
} 
