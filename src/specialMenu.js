import React, { Component, Fragment } from "react";

class SpecialMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "22",
      list: ["头部按摩", "精油推背"]
    };
  }
  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }
  addServe() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
    console.log(this.state.list);
  }
  deleteServe(index) {
    let list = this.state.list; //千万不要直接操作state,例如this.state.list.splice(index,1)
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addServe.bind(this)}>增加服务</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <Fragment key={index + item}>
                <li>{item}</li>
                <button onClick={this.deleteServe.bind(this, index)}>
                  删除服务
                </button>
              </Fragment>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default SpecialMenu;
