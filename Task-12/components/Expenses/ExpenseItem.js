import React from 'react';
import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    return (
       
        <Card className ="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            < ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
            
        </Card>
    
    );
}
export default ExpenseItem;