import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 flex flex-col justify-between relative">
      <Header />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
      
      {/* Botão flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;