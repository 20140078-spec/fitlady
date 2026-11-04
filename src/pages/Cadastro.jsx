import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ChevronRight } from 'lucide-react';

export const Cadastro = ({
  setActiveTab,
  pendingService,
  setPendingService,
  setAccessMessage
}) => {
  const { enterAsGuest } = useAuth();

  const handleEnter = () => {
    enterAsGuest('Aluna FitLady');

    if (pendingService) {
      setAccessMessage(
        'Para acessar e utilizar nossos serviços, escolha um pacote abaixo. Depois disso, você poderá responder o questionário.'
      );
      setPendingService(null);
      setActiveTab('pacotes');
    } else {
      setActiveTab('home');
    }
  };

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-3xl border border-black/8 bg-white p-10 text-center shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)]">
        <div className="font-display text-4xl tracking-tight text-black mb-3">
          Fit<span className="text-fitlady">Lady</span>
        </div>
        <h1 className="font-display text-3xl text-black mb-3">Cadastrar / Entrar</h1>
        <p className="text-[#6F6F6F] mb-8 leading-relaxed">
          Clique abaixo para entrar e acessar serviços, pacotes e seu progresso.
        </p>
        <button
          onClick={handleEnter}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-white transition-transform hover:scale-[1.03]"
        >
          Entrar agora <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
