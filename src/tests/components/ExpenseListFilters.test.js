import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow( <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'new value';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    expect(wrapper).toMatchSnapshot();
})

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
})

test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
})

test('should handle date changes', () => {
    const startDate = moment(1);
    const endDate = moment(3);
    const value = { startDate, endDate };

    wrapper.find('DateRangePicker').prop('onDatesChange')(value);
    wrapper.find('DateRangePicker').simulate('change', {
        target: {
            value
        }
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    expect(wrapper).toMatchSnapshot();
})

// test('should set date focus change', () => {
//     const calendarFocused = 'endDate';
//     wrapper.find('SingleDateRangePickerDatePicker').prop('onFocusChange')(calendarFocused);
//     expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
// });