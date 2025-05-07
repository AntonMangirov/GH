import React from 'react';
import './Form.css';

class Form extends React.Component<{ children: React.ReactNode }> {
  render() {
    return (
      <form className="form">
        {this.props.children}
      </form>
    );
  }
}

export default Form;