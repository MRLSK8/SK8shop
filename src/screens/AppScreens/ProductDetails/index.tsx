import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import lodash from 'lodash';

import { addProductToCart } from '~/store/actions/shoppingCart/cart.actions';
import { numberToCurrency, showErrorAlert } from '~/helpers';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { ProductProps } from '~/store/ducks/cart.reducer';
import { ScreenHeader, Loading } from '~/components';

import { Container, SafeAreaViewWrapper } from '~/styles';

import useImageAnimation from './useImageAnimation';
import * as S from './styles';

interface IParamsProps {
	productId: string;
}

type IParams = RouteProp<Record<string, IParamsProps>, string>;

const ProductDetails = () => {
	const [productData, setProductData] = useState<ProductProps>({} as ProductProps);
	const productId = useRoute<IParams>()?.params?.productId as string;
	const { animatedStyle, scrollHandler } = useImageAnimation();
	const [isLoading, setIsLoading] = useState(true);
	const { navigate } = useNavigation();
	const dispatch = useAppDispatch();

	const isAlreadyInTheCart = useAppSelector(state =>
		state.cart.products.some(product => product.id === productId)
	);

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
			<S.DescriptionWrapper>
				<S.Description>
					Produto não encontrado!
				</S.Description>
				<S.GoBackToProductListButton
					onPress={handleNavigateBackToPRoductList}
				>
					<S.GoBackToProductListButtonLabel>
						lista de produtos
					</S.GoBackToProductListButtonLabel>
				</S.GoBackToProductListButton>
			</S.DescriptionWrapper>
		);
	}

	if (isLoading) return <Loading />;

	return (
		<SafeAreaViewWrapper>
			<ScreenHeader />
			<S.ImageButtonWrapper
				onPress={() => handleGoToImagePreview(productData.image)}
			>
				<S.Image source={{ uri: productData.image }} style={animatedStyle} />
			</S.ImageButtonWrapper>
			<Container
				onScroll={scrollHandler}
				scrollEventThrottle={16}
			>
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
