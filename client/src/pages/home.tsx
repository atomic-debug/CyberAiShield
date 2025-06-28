import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIChat from '@/components/ai-chat';

export default function Home() {
  return (
    <div className="cosmic-bg text-white overflow-x-hidden min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <AIChat />
    </div>
  );
}
