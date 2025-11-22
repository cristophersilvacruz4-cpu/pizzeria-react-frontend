import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-28 flex justify-center">
      <div className="bg-[#ffe0b2] border-4 border-black rounded-2xl 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 w-[90%] max-w-xl text-center">

        <h1 className="text-4xl font-bold text-black">
          Panel de Administrador
        </h1>

        <p className="mt-4 text-lg text-gray-800">
          Aquí podrás gestionar tu pizzería.
        </p>

        {/* BOTONES */}
        <div className="mt-10 flex flex-col gap-4">

          <Link
            to="/menu"
            className="bg-[#ffb74d] hover:bg-[#ffa726] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            🍕 Gestionar Menú
          </Link>

          <Link
            to="/pedir-ahora"
            className="bg-[#ffcc80] hover:bg-[#ffb74d] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
            transition active:translate-y-1 active:shadow-none"
          >
            📦 Ver Pedidos
          </Link>

          <Link
            to="/usuarios"
            className="bg-[#ffe0b2] hover:bg-[#ffcc80] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            👤 Administrar Usuarios
          </Link>

          <Link
            to="/contacto"
            className="bg-[#fff3e0] hover:bg-[#ffe0b2] text-black font-bold 
            border-4 border-black rounded-xl py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
            transition active:translate-y-1 active:shadow-none"
          >
            ⚙ Contacto
          </Link>

        </div>

      </div>
    </main>
  );
}

export default AdminPage;
