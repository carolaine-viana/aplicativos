import React, { useState, useEffect } from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import Animated, {
	useSharedValue,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	interpolate,
	Extrapolate
} from 'react-native-reanimated';

import { getAccessoriesIcon } from '../../utils/getAccessoriesIcon';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { StyleSheet } from 'react-native';

import {
	Container,
	Header,
	CarImagens,
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	About,
	Accessories,
	Footer,
	OfflineInfo
} from './styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Car as ModelCar } from '../../database/model/Car';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { useNetInfo } from '@react-native-community/netinfo';

type Props = StackScreenProps<RootStackParamList, 'CarDetails'>;

interface Params {
	car: ModelCar;
}

export function CarDetails({  }: Props) {
	const [ carUpdated, setcarUpdated ] = useState<CarDTO>({} as CarDTO);
	const netInfo = useNetInfo();
	const navigation = useNavigation<Props>();
	const route = useRoute();
	const { car } = route.params as Params;
	const ScrollY = useSharedValue(0);
	const theme = useTheme();

	//ver se o usuario ta usando scroll em y
	const scrollHandle = useAnimatedScrollHandler((event) => {
		ScrollY.value = event.contentOffset.y; //salva a posicao do scroll pra saber onde ele ta no scroll
		//console.log(event.contentOffset.y)
	});

	const headerStyleAnimation = useAnimatedStyle(() => {
		return {
			height: interpolate(
				ScrollY.value,
				[ 0, 200 ], //200 de altura o heade
				[ 200, 70 ], //qnd o valor atingir 200 diminui a altura do cabelhaco ate 70. o interpolete nao diminui de uma vez.
				Extrapolate.CLAMP
			)
		};
	});

	//vai deixando o car invisivel
	const sliderCarsStyleAnimation = useAnimatedStyle(() => {
		return {
			opacity: interpolate(ScrollY.value, [ 0, 150 ], [ 1, 0 ], Extrapolate.CLAMP)
		};
	});

	function handleConfirmRental() {
		navigation.navigate('Scheduling', { car });
	}

	function handleBack() {
		navigation.goBack();
	}

	useEffect(
		() => {
			async function fetchCarUpdated() {
				const response = await api.get(`cars/${car.id}`);
				setcarUpdated(response.data);
			}
			if (netInfo.isConnected === true) {
				fetchCarUpdated();
			}
		},
		[ netInfo.isConnected ]
	);

	return (
		<Container>
			<StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

			<Animated.View
				style={[ headerStyleAnimation, styles.header, { backgroundColor: theme.colors.background_secondary } ]}
			>
				<Animated.View style={sliderCarsStyleAnimation}>
					<Header>
						<BackButton onPress={handleBack} />
					</Header>

					<CarImagens>
						<ImageSlider
							imagesUrl={
								!!carUpdated.photos ? (
									carUpdated.photos
								) : (
									[ { id: car.thumbnail, photo: car.thumbnail } ]
								)
							}
						/>
					</CarImagens>
				</Animated.View>
			</Animated.View>

			<Animated.ScrollView
				contentContainerStyle={{
					paddingHorizontal: 24,
					paddingTop: getStatusBarHeight() + 160
				}}
				showsVerticalScrollIndicator={false}
				onScroll={scrollHandle}
				scrollEventThrottle={16} //60 frames por segundo.
			>
				<Details>
					<Description>
						<Brand>{car.brand}</Brand>
						<Name>{car.name}</Name>
					</Description>

					<Rent>
						<Period>{car.period}</Period>
						<Price>R${netInfo.isConnected === true ? car.price : '...'}</Price>
					</Rent>
				</Details>

				{carUpdated.accessories && (
					<Accessories>
						{carUpdated.accessories.map((accesory) => (
							<Acessory
								key={accesory.type}
								name={accesory.name}
								icon={getAccessoriesIcon(accesory.type)}
							/>
						))}
					</Accessories>
				)}

				<About>{car.about}</About>
			</Animated.ScrollView>

			<Footer>
				<Button
					title="Escolher periodo do aluguel"
					onPress={handleConfirmRental}
					enabled={netInfo.isConnected === true}
				/>
				{netInfo.isConnected === false && (
					<OfflineInfo>Conecte-se a Intenet para ver mais detalhes e agendar seu carro.</OfflineInfo>
				)}
			</Footer>
		</Container>
	);
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		overflow: 'hidden',
		zIndex: 1
	}
});
