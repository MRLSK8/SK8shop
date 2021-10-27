import React, { useCallback, useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import lodash from 'lodash';

import { ProductProps } from '~/store/ducks/cart.reducer';
import ProductItem from '~/components/ProductItem';
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

const productsList = () => {
  const [orderOption, setOrderOption] = useState<'alphabet' | 'price'>('alphabet');
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { navigate } = useNavigation();

  const handleItemClicked = useCallback((productData: ProductProps) => {
    // @ts-ignore
    navigate('ProductsDetails', { productData });
  }, []);

  const renderItem = ({ item }: any) => (
    <ProductItem
      callback={(productData) => handleItemClicked(productData)}
      productData={item}
    />
  );

  useEffect(() => {
    setProducts([
      {
        id: '15f6f516',
        name: 'Truck',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.\n\nOs novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.',
        image: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
        price: 259.9,
        previousPrice: 279.99,
        countryOfOrigin: 'Brasil',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '3 meses'
      },
      {
        id: '15f6f516',
        name: 'Roda Black Sheep',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance. Os novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.',
        image: 'https://images.unsplash.com/photo-1478427433968-28045906c1dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2thdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 79.99,
        previousPrice: 209.99,
        countryOfOrigin: 'China',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '2 meses'
      },
      {
        id: '15f6f516',
        name: 'Rolamento Red Bones',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1517774247280-f0d65bda942d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNrYXRlYm9hcmRpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 55,
        previousPrice: 80.50,
        countryOfOrigin: 'China',
        TypeOfShipping: 'Marketplace',
        color: 'Vermelho',
        SupplierWarranty: '6 meses'
      },
      {
        id: '11e66f566s',
        name: 'Lixa Jessup',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.\n\nOs novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.',
        image: 'https://images.unsplash.com/photo-1585027946577-16a57e32daae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNrYXRlYm9hcmRpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 18.29,
        previousPrice: 25.50,
        countryOfOrigin: 'China',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '4 meses'
      },
      {
        id: '11w651fe6',
        name: 'Skate semi-profissional',
        description: 'Os novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável.\n\nOs skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1605674136763-99ac629b8211?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHNrYXRlYm9hcmRpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 451.78,
        previousPrice: 525.68,
        countryOfOrigin: 'China',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '1 mês'
      },
      {
        id: 'g65uk65516',
        name: 'Cruiser',
        description: 'Os novo Stage 11 standard são incontestavelmente a melhor combinação de características e medidas que a Independent já construiu.Ao melhorar as já modernas características do Stage 10 com uma remodelagem das medidas a Indy criou o novo padrão que todo truck deve ter.Melhorias nas curvas, estabilidade, menor possibilidade de wheels bite, melhor performance para manobras de borda, menor possibilidade de travar nas bordas (hang-up) e maior durabilidade são só algumas das características presentes no Stage 11.A Independent usa somente os melhores materiais: Alumínio 356 T6 nas traves e na base, aço cromado 4140 no prisioneiro e parafuso central Grade 8 são os componentes utilizados, de forma cuidadosa, para deixar o eixo com mais resposta, leve e super durável. Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1608610479260-135933538b00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIxfHxza2F0ZWJvYXJkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 169.9,
        previousPrice: 328.68,
        countryOfOrigin: 'Estados Unidos',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '3 meses'
      },
      {
        id: 'jy5165ul',
        name: 'Skate Profissional completo',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.\n\nO ideal é que você faça um revezamento, trocando sempre a posição das rodas para que elas sejam desgastadas igualmente.',
        image: 'https://media.istockphoto.com/photos/skateboarding-jumping-at-sunrise-picture-id465492606?b=1&k=20&m=465492606&s=170667a&w=0&h=CXlGdocIn9EJnhLTKYFHTKcUGE4Lf5UVtbHgBDBS_RE=',
        price: 349.49,
        previousPrice: 689.28,
        countryOfOrigin: 'Argentina',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '2 meses'
      },
      {
        id: '1g516jyt6',
        name: 'Parafuso de base',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1596742797871-b12e5e6b4b1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAwfHxza2F0ZWJvYXJkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 155,
        previousPrice: 160.20,
        countryOfOrigin: 'Uruguai',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '6 meses'
      },
      {
        id: '1we55w66j15lu',
        name: 'Longboard',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1531948371443-d5afa127f918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNrYXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 178.29,
        previousPrice: 280.49,
        countryOfOrigin: 'Chile',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '2 meses'
      },
      {
        id: 'jy515ku651fe6',
        name: 'Shape element',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1460566918553-e06622bc6733?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxza2F0ZWJvYXJkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 411.02,
        previousPrice: 495.99,
        countryOfOrigin: 'Chile',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '5 meses'
      },
      {
        id: '9ee166jgr8933',
        name: 'Skate Profissional completo',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1483378255583-fd248d0e6a98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk2fHxza2F0ZWJvYXJkaW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 147.81,
        previousPrice: 160.20,
        countryOfOrigin: 'Chile',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '1 mês'
      },
      {
        id: 'g51kugr526',
        name: 'Skate completo',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1617392079938-d332e5d640e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNrYXRlYm9hcmRpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 451.78,
        previousPrice: 495.20,
        countryOfOrigin: 'Brasil',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '3 meses'
      },
      {
        id: '02gr616h5htth306',
        name: 'PADS BLACK SHEEP',
        description: 'Os skates profissionais Iron Shape são desenvolvidos com a mais alta tecnologia aeronáutica, o que resulta em um skate leve, resistente e de alta performance.',
        image: 'https://images.unsplash.com/photo-1495708405154-b0200c251b80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHNrYXRlYm9hcmRpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 451.78,
        previousPrice: 495.20,
        countryOfOrigin: 'Italia',
        TypeOfShipping: 'Marketplace',
        color: 'Azul',
        SupplierWarranty: '4 meses'
      }
    ]);
  }, []);

  useEffect(() => {
    const order = orderOption === 'alphabet' ? 'name' : 'price';
    setProducts(prevState => lodash.orderBy(prevState, [order], ['asc']));
  }, [orderOption]);

  return (
    <SafeAreaViewWrapper>
      <Container>
        <OrderLabel>Ordenar por:</OrderLabel>

        <OrderOptions>
          <OrderOption onPress={() => setOrderOption('alphabet')}>
            <OrderOptionRadioButton>
              {
                orderOption === 'alphabet' && (
                  <OrderOptionRadioButtonSelected />
                )
              }
            </OrderOptionRadioButton>
            <OrderOptionLabel>Ordem alfabética</OrderOptionLabel>
          </OrderOption>
          <OrderOption onPress={() => setOrderOption('price')}>
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

export default productsList;
