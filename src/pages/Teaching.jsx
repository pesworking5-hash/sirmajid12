import React from 'react';

export default function Teaching() {
  const courses = [
    {
      category: "Artificial Intelligence, ML & Data Mining",
      icon: "🧠",
      highlight: true,
      color: "#4f46e5",
      gradient: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
      items: [
        "Artificial Intelligence",
        "Computational Intelligence",
        "Pattern Recognition & Classification",
        "Machine Learning",
        "Information Retrieval & Data Mining"
      ]
    },
    {
      category: "Bioinformatics & Computational Biology",
      icon: "🧬",
      highlight: true,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      items: [
        "Bioinformatics",
        "ML in Bioinformatics",
        "Computational Drug Discovery",
        "Biometrics Computing"
      ]
    },
    {
      category: "Evolutionary & Neural Computation",
      icon: "⚡",
      highlight: true,
      color: "#f97316",
      gradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
      items: [
        "Evolutionary Computation",
        "Advanced Evolutionary Computation",
        "Fuzzy Intelligence",
        "Artificial Neural Networks",
        "Artificial Intelligence"
      ]
    },
    {
      category: "Probability, Statistics & Optimization",
      icon: "📐",
      highlight: false,
      color: "#0284c7",
      gradient: "#ffffff",
      items: [
        "Probability and Statistics",
        "Stochastic Processes",
        "Operations Research",
        "Advance Optimization Techniques"
      ]
    },
    {
      category: "Theoretical Computer Science",
      icon: "💻",
      highlight: false,
      color: "#7c3aed",
      gradient: "#ffffff",
      items: [
        "Theory of Computation / Automata",
        "Compiler Construction"
      ]
    },
    {
      category: "Computer Architecture & Hardware Systems",
      icon: "🖥️",
      highlight: false,
      color: "#475569",
      gradient: "#ffffff",
      items: [
        "Computer Architecture",
        "Operating Systems",
        "Digital Electronics",
        "Digital Logic & Design"
      ]
    },
    {
      category: "Vision, Image & Video Processing",
      icon: "🖼️",
      highlight: false,
      color: "#d97706",
      gradient: "#ffffff",
      items: [
        "Digital Image Analysis & Processing",
        "Image & Video Compression",
        "Computer Vision"
      ]
    },
    {
      category: "Graphics & Multimedia Systems",
      icon: "🌐",
      highlight: false,
      color: "#059669",
      gradient: "#ffffff",
      items: [
        "Multimedia Applications",
        "Computer Graphics",
        "Data Communication"
      ]
    }
  ];

  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#111827',
          margin: '0 0 0.5rem 0',
          display: 'inline-block',
          borderBottom: '4px solid #111827',
          paddingBottom: '0.3rem'
        }}>
          Teaching Experience & Courses
        </h1>
        <p style={{ color: '#4b5563', fontSize: '1.1rem', margin: '0.8rem 0 0 0', maxWidth: '850px', lineHeight: '1.6' }}>
          Prof. Dr. Abdul Majid has over 27 years of dedicated university-level teaching experience at PIEAS and GIK Institute, delivering core PhD, MS, and BS courses in Artificial Intelligence, Bioinformatics, Systems, and Computational Mathematics.
        </p>
      </div>

      {/* Teaching Overview Statistics Banner */}
      <div style={{
        background: '#0f172a',
        color: 'white',
        borderRadius: '20px',
        padding: '2rem 2.5rem',
        marginBottom: '3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem',
        boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)',
        textAlign: 'center'
      }}>
        <div style={{ padding: '0.5rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#38bdf8', lineHeight: '1.3', marginBottom: '0.4rem' }}>
            27+ Years
          </div>
          <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', lineHeight: '1.4' }}>
            Academic & Research<br />Teaching
          </div>
        </div>

        <div style={{ padding: '0.5rem' }}>
          <div style={{ fontSize: '2rem', fontWeight: '800', color: '#4ade80', lineHeight: '1.3', marginBottom: '0.4rem' }}>
            25+ Courses
          </div>
          <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', lineHeight: '1.4' }}>
            Graduate &<br />Undergraduate Modules
          </div>
        </div>

        <div style={{ padding: '0.5rem' }}>
          <div style={{ fontSize: '1.9rem', fontWeight: '800', color: '#f472b6', lineHeight: '1.3', marginBottom: '0.4rem', whiteSpace: 'nowrap' }}>
            4 PhD / 45+ MS
          </div>
          <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', lineHeight: '1.4' }}>
            Postgraduate Thesis<br />Supervised
          </div>
        </div>

        <div style={{ padding: '0.5rem' }}>
          <div style={{ fontSize: '1.9rem', fontWeight: '800', color: '#fbbf24', lineHeight: '1.3', marginBottom: '0.4rem', whiteSpace: 'nowrap' }}>
            PIEAS & GIKI
          </div>
          <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500', lineHeight: '1.4' }}>
            Premier Institutions in<br />Pakistan
          </div>
        </div>
      </div>

      {/* Main Course Categories Grid */}
      <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem' }}>
        Courses Taught & Academic Specializations
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.5rem'
      }}>
        {courses.map((c, index) => (
          <div
            key={index}
            style={{
              background: c.gradient,
              border: c.highlight ? `1.5px solid ${c.color}33` : '1px solid #e2e8f0',
              borderLeft: `5px solid ${c.color}`,
              borderRadius: '14px',
              padding: '1.5rem',
              boxShadow: c.highlight ? '0 4px 12px rgba(0,0,0,0.05)' : '0 2px 6px rgba(0,0,0,0.02)',
              transition: 'transform 0.2s ease, boxShadow 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                  {c.category}
                </h3>
              </div>
              {c.highlight && (
                <span style={{
                  background: c.color,
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  padding: '3px 9px',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap'
                }}>
                  Core Specialty
                </span>
              )}
            </div>

            <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#334155', lineHeight: '1.7' }}>
              {c.items.map((item, idx) => (
                <li key={idx} style={{
                  fontWeight: c.highlight ? '600' : '400',
                  color: c.highlight ? '#1e293b' : '#475569',
                  marginBottom: '0.3rem'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
