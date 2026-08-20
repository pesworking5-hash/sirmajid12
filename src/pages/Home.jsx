import majidPhoto from '../assets/dr_majid.jpg';
import mlBg from '../assets/ml_nodes_bg.jpg';
import bioBg from '../assets/bioinformatics_bg.jpg';
import imgBg from '../assets/image_processing_bg.jpg';
import drugBg from '../assets/drug_discovery_bg.jpg';

export default function Home({ setCurrentPage }) {
  const handleDownloadCV = () => {
    window.open('http://faculty.pieas.edu.pk/abdulmajid/', '_blank');
  };

  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-info">
          <h1 style={{ 
            color: '#0f172a', 
            fontSize: '2.8rem', 
            fontWeight: '800', 
            margin: '0 0 0.8rem 0', 
            letterSpacing: '-0.5px',
            lineHeight: '1.25'
          }}>
            Prof. Dr. Abdul Majid
          </h1>
          <p style={{ 
            color: '#334155', 
            fontSize: '1.15rem', 
            fontWeight: '600', 
            margin: '0 0 0.5rem 0', 
            lineHeight: '1.5' 
          }}>
            Professor, Department of Computer and Information Sciences
          </p>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.05rem', 
            fontWeight: '500', 
            margin: '0 0 1.8rem 0', 
            lineHeight: '1.5' 
          }}>
            Pakistan Institute of Engineering and Applied Sciences (PIEAS)
          </p>

          {/* Academic Profile Links Row (100% Matching Screenshot Design) */}
          <div style={{
            display: 'flex',
            gap: '1.4rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            margin: '1.2rem 0 1.8rem 0'
          }}>
            <a 
              href="https://scholar.google.com.pk/citations?user=t5zKCYEAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '0.975rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                borderBottom: '2px solid transparent'
              }}
              onMouseOver={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderBottomColor = '#2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              Google Scholar ↗
            </a>

            <a 
              href="https://orcid.org/0009-0002-0983-7029" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '0.975rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                borderBottom: '2px solid transparent'
              }}
              onMouseOver={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderBottomColor = '#2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              ORCID ↗
            </a>

            <a 
              href="https://www.scopus.com/authid/detail.uri?authorId=57222878143" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '0.975rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                borderBottom: '2px solid transparent'
              }}
              onMouseOver={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderBottomColor = '#2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              Scopus ↗
            </a>

            <a 
              href="https://www.researchgate.net/profile/Abdul-Majid-18" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '0.975rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                borderBottom: '2px solid transparent'
              }}
              onMouseOver={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderBottomColor = '#2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              ResearchGate ↗
            </a>

            <a 
              href="http://faculty.pieas.edu.pk/abdulmajid/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '0.975rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                borderBottom: '2px solid transparent'
              }}
              onMouseOver={e => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.borderBottomColor = '#2563eb'; }}
              onMouseOut={e => { e.currentTarget.style.color = '#0f172a'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              PIEAS Profile ↗
            </a>
          </div>

          <p className="description" style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.65' }}>
            Specialized in AI/ML based intelligent systems design, bioinformatics, 
            and biomedical engineering with extensive research experience in drug discovery, 
            disease prediction, and image processing.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCurrentPage('contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.75rem 1.6rem',
                background: '#1a1a1a',
                color: 'white',
                border: 'none',
                borderRadius: '999px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.25s ease, transform 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              }}
              onMouseOver={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get In Touch <span style={{ fontSize: '1.1rem' }}>↗</span>
            </button>

            <button
              onClick={handleDownloadCV}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.75rem 1.6rem',
                background: 'transparent',
                color: '#1a1a1a',
                border: '2px solid #1a1a1a',
                borderRadius: '999px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background 0.25s ease, color 0.25s ease, transform 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Download CV <span style={{ fontSize: '1.1rem' }}>↓</span>
            </button>
          </div>
        </div>
        
        {/* Profile Photo */}
        <div className="profile-image" style={{ textAlign: 'center' }}>
          <img 
            src={majidPhoto} 
            alt="Prof. Dr. Abdul Majid" 
            style={{
              width: '100%',
              maxWidth: '320px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              border: '4px solid #ffffff',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Research Impact & Metrics (Matching Image 2 Design) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.25rem',
        margin: '3rem 0'
      }}>
        {/* Card 1: Publications (Light) */}
        <div style={{
          background: '#f4f4f5',
          color: '#09090b',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '140px',
          border: '1px solid #e4e4e7',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#71717a', textTransform: 'uppercase' }}>
            PUBLICATIONS
          </span>
          <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
            65+
          </div>
        </div>

        {/* Card 2: Citations (Dark) */}
        <div style={{
          background: '#18181b',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '140px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#a1a1aa', textTransform: 'uppercase' }}>
            CITATIONS
          </span>
          <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
            1,741
          </div>
        </div>

        {/* Card 3: PhD Students (Light) */}
        <div style={{
          background: '#f4f4f5',
          color: '#09090b',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '140px',
          border: '1px solid #e4e4e7',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#71717a', textTransform: 'uppercase' }}>
            PHD STUDENTS
          </span>
          <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
            12
          </div>
        </div>

        {/* Card 4: H-Index (Dark) */}
        <div style={{
          background: '#18181b',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '1.75rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '140px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#a1a1aa', textTransform: 'uppercase' }}>
            H-INDEX
          </span>
          <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
            23
          </div>
        </div>

        {/* Card 5: Research Grants (Dark Green Accent - Clickable to View Allocations) */}
        <div 
          onClick={() => setCurrentPage('projects')}
          style={{
            background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '145px',
            boxShadow: '0 8px 22px rgba(6,95,70,0.22)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, boxShadow 0.2s ease',
            position: 'relative'
          }}
          onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(6,95,70,0.3)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(6,95,70,0.22)'; }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.14em', color: '#a7f3d0', textTransform: 'uppercase' }}>
              RESEARCH GRANTS
            </span>
            <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.2)', padding: '0.15rem 0.5rem', borderRadius: '6px', color: '#ffffff', fontWeight: '700' }}>
              DETAILS ↗
            </span>
          </div>

          <div style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '0.6rem', color: '#ffffff' }}>
            Rs. 143M+
          </div>

          <div style={{ marginTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#ecfdf5', fontWeight: '600', textDecoration: 'underline' }}>
              See where grant is allotted ↗
            </span>
            <a 
              href="http://faculty.pieas.edu.pk/abdulmajid/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ fontSize: '0.75rem', color: '#a7f3d0', fontWeight: '700', textDecoration: 'none' }}
              title="PIEAS / Eduroam Network Faculty Portal"
            >
              Eduroam Link ↗
            </a>
          </div>
        </div>
      </div>

      {/* Core Research Areas with High-Tech Generated Background Graphics (Matching Screenshot 2) */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
          Core Research Areas
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem'
        }}>
          {/* Card 1: Machine Learning */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            color: 'white',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            background: `#111 url(${mlBg}) center/cover no-repeat`
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.95) 100%)',
              zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginBottom: '1.2rem'
              }}>
                🧠
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.6rem 0', color: '#ffffff', lineHeight: '1.15' }}>
                Machine<br />Learning
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Developing robust algorithms for pattern recognition and complex data analysis across varying biological and engineering domains.
              </p>
            </div>
          </div>

          {/* Card 2: Bioinformatics */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            color: 'white',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            background: `#222 url(${bioBg}) center/cover no-repeat`
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(24, 24, 27, 0.75) 0%, rgba(24, 24, 27, 0.95) 100%)',
              zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginBottom: '1.2rem'
              }}>
                🧬
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 0.6rem 0', color: '#ffffff', lineHeight: '1.2' }}>
                Bioinformatics &<br />Deep Learning
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ color: '#d4d4d8', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Drug discovery, disease prediction using genomic sequence data, and multi-omics targeted therapeutics modeling.
              </p>
            </div>
          </div>

          {/* Card 3: Image Processing */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem',
            color: 'white',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
            background: `#111 url(${imgBg}) center/cover no-repeat`
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.95) 100%)',
              zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginBottom: '1.2rem'
              }}>
                🔍
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 0.6rem 0', color: '#ffffff', lineHeight: '1.2' }}>
                Medical Image<br />Processing
              </h3>
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6', margin: 0 }}>
                Signal and image processing techniques for medical imaging, enhancement, automated diagnostics, and segmentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Honor Section (100% Matching Screenshot Design) */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
          Featured Honor
        </h2>

        <div style={{
          background: '#f4f4f5',
          borderRadius: '24px',
          padding: '2rem 2.5rem',
          position: 'relative',
          border: '1px solid #e4e4e7',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '80%', zIndex: 2 }}>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '0.14em',
              color: '#71717a',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.6rem'
            }}>
              FEATURED HONOR
            </span>

            <h3 style={{
              fontSize: '1.85rem',
              fontWeight: '800',
              color: '#09090b',
              margin: '0 0 0.6rem 0',
              border: 'none',
              padding: 0,
              lineHeight: '1.25'
            }}>
              Best Researcher Gold Medal (PAS-COMSTECH Prize)
            </h3>

            <p style={{
              color: '#3f3f46',
              fontSize: '1.025rem',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: '450'
            }}>
              Awarded for exceptional contributions to the field of Computer Science, Machine Learning, and national academic excellence.
            </p>
          </div>

          {/* Right Ribbon Star Badge Watermark Icon (100% Screenshot Match) */}
          <div style={{
            position: 'relative',
            width: '85px',
            height: '85px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18, color: '#09090b' }}>
              <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M8.21 13.89L7 21L12 18.5L17 21L15.79 13.88" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <polygon points="12 6 12.8 7.8 14.7 8 13.3 9.4 13.7 11.3 12 10.3 10.3 11.3 10.7 9.4 9.3 8 11.2 7.8" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#e8f5e9', borderRadius: '16px' }}>
        <h3 style={{ marginTop: 0, color: '#2e7d32' }}>Quick Contact</h3>
        <p><strong>Email:</strong> abdulmajiid@pieas.edu.pk</p>
        <p><strong>Office (PIEAS Exchange):</strong> +92-51-48727</p>
        <p><strong>Office:</strong> Room # 216, D-Block, PIEAS, Islamabad</p>
      </div>
    </div>
  );
}
