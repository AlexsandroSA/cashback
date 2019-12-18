import * as Yup from 'yup';

let schema =  Yup.object({
    email: Yup.string()
        .email('Endereço de email invalido')
        .required('Campo obrigatório'),
    password: Yup.string()
        .max(6, 'Deve ter 6 caracteres ou mais')
        .max(20, 'Deve ter 20 caracteres ou menos')
        .required('Campo obrigatório'),
});

export default schema;
