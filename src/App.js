
import React from 'react';
import './App.less';
import { Layout } from 'antd';
import ListApi from 'pages/ListApi'
import otoklik from 'Img/otoklik.svg'
const { Header } = Layout;

function App() {
  return (
    <>
      <Header>
        <img src={otoklik} alt='logo' width={100} />
      </Header>
      <Layout style={{ padding: 40, height: '100vh' }} className="layout">
        <ListApi />
      </Layout>
    </>
  );
}

export default App;
