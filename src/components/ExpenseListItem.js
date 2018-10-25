import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListitem = ({ description, id, amount, createdAt}) => (

    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
        { numeral(amount / 100).format('$0,0.00') }
        -
        { moment(createdAt).format('MMMM Do YYYY') }
        </p>
    </div>
);

export default ExpenseListitem;