import React, { useState } from 'react';
import { Dumbbell, Utensils, Watch, Zap, FileText, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Services = ({ setActiveTab, openAuthModal }) => {
  const { user } = useAuth();
  const [activeTabSection, setActiveTabSection] = useState('treino');

  const handleStartQuestionnaire = () => {
    if (!user) {
      openAuthModal();
    } else {
      setActiveTab('questionario');
    }
  };

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      
      {/* Page Header */}
      <div className="section-header">
        <span className="badge badge-pink">Metodologia Integral</span>
        <h1 className="section-title">Serviços Personalizados & Tecnologia</h1>
        <p className="section-subtitle">
          Construímos um ecossistema que integra prescrição de treino individual, acompanhamento nutricional e sincronia de dados em tempo real.
        </p>
      </div>

      {/* Interactive Service Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }}>
        <button
          onClick={() => setActiveTabSection('treino')}
          className={`tab-pill ${activeTabSection === 'treino' ? 'active' : ''}`}
          style={{ fontSize: '0.95rem', padding: '10px 22px' }}
        >
          <Dumbbell size={16} style={{ marginRight: '6px' }} /> Montagem de Treinos
        </button>
        <button
          onClick={() => setActiveTabSection('nutricao')}
          className={`tab-pill ${activeTabSection === 'nutricao' ? 'active' : ''}`}
          style={{ fontSize: '0.95rem', padding: '10px 22px' }}
        >
          <Utensils size={16} style={{ marginRight: '6px' }} /> Plano Nutricional
        </button>
        <button
          onClick={() => setActiveTabSection('wearables')}
          className={`tab-pill ${activeTabSection === 'wearables' ? 'active' : ''}`}
          style={{ fontSize: '0.95rem', padding: '10px 22px' }}
        >
          <Watch size={16} style={{ marginRight: '6px' }} /> Conectividade Wearables
        </button>
      </div>

      {/* Tab Detail Showcase */}
      <div className="glass-card animate-fade-in" style={{ padding: '40px', marginBottom: '60px' }}>
        {activeTabSection === 'treino' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-pink" style={{ marginBottom: '14px' }}>Prescrição Biomecânica</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Treinos Adaptados à Sua Frequência e Espaço</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Chega de fichas de academia padronizadas que ignoram sua postura ou histórico de lesões. Nossos treinos são calibrados para volume, intensidade e cadência adequados ao seu objetivo físico.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.94rem' }}>Vídeos em 4K com instrução de execução correta</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.94rem' }}>Substituição inteligente em 1 clique (para aparelhos ocupados)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.94rem' }}>Divisões A/B, A/B/C ou A/B/C/D conforme seus dias disponíveis</span>
                </div>
              </div>
            </div>

            {/* Visual Interactive Preview */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              border: '1px solid var(--border-medium)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Ficha Interativa Demo</span>
                <span className="badge badge-emerald"><RefreshCw size={12} /> Auto-Ajuste</span>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Hip Thrust (Elevação Pélvica)</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>4 séries × 10 reps • Carga sugerida: 45 kg</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '12px' }}>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Leg Press 45° Pés Altos</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>3 séries × 12 reps • Amplitude máxima com joelhos estáveis</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Cadeira Flexora Unilateral</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>3 séries × 15 reps • Cadência excêntrica 3 segundos</div>
              </div>
            </div>
          </div>
        )}

        {activeTabSection === 'nutricao' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '14px' }}>Nutrição Baseada em Ciência</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Plano Alimentar Flexível e Sustentável</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Você não precisa de restrições extremas para alcançar resultados impressionantes. Calculamos seus macronutrientes exatos e oferecemos tabelas de substituição práticas para seu dia a dia.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-green)" />
                  <span style={{ fontSize: '0.94rem' }}>Tabela prática de substituições equivalentes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-green)" />
                  <span style={{ fontSize: '0.94rem' }}>Cardápios para rotinas corridas (refeições em menos de 15 min)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-green)" />
                  <span style={{ fontSize: '0.94rem' }}>Opções vegetarianas, veganas e livres de lactose/glúten</span>
                </div>
              </div>
            </div>

            {/* Macro Preview Widget */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              border: '1px solid var(--border-medium)'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Exemplo de Distribuição Energética Diária
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'var(--primary-light)', border: '1px solid rgba(229, 0, 126, 0.35)', padding: '14px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.3rem' }}>120g</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Proteínas (30%)</div>
                </div>
                <div style={{ background: 'var(--secondary-lime-light)', border: '1px solid rgba(171, 254, 42, 0.35)', padding: '14px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ color: 'var(--secondary-lime)', fontWeight: '800', fontSize: '1.3rem' }}>180g</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Carboidratos (45%)</div>
                </div>
                <div style={{ background: 'var(--secondary-green-light)', border: '1px solid rgba(79, 185, 25, 0.35)', padding: '14px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                  <div style={{ color: 'var(--secondary-green)', fontWeight: '800', fontSize: '1.3rem' }}>45g</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Gorduras Boas (25%)</div>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5', textAlign: 'center' }}>
                Calorias totais estimadas: <strong>1.605 kcal</strong> com foco em recomposição corporal sem perda de energia.
              </div>
            </div>
          </div>
        )}

        {activeTabSection === 'wearables' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-lime" style={{ marginBottom: '14px' }}>Integração Biológica</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Sincronização com Apple Watch e Garmin</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Conecte seus dispositivos favoritos para acompanhar gasto calórico real em cada treino, monitorar zonas de frequência cardíaca e analisar sua recuperação.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-lime)" />
                  <span style={{ fontSize: '0.94rem' }}>Apple Watch & Apple Saúde (HealthKit)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-lime)" />
                  <span style={{ fontSize: '0.94rem' }}>Garmin Connect API direto para o painel FitLady</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--secondary-lime)" />
                  <span style={{ fontSize: '0.94rem' }}>Strava Premium para alunas corredoras e ciclistas</span>
                </div>
              </div>
            </div>

            {/* Smartwatch Mockup */}
            <div style={{
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              border: '1px solid var(--border-medium)',
              textAlign: 'center'
            }}>
              <Watch size={48} color="var(--secondary-lime)" style={{ margin: '0 auto 12px auto' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Monitoramento em Tempo Real</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '16px' }}>
                Seus dados fisiológicos alimentam automaticamente o cálculo de gasto metabólico diário.
              </p>
              <span className="badge badge-green">Dispositivo Conectado & Sincronizado</span>
            </div>
          </div>
        )}
      </div>

      {/* Gym Partnerships Showcase */}
      <div className="glass-card" style={{ padding: '40px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Zap size={24} color="#f59e0b" />
          <h2 style={{ fontSize: '1.8rem' }}>Rede de Parcerias VIP</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '0.98rem' }}>
          Assinantes FitLady contam com privilégios e descontos exclusivos nas seguintes redes:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '24px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Smart Fit</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Isenção de taxa de adesão anual e 20% de desconto na mensalidade do Plano Black com acesso a todas as unidades do Brasil.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '24px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Iron Berg</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Condições especiais em diárias de treino e convite para workshops e avaliações biomecânicas nas principais capitais.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '24px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>Bio Ritmo</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Desconto VIP em aulas coletivas (spinning, pilates reformer, yoga) e pacotes especiais de personal trainer.
            </p>
          </div>
        </div>
      </div>

      {/* Start Anamnesis CTA Card */}
      <div style={{
        background: 'var(--primary-gradient-subtle)',
        border: '1px solid var(--border-active)',
        borderRadius: 'var(--radius-lg)',
        padding: '48px 32px',
        textAlign: 'center',
        maxWidth: '780px',
        margin: '0 auto'
      }}>
        <FileText size={44} color="var(--primary)" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Preencha sua Anamnese Inicial</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 28px auto', fontSize: '0.98rem', lineHeight: '1.6' }}>
          Responda a perguntas estruturadas sobre sua rotina, objetivos e histórico de saúde para que nossa equipe monte seu planejamento sob medida.
        </p>
        <button 
          onClick={handleStartQuestionnaire} 
          className="btn-primary" 
          style={{ fontSize: '1rem', padding: '14px 34px' }}
        >
          Iniciar Questionário de Anamnese <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
};
