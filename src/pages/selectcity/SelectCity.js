import React, { Component } from 'react'
import city from '../../json/city.json' //选择城市JSON文件

import './selectcity.sass'

/* 选择城市组件 */
export default class SelectCity extends Component {
  render() {
    return (
      <div className='selectcity_container'>
        {/* 热门城市 */}
        <div>
          <h4>热门城市</h4>
          <div className='hotcity_div'>
            {
              city.hotcity.map(obj => <div className='hotcity_icon'>{obj}</div>)
            }
          </div>
        </div>

        {/* ABCD城市排序 */}
        <div>
          {
            city.citylist.map(obj => {
              // {"name": "A", "city": ["阿坝","阿里","阿巴嘎旗"]}
              return <div>
                <h3>{obj.name}</h3>
                {
                  obj.city.map(ct => <div>{ct}</div>)
                }
              </div>
            })
          }
        </div>
      </div>
    )
  }
}
