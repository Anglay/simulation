import React, { Component } from 'react';
import {Form, Button,Modal,Input,Table } from 'antd';

const FormItem = Form.Item;
const columns = [
  { title: '期权类型', width: 120, dataIndex: 'type', key: 'type',fixed: 'left'},
  { title: '期权之类',width: 120, dataIndex: 'subType', key: 'subType' },
  { title: '货币对',width: 120, dataIndex: 'currency', key: 'currency' },
  { title: '看涨买价',width: 120, dataIndex: 'riseBidPrice', key: 'riseBidPrice' },
  { title: '看涨卖价',width: 120, dataIndex: 'riseAskPrice', key: 'riseAskPrice' },
  { title: '看跌买价',width: 120, dataIndex: 'fallBidPrice', key: 'fallBidPrice' },
  { title: '看跌卖价',width: 120, dataIndex: 'fallAskPrice', key: 'fallAskPrice' },
  { title: '即期买价',width: 120, dataIndex: 'spotBidPrice', key: 'spotBidPrice' },
  { title: '即期卖价',width: 120, dataIndex: 'spotAskPrice', key: 'spotAskPrice' },
  { title: '模式',width: 120, dataIndex: 'model', key: 'model' },
  { title: 'Delta',width: 120, dataIndex: 'delta', key: 'delta' },
  { title: '协定汇率',width: 120, dataIndex: 'agreementRate', key: 'agreementRate' },
  { title: '触碰上线',width: 120, dataIndex: 'touchTopLine', key: 'touchTopLine' },
  { title: '触碰下线',width: 120, dataIndex: 'touchDownLine', key: 'touchDownLine' },
  { title: '协定汇率点差',width: 120, dataIndex: 'spread', key: 'spread' },
  { title: '触碰上线点差',width: 120, dataIndex: 'touchTopLineSpread', key: 'touchTopLineSpread' },
  { title: '触碰下线点差',width: 120, dataIndex: 'touchDownLineSpread', key: 'touchDownLineSpread' },
  { title: '到期日模式',width: 120, dataIndex: 'deadlineModel', key: 'deadlineModel' },
  { title: '到期日',width: 120, dataIndex: 'deadlineDate', key: 'deadlineDate' },
  { title: '面值货币',width: 120, dataIndex: 'faceCurrency', key: 'faceCurrency' },
  { title: '期权费货币',width: 120, dataIndex: 'optionFeeCurrency', key: 'optionFeeCurrency' },
  { title: '更新日期',width: 120, dataIndex: 'updateDate', key: 'updateDate' },
  { title: '更新时间',width: 120, dataIndex: 'updateTime', key: 'updateTime' }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    type:i%2===1?"普通":"障碍",
    subType:i%2===1?"向上敲入":"向上触碰",
    currency:"AUDCNY",
    riseBidPrice:i,
    riseAskPrice:i,
    fallBidPrice:i,
    fallAskPrice:i,
    spotBidPrice:32+`${i%3}`,
    spotAskPrice:20+`${i%3}`,
    model:i%2===1?"固定模式":"浮动模式",
    delta:"-----------",
    agreementRate:`5.0${i%3}${i%2}${i%4}${i%5}`,
    touchTopLine:"-----------",
    touchDownLine:"-----------",
    spread:`0.0${i%3}${i%2}${i%4}${i%5}`,
    touchTopLineSpread:`0.0${i%4}${i%5}${i%6}${i%7}`,
    touchDownLineSpread:`0.0${i%1}${i%2}${i%3}${i%4}`,
    deadlineModel:i%2===1?"固定模式":"浮动模式",
    deadlineDate:"2022-10-25",
    faceCurrency:"AUD",
    optionFeeCurrency:"CNY",
    updateDate:"2018-07-04",
    updateTime:"11:28"
  });
}

class OptionRate extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible:false
    }
  }

  toggleSingleTestModel(){
    this.setState({
      visible:!this.state.visible
    })
  }

  handSendSingleTest(){}

  render() {
    return (
        <div className="tab-wraper">
          <Form layout="inline">
            <FormItem/>
            <FormItem>
              <Input size="small" placeholder="发价频率（ms）" />
            </FormItem>
            <FormItem>
              <Input size="small" placeholder="波动点数" />
            </FormItem>
            <FormItem>
              <Input size="small" placeholder="单包个数" />
            </FormItem>
            <FormItem>
              <Button type="primary" size="small">设置</Button>
            </FormItem>
            <FormItem>
              <Button size="small" onClick={this.toggleSingleTestModel.bind(this)}>单次测试</Button>
            </FormItem>
          </Form>
          <Table 
            columns={columns} 
            dataSource={data} 
            pagination={false} 
            bordered={true}
            size="small"
            scroll={{x: 2760, y: 450 }}/>
            <Modal
              title="期权费率单次测试"
              width={600}
              visible={this.state.visible}
              footer={null}
              maskClosable={false}
              onCancel={this.toggleSingleTestModel.bind(this)}
            >期权费率单次测试</Modal>
        </div>
    );
  }
}

export default OptionRate;
