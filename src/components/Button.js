import React from 'react';
import styled from 'styled-components';
import { Button as AntdBtn } from 'antd';

const MyButton = styled(AntdBtn)`
  margin-right: 0.2rem;
`;

const Button = ({ onClickProp, text, del }) => {
  return del ? (
    <MyButton type="danger" onClick={onClickProp}>
      {text}
    </MyButton>
  ) : (
    <MyButton onClick={onClickProp}>{text}</MyButton>
  );
};

export default Button;
