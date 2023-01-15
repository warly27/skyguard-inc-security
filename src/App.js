import React, { useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ReactGa from 'react-ga'

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const App = () => {

  useEffect(()=> {
    ReactGa.initialize(process.env.REACT_APP_GA_TAG)
    ReactGa.pageview(window.location.pathname+window.location.search)
  }, [])
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
