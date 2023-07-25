import React from 'react';
import {  Layout } from 'antd';


const { Header } = Layout;


const Designformheader = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', background:"#D3D3D3" }}>
      <div style={{ marginRight: 'auto', color:"yellow" }}>CREATE TEST</div>
      
      
    </Header>
  );
};

export default Designformheader;