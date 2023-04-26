import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { numberToCurrency } from '~/helpers';
import { ScreenHeader } from '~/components';
import {
	removeProductToPurchases
} from '~/store/actions/purchases/purchases.actions';

import { Container, SafeAreaViewWrapper, styles } from '~/styles';
import * as S from './styles';

const MyPurchases = () => {
	const products = useAppSelector(state => state.purchases.products);
	const { navigate } = useNavigation();
	const dispatch = useAppDispatch();

	const handleGoToProductDetails = (productData: ProductProps) => {
		navigate('ProductsDetails', { productId: productData.id });
	};

	const handleRemoveProductFromPurchases = (productData: ProductProps) => {
		if (!productData) return;
		dispatch(removeProductToPurchases(productData));
	}

	return (
		<SafeAreaViewWrapper>
			<ScreenHeader />
			<S.Title>
				Meus pedidos
			</S.Title>
			<Container>
				{
					products.map(product => (
						<S.Product
							key={product.id + product.purchaseDate + product.purchaseNumber}
							onPress={() => handleGoToProductDetails(product)}
							style={styles.shadow}
						>
							<S.Image source={{ uri: product.image }} />
							<S.ContentWrapper>
								<S.PurchaseHeader>
									<S.ProductName>
										{product.name}
									</S.ProductName>
									<S.RemoveItemButton
										onPress={() => handleRemoveProductFromPurchases(product)}
									>
										<S.TrashCanIcon />
									</S.RemoveItemButton>
								</S.PurchaseHeader>

								<S.Description>
									{product.description}
								</S.Description>
								<S.PriceWrapper>
									<S.PreviousProductPrice>
										{numberToCurrency(product.previousPrice)}
									</S.PreviousProductPrice>
									<S.ProductPrice> {numberToCurrency(product.price)}</S.ProductPrice>
								</S.PriceWrapper>
							</S.ContentWrapper>
						</S.Product>
					))
				}

				{
					!products.length && (
						<S.EmptyPurchasesLabel>
							Nenhum pedido...
						</S.EmptyPurchasesLabel>
					)
				}
			</Container>
		</SafeAreaViewWrapper>
	);
};

export default MyPurchases;
