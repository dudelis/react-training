import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{
    state={
        calendarFocused: null
    }
    onDatesChange =  ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render(){
        return (
        <div>
            <input
                type="text"
                value={this.props.filters.text}
                onChange={(e)=>{
                    props.dispatch(setTextFilter(e.target.value));
                }}
            />
        
            <select 
                value={this.props.filters.sortBy}
                onChange={(e)=>{
                    if (e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    } else if (e.target.value === 'date'){
                        this.props.dispatch(sortByDate());
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate} 
                endDate={this.props.filters.endDate}
                startDateId="start-date-id"
                endDateId="end-date-id"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={focusedInput => this.setState({calendarFocused:focusedInput})} 
                displayFormat="DD/MM/YYYY"
                isOutsideRange={(day)=>false}
                numberOfMonths={1}
                showClearDates={true}
            />

        </div>

        )
    }

}


const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);