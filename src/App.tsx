import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import ConceptSection from './components/ConceptSection';
import ReservationSection from './components/ReservationSection';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';
import { VideoGallerySection } from './components/VideoGallerySection';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Destinations />
      <VideoGallerySection />
      <ConceptSection />
      <ReservationSection />
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;
