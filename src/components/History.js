import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { clearLogs } from '../actions';

const Outer = styled.div`
  text-align: center;
  padding: 5rem;
`;

class History extends Component {
  clearHistory = () => {
    this.props.clearLogs();
  };

  renderLogs = () => {
    return this.props.logs.reverse().map(todo => {
      return (
        <div key={todo.lastUpdated + Math.random()}>
          {todo.lastUpdated} | {todo.action} | {todo.todoList}
        </div>
      );
    });
  };

  render() {
    return (
      <Outer>
        <h1>History</h1>
        <div>
          <h2>
            <Link to="/">Back To Main</Link>
          </h2>
        </div>
        {this.renderLogs()}
        <button onClick={this.clearHistory}>Clear History</button>
      </Outer>
    );
  }
}

const mapStateToProps = state => {
  return {
    logs: state.todo.logs
  };
};

export default connect(
  mapStateToProps,
  { clearLogs }
)(History);
