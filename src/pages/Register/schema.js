import * as Yup from 'yup';
import { regexEnum } from '../../utils/enums';

let schema =  Yup.object({
    name: Yup.string()
        .min(3, 'Deve ter 3 caracteres ou mais')
        .required('Campo obrigatório'),
    cpf: Yup.string()
        .matches(regexEnum.cpf, { message: 'Formato inválido'})
        .required('Campo obrigatório'),
    email: Yup.string()
        .email('Endereço de email invalido')
        .required('Campo obrigatório'),
    password: Yup.string()
        .min(3, 'Deve ter 3 caracteres ou mais')
        .max(20, 'Deve ter 20 caracteres ou menos')
        .required('Campo obrigatório'),
});

export default schema;
