import React, { useState } from 'react';
import './Form.css';
import { Layout, Input } from 'antd';
import Search from './search.png';

const { Header } = Layout;

function Storelist() {
  const [formData, setFormData] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [nameList, setNameList] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files));
  };

  const handleSave = () => {
    if (formData.firstName) {
      setNameList([...nameList, formData.firstName]);
      setFormData({}); // Reset the form data
    }
  };

  return (
    <div className="body">
      <div>
        <Header style={{ display: 'flex', alignItems: 'center', background: 'black' }}>
          <div style={{ marginRight: 'auto', color: 'white', fontSize: '25px' }}>CREATE STORE LIST</div>
        </Header>
        <form>
          <div className="list-row odd">
            <div className="list-column">
              <label htmlFor="firstName" style={{ float: 'left' }}>Name:</label>
            </div>
            <div className="list-column">
              <Input type="text" name="firstName" nameList = {nameList} onChange={handleInputChange} placeholder='Type Name Here' />
            </div>
          </div>

          {/* Rest of the form code */}
          <div className="list-row odd">
            <div className="list-column">
              <label htmlFor="email" style={{ float: 'left' }}></label>
            </div>

          </div>
          <div className="list-row even" style={{ marginTop: 2 }}>
            <div className="list-column">
              <label htmlFor="password" style={{ float: 'left' }}>Description</label>
            </div>
            <div className="list-column">
              <Input style={{ height: 100 }} type="text" value={formData.name || ''} name="password" onChange={handleInputChange} placeholder='Type Description here' />
            </div>
          </div>

          <div className="list-row even" style={{ marginTop: 14 }}>
            <div className="list-column">
              <label htmlFor="password" style={{ float: 'left' }}>
                Browse File
                <span style={{ marginLeft: '699px' }}>
                  <img src={Search} alt="logo" style={{ height: '32px', marginRight: '16px', background: 'white' }} />
                </span>
              </label>
            </div>
            <div className="list-column">
              <input type="file" onChange={handleFileSelect} multiple />
            </div>
          </div>

          <div className="list-uf-row even" style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ccc', marginBottom: 10 }}>
            <div className="list-uf-column" style={{ flex: '0.5' }}>
              <label htmlFor="lastName" style={{ float: 'left', height: '100%' }}>Uploaded File Name</label>
            </div>
            <div className="list-uf-column" style={{ flex: '0.5' }}>
              {selectedFiles.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
          </div>

          <div className="list-row odd">
          </div>
          
        </form>
      </div>
      
    </div>
  );
}

export default Storelist;