import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadingState } from '../../utils/enums';

import reducer, {
    initialState,
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_FAILURE,
    USERS_RESET,
    registerAction,
    resetRegisterAction,
} from './users';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


let INITIAL_STATE;

describe('Store: Auth', () => {
    describe('Types', () => {
        it(`Type USERS_REQUEST is equal ${USERS_REQUEST}`, () => {
            expect(USERS_REQUEST).toEqual('@app/USERS_REQUEST');
          });

          it(`USERS_SUCCESS is equal ${USERS_SUCCESS}`, () => {
            expect(USERS_SUCCESS).toEqual('@app/USERS_SUCCESS');
          });

          it(`USERS_FAILURE is equal ${USERS_FAILURE}`, () => {
            expect(USERS_FAILURE).toEqual('@app/USERS_FAILURE');
          });

          it(`USERS_RESET is equal ${USERS_RESET}`, () => {
            expect(USERS_RESET).toEqual('@app/USERS_RESET');
          });
    });

    describe('Reducers', () => {
        beforeEach(() => {
            INITIAL_STATE = { ...initialState };
        });

        it('should call reducer when `action.type` invalid then return INITIAL_STATE', () => {
            // should
            const action = { type: 'NO_EXIST' };
            const result = reducer(undefined, action);

            // when
            const expected = INITIAL_STATE;

            // then
            expect(result).toEqual(expected);
          });

          it('should call reducer when `action.type = USERS_REQUEST` then returns the correct state', () => {
            // should
            const action = { type: USERS_REQUEST };
            const result = reducer(undefined, action);

            // when
            const expected = {
              ...INITIAL_STATE,
              loading: loadingState.loading,
            };

            // then
            expect(result).toEqual(expected);
          });

        it('should call reducer when `action.type = USERS_SUCCESS` then returns the correct state', () => {
            // should
            const action = { type: USERS_SUCCESS, payload: [
                {
                    cpf: '980.138.788-21',
                    name: 'Alexsandro',
                    email: 'me@mail.com',
                    password: '123123',
                }
            ]};
            const result = reducer(undefined, action);

            // when
            const expected = {
              ...INITIAL_STATE,
              data: action.payload,
              loading: loadingState.success,
            };

            // then
            expect(result).toEqual(expected);
          });

        it('should call reducer when `action.type = USERS_FAILURE` then returns the correct state', () => {
            // should
            const action = { type: USERS_FAILURE, payload:
                {
                    status: 500,
                    message: 'Ops... Tente mais tarde',
                }
            };
            const result = reducer(undefined, action);

            // when
            const expected = {
              ...INITIAL_STATE,
              error: action.payload,
              loading: loadingState.failure,
            };

            // then
            expect(result).toEqual(expected);
          });

        it('should call reducer when `action.type = USERS_RESET` and has users then returns the correct state', () => {
            // should
            const action = { type: USERS_RESET, payload: [] };
            const result = reducer(undefined, action);

            // when
            const expected = INITIAL_STATE;

            // then
            expect(result).toEqual(expected);
        });
    });

    describe('Actions', () => {
        it('should call registerAction when response is success', () => {
            // should
            const userState = INITIAL_STATE;

            const params = {
                cpf: '980.138.788-21',
                name: 'Alexsandro',
                email: 'me@mail.com',
                password: '123123',
            };

            const expectedActions = [
                { type: USERS_REQUEST },
                {
                    type: USERS_SUCCESS,
                    payload: [params]
                }
            ];

            // when
            const store = mockStore({ users: userState });
            store.dispatch(registerAction(params));

            // then
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should call registerAction when response is success', () => {
            // should
            const userState = INITIAL_STATE;

            const expectedActions = [
                { type: USERS_RESET, payload: [] },
            ];

            // when
            const store = mockStore({ users: userState });
            store.dispatch(resetRegisterAction());

            // then
            expect(store.getActions()).toEqual(expectedActions);
        });


    })
});
