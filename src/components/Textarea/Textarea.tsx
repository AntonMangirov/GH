import React from 'react';
import './Textarea.css';

class Textarea extends React.Component<{
  id: string;
  label: string;
}> {
  render() {
    return (
      <div className="textarea-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea
          id={this.props.id}
          className="textarea"
          rows={5}
        />
      </div>
    );
  }
}

export default Textarea;