import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message } from 'antd'
import { changeColor } from '../actions/addressBook'
import { connect } from 'react-redux'
import axios from 'axios';
import './addressBook.less';

import "../../mock/addressData"
import { Table, Divider, Tag } from 'antd';


@connect(
  (state, props) => ({ color: state.changeColorStyle })
)
export default class AddressBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    console.log('33');
    axios.get('/data').then((res) => {
      console.log(res, 99)
    })
  }

  changeColor = () => {
    this.props.dispatch(changeColor({
      color: 'red'
    }))
  }

  render () {


    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Invite {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }];

    console.log(this.props, 55);
    return (
      <div className="pages-content">
        <div className="boxcon">
          <button onClick={this.changeColor}>更换皮肤颜色</button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }

}