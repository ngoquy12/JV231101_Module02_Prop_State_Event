import { Component } from "react";
import Children_Component from "./Children_Component";
import Form from "./Form";

export default class Parent_Component extends Component {
  //  Khởi tạo constructor - Hàm khởi tạo đối tượng
  constructor() {
    // Để chúng ta có thể kế thừa lại tất cả các phương thức và thuộc tính có bên trong Component
    super();

    // Cú pháp khởi tạo state
    this.state = {
      number: 1,
      userName: "Nguyễn Văn Nam",
      isShow: true,
      showForm: false,
    };
  }

  // Hàm xử lý tăng
  handleIncrease = () => {
    // Cập nhật lại giá trị của state
    this.setState({
      number: this.state.number + 1,
    });
  };

  // Hàm thay đổi tên
  handleChangeName = () => {
    // Cập nhật lại giá trị của state
    this.setState({
      userName: "Nguyễn Văn Mạnh",
    });
  };

  handleToggle = () => {
    // Cập nhật lại giá trị của state
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  // Hàm hiển thị form
  handleShowForm = () => {
    this.setState({
      showForm: true,
    });
  };

  // Làm sao để cập nhật được state bên trong một class component ???
  render() {
    console.log("Hàm bị re-render");
    const listUser = this.props.users;

    return (
      <>
        <hr />
        {/* {this.state.showForm === true ? <Form /> : <></>} */}
        {/* {this.state.showForm ? <Form /> : <></>} */}
        {this.state.showForm && <Form />}

        <h3>Count: {this.state.number}</h3>
        <h3>UserName: {this.state.userName}</h3>
        <button onClick={this.handleIncrease}>Count</button>
        <button onClick={this.handleChangeName}>Change name</button>
        <button onClick={this.handleToggle}>
          {this.state.isShow === true ? "Ẩn" : "Hiện"}
        </button>
        <button onClick={this.handleShowForm}>Hiển thị form</button>
        <hr />
        <div>Tên bên trong component con: {this.props.userNameProp}</div>
        <Children_Component ageProp={this.props.ageProp}></Children_Component>
        <h3>Danh sách tài khoản</h3>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {/* {listUser.map((user, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                </>
              );
            })} */}

            {listUser.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
