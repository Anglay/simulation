import React, { Component } from 'react';
import {Form, Button,Modal,Input,Table } from 'antd';

const FormItem = Form.Item;
const columns = [
  { title: '货币对', width: 100, dataIndex: 'currency', key: 'currency'},
  { title: '报价单位',width: 100, dataIndex: 'price', key: 'price' },
  { title: '买价',width: 100, dataIndex: 'bid', key: 'bid' },
  { title: '卖价',width: 100, dataIndex: 'ask', key: 'ask' },
  { title: '中间价',width: 100, dataIndex: 'middle', key: 'middle' },
  { title: '交易状态',width: 100, dataIndex: 'state', key: 'state' },
  { title: '起息日',width: 100, dataIndex: 'interestDate', key: 'interestDate' },
  { title: '更新日期',width: 100, dataIndex: 'updateDate', key: 'updateDate' },
  { title: '更新时间',width: 100, dataIndex: 'updateTime', key: 'updateTime' }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    currency:"AUDCNY",
    price: 5+`${i%3}`,
    bid: 32+`${i%3}`,
    ask: 20+`${i%3}`,
    middle:25+`${i%3}`,
    state:i%2===1?"Y":"N",
    interestDate:"2018-10-25",
    updateDate:"2018-07-04",
    updateTime:"11:28"
  });
}

class Spot extends Component {
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
            scroll={{ y: 450 }}/>
            <Modal
              title="即期单次测试"
              width={600}
              visible={this.state.visible}
              footer={null}
              maskClosable={false}
              onCancel={this.toggleSingleTestModel.bind(this)}
            >即期单次测试</Modal>
        </div>
    );
  }
}

export default Spot;
