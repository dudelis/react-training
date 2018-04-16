import selectExpenses from './../../selectors/expenses';

const expenses = [
    {id: '1', description:'Gum', note:'', amount: 195, createdAt: 0},
    {id: '2', description:'Bus', note:'', amount: 1095, createdAt: -1000},
    {id: '3', description:'Station', note:'', amount: 19500, createdAt: 1000}
]


test('should filter by text value', ()=>{
    const filters = {
        text: 'u',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
});



// import moment from 'moment';

// export default (expenses, {text, sortBy, startDate, endDate})=>{

//     return expenses.filter((expense)=>{
//         const createdAtMoment = moment(expense.createdAt);
//         const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
//         const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b)=>{
//         if (sortBy === 'date'){
//             return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy ==='amount'){
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };