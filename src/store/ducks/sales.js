import { getCashback } from '../../api/services/sales.service';
import { loadingState } from '../../utils/enums';

// Action Types
export const SALES_CREATE_REQUEST = '@app/SALES_CREATE_REQUEST';
export const SALES_CREATE_SUCCESS = '@app/SALES_CREATE_SUCCESS';
export const SALES_CREATE_FAILURE = '@app/SALES_CREATE_FAILURE';

export const SALES_EDIT = '@app/SALES_EDIT';
export const SALES_DELETE = '@app/SALES_DELETE';

// Reducer
export const initialState = {
    data: [],
    error: {
        status: '',
        message: '',
    },
    loading: loadingState.none,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SALES_CREATE_REQUEST:
            return {
                ...state,
                loading: loadingState.loading,
            };
        case SALES_CREATE_SUCCESS:
            return {
                ...state,
                ...initialState,
                data: action.payload,
                loading: loadingState.success
            };
        case SALES_CREATE_FAILURE:
            return {
                ...state,
                ...initialState,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                },
                loading: loadingState.failure
            };

        case SALES_EDIT:
            return {
                ...state,
                data: action.payload,
                loading: loadingState.loading,
            };

        case SALES_DELETE:
            return {
                ...state,
                ...initialState,
                data: action.payload,
                loading: loadingState.success
            };

        default:
            return state;
    }
}

export const createSaleAction = ({
    code,
    value,
    date,
    cashbackPersent = '0',
    status = 'processing',
}) =>  async (dispatch, getState) => {
    dispatch({ type: SALES_CREATE_REQUEST });

    try {
        const { sales, auth } = getState();
        const { data: {
            cpf,
        } } = auth;

        // const cashback = await getCashback(cpf); // CORS
        const cashback = 0;

        const newSale = {
            code,
            value,
            date,
            cashbackPersent: cashback,
            status,
        };

        const payload = [ ...sales.data, newSale ];

        dispatch({ type: SALES_CREATE_SUCCESS, payload });
    } catch(err) {
        dispatch({ type: SALES_CREATE_FAILURE, payload: err });
    }
}

export const editSaleAction = (sale) => (dispatch, getState) => {
    const { sales } = getState();

    const payload = sales.data.map(s => {
        if (s.code === sale.code) {
            return sale;
        }

        return s;
    });

    dispatch({ type: SALES_EDIT, payload });
}

export const removeSaleAction = (code) => (dispatch, getState) => {
    const { sales } = getState();

    try {
        const { data } = sales;
        const payload = data.filter(i => i.code !== code);

        dispatch({ type: SALES_DELETE, payload });
    } catch (err) {
    }
}
