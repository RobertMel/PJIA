import { motion } from 'framer-motion';
import { Clock, Shield, Sparkles } from 'lucide-react';

export default function ConceptSection() {
  const features = [
    {
      icon: Clock,
      title: 'Technologie Quantique',
      description: 'Nos capsules temporelles utilisent une technologie de pointe pour garantir des voyages sûrs et précis.',
    },
    {
      icon: Shield,
      title: 'Sécurité Absolue',
      description: 'Protocoles de sécurité maximale et accompagnement par des guides temporels certifiés.',
    },
    {
      icon: Sparkles,
      title: 'Expérience Premium',
      description: 'Des voyages exclusifs limités à 12 passagers pour une immersion totale et authentique.',
    },
  ];

  return (
    <section id="concept" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Notre Concept
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une approche révolutionnaire du voyage qui transcende les limites du temps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300"
            >
              <feature.icon className="text-[#D4AF37] mb-4" size={48} />
              <h3 className="text-2xl font-serif font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
