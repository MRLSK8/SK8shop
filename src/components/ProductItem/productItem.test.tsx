import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { render, fireEvent } from '@testing-library/react-native';

import theme from '~/styles/globalStyles';

import ProductItem from '.';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('ProductItem Component', () => {
  it('should have correct title', () => {
    const mockCallback = jest.fn((productData) => console.log(productData));

    const mockData = {
      id: '1636f112f516',
      name: 'Truck',
      description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.\n\nOs novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.',
      image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
      price: 259.9,
      previousPrice: 279.99,
      countryOfOrigin: 'Brasil',
      TypeOfShipping: 'Marketplace',
      color: 'Azul',
      SupplierWarranty: '3 meses'
    };

    const { getByTestId } = render(
      <ProductItem
        productData={mockData}
        callback={mockCallback}
      />,
      {
        wrapper: Providers
      }
    );

    const componentTitle = getByTestId('title');

    expect(componentTitle.props.children).toBe(mockData.name);
  });

  it('should return correct value and had been called twice', () => {
    const mockCallback = jest.fn((productData) => productData);

    const mockData = {
      id: '1636f112f516',
      name: 'Truck',
      description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.\n\nOs novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.',
      image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
      price: 259.9,
      previousPrice: 279.99,
      countryOfOrigin: 'Brasil',
      TypeOfShipping: 'Marketplace',
      color: 'Azul',
      SupplierWarranty: '3 meses'
    };

    const { getByTestId } = render(
      <ProductItem
        productData={mockData}
        callback={mockCallback}
      />,
      {
        wrapper: Providers
      }
    );

    const productButton = getByTestId('product-item-btn');
    fireEvent.press(productButton);
    fireEvent.press(productButton);

    expect(mockCallback).toBeCalledTimes(2);
    expect(mockCallback).toHaveReturnedWith(mockData);
  });
});