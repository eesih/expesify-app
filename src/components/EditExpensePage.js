import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from './../actions/expences';

export class EditExpensePage extends React.Component {

    onSubmitEditExpense = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }    
    onSubmitRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmitEditExpense}
                />
                <button onClick={this.onSubmitRemoveExpense}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps=(state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    editExpense: (id, expense) => dispatch(editExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);