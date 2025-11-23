function ContactoPage() {
  return (
    <div className="px-6 pt-10 pb-20 max-w-5xl mx-auto">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contáctanos
      </h1>

      {/* GRID PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* FORMULARIO */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Envíanos un mensaje
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block font-semibold mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Correo
              </label>
              <input
                type="email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Mensaje
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-600 transition shadow-md"
            >
              Enviar Mensaje
            </button>

          </form>
        </div>

        {/* INFORMACIÓN DE CONTACTO + MAPA */}
        <div className="space-y-6">

          {/* INFO */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Información
            </h2>

            <p className="mb-2"><strong>📍 Dirección:</strong> Av. Principal 123, Lima, Perú</p>
            <p className="mb-2"><strong>📞 Teléfono:</strong> +51 999 999 999</p>
            <p className="mb-2"><strong>✉ Correo:</strong> ohanapizzas@gmail.com</p>
            <p className="mb-2"><strong>🕒 Horario:</strong> 12:00 pm – 11:00 pm</p>
          </div>

          {/* MAPA */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7394477231136!2d-77.04279352488217!3d-12.059565188158268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c57ff0b249%3A0x5a63baba7c1a5db!2sLima!5e0!3m2!1ses!2spe!4v1698712345678"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactoPage;
