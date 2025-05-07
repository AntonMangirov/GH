import React from 'react';
import './Input.css';

class Input extends React.Component<{
  type: 'text' | 'email';
  id: string;
  label: string;
}> {
  render() {
    return (
      <div className="input-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          className="input"
        />
      </div>
    );
  }
}

export default Input;