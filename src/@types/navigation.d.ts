import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@constants/routes';

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
