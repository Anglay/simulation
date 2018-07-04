import React, { Component } from 'react';
import { Layout,Tabs,Button,Modal,Input,Row,Col,Switch,Tag } from 'antd';
import './App.css';
import logo from "./logo.png";
import Spot from './components/tables/Spot.js';//即期
import SpotAmount from './components/tables/SpotAmount.js';//即期带量
import SpotMonitor from './components/tables/SpotMonitor.js';//即期监管
import ForwardAmount from './components/tables/ForwardAmount.js';//远期带量
import Dorp from './components/tables/Dorp.js';//掉期
import DorpRate from './components/tables/DorpRate.js';//掉期率
import Rate from './components/tables/Rate.js';//利率
import Goods from './components/tables/Goods.js';//商品
import Settlement from './components/tables/Settlement.js';//商品结算
import SwingRate from './components/tables/SwingRate.js';//波动率
import OptionRate from './components/tables/OptionRate.js';//期权费率
const { Header, Content} = Layout;
const {TabPane} = Tabs;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'top',
      visible:false,
      current:{
        index:1,
        text:"即期"
      },
      tabs:[{
        index:1,
        text:"即期"
      },{
        index:2,
        text:"即期带量"
      },{
        index:3,
        text:"即期监管"
      },{
        index:4,
        text:"远期带量"
      },{
        index:5,
        text:"掉期"
      },{
        index:6,
        text:"掉期率"
      },{
        index:7,
        text:"利率"
      },{
        index:8,
        text:"商品"
      },{
        index:9,
        text:"商品结算"
      },{
        index:10,
        text:"波动率"
      },{
        index:11,
        text:"期权费率"
      }]
    }
  }

  changeTabItem(e){
    let index=e.target.getAttribute("data-index");
    let current = this.state.tabs[index];
    this.setState({current:current})
  }

  handleTest(){
    this.setState({
      visible:!this.state.visible
    })
  }
  
  doCancelModel(e){
    this.setState({
      visible:!this.state.visible
    })
  }

  render() {
    const { mode } = this.state;
    return (
      <Layout className="app">
        <Header>
          <Row gutter={5}>
            <Col span={12}>
              <img src={logo} width="36" alt="logo"/>
              <span className="title">报价引擎5.0价格模拟</span>
            </Col>
            <Col span={12} style={{textAlign:"right"}}>
              <Tag color="blue">Xnetd所在地址：192.168.193.14：55303</Tag>
              <Button type="primary" size="small" onClick={this.handleTest.bind(this)}>性能测试</Button>
            </Col>
          </Row>
        </Header>
        <Content className="section">
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            className="tabs-content"
            size="small"
            animated={false}
          >
            {
              this.state.tabs.map((item,i)=>{
                return (
                  <TabPane tab={item.text} key={item.index}>{
                    (()=>{
                        switch (item.index) {
                            case 1:
                                return (<Spot/>);
                            case 2:
                                return (<SpotAmount/>);
                            case 3:
                                return (<SpotMonitor/>);
                            case 4:
                                return (<ForwardAmount/>);
                            case 5:
                                return (<Dorp/>);
                            case 6:
                                return (<DorpRate/>);
                            case 7:
                                return (<Rate/>);
                            case 8:
                                return (<Goods/>);
                            case 9:
                                return (<Settlement/>);
                            case 10:
                                return (<SwingRate/>);
                            case 11:
                                return (<OptionRate/>);
                            default:
                            return "其他"
                        }
                    })()
                }</TabPane>
                )
              })
            }
          </Tabs>
        </Content>
        <Modal
          title="性能展示"
          width={600}
          visible={this.state.visible}
          footer={null}
          maskClosable={false}
          onCancel={this.doCancelModel.bind(this)}
        >
          <div className="model-content">
            {
              this.state.tabs.map((item,i)=>{
                return (
                  <div className="model-item" key={i}>
                    <Row gutter={5}>
                      <Col span={6}>
                        <span>{item.text+":"}</span>
                      </Col>
                      <Col span={12}>
                        <Input size="small" addonAfter="秒/次" defaultValue="0" />
                      </Col>
                      <Col span={6}>
                        <Switch/>
                      </Col>
                    </Row>
                  </div>
                )
              })
            }
            
          </div>
        </Modal>
      </Layout>
    );
  }
}

export default App;
