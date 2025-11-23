import { useEffect, useState } from "react";

function PromocionesPage() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    // Puedes reemplazar este array cuando tengas un backend real
    setPromos([
      {
        id: 1,
        titulo: "Promo Familiar",
        descripcion: "2 Pizzas Grandes + Gaseosa 1.5L",
        precio: 59.90,
        imagen: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
      },
      {
        id: 2,
        titulo: "Combo Personal",
        descripcion: "Pizza Personal + Bebida 500ml",
        precio: 19.90,
        imagen: "https://cdn-icons-png.flaticon.com/512/3595/3595444.png",
      },
      {
        id: 3,
        titulo: "Dúo Ohana",
        descripcion: "2 Pizzas Medianas a elección",
        precio: 44.90,
        imagen: "https://cdn-icons-png.flaticon.com/512/3595/3595450.png",
      },
    ]);
  }, []);

  return (
    <div className="px-5 pt-10 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Promociones Especiales
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white shadow-lg rounded-2xl p-5 hover:scale-105 transition cursor-pointer"
          >
            <img
              src={promo.imagen}
              alt={promo.titulo}
              className="w-32 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">
              {promo.titulo}
            </h2>

            <p className="text-gray-600 text-sm mb-3 text-center">
              {promo.descripcion}
            </p>

            <p className="text-xl font-semibold text-center mb-4">
              S/ {promo.precio.toFixed(2)}
            </p>

            <button className="w-full bg-yellow-500 text-black py-2 rounded-xl font-semibold hover:bg-yellow-600 transition">
              Obtener Promo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromocionesPage;
