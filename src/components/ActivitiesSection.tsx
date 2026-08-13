import React from 'react';
import { Compass, Trees, Bike, Sun, UtensilsCrossed, Sparkles } from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      icon: Compass,
      title: 'Senderismo y Rutas Naturales',
      subtitle: 'Exploración al Aire Libre',
      description: 'Senderos rodeados de naturaleza mediterránea y bosques autóctonos, ideales para caminatas matutinas y paseos relajantes.'
    },
    {
      icon: Bike,
      title: 'Cicloturismo y Rutas en Bici',
      subtitle: 'Paseos sobre Ruedas',
      description: 'Caminos rurales y pistas aptas para bicicleta de montaña o paseos serenos descubriendo el paisaje del entorno.'
    },
    {
      icon: Sun,
      title: 'Jardín Privado y Barbacoa',
      subtitle: 'Vida en el Exterior',
      description: 'Aprovecha las zonas verdes de la propiedad para almorzar al aire libre, leer bajo la sombra o disfrutar de una barbacoa.'
    },
    {
      icon: Trees,
      title: 'Termalismo y Villa Histórica',
      subtitle: 'Caldes de Montbui',
      description: 'A pocos minutos de distancia se encuentra la histórica villa termal con sus afamadas fuentes termales romanas y spas.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Gastronomía Local y Masías',
      subtitle: 'Sabores Tradicionales',
      description: 'Degusta la cocina catalana en las tradicionales masías y restaurantes de campo que rodean la zona.'
    },
    {
      icon: Sparkles,
      title: 'Observación Nocturna de Estrellas',
      subtitle: 'Noches al Aire Libre',
      description: 'La baja contaminación lumínica permite disfrutar de noches despejadas contemplando el cielo estrellado desde la terraza o el jardín.'
    }
  ];

  return (
    <section id="actividades" className="py-20 bg-[#F7F5EC] text-[#2C2A29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#708238] font-bold block mb-2">
            Entorno y Naturaleza
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2A29] mb-4">
            Actividades al Aire Libre
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Descubre todas las experiencias al aire libre que puedes disfrutar durante tu estancia en Casa Kintsugi y sus alrededores.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFEF7] border border-stone-200 rounded-2xl p-8 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#708238]/10 text-[#708238] group-hover:bg-[#708238] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2C2A29] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
