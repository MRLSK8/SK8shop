import React, { useCallback, useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import lodash from 'lodash';

import { ProductProps } from '~/store/ducks/cart.reducer';
import ProductItem from '~/components/ProductItem';
import Loading from '~/components/Loading';

import { SafeAreaViewWrapper } from '~/styles';

import {
  OrderOptionRadioButtonSelected,
  OrderOptionRadioButton,
  OrderOptionLabel,
  OrderOptions,
  OrderOption,
  ProductList,
  OrderLabel,
  Container,
} from './styles';

type orderByOptions = 'name' | 'price';

const ProductsList = () => {
  const [orderOption, setOrderOption] = useState<orderByOptions>('name');
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();

  const handleItemClicked = useCallback((productData: ProductProps) => {
    // @ts-ignore
    navigate('ProductsDetails', { productData });
  }, []);

  const handleOrderProducts = useCallback((_products?: ProductProps[]) => {
    return lodash.orderBy(_products ?? products, [orderOption], ['asc']);
  }, [products, orderOption]);

  const renderItem = ({ item }: any) => (
    <ProductItem
      callback={(productData) => handleItemClicked(productData)}
      productData={item}
    />
  );

  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshots => {
        let _products: ProductProps[] = [];

        querySnapshots.forEach(querySnapshot => {
          const _product = querySnapshot.data() as ProductProps;

          _products.push(_product);
        });

        _products = handleOrderProducts(_products);

        setProducts(_products);
        setIsLoading(false);
      });

    return () => subscriber();
  }, []);

  useEffect(() => {
    const _products = handleOrderProducts();
    setProducts(_products);
  }, [orderOption]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaViewWrapper>
      <Container testID={"product-list-wrapper"}>
        <OrderLabel>Ordenar por:</OrderLabel>

        <OrderOptions>
          <OrderOption onPress={() => setOrderOption('name')}>
            <OrderOptionRadioButton>
              {
                orderOption === 'name' && (
                  <OrderOptionRadioButtonSelected />
                )
              }
            </OrderOptionRadioButton>
            <OrderOptionLabel>Ordem alfabética</OrderOptionLabel>
          </OrderOption>
          <OrderOption
            testID={"filter-by-price-btn"}
            onPress={() => setOrderOption('price')}
          >
            <OrderOptionRadioButton>
              {
                orderOption === 'price' && (
                  <OrderOptionRadioButtonSelected />
                )
              }
            </OrderOptionRadioButton>
            <OrderOptionLabel>Menor preço</OrderOptionLabel>
          </OrderOption>
        </OrderOptions>

        <ProductList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </Container>
    </SafeAreaViewWrapper>
  );
};

export default ProductsList;
