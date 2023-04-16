import React from 'react';

import { FadeIn, FadeOut } from 'react-native-reanimated';
import { TouchableOpacityProps } from 'react-native';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { numberToCurrency } from '~/helpers';

import * as S from './styles';

import { styles } from '~/styles';

interface ProductItemProps extends TouchableOpacityProps {
	callback(productData: ProductProps): void;
	productData: ProductProps;
}

const ProductItem: React.FC<ProductItemProps> = ({ productData, callback }) => {
	return (
		<S.Container
			testID="product-item-btn"
			onPress={() => callback(productData)}
			entering={FadeIn.duration(600)}
			exiting={FadeOut.duration(600)}
			style={styles.shadow}
		>
			<S.Image source={{ uri: productData.image }} />
			<S.Title testID="title">{productData.name}</S.Title>
			<S.PriceWrapper>
				<S.PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</S.PreviousProductPrice>
				<S.ProductPrice> {numberToCurrency(productData.price)}</S.ProductPrice>
			</S.PriceWrapper>
		</S.Container>
	);
};

export default ProductItem;
