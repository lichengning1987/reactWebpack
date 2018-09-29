import React, { Component } from 'react'
import { Menu, Dropdown, Button, Modal, message } from 'antd'
import { changeColor, updateTableList, searchList } from '../actions/addressBook'
import { connect } from 'react-redux'
import axios from 'axios';
import './addressBook.less';

import "../../mock/addressData"
import { Table, Divider, Tag } from 'antd';


@connect(
  (state, props) => ({ addressBook: state.changeColorStyle })
)
export default class AddressBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,

    }
  }

  componentDidMount () {
    console.log('33');
    axios.get('/data').then((res) => {
      console.log(res, 99)
      this.props.dispatch(updateTableList(res.data.content.data))
    })
  }

  changeColor = () => {
    this.props.dispatch(changeColor({
      color: 'red'
    }))
  }

  search = () => {
    console.log(this.inputref.value);
    axios.get('/seachData').then((res) => {
      this.props.dispatch(searchList(res.data.content.data))
    })
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

    let ndata = [];
    if (this.props.addressBook.tableList) {
      this.props.addressBook.tableList.list.forEach((item) => {
        item.key = item.id;
      })
      ndata = this.props.addressBook.tableList.list;
    }

    console.log(this.props, 55);
    return (
      <div className="pages-content">
        <div className="boxcon">
          <button onClick={this.changeColor}>更换皮肤颜色</button>
          <div className="search">
            <input type="text" ref={(input) => { this.inputref = input }} /> <button onClick={this.search}>搜索</button>
          </div>
        </div>
        <Table columns={columns} dataSource={ndata} />
      </div>
    )
  }

}