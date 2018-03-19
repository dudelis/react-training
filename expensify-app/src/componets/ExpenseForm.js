import React from 'react';
import { connect } from 'react-redux';

export default class ExpenseForm extends React.Component{
    state = {
        description: '',
        note: '',
        amount: ''
    };
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(()=>({ description }));
    }
    onNoteChange = (e) =>{
        const note = e.target.value;
        this.setState(()=>({ note }));
    }
    onAmountChange = (e) =>{
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }));
        }
    }
    render(){
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        step=".01"

                    />
                    <textarea
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}