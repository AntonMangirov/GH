import React from 'react';
import './SuccessMessage.css';

class SuccessMessage extends React.Component {
  render() {
    return (
      <div className="success-message">
        <p>Спасибо! Ваше сообщение успешно отправлено.</p>
      </div>
    );
  }
}

export default SuccessMessage;