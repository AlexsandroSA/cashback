import { loadingState } from '../../utils/enums';

// Action Types
export const AUTH_REQUEST = '@app/AUTH_REQUEST';
export const AUTH_SUCCESS = '@app/AUTH_SUCCESS';
export const AUTH_FAILURE = '@app/AUTH_FAILURE';
export const AUTH_RESET = '@app/AUTH_RESET';

// Reducer
export const initialState = {
    data: {},
    error: {
        status: '',
        message: '',
    },
    loading: loadingState.none,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                loading: loadingState.loading,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                ...initialState,
                data: action.payload,
                loading: loadingState.success
            };
        case AUTH_FAILURE:
            return {
                ...state,
                ...initialState,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                },
                loading: loadingState.failure
            };
        case AUTH_RESET:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
}

export const loginAction = ({ email, password }) => (dispatch, getState) => {
    dispatch({ type: AUTH_REQUEST  });

    try {
        const { users } = getState();

        const userValid = !!users.data.length && users.data.some(u => {
            return u.email === email && u.password === password;
        });

        if (!userValid) {
            throw new Error('E-mail e/ou senha inválidos');
        }

        const userLogged = users.data.find(u => u.email === email);

        dispatch({ type: AUTH_SUCCESS, payload: userLogged });
    } catch(err) {
        dispatch({ type: AUTH_FAILURE, payload: err });
    }
}

export const logoutAction = () => (dispatch) => {
    dispatch({ type: AUTH_RESET });
};

export const resetLoginAction = () => (dispatch) => {
    dispatch({ type: AUTH_RESET });
};
