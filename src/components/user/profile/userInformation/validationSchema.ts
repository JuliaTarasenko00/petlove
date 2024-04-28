import * as Yup from 'yup';
import { emailRegexp } from '@/helpers/patterns/emailRegexp';
import { phonePattern } from '@/helpers/patterns/phonePattern';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short! Minimum number of characters is 5')
    .max(20, 'Too Long! Maximum number of characters is 20')
    .required('Required'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required('Required'),
  phone: Yup.string()
    .matches(phonePattern, `This is an ERROR phone`)
    .required('Required'),
  avatar: Yup.string(),
});
