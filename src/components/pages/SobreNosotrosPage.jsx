import React from 'react';

// ===========================================
// 1. DATA (Para hacer el componente escalable)
// ===========================================

const valoresData = [
    {
        icon: '♡', // Símbolo de corazón (o usa react-icons)
        titulo: 'PASIÓN',
        descripcion: 'Cada pizza la hacemos con amor y dedicación, como si fuera para nuestra familia.',
    },
    {
        icon: '⚙', // Símbolo de engranaje/calidad
        titulo: 'CALIDAD',
        descripcion: 'Solo usamos los mejores ingredientes frescos y de origen local.',
    },
    {
        icon: '👨‍👩‍👧‍👦', // Símbolo de familia
        titulo: 'FAMILIA',
        descripcion: 'Ohana significa familia, y aquí todos son parte de la nuestra.',
    },
    {
        icon: '🕒', // Símbolo de reloj/tiempo
        titulo: 'TRADICIÓN',
        descripcion: 'Recetas transmitidas por tres generaciones de maestros pizzeros.',
    },
];

const trayectoriaData = [
    {
        year: '1995',
        titulo: 'Fundación de Pizzería Ohana',
        descripcion: 'Todo comenzó en un pequeño local con un gran sueño.',
        position: 'left', // Para alinear el timeline
    },
    {
        year: '2005',
        titulo: 'Expansión del Menú',
        descripcion: 'Incorporamos nuevas recetas familiares.',
        position: 'right', // Para alinear el timeline
    },
    {
        year: '2015',
        titulo: 'Reconocimiento Nacional',
        descripcion: 'Premio a la Mejor Pizzería Artesanal.',
        position: 'left',
    },
    {
        year: '2025',
        titulo: 'Plataforma Digital',
        descripcion: 'Llevaremos nuestras pizzas a tu hogar con tecnología.',
        position: 'right',
    },
];

// ===========================================
// 2. COMPONENTE CARD DE VALOR
// ===========================================
const ValorCard = ({ valor }) => (
    <div className="border border-gray-300 rounded-lg p-6 text-center transition duration-300 hover:shadow-lg">
        <div className="text-4xl font-light mb-4 inline-block border border-black p-2 rounded-full leading-none">
            {valor.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 tracking-widest">{valor.titulo}</h3>
        <p className="text-gray-600 text-sm">{valor.descripcion}</p>
    </div>
);


// ===========================================
// 3. COMPONENTE ITEM DE TRAYECTORIA (Timeline)
// ===========================================
const TrayectoriaItem = ({ item, isLeft }) => (
    <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div className={`w-full sm:w-1/2 flex ${isLeft ? 'sm:pr-10 justify-end' : 'sm:pl-10 justify-start'}`}>
            {/* Contenedor del Tarjeta */}
            <div className={`p-4 border border-gray-300 rounded-lg w-full max-w-sm relative ${isLeft ? 'text-right' : 'text-left'}`}>
                {/* Círculo que simula el punto de conexión en el centro */}
                <div className={`hidden sm:block absolute w-4 h-4 rounded-full bg-white border-4 border-gray-300 top-1/2 transform -translate-y-1/2 ${isLeft ? 'right-[-28px]' : 'left-[-28px]'}`}></div>
                
                <h4 className="text-xl font-bold mb-1">{item.year}</h4>
                <p className="text-lg font-semibold mb-2">{item.titulo}</p>
                <p className="text-gray-600 text-sm">{item.descripcion}</p>
            </div>
        </div>
    </div>
);


// ===========================================
// 4. COMPONENTE PRINCIPAL ABOUTUS (Simulación de 'App.jsx')
// ===========================================

export default function AboutUs() {
    return (
        <div className="bg-white min-h-screen">
            {/* Nota: Asumo que el Header de navegación ya existe y lo incluiremos aquí */}
            {/* <Header /> */}

           {/* SECCIÓN 1: HERO HEADER - NUESTRA HISTORIA (CON EFECTO DE IMAGEN BAJITA) */}
<section 
    className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url('https://okdiario.com/img/2023/04/10/receta-casera-de-pizza-pugliese.jpg')` }}
>
    {/* Capa superior blanquecina (más clara que antes) */}
    <div className="absolute inset-0 bg-white opacity-60"></div>

    {/* Segunda imagen súper tenue (efecto bajito) */}
    <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594007654729-407eedc4be81?auto=format&w=1500')` }}
    ></div>

    {/* Contenido */}
    <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-wider mb-3">
            NUESTRA HISTORIA
        </h1>
        <p className="text-xl text-gray-700 max-w-xl mx-auto">
            Tres generaciones compartiendo el amor por la auténtica pizza italiana.
        </p>
    </div>
</section>


            {/* SECCIÓN 2: LA FAMILIA OHANA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Texto (60% en desktop) */}
                    <div className="md:w-3/5 order-2 md:order-1">
                        <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-widest">
                            LA FAMILIA OHANA
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            En 1995, nuestro abuelo Mario llegó a esta ciudad con un sueño: compartir las recetas auténticas de pizza italiana que había aprendido de su madre en Nápoles.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Con solo un horno de leña y mucho amor por el oficio, abrió las puertas de lo que hoy es Pizzería Ohana. El nombre **"Ohana"** significa **familia** en hawaiano, porque creemos que cada cliente que cruza nuestra puerta se convierte en parte de nuestra familia.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Hoy, tres generaciones después, seguimos usando las mismas recetas originales, la misma pasión, y el mismo compromiso con la calidad que nos caracterizó desde el primer día.
                        </p>
                    </div>

                    {/* Imagen (40% en desktop) */}
                    <div className="md:w-2/5 order-1 md:order-2">
                        <div className="border border-black p-2 max-w-sm mx-auto">
                            <img 
                                src="ruta/a/imagen-manos-pizza.jpg" // Reemplaza la URL
                                alt="Manos amasando pizza" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: NUESTROS VALORES */}
            <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-widest">
                        NUESTROS VALORES
                    </h2>
                    <p className="text-gray-600">Los pilares que nos hacen únicos</p>
                </div>
                
                {/* Grid de Valores */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {valoresData.map((valor, index) => (
                        <ValorCard key={index} valor={valor} />
                    ))}
                </div>
                
                {/* Misión y Visión (Debajo de los valores) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Misión</h3>
                        <p className="text-gray-600">
                            Crear momentos memorables alrededor de la mesa, ofreciendo pizzas artesanales de la más alta calidad que conecten a las familias y celebren la tradición culinaria italiana.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Visión</h3>
                        <p className="text-gray-600">
                            Ser la pizzería de referencia que preserve las recetas tradicionales mientras innova en experiencia digital, llevando el sabor auténtico de Italia a cada hogar de nuestra comunidad.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: NUESTRA TRAYECTORIA (Línea de Tiempo) */}
            <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-widest">
                        NUESTRA TRAYECTORIA
                    </h2>
                    <p className="text-gray-600">30 años de historia y tradición</p>
                </div>

                {/* Contenedor de la Línea de Tiempo */}
                <div className="relative">
                    {/* Línea vertical central (Oculta en móviles, solo visible en sm y superior) */}
                    <div className="hidden sm:block absolute left-1/2 w-0.5 bg-gray-300 h-full transform -translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                        {trayectoriaData.map((item, index) => (
                            // Alternamos la posición para que quede a izquierda y derecha
                            <TrayectoriaItem 
                                key={index} 
                                item={item} 
                                isLeft={index % 2 === 0} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Nota: Aquí se incluiría el componente Footer */}
            {/* <Footer /> */}
        </div>
    );
}