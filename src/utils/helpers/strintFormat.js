const moneyFormat = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

export function parserToMoney(value = 0) {
    const n = Number(value);
    const str = n.toLocaleString('pt-BR', moneyFormat);

    return str;
}

export default {
    parserToMoney,
};
