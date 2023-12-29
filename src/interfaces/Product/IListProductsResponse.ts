import {IProduct} from './IProduct';

export interface IListProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
