import React from 'react';

// ===========================================
// 1. DATA DE LAS PROMOCIONES (Simulación de 'data.js')
// ===========================================
const ofertasData = [
    {
        id: 1,
        titulo: "Pizza del Mes",
        descripcion: "Especial Hawaiiana con ingredientes premium",
        validez: "31 Dic 2025",
        precioAnterior: "$16.99",
        precioActual: "11.99",
        descuento: "29% OFF",
        imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Hawaiiana", // Placeholder
    },
    {
        id: 2,
        titulo: "Martes de Vegetarianas",
        descripcion: "Todas las pizzas vegetarianas con 40% de descuento",
        validez: "Todos los martes",
        precioAnterior: "$11.99",
        precioActual: "7.19",
        descuento: "40% OFF",
        imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Vegetariana", // Placeholder
    },
    {
        id: 3,
        titulo: "Combo Familiar",
        descripcion: "2 pizzas medianas + bebida de 2L + palitos de queso",
        validez: "15 Dic 2025",
        precioAnterior: "$34.99",
        precioActual: "24.99",
        descuento: "30% OFF",
        imagenUrl: "https://via.placeholder.com/300x200?text=Combo+Familiar", // Placeholder
    },
    {
        id: 4,
        titulo: "2x1 en Pizzas Familiares",
        descripcion: "Lleva 2 pizzas familiares al precio de 1. Válido de lunes a jueves.",
        validez: "30 Nov 2025",
        precioAnterior: "$25.98",
        precioActual: "12.99",
        descuento: "50% OFF",
        imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Pepperoni", // Placeholder
    },
];

// ===========================================
// 2. COMPONENTE FOOTER (Simulación de 'Footer.jsx')
// ===========================================
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
                {/* Columna 1: Información */}
                <div className="w-full sm:w-auto flex-1 min-w-[180px]">
                    <h4 className="text-lg font-bold text-yellow-500 mb-4">Información</h4>
                    <p className="mb-2 text-gray-400">📍 Calle Principal 123, Ciudad</p>
                    <p className="mb-2 text-gray-400">📞 +1 234 567 8900</p>
                    <p className="mb-2 text-gray-400">📧 hola@olimpiapizza.com</p>
                </div>

                {/* Columna 2: Links Rápidos */}
                <div className="w-full sm:w-auto flex-1 min-w-[180px]">
                    <h4 className="text-lg font-bold text-yellow-500 mb-4">Links Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="#menu" className="text-gray-400 hover:text-white transition duration-200">Menú</a></li>
                        <li><a href="#promociones" className="text-gray-400 hover:text-white transition duration-200">Promociones</a></li>
                        <li><a href="#nosotros" className="text-gray-400 hover:text-white transition duration-200">Sobre Nosotros</a></li>
                        <li><a href="#contacto" className="text-gray-400 hover:text-white transition duration-200">Contacto</a></li>
                        <li><a href="#terminos" className="text-gray-400 hover:text-white transition duration-200">Términos y Condiciones</a></li>
                        <li><a href="#faqs" className="text-gray-400 hover:text-white transition duration-200">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                {/* Columna 3: Síguenos */}
                <div className="w-full sm:w-auto min-w-[180px]">
                    <h4 className="text-lg font-bold text-yellow-500 mb-4">Síguenos</h4>
                    <div className="flex space-x-4">
                        {/* Íconos sociales (usando emojis para simplicidad) */}
                        <a href="https://facebook.com" aria-label="Facebook" className="text-2xl text-white hover:text-yellow-500 transition duration-200">
                            📸
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" className="text-2xl text-white hover:text-yellow-500 transition duration-200">
                            💬
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="text-2xl text-white hover:text-yellow-500 transition duration-200">
                            📧
                        </a>
                    </div>
                </div>
            </div>
            
            <hr className="my-8 border-gray-700 max-w-7xl mx-auto" />
            
            <div className="text-center text-sm text-gray-500">
                © 2025 Olimpia Pizza. Todos los derechos reservados.
            </div>
        </footer>
    );
};


// ===========================================
// 3. COMPONENTE TARJETA DE OFERTA (Simulación de 'OfertaCard.jsx')
//    -> Nota: mantuve nombres de variables y componentes iguales para evitar errores.
//       Solo cambié el texto visible del botón y la sección principal a "Promociones".
// ===========================================
const OfertaCard = ({ oferta }) => {
    const { titulo, descripcion, validez, precioAnterior, precioActual, descuento, imagenUrl } = oferta;

    return (
        // Uso de clases responsivas: flex-col por defecto, sm:flex-row en pantallas medianas
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
            
            {/* Sección de la Imagen (40% de ancho en sm) */}
            <div className="relative w-full sm:w-2/5 h-48 sm:h-auto min-w-[200px] max-h-72">
                <img 
                    src={imagenUrl} 
                    alt={titulo} 
                    className="w-full h-full object-cover block"
                />
                
                {/* Badge de Descuento */}
                <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded shadow-lg">
                    {descuento}
                </span>
            </div>

            {/* Sección de la Información (60% de ancho en sm) */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">{titulo}</h3>
                    <p className="text-gray-600 mb-3">{descripcion}</p>
                    
                    {/* Validez */}
                    <p className="text-sm text-gray-500 mb-5">
                        <span className="inline-block mr-2 text-base align-middle">
                            🗓️
                        </span>
                        Válido hasta: **{validez}**
                    </p>
                </div>

                {/* Precios y Botón */}
                <div>
                    <div className="mb-5">
                        <span className="text-lg line-through text-gray-400 mr-3">{precioAnterior}</span>
                        <span className="text-2xl font-bold text-gray-800">${precioActual}</span>
                    </div>

                    <button className="w-full bg-yellow-600 text-white font-bold py-3 px-6 rounded transition duration-300 hover:bg-yellow-700 shadow-lg hover:shadow-xl">
                        Reclamar Promoción
                    </button>
                </div>
            </div>
        </div>
    );
};


// ===========================================
// 4. COMPONENTE PRINCIPAL (App.jsx)
// ===========================================
export default function App() {
    return (
        // Fondo gris claro de las imágenes
        <div className="bg-gray-50 min-h-screen">
            {/* Aquí puedes colocar tu Header/Navegación si lo codificas */}
            {/* <Header /> */}

            <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Título y subtítulo de la sección de promociones */}
                <section className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Promociones Especiales</h1>
                    <p className="text-xl text-gray-600">Aprovecha nuestras increíbles promociones</p>
                </section>
                
                {/* Mapeo de los datos para crear las tarjetas */}
                <section>
                    {ofertasData.map((oferta) => (
                        <OfertaCard key={oferta.id} oferta={oferta} />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
}

// Nota: En un proyecto React moderno, exportarías 'App' por defecto
// y luego lo renderizarías en tu archivo 'main.jsx' o 'index.js'.
