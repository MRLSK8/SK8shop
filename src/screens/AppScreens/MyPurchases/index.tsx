import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '~/hooks/reduxHooks';
import { numberToCurrency } from '~/helpers/numberToCurrency';
import { ProductProps } from '~/store/ducks/cart.reducer';
import ScreenHeader from '~/components/ScreenHeader';
import {
  removeProductToPurchases
} from '~/store/actions/purchases/purchases.actions';

import { Container, SafeAreaViewWrapper, styles } from '~/styles';
import {
  PreviousProductPrice,
  EmptyPurchasesLabel,
  RemoveItemButton,
  PurchaseHeader,
  ContentWrapper,
  PriceWrapper,
  TrashCanIcon,
  ProductPrice,
  Description,
  ProductName,
  Product,
  Title,
  Image,
} from './styles';


const myPurchases = () => {
  const products = useAppSelector(state => state.purchases.products);
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();

  const handleGoToProductDetails = (productData: ProductProps) => {
    // @ts-ignore
    navigate('ProductsDetails', { productData });
  };

  const handleRemoveProductFromPurchases = (productData: ProductProps) => {
    if (!productData) return;
    dispatch(removeProductToPurchases(productData));
  }

  return (
    <SafeAreaViewWrapper>
      <ScreenHeader />
      <Title>
        Meus pedidos
      </Title>
      <Container>
        {
          products.map(product => (
            <Product
              key={product.id + product.purchaseDate + product.purchaseNumber}
              onPress={() => handleGoToProductDetails(product)}
              style={styles.shadow}
            >
              <Image source={{ uri: product.image }} />
              <ContentWrapper>
                <PurchaseHeader>
                  <ProductName>
                    {product.name}
                  </ProductName>
                  <RemoveItemButton
                    onPress={() => handleRemoveProductFromPurchases(product)}
                  >
                    <TrashCanIcon />
                  </RemoveItemButton>
                </PurchaseHeader>

                <Description>
                  {product.description}
                </Description>
                <PriceWrapper>
                  <PreviousProductPrice>
                    {numberToCurrency(product.previousPrice)}
                  </PreviousProductPrice>
                  <ProductPrice> {numberToCurrency(product.price)}</ProductPrice>
                </PriceWrapper>
              </ContentWrapper>
            </Product>
          ))
        }

        {
          !products.length && (
            <EmptyPurchasesLabel>
              Nenhum pedido...
            </EmptyPurchasesLabel>
          )
        }
      </Container>
    </SafeAreaViewWrapper>
  );
};

export default myPurchases;
