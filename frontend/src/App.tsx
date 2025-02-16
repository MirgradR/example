import React from 'react';
import ApiUrlDisplay from './ApiUriDisplay';
import background from './assets/images/background.jpg'; // Импорт изображения
import './main.css';
import logo from './assets/images/logo.jpg'; // Импорт изображения

const App = () => {
  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} alt="Logo" />
      <h1>Hello, React with Webpack!</h1>
      <h2>ADD CI/CD</h2>
      <p>RUSLAN HELLO, I AM SUPER MENTOR</p>
      <ApiUrlDisplay />
    </div>
  );
};

export default App;
