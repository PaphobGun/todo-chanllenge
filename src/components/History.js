import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { clearLogs } from '../actions';
import Button from './Button';

const Outer = styled.div`
  text-align: center;
  padding: 5rem;
`;

const HeadHistory = styled.h1`
  margin-bottom: 1rem;
`;

const LinkToMain = styled(Link)`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  text-decoration: none;
`;

const LogWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const renderLogs = logs => {
  return logs.map(todo => {
    const { id, lastUpdated, action, todoList } = todo;

    return (
      <LogWrapper key={id + uniqid()}>
        {lastUpdated} | {action} | {todoList}
      </LogWrapper>
    );
  });
};

const History = ({ clearLogs, logs }) => {
  return (
    <Outer>
      <HeadHistory>History</HeadHistory>
      <div>
        <h2>
          <LinkToMain to="/">Back To Main</LinkToMain>
        </h2>
      </div>
      {renderLogs(logs)}
      <Button del onClickProp={clearLogs} text="Clear History" />
    </Outer>
  );
};

const mapStateToProps = state => {
  return {
    logs: state.todo.logs
  };
};

export default connect(
  mapStateToProps,
  { clearLogs }
)(History);
