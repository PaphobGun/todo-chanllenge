import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const CustomInput = styled(Input)`
  margin-top: 0.5rem;
  width: ${props => (props.sm === 'toSm' ? '20%;' : '40%;')};
`;

const ErrorMsg = styled.div`
  color: red;
`;

const InputField = ({ type, label, value, onChangeProp, err, sm }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <CustomInput
        sm={sm}
        type={type}
        value={value}
        onChange={e => onChangeProp(e.target.value)}
      />
      <ErrorMsg>{err}</ErrorMsg>
    </>
  );
};

export default InputField;
