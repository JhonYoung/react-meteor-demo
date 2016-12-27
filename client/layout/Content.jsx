import React, { Component, PropTypes } from 'react';
import { Button } from 'antd';

export default class Content extends Component {
  render() {
    return (
      <div>Content</div>
    );
  }
}
 
// Content.propTypes = {
//   // This component gets the task to display through a React prop.
//   // We can use propTypes to indicate it is required
//   task: PropTypes.object.isRequired,
// };