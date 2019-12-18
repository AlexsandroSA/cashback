import { combineReducers } from 'redux';

import authReducer from './ducks/auth';
import usersReducer from './ducks/users';
import salesReducer from './ducks/sales';

const reducers = combineReducers({
    auth: authReducer,
    sales: salesReducer,
    users: usersReducer,
});

export default reducers;
