import React, { Component } from "react";
import { Calendar } from "antd";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import Modal from "./Modal";

import { connect } from "react-redux";
import { getTasks } from "../actions";

import _, { forEach } from "lodash";

class CalendarComp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    date: new Date(),
    visible: false,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  onChange = (date) => this.setState({ date });

  render() {
    const filterTasks = (value) => {
      const { tasks } = this.props.tasks;
      return tasks.filter((task) => task.taskDate === value);
    };

    const dateCellRender = (value) => {
      value = value.format("Y-M-D");
      const tasks = filterTasks(value);
      return (
        <div style={{ space: "nowrap", position: "revert" }}>
          {tasks.map((task) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                listStyle: "none",
                width: "100%",
                fontSize: "10px",
                fontWeight: "800",
                whiteSpace: "nowrap",
                overflow: "hidden",
                backgroundColor: "#28a745",
              }}
            >
              {task.taskContent}
            </li>
          ))}
        </div>
      );
    };

    const onSelect = (value) => {
      value = value.format("Y-M-D");

      // const task = prompt("enter task");
      this.myRef.current.showModal(value);

      // console.log(this.state.visible);
      // ADD TASK TO ARRAY
      //   this.setState((state) => ({
      //     tasks: [
      //       ...this.state.tasks,
      //       { id: uuid(), taskDate: value, taskContent: task },
      //     ],
      //   }));
    };

    return (
      <div>
        <Modal
          ref={this.myRef}
          filterTasks={filterTasks}
          tasks={this.props.tasks}
        ></Modal>
        <Calendar
          dateCellRender={dateCellRender}
          onSelect={onSelect}
          locale={"en-US"}
        ></Calendar>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToprops, { getTasks: getTasks })(CalendarComp);
