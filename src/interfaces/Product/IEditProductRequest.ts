import {IProduct} from './IProduct';

export interface IEditProductRequest {
  productId: number;
  newProduct: IProduct;
}
