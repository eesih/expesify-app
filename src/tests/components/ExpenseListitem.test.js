import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListitem from '../../components/ExpenseListitem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListitem', () => {
    const wrapper = shallow(<ExpenseListitem key={expenses[1].id} {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});