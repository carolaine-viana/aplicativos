import React, { useEffect, useState } from 'react';
import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { Feather } from '@expo/vector-icons';

import { getAccessoriesIcon } from '../../utils/getAccessoriesIcon';

import {
	Container,
	Header,
	CarImagens,
	Content,
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	Accessories,
	Footer,
	RentalPeriod,
	CalendarIcon,
	DateInfo,
	DateTitle,
	DateValue,
	RentalPrice,
	RentalpriceLabel,
	RentalPriceDetails,
	RentalPriceQuota,
	RentalPriceTotal
} from './styles';

import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/core';
import { CarDTO } from '../../dtos/CarDTO';
import { format } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import api from '../../services/api';
import { Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNetInfo } from '@react-native-community/netinfo';
import { Car as ModelCar } from '../../database/model/Car';


type RootStackParamList = {
	Confirmation: {
		nextScreenRoute: string;
		title: string;
		message: string;
	};
};

type Props = StackNavigationProp<RootStackParamList, 'Confirmation'>;

interface Params {
	car: CarDTO;
	dates: string[];
}

//interface pra conveter do americano pro BR a data
interface RentalPeriod {
	start: string;
	end: string;
}

export function SchedulingDetails() {
   const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
	const [ loading, setLoading ] = useState(false);
	const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);
	const theme = useTheme();
	const navigation = useNavigation<Props>();
	const route = useRoute();
	const { car, dates } = route.params as Params;
	const netInfo = useNetInfo();

	const rentTotal = Number(dates.length * car.price);

	async function handleConfirmRental() {
      setLoading(false)

		await api.post(`rentals`, {
			user_id: 1,
			car_id: car.id,
			start_date: new Date(dates[0]),
			end_date: new Date(dates[dates.length - 1]),
         total: rentTotal
		}).then(() => {
				navigation.navigate('Confirmation', {
					nextScreenRoute: 'Home',
					title: 'Carro alugado!',
					message: `Agora você só precisa ir\n até a concessionária da RENTX\npegar o seu automóvel!`
				});
			})
			.catch((error) => {
				setLoading(false);
            console.log(error)
				Alert.alert('nao foi possivel confirmar o agendamento');
			});
	}

	function handleBack() {
		navigation.goBack();
	}

	useEffect(() => {
		setRentalPeriod({
			start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
			end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
		});
	}, []);

   useEffect(() => {
      async function fetchCarUpdated() {
        const response = await api.get(`/cars/${car.id}`);
        console.log(response.data)
        setCarUpdated(response.data)
      }
  
      if (netInfo.isConnected === true) {
        fetchCarUpdated();
      }
    }, [netInfo.isConnected])

	return (
		<Container>
			<Header>
				<BackButton onPress={handleBack} />
			</Header>

			<CarImagens>
				<ImageSlider
					imagesUrl={
						!!carUpdated.photos ? carUpdated.photos : [ { id: car.thumbnail, photo: car.thumbnail } ]
					}
				/>
			</CarImagens>

			<Content>
				<Details>
					<Description>
						<Brand>{car.brand}</Brand>
						<Name>{car.name}</Name>
					</Description>

					<Rent>
						<Period>{car.period}</Period>
						<Price>R$ {car.price}</Price>
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

				<RentalPeriod>
					<CalendarIcon>
						<Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
					</CalendarIcon>

					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue>{rentalPeriod.start}</DateValue>
					</DateInfo>

					<Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue>{rentalPeriod.end}</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalPrice>
					<RentalpriceLabel>TOTAL</RentalpriceLabel>
					<RentalPriceDetails>
						<RentalPriceQuota>
							R$ {car.price} x {dates.length} diarias
						</RentalPriceQuota>
						<RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
					</RentalPriceDetails>
				</RentalPrice>
			</Content>

			<Footer>
				<Button
					title="Alugar agora"
					color={theme.colors.sucess}
					onPress={handleConfirmRental}
					enabled={!loading}
					loading={loading}
				/>
			</Footer>
		</Container>
	);
}
