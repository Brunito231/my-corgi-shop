import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductosPorCategoria } from './api'; // API

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosNuevos = await obtenerProductosPorCategoria(categoryId);
        setProductos(productosNuevos);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <div className="container">
      <h2>¡Bienvenido a My Corgi Shop!</h2>
      <p>Aquí encontrarás una gran variedad de productos para el cuidado de tus mascotas. Nuestros mejores amigos.</p>

      {/* Renderiza productos  */}
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;