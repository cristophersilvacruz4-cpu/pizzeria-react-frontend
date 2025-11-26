import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-white flex flex-col min-h-screen">

      {/* IMAGEN HERO AL INICIO */}
      <section className="w-full bg-gray-100 py-12 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-xl border-4 border-black overflow-hidden">
          <img
            src="/imgs/logo.png"
            alt="Pizza Ohana"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TEXTO Y BOTONES */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Las Mejores Pizzas Artesanales de la Ciudad
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Preparadas con ingredientes frescos, amor familiar y tradición italiana en cada bocado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-yellow-500 transition-all"
            >
              Ver Menú
            </button>
            <button
              onClick={() => navigate('/promociones')}
              className="px-6 py-3 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-yellow-500 transition-all"
            >
              Ver Ofertas
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER SENCILLO */}
      <footer className="bg-black text-white mt-auto py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Pizzería Ohana</h3>
            <p className="text-gray-300 text-sm">Pizzas artesanales con sabor auténtico y fresco.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <p className="text-gray-300 text-sm">Tel: +51 999 999 999</p>
            <p className="text-gray-300 text-sm">Email: contacto@pizzeriaohana.com</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-500"><FaWhatsapp size={20} /></a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} Pizzería Ohana. Todos los derechos reservados.
        </div>
      </footer>

    </main>
  );
}

export default HomePage;
