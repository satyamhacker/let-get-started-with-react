import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';





function ExpenseItem(props){

    return(
        <div>
            <h2>expense items</h2>

            <div className ="expense-item"></div>

            <ExpenseDate date={props.date}></ExpenseDate>
            < ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
            
        </div>

        

    ) 
}

export default ExpenseItem;