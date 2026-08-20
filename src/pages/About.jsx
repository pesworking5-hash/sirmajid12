import majidPhoto from '../assets/dr_majid.jpg';

export default function About() {
  return (
    <div className="container">
      <h2>About Dr. Abdul Majid</h2>
      
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2.5rem', alignItems: 'start' }}>
        <div>
          <h3>Biography</h3>
          <p>
            Dr. Abdul Majid is a Professor at the Department of Computer and Information Sciences, 
            PIEAS, Islamabad. He has over 27 years of teaching and research experience in computer science and artificial intelligence.
          </p>
          <p>
            Dr. Majid completed his PhD in Computer Systems Engineering from GIK Institute in 2006 and MS in the same field in 2002. 
            He also completed a Post-Doctoral research in AI and Bioinformatics at Gwangju Institute of Science and Technology (GIST), 
            South Korea from 2008-2010.
          </p>
          <p>
            His research interests include Artificial Intelligence, Machine Learning, Pattern Recognition, Bioinformatics, 
            Biomedical Engineering, and Image Processing. He has published 65+ international journal and conference papers, 
            along with 04 book chapters, achieving over 1,741 citations with an H-Index of 23 in reputable venues.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <img 
            src={majidPhoto} 
            alt="Prof. Dr. Abdul Majid" 
            style={{
              width: '100%',
              maxWidth: '280px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
              border: '4px solid #ffffff',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Professional Experience</h3>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-year">2015 - Present</div>
            <div className="timeline-content">
              <h4>Professor</h4>
              <p>Department of Computer and Information Sciences, PIEAS</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2006 - 2015</div>
            <div className="timeline-content">
              <h4>Associate Professor</h4>
              <p>Department of Computer and Information Sciences, PIEAS</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1998 - 2006</div>
            <div className="timeline-content">
              <h4>Assistant Professor</h4>
              <p>Department of Computer and Information Sciences, PIEAS</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1997 - 1998</div>
            <div className="timeline-content">
              <h4>Consultant in Automation Industrial</h4>
              <p>Tri-Pack, Hattar, Pakistan</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1992 - 1998</div>
            <div className="timeline-content">
              <h4>Research Scientist in R&D (Electronics)</h4>
              <p>Research Center, Optics Lab, Islamabad</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Education</h3>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-year">2008-2010</div>
            <div className="timeline-content">
              <h4>Post-Doc in AI & Bioinformatics</h4>
              <p>Gwangju Institute of Science & Technology (GIST), South Korea</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2003-2006</div>
            <div className="timeline-content">
              <h4>PhD in Computer Systems Engineering</h4>
              <p>GIK Institute, Topi, KPK, Pakistan</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2001-2002</div>
            <div className="timeline-content">
              <h4>MS in Computer Systems Engineering</h4>
              <p>GIK Institute, Topi, KPK, Pakistan</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1992-1993</div>
            <div className="timeline-content">
              <h4>Special Course in Laser & Optics</h4>
              <p>PIEAS, Islamabad</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">1990-1992</div>
            <div className="timeline-content">
              <h4>MSc in Electronics</h4>
              <p>Quaid-e-Azam University (QAU), Islamabad</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h3>Teaching Experience & Courses Taught</h3>
        <p style={{ color: '#666', marginBottom: '1.25rem' }}>
          Key graduate and undergraduate courses taught across Artificial Intelligence, Bioinformatics, Systems, and Computational Mathematics:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {/* Highlighted Primary Domains */}
          <div style={{
            background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
            borderLeft: '4px solid #4f46e5',
            padding: '1.25rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(79, 70, 229, 0.08)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#3730a3', fontSize: '1.05rem' }}>
              🧠 AI, ML & Data Mining <span style={{ fontSize: '0.75rem', background: '#4f46e5', color: '#fff', padding: '2px 8px', borderRadius: '12px', marginLeft: '6px' }}>Core Focus</span>
            </h4>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#4338ca', lineHeight: '1.6' }}>
              Artificial Intelligence, Computational Intelligence, Pattern Recognition and Classification, Machine Learning, Information Retrieval & Data Mining.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
            borderLeft: '4px solid #10b981',
            padding: '1.25rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.08)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#065f46', fontSize: '1.05rem' }}>
              🧬 Bioinformatics & Computational Biology <span style={{ fontSize: '0.75rem', background: '#10b981', color: '#fff', padding: '2px 8px', borderRadius: '12px', marginLeft: '6px' }}>Core Focus</span>
            </h4>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#047857', lineHeight: '1.6' }}>
              Bioinformatics, ML in Bioinformatics, Computational Drug Discovery, Biometrics Computing.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
            borderLeft: '4px solid #f97316',
            padding: '1.25rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(249, 115, 22, 0.08)'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#9a3412', fontSize: '1.05rem' }}>
              ⚡ Evolutionary & Neural Computation <span style={{ fontSize: '0.75rem', background: '#f97316', color: '#fff', padding: '2px 8px', borderRadius: '12px', marginLeft: '6px' }}>Core Focus</span>
            </h4>
            <p style={{ margin: 0, fontSize: '0.92rem', color: '#c2410c', lineHeight: '1.6' }}>
              Evolutionary Computation, Advanced Evolutionary Computation, Fuzzy Intelligence, Artificial Neural Networks, Artificial Intelligence.
            </p>
          </div>

          {/* Standard Course Modules */}
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '1.25rem', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', fontSize: '1rem' }}>📐 Probability, Statistics & Optimization</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
              Probability and Statistics, Stochastic Processes, Operations Research, Advance Optimization Techniques.
            </p>
          </div>

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '1.25rem', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', fontSize: '1rem' }}>💻 Theoretical Computer Science</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
              Theory of Computation / Automata, Compiler Construction.
            </p>
          </div>

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '1.25rem', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', fontSize: '1rem' }}>🖥️ Computer Architecture & Hardware</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
              Computer Architecture, Operating Systems, Digital Electronics, Digital Logic and Design.
            </p>
          </div>

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '1.25rem', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', fontSize: '1rem' }}>🖼️ Vision, Image & Video Processing</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
              Digital Image Analysis and Processing, Image and Video Compression, Computer Vision.
            </p>
          </div>

          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '1.25rem', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', fontSize: '1rem' }}>🌐 Graphics & Multimedia Systems</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.6' }}>
              Multimedia Applications, Computer Graphics, Data Communication.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.25rem' }}>
          Research Statistics & Impact
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem'
        }}>
          {/* Card 1: Citations (Dark) */}
          <div style={{
            background: '#18181b',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '130px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#a1a1aa', textTransform: 'uppercase' }}>
              CITATIONS
            </span>
            <div style={{ fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '0.8rem' }}>
              1,741
            </div>
          </div>

          {/* Card 2: ISI Papers (Light) */}
          <div style={{
            background: '#f4f4f5',
            color: '#09090b',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '130px',
            border: '1px solid #e4e4e7'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#71717a', textTransform: 'uppercase' }}>
              ISI PAPERS
            </span>
            <div style={{ fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '0.8rem' }}>
              42
            </div>
          </div>

          {/* Card 3: H-Index (Dark) */}
          <div style={{
            background: '#18181b',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '130px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#a1a1aa', textTransform: 'uppercase' }}>
              H-INDEX
            </span>
            <div style={{ fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '0.8rem' }}>
              23
            </div>
          </div>

          {/* Card 4: i10-Index (Light) */}
          <div style={{
            background: '#f4f4f5',
            color: '#09090b',
            borderRadius: '20px',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '130px',
            border: '1px solid #e4e4e7'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#71717a', textTransform: 'uppercase' }}>
              I10-INDEX
            </span>
            <div style={{ fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '0.8rem' }}>
              38
            </div>
          </div>
        </div>
      </div>

      {/* Administrative, Managerial & Policy Responsibilities (From Participation in ML.docx) */}
      <div style={{ marginTop: '3.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.25rem' }}>
          Administrative, Managerial & Policy Responsibilities
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#2563eb', textTransform: 'uppercase', marginBottom: '0.3rem' }}>CONVENER</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Disciplinary Committee</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>Leading academic discipline and student affairs conduct committees at PIEAS.</p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#10b981', textTransform: 'uppercase', marginBottom: '0.3rem' }}>AI VISIONARY</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>10-Year AI Vision Document (AITeC)</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>Key contributor to the 10-year national Artificial Intelligence visionary roadmap for AITeC.</p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#f59e0b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>NATIONAL EVALUATOR</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>HEC, IGNITE & ICT Projects Reviewer</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>Expert evaluator for HEC National Research Programs, IGNITE Technology Fund, and ICT R&D grant proposals.</p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#7c3aed', textTransform: 'uppercase', marginBottom: '0.3rem' }}>MEMBER</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Board of Studies (DCIS, PIEAS)</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>Member Board of Studies and Admissions Interview Committee for BS, MS, and PhD programs.</p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase', marginBottom: '0.3rem' }}>EDITORIAL & EXAMINER</div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Thesis Examiner & Journal Reviewer</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>Reviewer for high-impact international ISI journals and examiner for BS, MS, and PhD theses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
