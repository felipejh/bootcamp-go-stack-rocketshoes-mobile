import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductAmount,
  ProductControls,
  ProductControlButton,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis</ProductTitle>
              <ProductPrice>R$ 35,00</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" color={colors.primary} size={25} />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                color={colors.primary}
                size={20}
              />
            </ProductControlButton>
            <ProductAmount>5</ProductAmount>
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                color={colors.primary}
                size={20}
              />
            </ProductControlButton>
            <ProductSubtotal>R$250,00</ProductSubtotal>
          </ProductControls>
        </Product>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ims=326x',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis</ProductTitle>
              <ProductPrice>R$ 35,00</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" color={colors.primary} size={25} />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon
                name="remove-circle-outline"
                color={colors.primary}
                size={20}
              />
            </ProductControlButton>
            <ProductAmount>5</ProductAmount>
            <ProductControlButton>
              <Icon
                name="add-circle-outline"
                color={colors.primary}
                size={20}
              />
            </ProductControlButton>
            <ProductSubtotal>R$250,00</ProductSubtotal>
          </ProductControls>
        </Product>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>R$ 1.500,00</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </Products>
    </Container>
  );
}
