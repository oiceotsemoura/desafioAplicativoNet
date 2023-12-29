import {yupResolver} from '@hookform/resolvers/yup';
import {FieldValues, useForm} from 'react-hook-form';
import {useAppDispatch} from '@store/hook';
import {useSignInMutation} from '@store/modules/auth/api';
import {AuthActions} from '@store/modules/auth/reducer';
import * as yup from 'yup';

export type FormLoginFields = {
  username: string;
  password: string;
};

export function useFormLogin() {
  const dispatch = useAppDispatch();

  const [signIn, {isLoading}] = useSignInMutation();

  const schema = yup.object().shape({
    username: yup.string().required('Username é obrigatório'),
    password: yup.string().required('Senha é obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver<FieldValues>(schema, {abortEarly: false}),
  });

  const submit = async (data: FieldValues) => {
    try {
      const {username, password} = data as FormLoginFields;

      const res = await signIn({
        username: username!,
        password: password!,
      }).unwrap();

      if (res.token) {
        dispatch(AuthActions.login(res));
      }
    } catch (error) {}
  };

  const onSubmit = handleSubmit(submit);

  return {
    onSubmit,
    control,
    errors,
    isLoading,
  };
}
