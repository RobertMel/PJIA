import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

export default function Destinations() {
  const destinations = [
    {
      title: 'Paris',
      year: '1889',
      description:
        "Découvrez l'élégance de la Belle Époque lors de l'Exposition Universelle. Admirez l'inauguration de la Tour Eiffel et plongez dans le raffinement parisien du XIXe siècle.",
      highlight: 'Belle Époque',
      image: '/Capture_d\'écran_2026-02-27_à_10.27.11.png',
    },
    {
      title: 'Le Crétacé',
      year: '-66M',
      description:
        "Partez pour l'aventure ultime dans un monde sauvage et préhistorique. Observez les dinosaures dans leur habitat naturel lors d'un safari temporel inoubliable.",
      highlight: 'Aventure Sauvage',
      image: '/Capture_d\'écran_2026-02-27_à_10.27.45.png',
    },
    {
      title: 'Florence',
      year: '1504',
      description:
        "Immergez-vous dans l'apogée de la Renaissance italienne. Rencontrez Michel-Ange et les grands maîtres dans l'atmosphère artistique unique de Florence.",
      highlight: 'Renaissance',
      image: '/Capture_d\'écran_2026-02-27_à_10.28.18.png',
    },
  ];

  return (
    <section id="destinations" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Nos Destinations
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
