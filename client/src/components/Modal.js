import React from "react";
import { Modal } from "antd";
import { connect } from "react-redux";
import { addTask, deleteTask } from "../actions";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { visible: false, tasks: [], task: "", date: "" };

  Inputstyle = {
    width: {
      value: "80%",
      important: "true",
    },
  };

  showModal(date) {
    this.setState({
      visible: true,
      date: date,
    });
  }

  handleOk = (e) => {
    if (this.state.task !== "") {
      const task = {
        date: this.state.date,
        name: this.state.task,
      };
      this.props.addTask(task);
    }
    this.setState({
      visible: false,
      task: "",
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  onPressEnter = (e) => {
    if ((e.key === "Enter" || e.keyCode === 13) && this.state.task !== "") {
      const task = {
        date: this.state.date,
        name: this.state.task,
      };
      this.props.addTask(task);
      this.setState({
        task: "",
      });
    }
  };

  onPlusClicked = (e) => {
    if (this.state.task !== "") {
      const task = {
        date: this.state.date,
        name: this.state.task,
      };
      this.props.addTask(task);
      this.setState({
        task: "",
      });
    }
  };

  render() {
    const tasks = this.props.filterTasks(this.state.date);
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ul>
            {tasks.map((task) => {
              return (
                <li>
                  {task.name}{" "}
                  <DeleteOutlined
                    onClick={() => this.props.deleteTask(task._id)}
                  />
                </li>
              );
            })}

            <li style={{ listStyle: "none" }}>
              <input
                onChange={(e) => {
                  this.setState({ task: e.target.value });
                }}
                onPressEnter={this.onPressEnter}
                placeholder={"Enter Task here"}
                value={this.state.task}
                onKeyDown={this.onPressEnter}
              ></input>
              <PlusOutlined onClick={this.onPlusClicked} />
            </li>
          </ul>
        </Modal>
      </>
    );
  }
}

// const mapStateToprops = (state) => {
//   return { tasks: state.tasks };
// };

export default connect(
  null,
  { addTask: addTask, deleteTask: deleteTask },
  null,
  { forwardRef: true }
)(AddModal);
