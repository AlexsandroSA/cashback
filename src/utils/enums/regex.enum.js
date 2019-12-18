export const CPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
export const onlyNumber = /^[0-9 ]+$/;
export const onlyText = /^[áãâàéêÁÃÂÀÉÊíóõôúçÍÓÕÔÚÇA-Za-z0-9-//,.&* ]+$/;
export const onlyLetter = /^[áãâàéêÁÃÂÀÉÊíóõôúçÍÓÕÔÚÇA-Za-z ]+$/;
export const money = /^(\d{1,3}(\.\d{3})*|\d+)(,\d{2})?$/;
export const date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

export default {
    cpf: CPF,
    onlyText,
    onlyLetter,
    onlyNumber,
    money,
    date,
}
