import * as Yup from 'yup';
import { regexEnum } from '../../../utils/enums';

let schema =  Yup.object({
    code: Yup.string()
        .min(1)
        .max(15)
        .required('Campo obrigatório'),
    value: Yup.string()
        .matches(regexEnum.onlyNumber, { message: 'Apenas número'})
        .required('Campo obrigatório'),
    date: Yup.string()
        .matches(regexEnum.date, { message: 'Formato inválido'})
        .required('Campo obrigatório'),
});

export default schema;
