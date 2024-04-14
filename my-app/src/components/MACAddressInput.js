import React, { useState } from 'react';
import styled from 'styled-components';
// const { ipcRenderer } = window.require('electron').remote;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 50%;
  text-align: center;
  margin-left: 100px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const MACAddressInput = () => {
  const [macAddress, setMacAddress] = useState('');

  // const handleStartTracking = () => {
  //   // ipcRenderer.send('start-electron-app', macAddress);
  //   console.log("MAC Address Fetched successfully");
  // };

  const handleStartTracking = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/check-mac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ macAddress }),
      });
      console.log(response);
      const data = await response.json();
      if (data.found) {
        alert('MAC Address found in the database');
      } else {
        alert('MAC Address not found in the database');
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setMacAddress(event.target.value);
  };

  return (
    <Container>
      <FormContainer>
          <Input type="text" value={macAddress} onChange={handleInputChange} placeholder="Enter MAC address" />
          <Button onClick={handleStartTracking}> Start Time Tracking </Button>
      </FormContainer>
    </Container>
  );
};

export default MACAddressInput;
