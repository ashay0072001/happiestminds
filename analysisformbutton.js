import { Menu } from "antd";
import { BackwardOutlined } from '@ant-design/icons';
import { ForwardOutlined } from '@ant-design/icons';
import { SaveOutlined } from '@ant-design/icons';
import { PlayCircleOutlined } from '@ant-design/icons';

function Analysisformbutton(props) {
  const handleBackButton = () => {
    props.handleBackButton();
  }

  const handleRunButton = () => {
    props.handleRunButton();
  }

  const buttonText = props.showRunButton ? "RUN" : "NEXT";

  return (
    <Menu mode="vertical" defaultSelectedKeys={["mail"]}>
      <Menu.Item key="design" style={{ background:"#D3D3D3",fontWeight: 'bold'}}onClick={handleBackButton}>BACK <span style={{ float:'right',fontWeight:'bold'}} ><BackwardOutlined  /></span></Menu.Item>
      {props.showRunButton ?
        <Menu.Item key="run" style={{ background:"#D3D3D3",fontWeight: 'bold'}}onClick={handleRunButton}>{buttonText} <span style={{ float:'right',fontWeight:'bold'}}><PlayCircleOutlined /></span></Menu.Item> :
        <Menu.Item key="analysis" style={{ background:"#D3D3D3",fontWeight: 'bold'}}onClick={props.handleNextButton}>{buttonText} <span style={{ float:'right',fontWeight:'bold'}}><ForwardOutlined  /></span></Menu.Item>
      }
      <Menu.Item key="store" style={{ background:"#D3D3D3",fontWeight: 'bold'}}>SAVE <span style={{ float:'right',fontWeight:'bold'}}><SaveOutlined /></span></Menu.Item>
    </Menu>
  );
}

export default Analysisformbutton;
