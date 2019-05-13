import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { calcTime } from '../utils/calcTime';

const Outer = styled.div`
  margin: 2rem 2rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 1rem;
  width: 50%;
`;

class Form extends Component {
  state = {
    list: ''
  };

  onSubmit = e => {
    e.preventDefault();

    const list = {
      id: uniqid(),
      todoList: this.state.list,
      action: 'todo',
      lastUpdated: calcTime()
    };

    this.props.addList(list);
    this.setState({
      list: ''
    });
  };

  onChange = e => {
    this.setState({
      list: e.target.value
    });
  };

  render() {
    const { label, type } = this.props;

    return (
      <Outer>
        <MyForm onSubmit={this.onSubmit}>
          <label>{label}</label>
          <Input onChange={this.onChange} value={this.state.list} type={type} />
        </MyForm>
      </Outer>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

export default connect(
  mapStateToProps,
  { addList }
)(Form);
