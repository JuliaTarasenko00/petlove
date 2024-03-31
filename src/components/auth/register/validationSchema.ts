import { emailRegexp } from '@/helpers/patterns/emailRegexp';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short! Minimum number of characters is 5')
    .max(20, 'Too Long! Maximum number of characters is 20')
    .required('Required'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .required('Required'),
  configPassword: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});
