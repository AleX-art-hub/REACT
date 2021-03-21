import React, {Component} from 'react';
import {format, add, getWeeksInMonth, getDaysWeeksInMonth} from 'date-fns';

const Calendar = ({currentDate})=> {
    return (
        <article>
            <Day currentDate={currentDate}/>
            <Month date={currentDate} />
        </article>
    );
};

/*class Calendar extends Component{
    constructor(props){
        super(props);
        this.state = {
            day: new Date()
        };
    }
    changeDay = props => {
        const {day} = this.state;
        const newDate = add(day, props);
        this.setState ({day: newDate});
    }
    render(){
        const {day} = this.state;
        return (
            <div>
                <div>{format(day,'EEEE LLL yy')}</div>
                <div>This month contains {getWeeksInMonth} weeks</div>
                <div>This month contains {getDaysWeeksInMonth} weeks</div>
                <button onClick={() => this.changeDay({days:1})}> Add days </button>
                <button onClick={() => this.changeWeeks({weeks:1})}> Add week </button>
                <button onClick={() => this.changeYear({year:1})}> Add year </button>
                <button onClick={() => this.changeYear({year:1, month:1, days:1})}> Add soem </button>
            </div>
        );
    }
}*/
export default Calendar;