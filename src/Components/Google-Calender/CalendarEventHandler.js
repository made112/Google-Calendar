import moment from 'moment';

const CalendarEventHandler = (function () {
    function addEvent (allEvents, newEvent) {
        const time = moment (newEvent.start).hours ();
        const eventWithMeatInfo = {
          ...newEvent,
          startWeek: moment (newEvent.start).week (),
          endWeek: moment (newEvent.end).week (),
        };
        if (allEvents[time]) {
          allEvents[time].push (eventWithMeatInfo);
        } else {
          allEvents[time] = [eventWithMeatInfo];
        }
        return {...allEvents};
      }
      function generateUniqueId({start, title, end}) {
        return start + title + end;
      }
      return {
        add: addEvent,
        generateId: generateUniqueId,
      };
})();
export default CalendarEventHandler