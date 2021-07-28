import React from 'react';
import { Input, DatePicker } from 'antd';
import moment from 'moment';
import { inputStyles } from '../../styles';
const { RangePicker } = DatePicker;
function AddEvent(props) {
  return (
    <React.Fragment>
      <Input
        type="text"
        placeholder="Add Title"
        value={props.title}
        style={inputStyles}
        size="large"
        onChange={props.onTitleChange}
      />
      <RangePicker
        style={{ width: '100%' }}
        value={[moment(props.start), moment(props.end)]}
        onChange={props.onTimeChange}
        showTime={{
          format: 'HH:mm',
        }}
        format="MMM Do, YYYY hh:mm a"
      />
    </React.Fragment>
  );
}
export default AddEvent;
