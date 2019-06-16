import React, { Component } from 'react'
import { connect } from 'react-redux' //引入注入数据函数
import HouseInfo from '../../../components/houseinfo/HouseInfo' //一条房产组件
import './history.sass'

class History extends Component {
  render() {
    let { historylist } = this.props
    return (
      <div>
        {
          this.getContent()
        }
      </div>
    )
  }

  //根据历史列表，进行响应式渲染，如果为0，渲染提示标签，否则渲染历史列表
  getContent() {
    if (this.props.historylist.length == 0)
      return <h3>您当前没有历史记录</h3>
    

    return this.props.historylist.map(obj => 
    <HouseInfo key={obj.id} house={obj}></HouseInfo>)
  }

}

/* 数据注入 */

export default connect((state) => {

  //只有return的值，才会被注入到当前组件中！！！
  //return的值，会被注入到组件的props身上
  return {
    historylist: state.historylist
  }
})(History)