import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message, Icon } from 'antd'
const SubMenu = Menu.SubMenu;
import {
  BrowserRouter,
  Route,
  HashRouter,
  Link,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'

import { updateTabList } from '../actions/tabHeader'

@connect((state, props) => ({
  config: state.config,
}))
@withRouter
export default class NavMenu extends Component {
  constructor(props) {
    super(props)
    const { pathname } = props.location
    this.state = {
      collapsed: false,
      currentKey: pathname
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleClick = (e) => {
    console.log('click ', e, this.props);
    this.setState({
      currentKey: e.key
    }, () => {
      this.props.dispatch(updateTabList({ title: e.item.props.name, content: '', key: e.key }))
      this.props.history.push(e.key)
    })
  }

  render () {

    const selectedKeys = [this.props.location.pathname.replace('/', "")]

    return (
      < div className="navbar-menu" >
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['addressBook']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onClick={this.handleClick}
          inlineCollapsed={this.state.collapsed}
          selectedKeys={selectedKeys}
        >
          <Menu.Item key="addressBook" name={`通讯录`}>
            <Icon type="pie-chart" />
            <span>通讯录</span>
          </Menu.Item>
          <Menu.Item key="topics" name={`信息管理`}>
            <Icon type="desktop" />
            <span>信息管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>


      </div >

    )
  }

}