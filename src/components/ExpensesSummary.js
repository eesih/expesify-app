import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from './../selectors/expenses'; 
import getExpensesTotal from './../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
    return (
        <div> 
            <h1>{`Viewing ${expenseCount} ${expenseWord} totalling ${expensesTotal}`}</h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: numeral(getExpensesTotal(visibleExpenses) / 100).format('$0,0.00') 
    };
};

export default connect(mapStateToProps)(ExpensesSummary);