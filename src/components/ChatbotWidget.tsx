import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const getChronosResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('paris') || lowerMessage.includes('1889') || lowerMessage.includes('tour eiffel') || lowerMessage.includes('exposition')) {
    return "Ah, la Ville Lumière ! En 1889, la Tour Eiffel vient d'être achevée. C'est l'apogée de l'élégance française. Voulez-vous vos billets pour l'Exposition Universelle ? Une expérience inoubliable vous attend.";
  }

  if (lowerMessage.includes('crétacé') || lowerMessage.includes('dinosaure') || lowerMessage.includes('t-rex') || lowerMessage.includes('préhistorique')) {
    return "Un choix audacieux ! Préparez-vous à croiser le T-Rex. Nos combinaisons de camouflage thermique sont obligatoires pour cette époque. L'adrénaline et la magnificence de la nature préhistorique vous attendent.";
  }

  if (lowerMessage.includes('florence') || lowerMessage.includes('1504') || lowerMessage.includes('michel-ange') || lowerMessage.includes('renaissance') || lowerMessage.includes('léonard')) {
    return "L'âge d'or du génie ! Vous pourriez croiser Léonard de Vinci ou Michel-Ange dans les rues de Florence. Un voyage pour les esthètes, où chaque coin de rue respire l'art et la créativité.";
  }

  if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût') || lowerMessage.includes('réserver') || lowerMessage.includes('booking')) {
    return "Nos sauts temporels débutent à 15 000 pièces d'or pour un séjour de 3 jours, tout inclus (assurance paradoxe comprise). Ce prix inclut vos équipements de protection temporels et un guide expert.";
  }

  if (lowerMessage.includes('merci') || lowerMessage.includes('merci') || lowerMessage.includes('thanks')) {
    return "C'est un plaisir ! Vous avez d'autres questions sur nos destinations temporelles ? Je suis ici pour vous guider à travers les âges.";
  }

  if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
    return "Bienvenue dans les mystères du temps ! Je suis Chronos, votre expert en saut temporel. Quelle époque vous fascine ? Paris 1889, le Crétacé, ou Florence 1504 ?";
  }

  if (lowerMessage.includes('sécurité') || lowerMessage.includes('danger') || lowerMessage.includes('protec')) {
    return "Excellente question ! Nos sauts temporels sont régis par les protocoles de sécurité les plus stricts. Chaque voyageur est équipé d'un stabilisateur paradoxal et d'une assurance tous risques temporels.";
  }

  if (lowerMessage.includes('quand') || lowerMessage.includes('date') || lowerMessage.includes('disponible')) {
    return "Les départs sont disponibles toute l'année ! Quelle période vous intéresse ? Nos sauts peuvent être personnalisés selon vos préférences.";
  }

  return "Intéressant ! Vous pourriez explorer cette époque avec nous. Souhaitez-vous en savoir plus sur une destination spécifique ? Paris 1889, Le Crétacé, ou Florence 1504 ?";
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Salutations ! Je suis Chronos, votre expert en saut temporel. L'Histoire vous fascine ? Explorez Paris 1889, le Crétacé, ou Florence 1504 avec la TimeTravel Agency.",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isBot: false }]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        const response = getChronosResponse(inputValue);
        setMessages((prev) => [
          ...prev,
          {
            text: response,
            isBot: true,
          },
        ]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#c5a028] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0a0a0a]">Chronos</h3>
                  <p className="text-xs text-[#0a0a0a]/80">Expert Temporel</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0a0a0a] hover:bg-[#0a0a0a]/10 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-xl ${
                      message.isBot
                        ? 'bg-gradient-to-br from-[#D4AF37] to-[#c5a028] text-[#0a0a0a] font-medium'
                        : 'bg-gray-700 text-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#c5a028] px-4 py-3 rounded-xl">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-2 h-2 bg-[#0a0a0a] rounded-full"
                      ></motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
                        className="w-2 h-2 bg-[#0a0a0a] rounded-full"
                      ></motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                        className="w-2 h-2 bg-[#0a0a0a] rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t border-gray-700 bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-[#D4AF37] text-[#0a0a0a] rounded-lg hover:bg-[#c5a028] transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all z-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} className="text-[#0a0a0a]" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} className="text-[#0a0a0a]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
