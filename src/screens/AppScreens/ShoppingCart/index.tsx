import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '~/hooks/reduxHooks';
import { numberToCurrency } from '~/helpers/numberToCurrency';
import { ProductProps } from '~/store/ducks/cart.reducer';
import ScreenHeader from '~/components/ScreenHeader';

import {
  addProductsToPurchases
} from '~/store/actions/purchases/purchases.actions';

import {
  removeAllProductsFromCart,
  removeProductFromCart,
} from '~/store/actions/shoppingCart/cart.actions';

import { Container, SafeAreaViewWrapper, styles } from '~/styles';
import {
  FinishPurchaseButtonLabel,
  RemoveItemButtonLabel,
  FinishPurchaseButton,
  PreviousProductPrice,
  RemoveItemButton,
  ContentWrapper,
  EmptyCartLabel,
  NumberOfItems,
  TrashCanIcon,
  ProductPrice,
  PriceWrapper,
  Description,
  ProductName,
  TotalValue,
  Product,
  Image,
  Title,
} from './styles';

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
        <Title>
          Meu Carrinho {''}
          <NumberOfItems>({products.length}) {products.length > 1 ? 'itens' : 'item'}
          </NumberOfItems>
        </Title>

        {
          products.map(product => (
            <Product
              key={product.id}
              onPress={() => handleGoToProductDetails(product)}
              style={styles.shadow}
            >
              <Image source={{ uri: product.image }} />
              <ContentWrapper>
                <ProductName>
                  {product.name}
                </ProductName>
                <Description>
                  {product.description}
                </Description>
                <PriceWrapper>
                  <PreviousProductPrice>{numberToCurrency(product.previousPrice)}</PreviousProductPrice>
                  <ProductPrice> {numberToCurrency(product.price)}</ProductPrice>
                </PriceWrapper>
                <RemoveItemButton
                  onPress={() => handleRemoveProductFromCart(product.id)}
                >
                  <TrashCanIcon />
                  <RemoveItemButtonLabel>Remover produto</RemoveItemButtonLabel>
                </RemoveItemButton>
              </ContentWrapper>
            </Product>
          ))
        }

        {
          !products.length && (
            <EmptyCartLabel>
              Seu carrinho está vazio..
            </EmptyCartLabel>
          )
        }

        <TotalValue>
          Total: {numberToCurrency(totalValue)}
        </TotalValue>
        <FinishPurchaseButton
          disabled={!products?.length}
          onPress={() => handleFinishPurchase(products)}
        >
          <FinishPurchaseButtonLabel>
            Finalizar compra
          </FinishPurchaseButtonLabel>
        </FinishPurchaseButton>
      </Container>
    </SafeAreaViewWrapper>
  );
};

export default ShoppingCart;
