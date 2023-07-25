import { Menu } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const Analyzecreatebut = ({ setChangeAnalyze }) => (
  <Menu mode="vertical" onClick={(val) => setChangeAnalyze(val.key)}>
    <Menu.Item
      key="analyzeCreateButton"
      style={{ background: "#D3D3D3", fontWeight: "bold" }}
    >
      CREATE NEW ANALYZE{" "}
      <span style={{ float: "right", fontWeight: "bold" }}>
        <PlusCircleOutlined />
      </span>{" "}
    </Menu.Item>
  </Menu>
);
export default Analyzecreatebut;
