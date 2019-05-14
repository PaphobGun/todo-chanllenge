import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  padding: 0.2rem 0.7rem;
  border: 1px solid black;
  margin-top: 1.5rem;
  &:hover {
    background: ${props => (props.deleteBtn ? 'red;' : 'green;')}
    color: white;
  }
`;

const Button = ({ onClickProp, text, del }) => {
  return del ? (
    <MyButton deleteBtn onClick={onClickProp}>
      {text}
    </MyButton>
  ) : (
    <MyButton onClick={onClickProp}>{text}</MyButton>
  );
};

export default Button;
