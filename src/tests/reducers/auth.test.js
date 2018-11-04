import authReducer from '../../reducers/auth';

test('should set uid after login ', () => {
    const action = {
        type: 'LOGIN',
        uid: '123abc'
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid after logout', () => {
    const action = { type: 'LOGOUT'};
    const state = authReducer({ uid:'anything' }, action);
    expect(state).toEqual({});
});