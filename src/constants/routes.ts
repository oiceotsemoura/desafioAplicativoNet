import {IProduct} from '@interfaces/Product/IProduct';

export enum Routes {
  HOME = 'HOME',
  DETAILS = 'DETAILS',
}

export enum AuthRoutes {
  LOGIN = 'LOGIN',
}

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.DETAILS]: {
    product: IProduct;
  };

  [AuthRoutes.LOGIN]: undefined;
};
