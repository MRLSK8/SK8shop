import { useCallback, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import lodash from 'lodash';

import { ProductProps } from '~/store/ducks/cart.reducer';
import { showErrorAlert } from '~/helpers';

type OrderByOptions = 'name' | 'price';

export const useProducts = () => {
	const [orderOption, setOrderOption] = useState<OrderByOptions>('name');
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const handleGetProductsError = () => {
		showErrorAlert('Oops!', "Ocorreu um erro ao carregar os produtos.");
	}

	const handleOrderProducts = useCallback((_products?: ProductProps[]) => {
		return lodash.orderBy(_products ?? products, [orderOption], ['asc']);
	}, [products, orderOption]);


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

	return { setOrderOption, isLoading, products, orderOption };
}
