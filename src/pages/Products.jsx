import React from 'react';
import { Reveal } from '../components/Reveal';

const productsList = [
  {
    id: 1,
    name: 'Creatina Creapure — Integralmédica 300g',
    description: 'Creatina monohidratada Creapure. Força, potência e recuperação.',
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Whey Protein — Growth Supplements 1kg',
    description: 'Whey concentrado Growth para recuperação muscular e saciedade.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Pré-treino Hórus — Max Titanium 300g',
    description: 'Pré-treino Hórus para foco e energia no treino.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Eletrólitos — Atlhetica Hydrate',
    description: 'Repositor de eletrólitos para hidratação e performance.',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Caixa Barrinhas Protein Crisp (12 un.)',
    description: 'Caixa Integralmédica Protein Crisp — lanche prático pós-treino.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Caixa Barrinhas Bold Tube (12 un.)',
    description: 'Caixa Bold Tube com barrinhas proteicas prontas.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'Caixa Chocolate Proteico Haoma (12 un.)',
    description: 'Chocolates saudáveis Haoma — mais proteína, menos açúcar.',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'Caixa Chocolate 70% Vitafor',
    description: 'Display de chocolates Vitafor com alto teor de cacau.',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    name: 'Camiseta Dry Fit — logo FitLady',
    description: 'Camiseta dry fit com o logo FitLady — leve e respirável.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'
  }
];

export const Products = () => (
  <div style={{ background: '#fff', padding: '4.5rem 24px 6rem' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          color: '#E5007E',
          fontSize: '0.78rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '1rem'
        }}>
          Loja
        </p>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: '#000',
          marginBottom: '0.75rem'
        }}>
          Produtos
        </h1>
        <p style={{ color: '#6F6F6F', fontSize: '1.05rem' }}>
          Marcas já existentes — suplementos, barrinhas e chocolates saudáveis.
        </p>
      </Reveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}
        className="product-grid-custom"
      >
        {productsList.map((prod, i) => (
          <Reveal key={prod.id} delay={(i % 3) + 1}>
            <div className="soft-card product-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div className="product-image-wrap">
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '1.35rem',
                color: '#000',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.25
              }}>
                {prod.name}
              </h2>
              <p style={{ color: '#6F6F6F', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {prod.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <style>{`
      .product-image-wrap {
        height: 220px;
        border-radius: 24px;
        overflow: hidden;
        background: #F3F3F1;
        border: 2px solid rgba(0,0,0,0.05);
        transition: border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .product-card:hover .product-image-wrap {
        border-color: #E5007E;
        box-shadow: 0 0 0 3px rgba(229,0,126,0.15);
      }
      .product-image-wrap img {
        transition: transform 0.5s ease;
      }
      .product-card:hover .product-image-wrap img {
        transform: scale(1.05);
      }
      @media (max-width: 1024px) {
        .product-grid-custom { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .product-grid-custom { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </div>
);
