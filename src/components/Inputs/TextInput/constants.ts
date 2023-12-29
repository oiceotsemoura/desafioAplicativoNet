import {
  KeyboardTypeMap,
  MaxLengthMap,
} from '@components/Inputs/TextInput/interface';

export const maxLengthMap: MaxLengthMap = {
  phone: 15,
  date: 10,
  cep: 9,
  cpf: 14,
  birthday: 10,
};

export const keyboardTypeMap: KeyboardTypeMap = {
  phone: 'numeric',
  date: 'numeric',
  text: 'default',
  currency: 'numeric',
  email: 'email-address',
  cep: 'numeric',
  cpf: 'numeric',
  birthday: 'numeric',
  password: 'default',
};
