import React from 'react';

const RegisterPage = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
      <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Имя" />
      <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" />
      <input className="w-full p-2 mb-2 border rounded" type="password" placeholder="Пароль" />
      <button className="w-full bg-black text-white py-2 rounded">Зарегистрироваться</button>
    </div>
  );
};

export default RegisterPage;
