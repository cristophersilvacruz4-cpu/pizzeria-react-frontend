import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CarritoPage() {
  const navigate = useNavigate();

  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: "Pizza Pepperoni",
      precio: 29.90,
      cantidad: 1,
      imagen: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    },
    {
      id: 2,
      nombre: "Pizza Hawaiana",
      precio: 31.90,
      cantidad: 2,
      imagen: "https://cdn-icons-png.flaticon.com/512/3595/3595450.png",
    },
  ]);

  const incrementar = (id) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuir = (id) => {
    setCarrito(prev =>
      prev
        .map(item =>
          item.id === id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const eliminar = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const irAPedirAhora = () => {
    navigate("/pedir-ahora", {
      state: {
        carrito: carrito,
        total: total,
      }
    });
  };

  return (
    <div className="px-6 pt-10 pb-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Tu carrito está vacío 😢
        </p>
      ) : (
        <div className="space-y-6">
          {carrito.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-lg"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1 px-4">
                <h2 className="text-xl font-bold">{item.nombre}</h2>
                <p className="text-gray-600">S/ {item.precio.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => disminuir(item.id)}
                  className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold text-lg">{item.cantidad}</span>

                <button
                  onClick={() => incrementar(item.id)}
                  className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={() => eliminar(item.id)}
                className="ml-4 text-red-600 hover:text-red-800 transition"
              >
                <Trash2 size={22} />
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="bg-white p-5 rounded-2xl shadow-lg mt-6">
            <h2 className="text-2xl font-bold text-center">
              Total: S/ {total.toFixed(2)}
            </h2>

            <button
              onClick={irAPedirAhora}
              className="
                w-full bg-yellow-500 text-black py-3 mt-4 rounded-xl font-semibold 
                hover:bg-yellow-600 transition shadow-md
              "
            >
              Ir a Pedir Ahora
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarritoPage;
