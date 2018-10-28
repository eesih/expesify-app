import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={'$1,464.00'}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={'$3,421.00'}/>);
    expect(wrapper).toMatchSnapshot();
});