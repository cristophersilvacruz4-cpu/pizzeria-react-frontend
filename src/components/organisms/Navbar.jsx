import { Menu, X, UserRound, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="
      fixed top-0 left-0 w-full bg-gray-100 z-50 shadow-lg py-4 px-6
      flex justify-between items-center backdrop-blur-lg transition-all duration-300">
        
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <div className="
          w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center
          border-4 border-b-gray-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          overflow-hidden transition-transform duration-300 hover:scale-105">
          <img src="/imgs/logo.png" alt="logo" className="w-12 h-12 object-contain" />
        </div>

        <span className="
          text-xl font-bold tracking-wider text-black 
          drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]
          transition-all duration-300 hover:text-yellow-600 ">
          OHANA PIZZAS
        </span>
      </Link>

      {/* ICONO HAMBURGUESA */}
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="
          lg:hidden text-black w-10 h-10 flex items-center justify-center 
          transition-transform duration-300 active:scale-90">
        {openMenu ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* MENÚ DESKTOP */}
      <ul className="hidden lg:flex items-center gap-10 text-sm font-bold text-black">
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/">Inicio</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/menu">Menú</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/promociones">Promociones</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li className="hover:text-yellow-600 transition-all duration-200"><Link to="/contacto">Contacto</Link></li>
      </ul>

      {/* LOGIN + PEDIR AHORA (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <Link
          to="/iniciar-sesion"
          className="
            flex items-center gap-2 font-medium text-black 
            hover:text-yellow-600 transition-all duration-200">
          <UserRound size={22} />
          Iniciar Sesión
        </Link>

        <ChevronDown size={22} className="hover:text-yellow-600 transition-transform duration-300" />

        <Link
          to="/pedir-ahora"
          className="
            bg-black text-white px-6 py-2 rounded-lg border-2 border-black 
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:bg-yellow-500 hover:text-black transition-all duration-300 
            hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95">
          Pedir Ahora
        </Link>
      </div>

      {/* MENÚ RESPONSIVO */}
      {openMenu && (
        <div className="
          absolute top-full left-0 w-full bg-gray-100 lg:hidden
          shadow-lg border-t-2 border-black flex flex-col items-center py-6 gap-6
          animate-slideDown">
          {/* LINKS MOBILE */}
          {[
            { to: "/", label: "Inicio" },
            { to: "/menu", label: "Menú" },
            { to: "/promociones", label: "Promociones" },
            { to: "/sobre-nosotros", label: "Sobre Nosotros" },
            { to: "/contacto", label: "Contacto" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpenMenu(false)}
              className="text-lg font-bold hover:text-yellow-600 transition-all duration-200">
              {item.label}
            </Link>
          ))}

          {/* LOGIN MOBILE */}
          <Link
            to="/iniciar-sesion"
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2 text-lg font-bold hover:text-yellow-600 transition-all duration-200">
            <UserRound size={26} />
            Iniciar Sesión
            <ChevronDown size={22} />
          </Link>

          {/* BOTÓN PEDIR AHORA MOBILE */}
          <Link
            to="/pedir-ahora"
            onClick={() => setOpenMenu(false)}
            className="
              bg-black text-white px-6 py-2 rounded-lg border-2 border-black 
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:bg-yellow-500 hover:text-black transition-all duration-300 
              hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:scale-95">
            Pedir Ahora
          </Link>
        </div>
      )}

      {/* LÍNEA DECORATIVA */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></div>
    </nav>
  );
}

export default Navbar;
  