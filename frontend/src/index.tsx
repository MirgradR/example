import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import App from './App';

const rootElement = document.getElementById('root'); // Находим контейнер
if (rootElement) {
  const root = createRoot(rootElement); // Создаем корень
  root.render(<App />); // Рендерим приложение
}
