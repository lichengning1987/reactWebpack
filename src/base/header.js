import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message } from 'antd'
import { connect } from 'react-redux'


@connect(
  (state, props) => ({ color: state.changeColorStyle })
)
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    const { color } = this.props;
    console.log(color, 88)
    return (
      <div id="headerbar" style={{
        background: color.color
      }}>
        <div className="headerbar-logo">
          <div className="headerbar-title">
            reacttest
          </div>
        </div>
      </div>
    )
  }

}