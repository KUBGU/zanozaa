import React from 'react';

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Вход</h2>
      <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" />
      <input className="w-full p-2 mb-2 border rounded" type="password" placeholder="Пароль" />
      <button className="w-full bg-black text-white py-2 rounded">Войти</button>
    </div>
  );
};

export default LoginPage;
