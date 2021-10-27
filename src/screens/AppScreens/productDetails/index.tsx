import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { addProductToCart } from '~/store/actions/shoppingCart/cart.actions';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxHooks';
import { numberToCurrency } from '~/helpers/numberToCurrency';
import { ProductProps } from '~/store/ducks/cart.reducer';
import ScreenHeader from '~/components/ScreenHeader';

import { Container, SafeAreaViewWrapper } from '~/styles';
import {
  AddToCartButtonLabel,
  PreviousProductPrice,
  ImageButtonWrapper,
  ShoppingCartIcon,
  AddToCartButton,
  ProductPrice,
  Description,
  Title,
  Image,
} from './styles';

const productDetails = () => {
  const productData = useRoute<any>()?.params?.productData as ProductProps;
  const isAlreadyInTheCart = useAppSelector(state =>
    state.cart.products.some(product => product.id === productData.id)
  );
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();

  const handleAddProductToCart = (product: ProductProps) => {
    dispatch(addProductToCart(product))
  }

  const handleNavigateToCart = () => {
    // @ts-ignore
    navigate('ShoppingCart');
  }

  const handleGoToImagePreview = (imageUri: string) => {
    if (!imageUri) return;
    // @ts-ignore
    navigate('ImagePreview', { imageUri });
  }

  return (
    <SafeAreaViewWrapper>
      <ScreenHeader />
      <Container>
        <ImageButtonWrapper
          onPress={() => handleGoToImagePreview(productData.image)}
        >
          <Image source={{ uri: productData.image }} />
        </ImageButtonWrapper>

        <Title>{productData.name}</Title>

        <Description>{productData.description}</Description>

        <Description>
          Garantia do Fornecedor: {productData.SupplierWarranty}
          {'\n'}
          Cor: {productData.color}
          {'\n'}
          País de origem: {productData.countryOfOrigin}
          {'\n'}
          Tipo de frete: {productData.TypeOfShipping}
        </Description>

        <Description>
          de <PreviousProductPrice>{numberToCurrency(productData.previousPrice)}</PreviousProductPrice>
          {'\n'}
          por <ProductPrice>{numberToCurrency(productData.price)}</ProductPrice>
        </Description>


        <AddToCartButton
          isAlreadyInTheCart={isAlreadyInTheCart}
          onPress={() =>
            isAlreadyInTheCart ? handleNavigateToCart() : handleAddProductToCart(productData)}
        >
          <AddToCartButtonLabel>
            {isAlreadyInTheCart ? 'Ir para o carrinho' : 'Adicionar ao carrinho'}
          </AddToCartButtonLabel>
          {
            isAlreadyInTheCart && (
              <ShoppingCartIcon />
            )
          }
        </AddToCartButton>
      </Container>
    </SafeAreaViewWrapper >
  );
};

export default productDetails;
