import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  width: 30%;
  outline: none;
  &:focus {
    border: 2px solid green;
  }
`;

const ErrorMsg = styled.div`
  color: red;
`;

const InputField = ({ type, label, value, onChangeProp, err }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Input
        type={type}
        value={value}
        onChange={e => onChangeProp(e.target.value)}
      />
      <ErrorMsg>{err}</ErrorMsg>
    </>
  );
};

export default InputField;
