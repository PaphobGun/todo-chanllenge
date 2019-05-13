import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import styled from 'styled-components';
import uniqid from 'uniqid';

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

  addZero = time => {
    if (time < 10) time = '0' + time;
    return time;
  };

  calcTime = () => {
    const today = new Date();
    const d = this.addZero(today.getDate());
    const m = this.addZero(today.getMonth());
    const y = this.addZero(today.getFullYear());
    const h = this.addZero(today.getHours());
    const min = this.addZero(today.getMinutes());
    const sec = this.addZero(today.getSeconds());

    return `${d}/${m}/${y} ${h}:${min}:${sec}`;
  };

  onSubmit = e => {
    e.preventDefault();

    const list = {
      id: uniqid(),
      todoList: this.state.list,
      action: 'todo',
      lastUpdated: this.calcTime()
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
