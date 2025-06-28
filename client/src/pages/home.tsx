import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIChat from '@/components/ai-chat';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
}
