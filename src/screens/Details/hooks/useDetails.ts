import {IProduct} from '@interfaces/Product/IProduct';
import {useNavigation} from '@react-navigation/native';
import {
  useRemoveProductMutation,
  useListProductsMutation,
  useEditProductMutation,
} from '@store/modules/product/api';

export function useDetails() {
  const {goBack} = useNavigation();
  const [deleteProduct, {isLoading: deleteIsLoading}] =
    useRemoveProductMutation();
  const [updateProduct, {isLoading: updateIsLoading}] =
    useEditProductMutation();
  const [listProducts, {}] = useListProductsMutation();

  const deleteProductOperation = (id: number) => {
    try {
      deleteProduct(id)
        .unwrap()
        .then(() => {
          listProducts({});
          goBack();
        });
    } catch (error) {}
  };

  const updatePhoto = (id: number, product: IProduct) => {
    try {
      updateProduct({productId: id, newProduct: product})
        .unwrap()
        .then(() => {
          listProducts({});
        });
    } catch (error) {}
  };

  return {
    deleteProductOperation,
    deleteIsLoading,
    updateIsLoading,
    updatePhoto,
  };
}
