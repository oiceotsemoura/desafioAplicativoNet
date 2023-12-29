import {KeyboardTypeOptions, TextInputProps} from 'react-native';

export type InputTypes =
  | 'text'
  | 'phone'
  | 'currency'
  | 'email'
  | 'date'
  | 'cep'
  | 'cpf'
  | 'birthday'
  | 'password';

export type MasksMap = {[key: string]: (text: string) => string};
export type KeyboardTypeMap = {[key: string]: KeyboardTypeOptions};
export type MaxLengthMap = {[key: string]: number};

export interface InputComponentProps extends TextInputProps {
  type?: InputTypes;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChangeText(value: string): void;
}
