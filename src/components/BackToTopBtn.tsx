import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="backToTopBtn"
      title="Voltar ao Topo"
      onClick={scrollToTop}
      className='hidden fixed bottom-5 right-5 text-2xl bg-royal-blue text-white border-none p-2 rounded-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80'
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      &#9650;
    </button>
  );
};

export default BackToTopButton;