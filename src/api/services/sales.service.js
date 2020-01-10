import api from '../api';
import { toApi, fromApi } from '../dto/sales.dto';

export const getCashback =  async (cpf) => {
    const cpfWhithSpecialCharts = toApi(cpf);

    const { data } = await api({
        url: `/v1/cashback`,
        method: 'GET',
        params: {
            cpf: cpfWhithSpecialCharts
        },
    });

    const result = fromApi(data);

    return result;
}

