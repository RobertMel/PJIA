import { motion } from 'framer-motion';
import { Calendar, Users, Clock } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Réservation
          </h2>
          <p className="text-gray-400 text-lg">
            Commencez votre voyage à travers le temps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-[#D4AF37] mb-3" size={40} />
              <h3 className="text-white font-semibold mb-2">Dates Flexibles</h3>
              <p className="text-gray-400 text-sm">Choisissez votre époque</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-[#D4AF37] mb-3" size={40} />
              <h3 className="text-white font-semibold mb-2">Groupes Privés</h3>
              <p className="text-gray-400 text-sm">Max. 12 voyageurs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-[#D4AF37] mb-3" size={40} />
              <h3 className="text-white font-semibold mb-2">Durée Variable</h3>
              <p className="text-gray-400 text-sm">De 3h à 7 jours</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
              <option value="">Sélectionnez votre destination</option>
              <option value="paris">Paris 1889</option>
              <option value="cretace">Le Crétacé</option>
              <option value="florence">Florence 1504</option>
            </select>

            <textarea
              placeholder="Message (optionnel)"
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#D4AF37] text-[#0a0a0a] text-lg font-bold rounded-lg hover:bg-[#c5a028] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              Demander une Réservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
