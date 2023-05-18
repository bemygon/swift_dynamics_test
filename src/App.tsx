import React, { useState } from 'react';
import './App.css';
import { DownOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Card, Space, Layout, Dropdown, Button, Form, Input, Select } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import type { MenuProps } from 'antd';

const { Option } = Select;



function App() {
  return (
    <div>
      <div><Test1 /></div>
    </div>
  );
}

const items: MenuProps['items'] = [
  {
    key: 'EN',
    label: (<div>EN</div>),
  },
  {
    key: 'TH',
    label: (<div>TH</div>),
  },
]




interface Lngs extends Lng2 {
  EN: string;
  TH: string;
}
interface Lng2 {
  [key: string]: string;
}


const lngs: Lngs = {
  EN: 'English',
  TH: 'Thai'
};



const PageMain = ({ show, f_show1, f_show2 }:
  {
    show: Array<boolean>,
    f_show1: () => void,
    f_show2: () => void
  }) => {

  return (
    <div className={`visible-${show[0]}`}>
      <Row gutter={16} className='centerxx'>
        <Col className="gutter-row" span={24}>
          <Row gutter={16}>
            <Col span={8}>
              <Card className='pointer' title={<Trans i18nKey="description.part5">Test 1</Trans>} bordered={false} onClick={f_show1}>
                <Trans i18nKey="description.part2">Layout & Style</Trans>
              </Card>
            </Col>
            <Col span={8}>
              <Card className='pointer' title={<Trans i18nKey="description.part6">Test 2</Trans>} bordered={false}>
                <Trans i18nKey="description.part3">Connect API</Trans>
              </Card>
            </Col>
            <Col span={8}>
              <Card className='pointer' title={<Trans i18nKey="description.part7">Test 3</Trans>} bordered={false} onClick={f_show2}>
                <Trans i18nKey="description.part4">Form & Table</Trans>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

function shuffleArray(array: Array<number>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


let numArray = [0, 1, 2, 3, 4, 5]


class Page1 extends React.Component
  <{ show: Array<boolean> }, { upDown: boolean, num: number, random: Array<number> }>{
  state = { upDown: true, num: 0, random: numArray }
  f_random = () => {
    shuffleArray(numArray)
    this.setState({ random: numArray })
  }
  render() {
    return (
      <div className={`visible-${this.props.show[1]}`}>
        <h2 style={{ margin: "10px" }}><Trans i18nKey="description.part2">Layout & Style</Trans></h2>
        <Row style={{ margin: "10px" }}>
          <Col span={4} className='one hide'>
          </Col>
          <Col span={4} className='conx2 pointer' onClick={() => {
            numArray = numArray.map((x, y) => (numArray[(y + 1) % 6]))
            this.setState({ random: numArray })
          }
          }>
            <div className='tri-left' ></div>
          </Col>
          <>
            <Col span={8} className='conx1 pointer' onClick={() => this.setState({ upDown: !this.state.upDown })}>
              <div className='tri-center'
                style={{ margin: "5px 10px 10px 50px" }}>
                <div className='tri-up'></div>
              </div>
              <div className='tri-center'
                style={{ margin: "-120px 10px 10px 250px" }}>
                <div className='tri-down'></div>
              </div>
            </Col>

          </>
          <Col span={4} className='conx2 pointer'
            onClick={() => {
              numArray = numArray.map((x, y) => (numArray[(y + 5) % 6]))
              this.setState({ random: numArray })
            }}
          >
            <div className='tri-right' ></div>
          </Col>
          <Col span={4} className='one hide'>
          </Col>
        </Row>


        <Row style={{ margin: "-142px 10px 10px 10px" }}>
          <Col span={4} className='onexxx hide'>
          </Col>
          <Col span={4} className='onexxx x1'>
            <div className='badge-center'>
              <span className='badge-me'>
                <Trans i18nKey="description.part8">Move shape</Trans>
              </span>
            </div>
          </Col>
          <Col span={8} className='onexxx' style={{ margin: "5px" }}>
            <div className='badge-center'>
              <span className='badge-me'>
                <Trans i18nKey="description.part9">Move position</Trans>
              </span>
            </div>
          </Col>
          <Col span={4} className='onexxx x1'>
            <div className='badge-center'>
              <span className='badge-me'>
                <Trans i18nKey="description.part8">Move shape</Trans>
              </span>
            </div>
          </Col>
          <Col span={4} className='onexxx hide'>
          </Col>
        </Row>


        <hr className='hr' />

        {/* <row1----------------------------------------------------------------------> */}
        <Row className='row1'>
          <Col span={this.state.upDown ? 4 : 0} className='one hide'>
          </Col>
          <Col span={this.state.upDown ? 4 : 6} className='conx2 hide'>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[0])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[1])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[2])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={this.state.upDown ? 4 : 6} className='one hide'>
          </Col>
        </Row>

        {/* <row2----------------------------------------------------------------------> */}
        <Row className='row2'>
          <Col span={this.state.upDown ? 0 : 4} className='one hide'>
          </Col>
          <Col span={this.state.upDown ? 6 : 4} className='one hide'>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[3])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[4])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={4} className='conx2 pointer'>
            <div className={`shape${(this.state.random[5])}`} onClick={this.f_random}></div>
          </Col>
          <Col span={this.state.upDown ? 6 : 4} className='conx2 hide'>
            <div className='tri-center'>
              <div className='tri-right' ></div>
            </div>
          </Col>
        </Row>
        {/* <----------------------------------------------------------------------> */}
      </div>
    )
  }
}

const items2: MenuProps['items'] = [
  {
    key: 'นาย',
    label: 'นาย',
  },
  {
    key: 'นางสาว',
    label: 'นางสาว',
  },
  {
    key: 'นาง',
    label: 'นาง',
  },

]

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Page2 = ({ show }: { show: Array<boolean> }) => {
  const [title, setTitle] = useState('');
  const [form] = Form.useForm();
  

  const onFinish = (values: any) => {
    console.log(values);
  };


  return (
    <div className={`visible-${show[2]}`}>
      <h2 style={{ margin: "10px" }}><Trans i18nKey="description.part4">Form & Table</Trans></h2>

      <Form
        {...layout}
        form={form}
        
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="note" label="ชื่อจริง" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="นามสกุล" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            ส่งข้อมูล
          </Button>       
        </Form.Item>
      </Form>

      <div className='my-center'>ทำไม่ทันครับ</div>


      
    </div>
  )

}






const Test1 = () => {
  const [show, setShow] = useState([true, false, false]);
  const { i18n } = useTranslation();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    i18n.changeLanguage(key)
  }
  return (
    <div >
      <div className='ppp'>

        <Dropdown.Button

          menu={{ items, onClick }}
          icon={<DownOutlined />}
          trigger={['click']}>
          <a onClick={(e) => {
            e.preventDefault();
          }}>
            <Space>
              {i18n.resolvedLanguage}
            </Space>
          </a>
        </Dropdown.Button>

        <Button className='width-but1' style={{ margin: "10px 0 0 0" }}
          onClick={() => setShow([true, false, false])}
        ><Trans i18nKey="description.part10">Home</Trans></Button>
      </div>

      <PageMain show={show}
        f_show1={() => setShow([false, true, false])}
        f_show2={() => setShow([false, false, true])}

      />
      <Page1 show={show} />
      <Page2 show={show} />
    </div>
  )
}



export default App;
