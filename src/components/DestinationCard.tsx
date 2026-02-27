import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  year: string;
  description: string;
  highlight: string;
  image: string;
  index: number;
}

export default function DestinationCard({
  title,
  year,
  description,
  highlight,
  image,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer h-full"
    >
      <div className="relative w-full h-48 overflow-hidden bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#D4AF37]/5 transition-all duration-500"></div>

      <div className="relative p-8">
        <div className="flex items-baseline gap-3 mb-4">
          <h3 className="text-3xl font-serif font-bold text-white">{title}</h3>
          <span className="text-[#D4AF37] text-sm font-semibold">{year}</span>
        </div>

        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        <div className="flex items-center gap-2 mb-6">
          <div className="h-px flex-grow bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">
            {highlight}
          </span>
        </div>

        <button className="flex items-center gap-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
          <span className="font-semibold">Détails</span>
          <ArrowRight
            size={20}
            className="transform group-hover:translate-x-2 transition-transform duration-300"
          />
        </button>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
    </motion.div>
  );
}
