/* eslint-disable no-console */
import React, {useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {useListProductsMutation} from '@store/modules/product/api';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@constants/routes';
import {Typography, Icon} from '@components/index';
import {IProduct} from '@interfaces/Product/IProduct';
import S from './styles';

export const HomeScreen = () => {
  const {navigate} = useNavigation();
  const [listProducts, {isLoading, isError, data}] = useListProductsMutation();

  useEffect(() => {
    listProducts({});
  }, []);

  return (
    <ScrollView contentContainerStyle={{padding: 10}}>
      <S.Title>Produtos</S.Title>
      <FlatList
        data={data?.products!}
        renderItem={({item}: {item: IProduct}) => (
          <S.ListItemContainer key={`${item.id}`}>
            <S.Thunbnail
              source={{
                uri: item.thumbnail,
              }}
            />
            <S.ContentContainer>
              <S.ProductTitle>{item.title}</S.ProductTitle>
            </S.ContentContainer>

            <Icon
              name="chevron-right"
              onPress={() => navigate(Routes.DETAILS, {product: item})}
            />
          </S.ListItemContainer>
        )}
        keyExtractor={item => `${item.id}`}
      />

      {isLoading && <Typography>Loading</Typography>}
      {isError && <Typography>Error</Typography>}
    </ScrollView>
  );
};
