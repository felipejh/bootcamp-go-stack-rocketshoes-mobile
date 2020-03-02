import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductItem,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const newProducts = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(newProducts);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => {
          return (
            <ProductItem>
              <ProductImage source={{ uri: item.image }} />

              <ProductTitle>{item.title}</ProductTitle>

              <ProductPrice>{item.priceFormatted}</ProductPrice>

              <AddButton onPress={() => handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmount>
                <AddButtonText>ADICIONAR</AddButtonText>
              </AddButton>
            </ProductItem>
          );
        }}
      />
    </Container>
  );
}

Home.propTypes = propTypes;
