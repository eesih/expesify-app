import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {type: 'SET_TEXT_FILTER', text: 'testing'};
    const state = filtersReducer(null, action);
    expect(state.text).toBe('testing');
});

test('should set start date filter', () => {
    const action = {type: 'SET_START_DATE', startDate: 'testing'};
    const state = filtersReducer(null, action);
    expect(state.startDate).toBe('testing');
});

test('should set end date filter', () => {
    const action = {type: 'SET_END_DATE', endDate: 'testing'};
    const state = filtersReducer(null, action);
    expect(state.endDate).toBe('testing');
});