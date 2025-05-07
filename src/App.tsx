import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import './styles/variables.css';
import './styles/reset.css';
import './styles/fonts.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Form>
            <Input type="text" id="name" label="Имя" />
            <Input type="email" id="email" label="Email" />
            <Textarea id="message" label="Сообщение" />
            <Button type="submit">Отправить</Button>
          </Form>
          
          <SuccessMessage />
        </main>
      </div>
    );
  }
}

export default App;