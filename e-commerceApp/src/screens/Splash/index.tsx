import React, {useEffect} from 'react';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    runOnJS
} from 'react-native-reanimated';


import LottieView from 'lottie-react-native';
import linhabaixo from '../../assets/lottiefiles/linhabaixo.json';
import linhacima from '../../assets/lottiefiles/linhacima.json';

import {      
   Container, 
} from './styles';


export function Splash({navigation}){ 
    const splashAnimation = useSharedValue(0); // 0 => 50

    const styleFirst = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value,
                [0, 50], //quando tiver do 0 a 50
                [1, 1]), //quando o brand sumir no 0 entra o logo
                transform: [
                    {
                        translateY: interpolate(splashAnimation.value,
                            [0, 50],
                            [0, 1] //fica no meio e depois vai pra canto
                        ),
                    }
                ]
        }
    })


    const styleSecond = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, 0.1, 1]),
                transform: [
                    {
                        translateY: interpolate(splashAnimation.value, [0, 50], [50, 0]) //faz a movimentacao de entrar na tela
                    }
                ]
        }
    })

    function startApp(){
        navigation.navigate('LoginPage')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, //comeca com 0 a 50
            {duration: 5000},
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, [])
    

     return(
        <Container>
            <Animated.View style={[styleFirst, {position: 'absolute'}]}>
            <LottieView
                source={linhabaixo}
                style={{height: 300}}
                autoPlay
                resizeMode="contain"
                loop={true}
            />

            </Animated.View>

            <Animated.View style={[styleSecond, {position: 'absolute', borderWidth: 1, borderColor: 'white'}]}>
                <LottieView
                    source={linhacima}
                    style={{height: 100}}
                    autoPlay
                    resizeMode="contain"
                    loop={true}
                />
                
                
            </Animated.View>
                
           
        </Container>
    )
} 
