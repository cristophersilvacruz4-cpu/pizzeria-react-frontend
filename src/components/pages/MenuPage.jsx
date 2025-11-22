import { useEffect, useState } from "react";

function MenuPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Aquí puedes reemplazar por una API si luego agregas backend
    setProductos([
      {
        id: 1,
        nombre: "Pizza Pepperoni",
        descripcion: "Clásica y deliciosa con abundante pepperoni.",
        precio: 29.90,
        imagen:
          "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
      },
      {
        id: 2,
        nombre: "Pizza Hawaiana",
        descripcion: "Jamón, piña y queso mozzarella.",
        precio: 31.90,
        imagen:
          "https://cdn-icons-png.flaticon.com/512/3595/3595450.png",
      },
      {
        id: 3,
        nombre: "Pizza 4 Quesos",
        descripcion: "Mezcla perfecta de quesos premium.",
        precio: 32.50,
        imagen:
          "https://cdn-icons-png.flaticon.com/512/3595/3595444.png",
      },
    ]);
  }, []);

  return (
    <div className="px-5 pt-10 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuestro Menú
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition cursor-pointer"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="w-32 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">
              {item.nombre}
            </h2>
            <p className="text-gray-600 text-sm mb-3 text-center">
              {item.descripcion}
            </p>

            <p className="text-xl font-semibold text-center mb-4">
              S/ {item.precio.toFixed(2)}
            </p>

            <button className="w-full bg-red-600 text-white py-2 rounded-xl font-semibold hover:bg-red-700 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
