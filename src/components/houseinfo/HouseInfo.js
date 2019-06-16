import React, { Component } from 'react'
import './houseinfo.sass'

/* 
    一条房产信息组件
    （公共组件抽取）
*/
export default class HouseInfo extends Component {
    render() {
        let { house, click } = this.props

        return (
            <div
                onClick={ click }
                className='house_div'>
                <img src={house.src} />
                <div className='house_center'>
                    <h3>{house.name}</h3>
                    <p>{house.area + ' ' + house.range}</p>
                    <p>{house.type + ' ' + house.point + '平'}</p>
                </div>
                <label className='house_right'>{house.price}/平</label>
            </div>
        )
    }
}
