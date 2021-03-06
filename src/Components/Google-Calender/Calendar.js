import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Calendar, Alert, Modal, Button } from 'antd';
import moment from 'moment';
import AddEvent from './AddEvent';
class CalendarTask extends Component {
  state = {
    startDate: +moment(),
    showAddEventModal: false,
    eventStart: null,
    eventEnd: null,
    visible: false
  };
  constructor(props) {
    super(props)
    this.state = {
      value: moment('2021-01-25'),
      selectedValue: moment('2021-01-25'),
      showModal: true,
    }
  }
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };
  onPanelChange = value => {
    this.setState({ value });
  }
  onCurrentEventTimeChange = dates => {
    this.setState({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    });
  };
  showModal = (value) => {

    this.setState({
      visible: true,
    });


  };
  handleOk = e => {

    this.setState({
      visible: false,
    });
    console.log('done')

  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  handleTitleChange = event => {
    this.setState({
      title: event.target.value,
    });
  };

 
  onCurrentEventTimeChange = dates => {
    this.setState({
      eventStart: +dates[0],
      eventEnd: +dates[1],
    });
  };
  render() {
    const { title, eventStart, eventEnd } = this.state;
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              {this.props.editMode ? 'Delete' : 'Cancel'}
            </Button>,
            <Button key="submit" onClick={this.handleOk}>
              {this.props.editMode ? 'Update Event' : 'Add Event'}
            </Button>,
          ]}>
          <AddEvent
            title={title}
            onTitleChange={this.handleTitleChange}
            start={eventStart}
            end={eventEnd}
            onTimeChange={this.onCurrentEventTimeChange}
          />
        </Modal>
        <Calendar
          data={this.getListData}
          onChange={this.showModal}
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange} />
        <ui>
          <li>{title}</li>
        </ui>
      </>
    );
  }
}
export default CalendarTask
