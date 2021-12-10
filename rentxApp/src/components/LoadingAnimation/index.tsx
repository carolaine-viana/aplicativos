import React from 'react'
import { Container } from './styles'

import LottieView from 'lottie-react-native'
import loadCar_animation from '../../assets/loadCar_animation.json'

export function LoadingAnimation() {
  return (
    <Container>
      <LottieView
        source={loadCar_animation}
        style={{ height: 200 }}
        autoPlay
        resizeMode="contain"
        loop={true}
      />
    </Container>
  )
}
