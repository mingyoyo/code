import React, { Component } from 'react'
import { connect } from 'react-redux' //引入注入数据函数
import { changeName } from '../../../store/actions' //引入对应action函数

class Chat extends Component {
  render() {
    return (
      <div>
        微聊
        <h1 onClick={ this.clickName.bind(this) }>{ this.props.name }</h1>
      </div>
    )
  }

  clickName(){
    //ARD顺序！  D就是最后一步
    this.props.dispatch(  changeName('随便的名字')   )
  }
}

export default connect((state) => {

  return {
    name: state.name
  }
})(Chat)