import * as Yup from 'yup';
import { emailRegexp } from '@/helpers/patterns/emailRegexp';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short! Minimum number of characters is 8')
    .required('Required'),
});
