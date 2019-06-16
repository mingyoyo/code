import React, { Component } from 'react'
import { Carousel, Grid, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { gethouselist } from '../../../api/api'
import { addHistoryHouse } from '../../../store/actions'
import { connect } from 'react-redux'

//一条房产组件
import HouseInfo from '../../../components/houseinfo/HouseInfo'
import './main.sass'


class Main extends Component {

  constructor() {
    super()

    this.state = {
      city: '定位中',
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      imgHeight: 176,
      menulist: [{ icon: 'icon_history_s.png', text: '新房' },
      { icon: 'icon_history_s.png', text: '二手房' },
      { icon: 'icon_history_s.png', text: '二手房' },
      { icon: 'icon_history_s.png', text: '租房' },
      { icon: 'icon_history_s.png', text: '商铺写字楼' },
      { icon: 'icon_chat_s.png', text: '卖房' },
      { icon: 'icon_history_s.png', text: '海外房产' },
      { icon: 'icon_history_s.png', text: '小区房价' },
      { icon: 'icon_history_s.png', text: '问答' }].map((_val, i) => ({
        icon: require('../../../assets/imgs/' + _val.icon),
        text: _val.text,
      })),   //菜单列表
      houselist: [] //房产列表
    }
  }

  render() {
    return (
      <div className='main_container'>
        {/* 搜索条  */}
        <div className='search_div'>
          <Link to='/selectcity'><label>{this.state.city}▼</label></Link>

          <div className='search'>
            <img src={require('../../../assets/imgs/icon_search.png')} />
            <label>在此处搜索房产信息</label>
          </div>

          <Link to='/map'><img src={require('../../../assets/imgs/icon_map.png')} /></Link>
        </div>
        {/* 轮播 */}
        <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        {/* 菜单按钮 */}
        <Grid isCarousel data={this.state.menulist} hasLine={false} />

        {/* 菜单按钮2 */}

        <WhiteSpace />
        {/* 猜你喜欢 */}
        <div className='house_list'>
          {/* 房产信息 */}

          {
            // 方式一
            // this.state.houselist.map(obj => 
            // <div key={obj.id} onClick={this.clickHouse.bind(this,obj)}>
            //   <HouseInfo house={obj}></HouseInfo>
            // </div>)
            
            // 方式二
            this.state.houselist.map(obj =>
              <HouseInfo key={obj.id} house={obj} click={ this.clickHouse.bind(this, obj) }></HouseInfo>)

          }

        </div>


      </div>
    )
  }

  clickHouse(obj) {
    this.props.dispatch(
      addHistoryHouse(obj)
    )
  }


  componentDidMount() {
    var _this = this

    //ajax获取房产信息
    gethouselist().then(res => {
      //把获取到的数据保存到状态内
      _this.setState({
        houselist: res.data
      })
    })

    //获取用户所在城市信息
    this.showCityInfo(_this)
  }

  //获取城市信息
  showCityInfo(_this) {
    //实例化城市查询类
    var citysearch = new window.AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        if (result && result.city && result.bounds) {
          var cityinfo = result.city;
          var citybounds = result.bounds;

          //当前城市信息
          _this.setState({
            city: cityinfo
          })
        }
      } else {
        console.log(result.info, '定位失败的错误信息')
      }
    })
  }


}

export default connect()(Main)