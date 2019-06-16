import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile'

const Item = List.Item

export default class My extends Component {
  constructor() {
    super()

    this.state = {
      iconlist: [{ id: '1', icon: 'icon_map', title: '我的积分' },
      { id: '2', icon: 'icon_main', title: '我的订阅' },
      { id: '12' },
      { id: '3', icon: 'icon_chat', title: '微聊联系人' },
      { id: '4', icon: 'icon_search', title: '房贷计算器' },
      { id: '10' },
      { id: '5', icon: 'icon_user', title: '我的房子' },
      { id: '6', icon: 'icon_history', title: '我的看房记录' },
      { id: '7', icon: 'icon_main', title: '我的问答' },
      { id: '11' },
      { id: '8', icon: 'icon_my', title: '设置' },
      { id: '9', icon: 'icon_pwd', title: '意见反馈' },
      { id: '13', icon: 'icon_pwd', title: '意见反馈' }]
    }
  }

  render() {
    return (
      <div>
        <Link to='/login'>{localStorage.acc ? localStorage.acc : '登录/注册'}</Link>

        <List>
          {
            this.state.iconlist.map(obj => {

              //如果有配置ICON
              if (obj.icon) {
                return <Item
                  key={ obj.id }
                  thumb={require('../../../assets/imgs/' + obj.icon + '.png')}
                  arrow="horizontal"
                  onClick={this.clickTitle.bind(this, obj.id)}
                >{obj.title}</Item>
              } else {
                //否则返回占位div
                return <div key={ obj.id } style={{ height: '0.6rem', backgroundColor: '#F3F3F3' }}></div>
              }


            })
          }
        </List>
      </div>
    )
  }

  clickTitle(title) {
    console.log(title)
  }

}
