import React, { Component } from 'react'
//es6
// import logo from '../../assets/imgs/logo.png'
import { Flex, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { login } from '../../api/api'

import './login.sass'

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            acc: '',    //用户
            pwd: '',     //密码
            errorTextDisplay: 'none'    //错误提示，none不显示 block显示
        }
    }

    render() {
        return (
            <div className='login_container'>

                <Flex justify="center">
                    <img className='logo' src={require('../../assets/imgs/logo.png')} />
                </Flex>

                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />


                <WingBlank size="lg">
                    <div>
                        <InputItem
                            placeholder="请输入手机"
                            clear
                            value={this.state.acc}
                            onChange={(val) => { this.setState({ acc: val }) }}
                        >
                            <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>

                        <InputItem
                            placeholder="请输入密码"
                            type='password'
                            clear
                            value={this.state.pwd}
                            onChange={(val) => { this.setState({ pwd: val }) }}
                        >
                            <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                    </div>



                    <WhiteSpace size="md" />
                    <p style={{display: this.state.errorTextDisplay}}>用户名或密码错误</p>
                    <Button onClick={this.clickLogin.bind(this)} type="primary">登录</Button>

                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link to='/reg'>前往注册</Link>
                        <Link to='/reg'>忘记密码？</Link>
                    </Flex>
                </WingBlank>

            </div>
        )
    }

    clickLogin() {
        login(this.state.acc, this.state.pwd).then( (res) => {
            if(res.data === 'ok'){
                //登录成功后，持久存储用户名
                localStorage.acc = this.state.acc

                //成功,router的js跳转
                this.props.history.push('/')
            }else{
                this.setState({
                    errorTextDisplay: 'block',
                    pwd: ''
                })
            }
            
        } )
    }
}
