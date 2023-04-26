import React, { useCallback, useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { ListRenderItemInfo } from 'react-native';
import lodash from 'lodash';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { Loading, ProductItem } from '~/components';
import { showErrorAlert } from '~/helpers';

import { SafeAreaViewWrapper } from '~/styles';

import * as S from './styles';

type orderByOptions = 'name' | 'price';

const ProductsList = () => {
	const [orderOption, setOrderOption] = useState<orderByOptions>('name');
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { navigate } = useNavigation();

	const handleItemClicked = useCallback((productData: ProductProps) => {
		navigate('ProductsDetails', { productId: productData.id });
	}, []);

	const handleOrderProducts = useCallback((_products?: ProductProps[]) => {
		return lodash.orderBy(_products ?? products, [orderOption], ['asc']);
	}, [products, orderOption]);

	const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => (
		<ProductItem
			callback={(productData) => handleItemClicked(productData)}
			productData={item}
		/>
	);

	const handleGetProductsError = () => {
		showErrorAlert('Oops!', "Ocorreu um erro ao carregar os produtos.");
	}

	useEffect(() => {
		const subscriber = firestore()
			.collection('products')
			.onSnapshot(querySnapshots => {
				const _products = querySnapshots.docs.map(querySnapshot => ({
					...querySnapshot.data() as ProductProps,
					id: querySnapshot.id,
				}));

				const _productsOrdered = handleOrderProducts(_products);

				setProducts(_productsOrdered);
				setIsLoading(false);
			}, handleGetProductsError);

		return () => subscriber();
	}, []);

	useEffect(() => {
		const _products = handleOrderProducts();
		setProducts(_products);
	}, [orderOption]);

	if (isLoading) return <Loading />;

	return (
		<SafeAreaViewWrapper>
			<S.Container testID={"product-list-wrapper"}>
				<S.OrderLabel>Ordenar por:</S.OrderLabel>

				<S.OrderOptions>
					<S.OrderOption onPress={() => setOrderOption('name')}>
						<S.OrderOptionRadioButton>
							{orderOption === 'name' && <S.OrderOptionRadioButtonSelected />}
						</S.OrderOptionRadioButton>
						<S.OrderOptionLabel>Ordem alfabética</S.OrderOptionLabel>
					</S.OrderOption>
					<S.OrderOption
						testID={"filter-by-price-btn"}
						onPress={() => setOrderOption('price')}
					>
						<S.OrderOptionRadioButton>
							{orderOption === 'price' && <S.OrderOptionRadioButtonSelected />}
						</S.OrderOptionRadioButton>
						<S.OrderOptionLabel>Menor preço</S.OrderOptionLabel>
					</S.OrderOption>
				</S.OrderOptions>

				<S.ProductList
					data={products}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</S.Container>
		</SafeAreaViewWrapper>
	);
};

export default ProductsList;
