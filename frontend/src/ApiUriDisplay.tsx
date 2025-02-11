import React from 'react';

const ApiUrlDisplay: React.FC = () => {
  // Получаем URL API из переменной окружения
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
  return (
    <div>
      <h1>API URL for this environment:</h1>
      <p>{apiUrl}</p>
    </div>
  );
};

export default ApiUrlDisplay;
