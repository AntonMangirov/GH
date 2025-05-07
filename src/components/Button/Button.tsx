import React from 'react';
import './Button.css';

class Button extends React.Component<{ 
  type?: 'button' | 'submit';
  children: React.ReactNode;
}> {
  render() {
    return (
      <button type={this.props.type || 'button'} className="button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;