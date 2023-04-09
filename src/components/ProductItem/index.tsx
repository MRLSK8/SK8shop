import React from 'react';

import { FadeIn, FadeOut } from 'react-native-reanimated';
import { TouchableOpacityProps } from 'react-native';

import { numberToCurrency } from '~/helpers/numberToCurrency';
import { ProductProps } from '~/store/ducks/cart.reducer';

import {
	PreviousProductPrice,
	ProductPrice,
	PriceWrapper,
	Container,
	Image,
	Title,
} from './styles';

import { styles } from '~/styles';

interface ProductItemProps extends TouchableOpacityProps {
	callback(productData: ProductProps): void;
	productData: ProductProps;
}

const ProductItem: React.FC<ProductItemProps> = ({ productData, callback }) => {
	return (
		<Container
			testID="product-item-btn"
			onPress={() => callback(productData)}
			entering={FadeIn.duration(600)}
			exiting={FadeOut.duration(600)}
			style={styles.shadow}
		>
			<Image source={{ uri: productData.image }} />
			<Title testID="title">{productData.name}</Title>
			<PriceWrapper>
				<PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</PreviousProductPrice>
				<ProductPrice> {numberToCurrency(productData.price)}</ProductPrice>
			</PriceWrapper>
		</Container>
	);
};

export default ProductItem;
