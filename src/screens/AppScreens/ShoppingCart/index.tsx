import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { numberToCurrency } from '~/helpers';
import { ScreenHeader } from '~/components';

import {
	addProductsToPurchases
} from '~/store/actions/purchases/purchases.actions';

import {
	removeAllProductsFromCart,
	removeProductFromCart,
} from '~/store/actions/shoppingCart/cart.actions';

import { Container, SafeAreaViewWrapper, styles } from '~/styles';

import * as S from './styles';

const ShoppingCart = () => {
	const products = useAppSelector(state => state.cart.products);
	const [totalValue, setTotalValue] = useState(0);
	const { navigate } = useNavigation();
	const dispatch = useAppDispatch();

	const handleRemoveProductFromCart = (productId: string) => {
		if (!productId) return;

		dispatch(removeProductFromCart(productId))
	}

	const handleRemoveAllProductsFromCart = () => {
		dispatch(removeAllProductsFromCart())
	}

	const handleFinishPurchase = (products: ProductProps[]) => {
		handleRemoveAllProductsFromCart();
		const purchases = products.map(product =>
		({
			...product, purchaseNumber: products.length,
			purchaseDate: format(new Date(), 'dd/MM/yyyy hh:mm:ss')
		}));

		dispatch(addProductsToPurchases(purchases));
		// @ts-ignore
		navigate('MyPurchasesStack');
	}

	const handleGoToProductDetails = (productData: ProductProps) => {
		// @ts-ignore
		navigate('ProductsDetails', { productData });
	};

	useLayoutEffect(() => {
		const totalValue = products.reduce((totalValue, currentValue) => totalValue + currentValue.price, 0);
		setTotalValue(totalValue);
	}, [products]);

	return (
		<SafeAreaViewWrapper>
			<ScreenHeader />
			<Container>
				<S.Title>
					Meu Carrinho {''}
					<S.NumberOfItems>({products.length}) {products.length > 1 ? 'itens' : 'item'}
					</S.NumberOfItems>
				</S.Title>

				{
					products.map(product => (
						<S.Product
							key={product.id}
							onPress={() => handleGoToProductDetails(product)}
							style={styles.shadow}
						>
							<S.Image source={{ uri: product.image }} />
							<S.ContentWrapper>
								<S.ProductName>
									{product.name}
								</S.ProductName>
								<S.Description>
									{product.description}
								</S.Description>
								<S.PriceWrapper>
									<S.PreviousProductPrice>{numberToCurrency(product.previousPrice)}</S.PreviousProductPrice>
									<S.ProductPrice> {numberToCurrency(product.price)}</S.ProductPrice>
								</S.PriceWrapper>
								<S.RemoveItemButton
									onPress={() => handleRemoveProductFromCart(product.id)}
								>
									<S.TrashCanIcon />
									<S.RemoveItemButtonLabel>Remover produto</S.RemoveItemButtonLabel>
								</S.RemoveItemButton>
							</S.ContentWrapper>
						</S.Product>
					))
				}

				{
					!products.length && (
						<S.EmptyCartLabel>
							Seu carrinho está vazio..
						</S.EmptyCartLabel>
					)
				}

				<S.TotalValue>
					Total: {numberToCurrency(totalValue)}
				</S.TotalValue>
				<S.FinishPurchaseButton
					disabled={!products?.length}
					onPress={() => handleFinishPurchase(products)}
				>
					<S.FinishPurchaseButtonLabel>
						Finalizar compra
					</S.FinishPurchaseButtonLabel>
				</S.FinishPurchaseButton>
			</Container>
		</SafeAreaViewWrapper>
	);
};

export default ShoppingCart;
