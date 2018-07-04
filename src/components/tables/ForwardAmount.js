import React, { Component } from 'react';
import {Form, Button,Modal,Input,Table } from 'antd';

const FormItem = Form.Item;
const columns = [
  { title: '货币对', width: 120, dataIndex: 'currency', key: 'currency',fixed: 'left'},
  { title: '期限',width: 120, dataIndex: 'deadline', key: 'deadline' },
  { title: '交易量',width: 120, dataIndex: 'tradeAmount', key: 'tradeAmount' },
  { title: '买价编号',width: 120, dataIndex: 'bidCode', key: 'bidCode' },
  { title: '卖价编号',width: 120, dataIndex: 'askCode', key: 'askCode' },
  { title: '报价单位',width: 120, dataIndex: 'price', key: 'price' },
  { title: '买价',width: 120, dataIndex: 'bid', key: 'bid' },
  { title: '卖价',width: 120, dataIndex: 'ask', key: 'ask' },
  { title: '中间价',width: 120, dataIndex: 'middle', key: 'middle' },
  { title: '即期买价',width: 120, dataIndex: 'spotBidPrice', key: 'spotBidPrice' },
  { title: '即期卖价',width: 120, dataIndex: 'spotAskPrice', key: 'spotAskPrice' },
  { title: '买入全价',width: 120, dataIndex: 'bidAllPrice', key: 'bidAllPrice' },
  { title: '卖出全价',width: 120, dataIndex: 'askAllPrice', key: 'askAllPrice' },
  { title: '交易状态',width: 120, dataIndex: 'state', key: 'state' },
  { title: '起息日',width: 120, dataIndex: 'interestDate', key: 'interestDate' },
  { title: '到期日',width: 120, dataIndex: 'deadlineDate', key: 'deadlineDate' },
  { title: '更新日期',width: 120, dataIndex: 'updateDate', key: 'updateDate' },
  { title: '更新时间',width: 120, dataIndex: 'updateTime', key: 'updateTime' }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    currency:"AUDCNY",
    deadline:`${i%3}${i%2===1?"M":"Y"}`,
    tradeAmount:1000+`${i%3}`,
    bidCode:`100${i%3}${i%2}${i%4}${i%5}${i%6}`,
    askCode:`100${i%6}${i%7}${i%8}${i%9}${i%3}`,
    price: 5+`${i%3}`,
    bid: 32+`${i%3}`,
    ask: 20+`${i%3}`,
    middle:25+`${i%3}`,
    spotBidPrice:32+`${i%3}`,
    spotAskPrice:20+`${i%3}`,
    bidAllPrice:62+`${i%3}`,
    askAllPrice:72+`${i%3}`,
    state:i%2===1?"Y":"N",
    interestDate:"2018-10-25",
    deadlineDate:"2022-10-25",
    updateDate:"2018-07-04",
    updateTime:"11:28"
  });
}

class ForwardAmount extends Component {
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
            scroll={{x: 2160, y: 450 }}/>
            <Modal
              title="远期带量单次测试"
              width={600}
              visible={this.state.visible}
              footer={null}
              maskClosable={false}
              onCancel={this.toggleSingleTestModel.bind(this)}
            >远期带量单次测试</Modal>
        </div>
    );
  }
}

export default ForwardAmount;
