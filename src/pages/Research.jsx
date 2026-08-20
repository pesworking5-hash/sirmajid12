import mlBg from '../assets/ml_nodes_bg.jpg';
import bioBg from '../assets/bioinformatics_bg.jpg';
import imgBg from '../assets/image_processing_bg.jpg';
import drugBg from '../assets/drug_discovery_bg.jpg';

export default function Research() {
  return (
    <div className="container">
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '800', 
        color: '#111827', 
        marginBottom: '0.5rem', 
        display: 'inline-block', 
        borderBottom: '4px solid #111827', 
        paddingBottom: '0.3rem' 
      }}>
        Core Research Areas
      </h2>
      
      <div style={{ marginTop: '1rem', padding: '1.25rem 1.5rem', background: '#f8fafc', borderRadius: '16px', marginBottom: '2.5rem', borderLeft: '4px solid #0f172a' }}>
        <p style={{ margin: 0, fontSize: '1.05rem', color: '#334155', textAlign: 'left', lineHeight: '1.6' }}>
          <strong>Research Emphasis:</strong> AI/ML based intelligent systems design, data-driven modeling, and AI-enabled solutions 
          for complex real-world problems in Bioinformatics, Biomedical Engineering, Signal and Image Processing.
        </p>
      </div>

      {/* Modern High-Tech Cards Grid with Background Graphics (Matching Dr. Asifullah Khan Screenshot 3) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {/* Card 1: Machine Learning (Tall Featured Card) */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.2rem',
          color: 'white',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          background: `#111 url(${mlBg}) center/cover no-repeat`
        }}>
          {/* Dark Overlay Gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.95) 100%)',
            zIndex: 1
          }} />

          {/* Card Content */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              🧠
            </div>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 0.8rem 0', color: '#ffffff', lineHeight: '1.15' }}>
              Machine<br />Learning
            </h3>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Developing robust algorithms for pattern recognition and complex data analysis across varying biological and engineering domains.
            </p>
          </div>
        </div>

        {/* Card 2: Bioinformatics & Deep Neural Networks */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.2rem',
          color: 'white',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          background: `#222 url(${bioBg}) center/cover no-repeat`
        }}>
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(24, 24, 27, 0.75) 0%, rgba(24, 24, 27, 0.95) 100%)',
            zIndex: 1
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              🧬
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.8rem 0', color: '#ffffff', lineHeight: '1.2' }}>
              Bioinformatics &<br />Deep Neural Networks
            </h3>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#d4d4d8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Developing deep learning and sequence analysis architectures for disease prediction, genomic sequence classification, and multi-omics modeling.
            </p>
          </div>
        </div>

        {/* Card 3: Medical Image Processing */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.2rem',
          color: 'white',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
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
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              🔍
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.8rem 0', color: '#ffffff', lineHeight: '1.2' }}>
              Medical Image<br />Processing
            </h3>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Utilization of CNNs and pattern recognition for automated diagnostics in MRI, CT scans, brain tumors, and malaria detection.
            </p>
          </div>
        </div>

        {/* Card 4: Drug Discovery & Molecular Docking */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.2rem',
          color: 'white',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          background: `#111 url(${drugBg}) center/cover no-repeat`
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(24, 24, 27, 0.75) 0%, rgba(24, 24, 27, 0.95) 100%)',
            zIndex: 1
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              🛡️
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 0.8rem 0', color: '#ffffff', lineHeight: '1.2' }}>
              Drug Discovery &<br />Molecular Docking
            </h3>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#d4d4d8', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              In silico screening and molecular docking strategies to identify candidates for viral diseases and infectious pathogens.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0, color: '#0f172a', fontSize: '1.5rem', fontWeight: '800' }}>Research Output Summary</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginTop: '1.2rem' }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>ISI Journal Papers</p>
            <p style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.2rem 0 0 0', fontWeight: '800' }}>42</p>
            <p style={{ fontSize: '0.75rem', color: '#16a34a', margin: '0.1rem 0 0 0', fontWeight: '700' }}>Cumulative IF = 170</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Conference Papers</p>
            <p style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.2rem 0 0 0', fontWeight: '800' }}>35</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Book Chapters</p>
            <p style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.2rem 0 0 0', fontWeight: '800' }}>04</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>Total Citations</p>
            <p style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.2rem 0 0 0', fontWeight: '800' }}>1,741</p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>H-Index</p>
            <p style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.2rem 0 0 0', fontWeight: '800' }}>23</p>
          </div>
        </div>
      </div>
    </div>
  );
}
