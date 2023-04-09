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
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import lodash from 'lodash';

import { addProductToCart } from '~/store/actions/shoppingCart/cart.actions';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxHooks';
import { numberToCurrency } from '~/helpers/numberToCurrency';
import { ProductProps } from '~/store/ducks/cart.reducer';
import ScreenHeader from '~/components/ScreenHeader';
import { showErrorAlert } from '~/helpers/alerts';
import Loading from '~/components/Loading';

import { Container, SafeAreaViewWrapper } from '~/styles';
import {
	GoBackToProductListButtonLabel,
	GoBackToProductListButton,
	AddToCartButtonLabel,
	PreviousProductPrice,
	ImageButtonWrapper,
	DescriptionWrapper,
	ShoppingCartIcon,
	AddToCartButton,
	ProductPrice,
	IMAGE_HEIGHT,
	Description,
	Title,
	Image,
} from './styles';

const ProductDetails = () => {
	const productId = useRoute<any>()?.params?.productId as string;
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
				<ImageButtonWrapper
					onPress={() => handleGoToImagePreview(productData.image)}
				>
					<Image source={{ uri: productData.image }} style={animatedStyle} />
				</ImageButtonWrapper>

				<Title>{productData.name}</Title>

				<Description>{productData.description}</Description>

				<Description>
					Garantia do Fornecedor: {productData.SupplierWarranty}
					{'\n'}
					Cor: {productData.color}
					{'\n'}
					País de origem: {productData.countryOfOrigin}
					{'\n'}
					Tipo de frete: {productData.TypeOfShipping}
				</Description>

				<Description>
					de <PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</PreviousProductPrice>
					{'\n'}
					por <ProductPrice>{numberToCurrency(productData.price)}</ProductPrice>
				</Description>

				<AddToCartButton
					isAlreadyInTheCart={isAlreadyInTheCart}
					onPress={() =>
						isAlreadyInTheCart ? handleNavigateToCart() : handleAddProductToCart(productData)}
				>
					<AddToCartButtonLabel>
						{isAlreadyInTheCart ? 'Ir para o carrinho' : 'Adicionar ao carrinho'}
					</AddToCartButtonLabel>
					{
						isAlreadyInTheCart && (
							<ShoppingCartIcon />
						)
					}
				</AddToCartButton>
			</Container>
		</SafeAreaViewWrapper >
	);
};

export default ProductDetails;
