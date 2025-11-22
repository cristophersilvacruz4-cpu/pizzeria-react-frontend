import React from "react";

function SobreNosotrosPage() {
  return (
    <div className="px-6 pt-28 pb-20 bg-[#FFF7E6] flex justify-center">

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="
        w-full max-w-6xl 
        bg-[#FFF1D6]
        border-8 border-[#8B0000]
        rounded-3xl
        shadow-[12px_12px_0px_0px_#8B0000]
        p-10
        "
      >
        {/* TÍTULO */}
        <h1
          className="text-5xl font-extrabold text-center mb-10 
          text-[#B40000]
          drop-shadow-[3px_3px_0px_#FFD13B]"
        >
          Sobre Nosotros
        </h1>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN REDONDA GRANDE */}
          <div className="flex justify-center">
            <div
              className="
              w-[350px] h-[350px]
              bg-white
              rounded-full
              border-[10px] border-[#B40000]
              shadow-[10px_10px_0px_0px_#B40000]
              flex items-center justify-center
              overflow-hidden
            "
            >
              <img
                src='https://cdn-icons-png.flaticon.com/512/3595/3595454.png'
                alt='Pizza Ohana'
                className='w-[75%] h-[75%] object-contain'
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#B40000]">Nuestra Historia</h2>
            <p className="text-[#5A3A1E] leading-relaxed mb-6 text-lg">
              En <strong className="text-[#B40000]">Ohana Pizzas</strong> comenzamos con
              una pasión: preparar pizzas con masa suave, horneadas al fuego y
              llenas de sabor. Cada ingrediente es seleccionado cuidadosamente
              para ofrecer una experiencia inolvidable.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-[#B40000]">Nuestra Filosofía</h2>
            <p className="text-[#5A3A1E] leading-relaxed mb-6 text-lg">
              Una buena pizza une personas. Por eso buscamos transmitir calidez,
              familia y buenos momentos en cada porción.
            </p>

            <h2 className="text-3xl font-bold mb-4 text-[#B40000]">¿Por qué elegirnos?</h2>
            <ul className="list-disc list-inside text-[#5A3A1E] leading-relaxed text-lg">
              <li>Ingredientes frescos y seleccionados.</li>
              <li>Queso derretido premium y salsas caseras.</li>
              <li>Atención rápida y amable.</li>
              <li>Promociones irresistibles todos los días.</li>
            </ul>
          </div>
        </div>

        {/* MENSAJE FINAL */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-2xl font-extrabold text-[#B40000] drop-shadow-[2px_2px_0px_#FFD13B]">
            En OHANA, cada pizza cuenta una historia… y queremos que formes parte de ella.
          </p>

          <p className="text-[#5A3A1E] mt-3">
            ¡Gracias por elegirnos y disfrutar el sabor de la verdadera pizza artesanal!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosPage;
