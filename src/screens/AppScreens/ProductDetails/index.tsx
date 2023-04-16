import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	Extrapolation,
	interpolate,
	withTiming,
	Easing,
	withSpring
} from 'react-native-reanimated';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import lodash from 'lodash';

import { addProductToCart } from '~/store/actions/shoppingCart/cart.actions';
import { numberToCurrency, showErrorAlert } from '~/helpers';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { ProductProps } from '~/store/ducks/cart.reducer';
import { ScreenHeader, Loading } from '~/components';

import { Container, SafeAreaViewWrapper } from '~/styles';

import { IMAGE_HEIGHT } from './styles';

import * as S from './styles';

interface IParamsProps {
	productId: string;
}

type IParams = RouteProp<Record<string, IParamsProps>, string>;

const ProductDetails = () => {
	const productId = useRoute<IParams>()?.params?.productId as string;
	const [productData, setProductData] = useState<ProductProps>({} as ProductProps);
	const [isLoading, setIsLoading] = useState(true);
	const { navigate } = useNavigation();
	const dispatch = useAppDispatch();
	const scrollY = useSharedValue(1);

	const isAlreadyInTheCart = useAppSelector(state =>
		state.cart.products.some(product => product.id === productId)
	);

	const animatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(scrollY.value,
			[0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT], [1, 0.5, 0],
			{ extrapolateLeft: Extrapolation.CLAMP }
		);
		const borderRadius = interpolate(
			scrollY.value,
			[0, IMAGE_HEIGHT / 2, IMAGE_HEIGHT], [0, 24, 32],
			{ extrapolateLeft: Extrapolation.CLAMP }
		);

		return {
			opacity: withTiming(scale, { duration: 300, easing: Easing.ease }),
			borderBottomLeftRadius: withSpring(borderRadius, { mass: 5, damping: 1, stiffness: 200, }),
			borderBottomRightRadius: withSpring(borderRadius, { mass: 5, damping: 1, stiffness: 200, }),
		};
	});

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const handleNavigateBackToPRoductList = () => {
		// @ts-ignore
		navigate('Products');
	}

	const handleAddProductToCart = (product: ProductProps) => {
		dispatch(addProductToCart(product))
	}

	const handleNavigateToCart = () => {
		// @ts-ignore
		navigate('ShoppingCart');
	}

	const handleGoToImagePreview = (imageUri: string) => {
		if (!imageUri) return;
		// @ts-ignore
		navigate('ImagePreview', { imageUri });
	}

	useEffect(() => {
		if (productId) {
			firestore()
				.collection('products')
				.doc(productId)
				.get()
				.then(doc => {
					const _product = { ...doc.data(), id: doc.id } as ProductProps;

					setProductData(_product);
					setIsLoading(false);
				}).catch(() => {
					showErrorAlert("Oops!", "Ocorreu um erro ao carregar os dados do produto");
					setIsLoading(false);
				});
		}
	}, [productId]);

	if (lodash.isEmpty(productData) && !isLoading) {
		return (
			<DescriptionWrapper>
				<Description>
					Produto não encontrado!
				</Description>
				<GoBackToProductListButton
					onPress={handleNavigateBackToPRoductList}
				>
					<GoBackToProductListButtonLabel>
						lista de produtos
					</GoBackToProductListButtonLabel>
				</GoBackToProductListButton>
			</DescriptionWrapper>
		);
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<SafeAreaViewWrapper>
			<ScreenHeader />
			<Container
				onScroll={scrollHandler}
				scrollEventThrottle={16}
			>
				<S.ImageButtonWrapper
					onPress={() => handleGoToImagePreview(productData.image)}
				>
					<S.Image source={{ uri: productData.image }} style={animatedStyle} />
				</S.ImageButtonWrapper>

				<S.Title>{productData.name}</S.Title>

				<S.Description>{productData.description}</S.Description>

				<S.Description>
					Garantia do Fornecedor: {productData.SupplierWarranty}
					{'\n'}
					Cor: {productData.color}
					{'\n'}
					País de origem: {productData.countryOfOrigin}
					{'\n'}
					Tipo de frete: {productData.TypeOfShipping}
				</S.Description>

				<S.Description>
					de <S.PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</S.PreviousProductPrice>
					{'\n'}
					por <S.ProductPrice>{numberToCurrency(productData.price)}</S.ProductPrice>
				</S.Description>

				<S.AddToCartButton
					isAlreadyInTheCart={isAlreadyInTheCart}
					onPress={() =>
						isAlreadyInTheCart ? handleNavigateToCart() : handleAddProductToCart(productData)}
				>
					<S.AddToCartButtonLabel>
						{isAlreadyInTheCart ? 'Ir para o carrinho' : 'Adicionar ao carrinho'}
					</S.AddToCartButtonLabel>
					{
						isAlreadyInTheCart && (
							<S.ShoppingCartIcon />
						)
					}
				</S.AddToCartButton>
			</Container>
		</SafeAreaViewWrapper >
	);
};

export default ProductDetails;
