import { loadingState } from '../../utils/enums';

// Action Types
export const USERS_REQUEST = '@app/USERS_REQUEST';
export const USERS_SUCCESS = '@app/USERS_SUCCESS';
export const USERS_FAILURE = '@app/USERS_FAILURE';
export const USERS_RESET = '@app/USERS_RESET';


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
        case USERS_REQUEST:
            return {
                ...state,
                loading: loadingState.loading,
            };
        case USERS_SUCCESS:
            return {
                ...state,
                ...initialState,
                data: action.payload,
                loading: loadingState.success
            };
        case USERS_FAILURE:
            return {
                ...state,
                ...initialState,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                },
                loading: loadingState.failure
            };
        case USERS_RESET:
            return {
                ...state,
                ...initialState,
                data: action.payload,
            };
        default:
            return state;
    }
}

export const registerAction = ({ name, cpf, email, password }) => (dispatch, getState) => {
    dispatch({ type: USERS_REQUEST  });

    try {
        const { users } = getState();
        const userExist = !!users.data.length && users.data.some(u => u.cpf === cpf);

        if (userExist) {
            throw new Error('Usuário já cadastrado');
        }

        const newUser = {
            cpf,
            name,
            email,
            password,
        };

        const payload = [ ...users.data, newUser ];

        dispatch({ type: USERS_SUCCESS, payload });
    } catch(err) {
        const error = {
            message: err.message || 'Error',
            status: 500,
        };

        dispatch({ type: USERS_FAILURE, payload: error });
    }
}

export const resetRegisterAction = () => (dispatch, getState) => {
    const { users } = getState();

    dispatch({ type: USERS_RESET, payload: users.data });
}
