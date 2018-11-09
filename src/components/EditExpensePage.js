import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expences';

export class EditExpensePage extends React.Component {

    onSubmitEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }    
    onSubmitRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container"> 
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmitEditExpense}
                    />
                    <button className="button button--secondary" onClick={this.onSubmitRemoveExpense}>Remove Expense</button>
                </div>       
            </div>
        )
    }
}

const mapStateToProps=(state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);