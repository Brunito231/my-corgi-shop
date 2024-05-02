import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleProducto } from '../api'; // API

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productoObtenido = await obtenerDetalleProducto(id);
        setProducto(productoObtenido);
      } catch (error) {
        console.error('Error al obtener detalle del producto:', error);
      }
    };

    obtenerProducto();
  }, [id]);

  return (
    <div className="container">
      <h2>Detalle del Producto</h2>
      {producto ? (
        <div>
          <h3>{producto.nombre}</h3>
          <p>Precio: {producto.precio}</p>
          <p>Descripción: {producto.descripcion}</p>
          {/* Agrega más detalles del producto según sea necesario */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
