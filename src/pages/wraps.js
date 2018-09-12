import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message } from 'antd'
import { changeColor } from '../actions/addressBook'
import { connect } from 'react-redux'

@connect(
  (state, props) => ({ color: state.changeColorStyle })
)
export default class Wraps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  changeColor = () => {
    this.props.dispatch(changeColor({
      color: 'red'
    }))
  }

  render () {
    console.log(this.props, 55);
    return (
      <div id="contentBox">
        <div className="boxcon">
          <h3>换肤</h3>
          <button onClick={this.changeColor}>更换皮肤颜色</button>
        </div>
      </div>
    )
  }

}