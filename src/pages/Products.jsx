import React from 'react';
import { ShoppingBag, Star, Sparkles, Shield, Heart } from 'lucide-react';

export const Products = () => {
  const productsList = [
    {
      id: 1,
      name: 'FitLady Whey Isolate Vanilla 900g',
      category: 'Suplementação Premium',
      price: 'R$ 189,90',
      rating: 4.9,
      badge: 'Mais Vendido',
      description: 'Proteína isolada com colágeno verisol e zero lactose, desenvolvida especialmente para a saúde e firmeza da pele feminina.',
      gradient: 'linear-gradient(135deg, #ff4d8d 0%, #8b5cf6 100%)'
    },
    {
      id: 2,
      name: 'Garrafa Térmica Stainless Pink 750ml',
      category: 'Acessórios & Treino',
      price: 'R$ 89,90',
      rating: 4.8,
      badge: 'Lançamento',
      description: 'Mantém sua bebida gelada por até 24h. Livre de BPA, com trava anti-vazamento e acabamento matte aveludado.',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)'
    },
    {
      id: 3,
      name: 'Faixas de Resistência Elastic Bands Set',
      category: 'Equipamentos de Treino',
      price: 'R$ 69,90',
      rating: 5.0,
      badge: 'Essencial',
      description: 'Kit de 5 mini-bands em tecido antiderrapante para ativação de glúteos e treinos em casa ou em viagens.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 4,
      name: 'FitLady Pre-Workout Glow Power 300g',
      category: 'Suplementação Premium',
      price: 'R$ 149,90',
      rating: 4.9,
      badge: 'Foco & Energia',
      description: 'Pré-treino sem taquicardia com beta-alanina, cafeína natural de chá verde e pimenta rosa.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
    },
    {
      id: 5,
      name: 'Conjunto Seamless Activewear Pink/Purple',
      category: 'Vestuário Fitness',
      price: 'R$ 229,90',
      rating: 4.9,
      badge: 'Zero Transparência',
      description: 'Top de alta sustentação e legging empina bumbum sem costura com tecido respirável de alta compressão.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 6,
      name: 'Guia Digital: Receitas Proteicas Práticas',
      category: 'E-books & Guias',
      price: 'R$ 39,90',
      rating: 4.7,
      badge: 'Digital',
      description: 'Mais de 60 receitas rápidas para café da manhã, lanches intermediários e doces fit em menos de 15 min.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Loja Exclusiva</span>
        <h1 className="section-title">Produtos & Suplementos FitLady</h1>
        <p className="section-subtitle">
          Linha de produtos formulada e selecionada rigorosamente para complementar seu estilo de vida fitness.
        </p>
      </div>

      {/* Product Grid: 3 columns max per row as defined in CSS */}
      <div className="product-grid">
        {productsList.map((prod) => (
          <div key={prod.id} className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                height: '140px',
                borderRadius: 'var(--radius-sm)',
                background: prod.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <ShoppingBag size={48} color="rgba(255, 255, 255, 0.85)" />
                <span className="badge badge-pink" style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: '#fff'
                }}>
                  {prod.badge}
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>
                {prod.category}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: '6px 0 10px 0', lineHeight: '1.3' }}>
                {prod.name}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '0.88rem', marginBottom: '12px' }}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <span style={{ color: '#fff', fontWeight: '700' }}>{prod.rating}</span>
                <span style={{ color: 'var(--text-muted)' }}>(Avaliações Verificadas)</span>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {prod.description}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--glass-border)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Preço</span>
                <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#fff' }}>{prod.price}</span>
              </div>
              <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
                Comprar <ShoppingBag size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
