import React, { Component } from 'react';
import Header from './layout/Header.jsx'; 
import Menu from './layout/Menu.jsx'; 
import Content from './layout/Content.jsx';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Menu></Menu>
        <Content></Content>
      </div>
    );
  }
}