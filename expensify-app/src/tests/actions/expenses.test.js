import { removeExpense, editExpense, addExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    });
});

test('should edit expense ', ()=>{
    const action = editExpense('123', {note: 'new value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123',
        updates:{
            note: 'new value'
        }
    });
})

test('should setup add expense action object with provided values',()=>{
    const expenseData = {
        description: 'description123',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month rent'
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })


})