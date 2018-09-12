import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message } from 'antd'
import Header from './Header'
import NavMenu from './nav'
import Content from './content'
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Route,
  HashRouter,
  Link,
  withRouter
} from 'react-router-dom'


@withRouter
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render () {
    console.log(this.props, 4444);
    const { children } = this.props;
    return (
      <div id="container">
        <Header />
        <div className="boxed">
          <div className="leftnav">
            <NavMenu></NavMenu>
          </div>
          <div className="content-wrap">
            <div className="page-container">
              <Content />
              {children}
            </div>
          </div>
        </div>
      </div >
    )
  }

}