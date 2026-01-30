import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const label = language === 'en' ? 'Back to top' : 'Voltar ao topo';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="backToTopBtn"
      title={label}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-aurora text-white dark:text-charcoal shadow-glow transition-all hover:bg-aurora/90 dark:hover:bg-neon ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTopButton;
