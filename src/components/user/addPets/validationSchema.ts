import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  petsName: Yup.string()
    .min(5, 'Too Short! Minimum number of characters is 5')
    .max(20, 'Too Long! Maximum number of characters is 20')
    .required('Required'),
  title: Yup.string()
    .min(10, 'Too Short! Minimum number of characters is 10')
    .max(50, 'Too Long! Maximum number of characters is 50')
    .required('Required'),
  birthday: Yup.date()
    .nullable()
    .default(null)
    .test('not-null', 'Enter birthday', (value) => value !== null),
  type: Yup.string().required('Enter type'),
  gender: Yup.string()
    .oneOf(['', 'female', 'male', 'multiple'] as const, 'Invalid gender')
    .required('Select gender'),
  image: Yup.string().required('Required'),
});
