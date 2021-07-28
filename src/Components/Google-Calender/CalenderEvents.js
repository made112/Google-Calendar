import React, { Component } from 'react'
import CalendarTask from './Calendar'
import CalendarEventHandler from './CalendarEventHandler';

 class CalenderEvents extends Component {
    constructor (props) {
        super (props);
    
        this.state = {
          events: JSON.parse (localStorage.getItem ('events')) || {},
        };
    
        // saving data to the local storage
        window.addEventListener ('beforeunload', () => {
          localStorage.setItem ('events', JSON.stringify (this.state.events));
        });
      }
   
addNewEvent = event => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId (event),
    };
    this.setState (previousSate => ({
      events: CalendarEventHandler.add (previousSate.events, event),
    }));
  };

fuck = ()=>{
    console.log('khiri')
}

    render() {
        const {events} = this.state;

        return (
            <div>
            <CalendarTask 
            fun = {this.fuck}
            events={events}
            onNewEvent={this.addNewEvent}
            />
                        
                
            </div>
        )
    }
}

export default CalenderEvents
