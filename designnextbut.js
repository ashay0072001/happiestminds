import { Menu } from "antd";
import { BackwardOutlined } from '@ant-design/icons';
import { ForwardOutlined } from '@ant-design/icons';
import { SaveOutlined } from '@ant-design/icons';
// import { PlayCircleOutlined } from '@ant-design/icons';

const Designformbutton = ({ setChangeRunkey }) => (
  

  
  <Menu mode="vertical" onClick={(val) => {setChangeRunkey(val.key)}} >
      <Menu.Item key="back" style={{ background:"#D3D3D3",fontWeight: 'bold'}}>BACK <span style={{ float:'right',fontWeight:'bold'}} ><BackwardOutlined  /></span></Menu.Item>
    
      <Menu.Item key="run" style={{ background:"#D3D3D3",fontWeight: 'bold'}}>NEXT <span style={{ float:'right',fontWeight:'bold'}}><ForwardOutlined  /></span></Menu.Item>
      <Menu.Item key="save" style={{ background:"#D3D3D3",fontWeight: 'bold'}}>SAVE <span style={{ float:'right',fontWeight:'bold'}}><SaveOutlined /></span></Menu.Item>
    </Menu>
  );


export default Designformbutton;
