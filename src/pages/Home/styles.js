import styled from 'styled-components';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
})``;

export const ProductItem = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 250px;
  height: 400px;
  margin: 15px 0px 0px 15px;

  /** Rocketseat */
  /* background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px; */
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #666;
`;
export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: auto; /* Responsável por deixar o botão embaixo */
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
