import moment from 'moment';

import { 
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from './../../actions/filters';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter object with text value', ()=>{
    const text = 'some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});

test('should generate set text filter object with default value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate action object for sort by date', ()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});

test('should generate action object for sort by amount', ()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});


// // SET_TEXT_FILTER
// export const setTextFilter = (text='') =>({
//     type: 'SET_TEXT_FILTER',
//     text
// });
// // SORT_BY_DATE
// export const sortByAmount = () =>({
//     type: 'SORT_BY_AMOUNT'
// });
// // SORT_BY_AMOUNT
// export const sortByDate = () =>({
//     type: 'SORT_BY_DATE'
// });
// // SET_START_DATE

