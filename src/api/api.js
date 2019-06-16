/* 所有请求封装文件 */
import axios from 'axios'
import qs from 'qs'

const IP = "http://localhost:80"
// const IP = "http://192.168.7.22:80" 

//登录的接口函数acc: 用户名  pwd：密码
export function login(acc, pwd){
    return axios.post(IP + '/login.php', qs.stringify({acc, pwd}))
}
//获取房产列表
export function gethouselist(){
    return axios.get(IP + '/gethouselist.php')
}
export function reg(acc, pwd){
    axios.post(IP + '/reg.php', {acc, pwd})
}