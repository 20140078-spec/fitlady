import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Star, Plus, Minus, Trash2, Check, ArrowRight, X } from 'lucide-react';

export const Products = () => {
  const { cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart, showToast } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'success'

  const productsList = [
    {
      id: 1,
      name: 'FitLady Whey Isolate Vanilla 900g',
      category: 'suplementos',
      categoryLabel: 'Suplementação',
      priceNumber: 189.90,
      price: 'R$ 189,90',
      rating: 4.9,
      reviewsCount: 312,
      badge: 'Mais Vendido',
      image: '/products/whey.jpg',
      description: 'Proteína isolada com peptídeos bioativos de colágeno Verisol e zero lactose. Máxima pureza para recuperação muscular e firmeza da pele.'
    },
    {
      id: 2,
      name: 'FitLady Creatina Monohidratada Creapure 300g',
      category: 'suplementos',
      categoryLabel: 'Suplementação',
      priceNumber: 119.90,
      price: 'R$ 119,90',
      rating: 5.0,
      reviewsCount: 489,
      badge: 'Selo Creapure',
      image: '/products/creatina.jpg',
      description: '100% pura com certificação internacional. Aumenta a força em treinos de alta intensidade, acelera a recuperação e melhora a cognição.'
    },
    {
      id: 3,
      name: 'FitLady Pre-Workout Glow Power 300g',
      category: 'suplementos',
      categoryLabel: 'Suplementação',
      priceNumber: 149.90,
      price: 'R$ 149,90',
      rating: 4.9,
      reviewsCount: 220,
      badge: 'Foco & Energia',
      image: '/products/pretreino.jpg',
      description: 'Fórmula ergogênica equilibrada com cafeína de chá verde, beta-alanina e extrato de pimenta rosa. Energia limpa sem taquicardia.'
    },
    {
      id: 4,
      name: 'FitLady Complex Eletrólitos & Hidratação 30 sachês',
      category: 'suplementos',
      categoryLabel: 'Suplementação',
      priceNumber: 99.90,
      price: 'R$ 99,90',
      rating: 4.8,
      reviewsCount: 175,
      badge: 'Hidratação Celular',
      image: '/products/eletrolitos.jpg',
      description: 'Magnésio quelato, potássio e sódio na proporção ideal para manter o rendimento e evitar cãibras durante treinos intensos e dias quentes.'
    },
    {
      id: 5,
      name: 'FitLady Beauty Gummies Colágeno & Biotina',
      category: 'acessorios',
      categoryLabel: 'Snacks & Cuidados',
      priceNumber: 79.90,
      price: 'R$ 79,90',
      rating: 4.9,
      reviewsCount: 260,
      badge: 'Sem Açúcar',
      image: '/products/balas.jpg',
      description: 'Gomas funcionais com sabor de frutas vermelhas. Enriquecidas com ácido hialurônico, biotina, zinco e vitamina C para pele, unhas e cabelos.'
    },
    {
      id: 6,
      name: 'T-Shirt FitLady Performance Dry-Fit',
      category: 'vestuario',
      categoryLabel: 'Vestuário',
      priceNumber: 89.90,
      price: 'R$ 89,90',
      rating: 4.9,
      reviewsCount: 142,
      badge: 'Tecido Tecnológico',
      image: '/products/camiseta.jpg',
      description: 'Camiseta esportiva feminina com proteção UV50+, toque macio e secagem ultrarrápida. Modelagem anatômica que não limita movimentos.'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? productsList 
    : productsList.filter(p => p.category === selectedCategory);

  const totalCartPrice = cartItems.reduce((acc, item) => {
    return acc + (item.priceNumber * item.quantity);
  }, 0);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutStep('success');
    clearCart();
    showToast('Pedido simulado com sucesso!');
    setTimeout(() => {
      setCheckoutStep('cart');
      setIsCartOpen(false);
    }, 3500);
  };

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      
      {/* Page Header */}
      <div className="section-header">
        <span className="badge badge-pink">Nutrição & Performance</span>
        <h1 className="section-title">Loja Exclusiva FitLady</h1>
        <p className="section-subtitle">
          Suplementos com matérias-primas certificadas e produtos formulados rigorosamente para o corpo feminino.
        </p>
      </div>

      {/* Filter Bar & Cart Trigger */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'todos', label: 'Todos os Produtos' },
            { id: 'suplementos', label: 'Suplementação' },
            { id: 'acessorios', label: 'Snacks & Cuidados' },
            { id: 'vestuario', label: 'Vestuário' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`tab-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* View Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="btn-secondary"
          style={{ padding: '8px 18px', fontSize: '0.88rem' }}
        >
          <ShoppingBag size={16} />
          <span>Ver Sacola</span>
          {totalCartCount > 0 && (
            <span style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '700'
            }}>
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Product Grid: 3 columns max per row */}
      <div className="product-grid">
        {filteredProducts.map((prod) => (
          <div 
            key={prod.id} 
            className="glass-card" 
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
          >
            <div>
              {/* Product Photo Showcase */}
              <div style={{
                height: '240px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                background: '#0e111a',
                position: 'relative',
                marginBottom: '18px',
                border: '1px solid var(--border-subtle)'
              }}>
                <img 
                  src={prod.image} 
                  alt={prod.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <span className="badge badge-pink" style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(8, 9, 14, 0.85)',
                  backdropFilter: 'blur(8px)'
                }}>
                  {prod.badge}
                </span>
              </div>

              {/* Category & Name */}
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>
                {prod.categoryLabel}
              </div>

              <h2 style={{ fontSize: '1.18rem', fontWeight: '700', marginBottom: '8px', lineHeight: '1.3' }}>
                {prod.name}
              </h2>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', marginBottom: '12px' }}>
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <span style={{ fontWeight: '700', color: '#fff' }}>{prod.rating}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>({prod.reviewsCount} avaliações)</span>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {prod.description}
              </p>
            </div>

            {/* Bottom Price & Add Action */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'block' }}>Preço à vista</span>
                <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff' }}>{prod.price}</span>
              </div>

              <button 
                onClick={() => addToCart(prod)}
                className="btn-primary" 
                style={{ padding: '10px 18px', fontSize: '0.88rem' }}
              >
                <Plus size={16} /> Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CART DRAWER / MODAL */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(5, 5, 10, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '460px',
            background: 'var(--bg-surface)',
            borderLeft: '1px solid var(--border-medium)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '30px 24px',
            height: '100%',
            overflowY: 'auto'
          }}>
            {/* Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShoppingBag size={20} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700' }}>Sua Sacola</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>({totalCartCount} itens)</span>
                </div>
                <button onClick={() => setIsCartOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                  <X size={22} />
                </button>
              </div>

              {checkoutStep === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--secondary-green-light)',
                    color: 'var(--secondary-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}>
                    <Check size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Pedido Concluído!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Obrigada pela compra. Os detalhes do pedido e rastreio foram encaminhados para o seu e-mail cadastrado.
                  </p>
                </div>
              ) : cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 16px', color: 'var(--text-secondary)' }}>
                  <ShoppingBag size={48} strokeWidth={1} style={{ marginBottom: '14px', opacity: 0.5 }} />
                  <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>Sua sacola está vazia.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)} 
                    className="btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '8px 18px' }}
                  >
                    Explorar Produtos
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '55vh', overflowY: 'auto', paddingRight: '4px' }}>
                  {cartItems.map((item) => (
                    <div key={item.id} style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      alignItems: 'center'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: 'var(--radius-xs)' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', fontSize: '0.88rem', color: '#fff', marginBottom: '4px', lineHeight: '1.2' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>
                          R$ {(item.priceNumber * item.quantity).toFixed(2).replace('.', ',')}
                        </div>

                        {/* Quantity Controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                          <button
                            onClick={() => updateCartQuantity(item.id, -1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff'
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ fontSize: '0.85rem', fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateCartQuantity(item.id, 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff'
                            }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        title="Remover"
                        style={{ color: 'var(--text-muted)', padding: '6px' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Checkout Area */}
            {cartItems.length > 0 && checkoutStep === 'cart' && (
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span>Frete (Brasil)</span>
                  <span style={{ color: 'var(--secondary-green)', fontWeight: '600' }}>Grátis (Compras acima de R$ 99)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.25rem', fontWeight: '800', color: '#fff' }}>
                  <span>Total</span>
                  <span>R$ {totalCartPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
                >
                  Finalizar Pedido <ArrowRight size={18} />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
