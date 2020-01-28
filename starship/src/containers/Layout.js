
import React from 'react'
import { Layout, Menu,PageHeader  } from 'antd';

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) =>{
    return(
        <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">StarShips</Menu.Item>
        <Menu.Item key="3">Bookings</Menu.Item>
      </Menu>
    </Header>
    <PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => null}
    title="Titleggggggggg"
    subTitle="This is a subtitle"
  />
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          {props.children}
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>StarShips ©2020 Created by Chris Allan Wajega</Footer>
  </Layout>


    );
}
  

export default CustomLayout