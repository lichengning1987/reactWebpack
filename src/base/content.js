import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message, Tabs } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { is } from 'immutable'
import {
  BrowserRouter,
  Route,
  HashRouter,
  Link,
  withRouter
} from 'react-router-dom'
const { TabPane } = Tabs

import { deleteTabFromList, updateTabChecked } from '../actions/tabHeader'

@connect(
  (state, props) => ({ tabList: state.tabListResult, color: state.changeColorStyle })
)
@withRouter
export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  onChange = (activeKey) => {
    const { actions } = this.props;
    this.props.dispatch(updateTabChecked({ activeKey: activeKey }))
    this.props.history.push(activeKey)
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  remove = (targetKey) => {
    const { actions, tabList } = this.props;
    let delIndex
    let activeKey

    console.log(targetKey, tabList.activeKey);

    if (targetKey === tabList.activeKey) {
      tabList.list.map((tab, index) => {
        tab.key === targetKey ? delIndex = index : null;
      });
      activeKey = tabList.list[delIndex + 1] ?
        tabList.list[delIndex + 1].key : (tabList.list[delIndex - 1] ?
          tabList.list[delIndex - 1].key : '');
      console.log(actions, 888, activeKey);
      //actions.push(activeKey);
      if (activeKey == "") {
        this.props.history.push('/')
      } else {
        this.props.history.push(activeKey)
      }
    }
    this.props.dispatch(deleteTabFromList({ targetKey: targetKey }));
  }
  shouldComponentUpdate (nextProps, nextState) {
    const thisProps = this.props || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      return true;
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }
    return false;
  }

  render () {
    const { tabList } = this.props
    console.log(this.props, 99)
    return (
      <div id="tabMenuHeader">
        <div className="boxcon">
          <Tabs
            hideAdd
            onChange={this.onChange}
            activeKey={tabList.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              tabList.list.map(tab =>
                <TabPane tab={tab.title} key={tab.key}>{tab.content}</TabPane>)
            }
          </Tabs>
        </div>
      </div>
    )
  }

}