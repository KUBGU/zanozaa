import React from 'react';

const CatalogPage = () => {
  const products = [
    { id: 1, name: 'Платье', category: 'женская', color: 'красный', size: 'M' },
    { id: 2, name: 'Куртка', category: 'детская', color: 'синий', size: 'S' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Каталог товаров</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>Категория: {product.category}</p>
            <p>Цвет: {product.color}</p>
            <p>Размер: {product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
