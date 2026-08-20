import { useState } from 'react';
import aiHealthImg from '../assets/insight_ai_healthcare.jpg';
import genomicsImg from '../assets/insight_genomics.jpg';

export default function Insights() {
  const [activeSection, setActiveSection] = useState('insights');

  const sidebarNav = [
    { id: 'biography', number: '01', label: 'Biography' },
    { id: 'honors', number: '02', label: 'Honors & Grants' },
    { id: 'publications', number: '03', label: 'Key Publications' },
    { id: 'insights', number: '04', label: 'Articles & Insights' }
  ];

  const articles = [
    {
      id: 1,
      tag: "AI & HEALTHCARE",
      title: "AI-Driven Intelligent Systems in Biomedical Image Diagnostics",
      date: "Jun 17, 2026",
      image: aiHealthImg,
      summary: "Artificial intelligence and deep learning models can assist clinicians by providing automated pattern recognition in MRI scans, brain tumor segmentation, and malaria parasite identification with high precision.",
      linkText: "Read Article"
    },
    {
      id: 2,
      tag: "GENOMICS & DRUG DISCOVERY",
      title: "Accelerating Drug Discovery & Cancer Biomarker Identification",
      date: "Feb 9, 2026",
      image: genomicsImg,
      summary: "How machine learning techniques and molecular docking algorithms optimize virtual screening for infectious viral pathogens, significantly shortening the early therapeutic candidate discovery pipeline.",
      linkText: "Read Article"
    }
  ];

  return (
    <div className="container">
      {/* MIT Sloan Style 2-Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '3.5rem', marginTop: '1rem' }}>
        
        {/* Left Sticky Sidebar Navigation (Matching MIT Sloan Screenshot 1) */}
        <div>
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {sidebarNav.map(item => {
              const isActive = activeSection === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  style={{
                    padding: '0.6rem 0',
                    borderBottom: '1px solid #e2e8f0',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: isActive ? '#dc2626' : '#94a3b8' }}>
                      {item.number}.
                    </span>
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: isActive ? '800' : '600', 
                      color: isActive ? '#dc2626' : '#334155' 
                    }}>
                      {item.label}
                    </span>
                  </div>
                  {isActive && (
                    <span style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '1.1rem' }}>→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Main Content Area */}
        <div>
          {/* Top Featured Book / Monograph Box (Matching MIT Sloan Screenshot 1) */}
          <div style={{
            background: '#fafafa',
            border: '1px dashed #cbd5e1',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2.5rem',
            display: 'flex',
            gap: '1.2rem',
            alignItems: 'start'
          }}>
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>📖</span>
            <div>
              <p style={{ margin: 0, fontWeight: '700', fontSize: '1.05rem', color: '#0f172a', fontStyle: 'italic' }}>
                "Machine Learning and Pattern Recognition in Biological Sequence Analysis"
              </p>
              <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.875rem', color: '#64748b' }}>
                Abdul Majid, et al. In <em>Springer & IEEE Transactions Monograph Series</em>, Research Brief, PIEAS Academic Press.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0', color: '#94a3b8', fontSize: '0.85rem' }}>
            <span>········································ Load More ∨ ········································</span>
          </div>

          {/* Recent Insights Heading */}
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0f172a', marginBottom: '2rem' }}>
            Recent Insights
          </h2>

          {/* Insights / Press Articles List (Matching MIT Sloan Screenshot 1) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {articles.map(article => (
              <div key={article.id} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '2rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid #e2e8f0',
                alignItems: 'start'
              }}>
                {/* Thumbnail Image */}
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '150px' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Article Content */}
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    letterSpacing: '1px',
                    color: '#854d0e',
                    background: '#fef9c3',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '0.6rem'
                  }}>
                    {article.tag}
                  </span>

                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.6rem 0', lineHeight: '1.25' }}>
                    {article.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
                    <span>📝</span>
                    <span>{article.date}</span>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
                    {article.summary}
                  </p>

                  <a 
                    href="#read" 
                    style={{ 
                      color: '#dc2626', 
                      fontWeight: '700', 
                      textDecoration: 'underline', 
                      fontSize: '0.95rem' 
                    }}
                  >
                    {article.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
