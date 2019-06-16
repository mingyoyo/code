import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

/* 一级页面 */
import Login from './login/Login'   //登录
import Reg from './reg/Reg' //注册
import Nav from './nav/Nav' //导航
import Error404 from './error404/Error404'   //404页面
import Map from './map/Map' //地图      
import SelectCity from './selectcity/SelectCity'    //选择城市

/* 引入redux */
import store from '../store/store'  //状态仓库
import { Provider } from 'react-redux'  //拿到数据注入组件
//Provider就是一个数据容器，必须绑定store才可以使用

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                {/* 只要Provider的子组件，都可以全局共享此store的数据 */}
                <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/map' component={Map}></Route>
                        <Route path='/selectcity' component={SelectCity}></Route>
                        <Route component={Error404}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}