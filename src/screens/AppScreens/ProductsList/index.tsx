import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ListRenderItemInfo } from 'react-native';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { Loading, ProductItem } from '~/components';
import { useProducts } from './useProducts';

import { SafeAreaViewWrapper } from '~/styles';

import * as S from './styles';

const ProductsList = () => {
	const { isLoading, products, setOrderOption, orderOption } = useProducts();
	const { navigate } = useNavigation();

	const handleItemClicked = useCallback((productData: ProductProps) => {
		navigate('ProductsDetails', { productId: productData.id });
	}, []);

	const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => (
		<ProductItem
			callback={(productData) => handleItemClicked(productData)}
			productData={item}
		/>
	);

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
