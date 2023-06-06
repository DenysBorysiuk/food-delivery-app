import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim()
    .min(3, 'must be min 3 characters long')
    .max(12, 'must be max 12 characters long'),
  email: yup.string().required().email(),

  phone: yup
    .string()
    .required()
    .trim()
    .min(6, 'must be min 6 characters long')
    .max(12, 'must be max 12 characters long'),

  address: yup
    .string()
    .required()
    .trim()
    .min(3, 'must be min 3 characters long'),
});

export default schema;
