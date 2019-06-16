import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

/* 引入二级页面 */
import Main from './main/Main'  //首页
import Chat from './chat/Chat'  //聊天
import History from './history/History' //历史
import My from './my/My'  //我的

export default class Nav extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedTab: 'main', //选中的tab标签
      tablist: [{ key: 'main', title: '首页', icon: 'icon_main.png', seletedicon: 'icon_main_s.png' },
      { key: 'chat', title: '微聊', icon: 'icon_chat.png', seletedicon: 'icon_chat_s.png' },
      { key: 'history', title: '历史', icon: 'icon_history.png', seletedicon: 'icon_history_s.png' },
      { key: 'my', title: '我的', icon: 'icon_my.png', seletedicon: 'icon_my_s.png' }]
    }

  }

  //此函数返回的JSX最后就会被渲染到屏幕上方容器中
  renderContent() {

    //根据当前选中的标签状态，决定渲染什么组件
    switch(this.state.selectedTab){
      case 'main': return <Main></Main>
      case 'chat': return <Chat></Chat>
      case 'history': return <History></History>
      case 'my': return <My></My>
    }

  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494" //未选中的字体颜色
          tintColor="#33A3F4" //选中的字体颜色
          barTintColor="white"  //标签栏背景色
        >
          {

            this.state.tablist.map(obj => <TabBar.Item
              title={ obj.title }
              key={ obj.key }
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/' + obj.icon)}) center center /  21px 21px no-repeat`
              }}
              />  //未选中的图标
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${require('../../assets/imgs/' + obj.seletedicon)}) center center /  21px 21px no-repeat`
              }}
              />  //选中的图标
              }
              selected={this.state.selectedTab === obj.key}
              onPress={() => {
                this.setState({
                  selectedTab: obj.key,
                });
              }}
            >
              {this.renderContent()}
            </TabBar.Item>)

          }
        </TabBar>
      </div>
    )
  }
}
