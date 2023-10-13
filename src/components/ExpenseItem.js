import './ExpenseItem.css';





function ExpenseItem(props){

    return(
        <div>
            <h2>expense items</h2>
            <div>{props.date.toISOString()}</div>
            <div className ="expense-item">
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rs { props.amount}</div>
            </div>
        </div>

        </div>

    ) 
}

export default ExpenseItem;