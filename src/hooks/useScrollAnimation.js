import { useInView } from 'react-intersection-observer';

// Este é o nosso hook personalizado. Ele encapsula a lógica do 'useInView'.
const useScrollAnimation = (options) => {
  // Usamos o hook da biblioteca aqui dentro
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação acontece só uma vez
    threshold: 0.1,    // Começa quando 10% do elemento está visível
    ...options,        // Permite sobrescrever as opções padrão se necessário
  });

  // O hook retorna a referência e o estado 'inView' para o componente que o usar
  return { ref, inView };
};

export default useScrollAnimation;