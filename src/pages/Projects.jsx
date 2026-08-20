import { useState } from 'react';

export default function Projects() {
  const [statusFilter, setStatusFilter] = useState('All');

  const projects = [
    {
      id: 1,
      period: "2024–Present",
      status: "ONGOING",
      title: "Bioinformatics Research Lab: Development under QC and AI Technology Fund",
      funder: "Strategic Plans Division (SPD) - AI & QC Technology Fund",
      role: "Lead Investigator / PAIC Team Member",
      budget: "Rs. 100 Million",
      description: "Establishment of high-performance bioinformatics research infrastructure and AI computing facilities for multi-omics research and high-throughput computational biology."
    },
    {
      id: 2,
      period: "2024–Present",
      status: "ONGOING",
      title: "Fake Video Detection System using Multi-Modal Technology",
      funder: "PAIC ML/AI Technology Initiative",
      role: "Principal Investigator (PI)",
      budget: "Rs. 10 Million",
      description: "Multi-modal AI technology framework utilizing deep neural networks, spatial-temporal feature fusion, and synthetic media analysis for real-time deepfake video detection."
    },
    {
      id: 3,
      period: "2024–Present",
      status: "ONGOING",
      title: "Digital Twin for Teaching AI and Computer Vision",
      funder: "PAIC ML/AI Educational Initiative",
      role: "Co-Principal Investigator (Co-PI)",
      budget: "Rs. 12 Million",
      description: "Developing digital twin simulation environments and interactive virtual labs for hands-on teaching, research, and experimentation in Artificial Intelligence and Computer Vision."
    },
    {
      id: 4,
      period: "2024–Present",
      status: "ONGOING",
      title: "Pose Estimation Through Surveillance Cameras",
      funder: "PAIC ML/AI Security Initiative",
      role: "Co-Principal Investigator (Co-PI)",
      budget: "Rs. 10 Million",
      description: "Real-time human pose estimation, motion tracking, and action recognition using computer vision models applied to intelligent video surveillance systems."
    },
    {
      id: 5,
      period: "2021–2024",
      status: "COMPLETED",
      title: "AI and Deep Learning for Genomic & Cancer Biomarker Prediction",
      funder: "Higher Education Commission (HEC), Pakistan",
      role: "Principal Investigator (PI)",
      budget: "Rs. 4.5 Million",
      description: "Development of machine learning and deep learning computational frameworks for genomic data processing, sequence classification, and identification of key diagnostic cancer biomarkers."
    },
    {
      id: 6,
      period: "2019–2023",
      status: "COMPLETED",
      title: "In Silico Drug Screening & Molecular Docking for Infectious Diseases",
      funder: "Pakistan Atomic Energy Commission (PAEC) / HEC",
      role: "Principal Investigator (PI)",
      budget: "Rs. 3.8 Million",
      description: "Virtual screening and computational drug design methodologies targeting viral proteins, including COVID-19 therapeutic targets, utilizing structural bioinformatics and molecular docking algorithms."
    },
    {
      id: 7,
      period: "2018–2022",
      status: "COMPLETED",
      title: "Biomedical Signal & Image Processing for Healthcare Diagnostics",
      funder: "National Centre for Physics (NCP) & HEC",
      role: "Principal Investigator / Lead Researcher",
      budget: "Rs. 3.2 Million",
      description: "Advanced pattern recognition and signal filtering algorithms for automated diagnostic analysis of medical imaging (MRI, CT, ultrasound) and biomedical signal processing."
    }
  ];

  const strategicCollaborations = [
    {
      title: "Medicare System for Multi-Disease AI Diagnostics",
      scope: "AI-assisted clinical decision support, medical imaging diagnostics, and patient risk assessment."
    },
    {
      title: "AI-Based Nondestructive Testing (NDT)",
      scope: "Machine vision and deep learning inspection algorithms for industrial defect detection."
    },
    {
      title: "Simulator for Disaster Management Systems",
      scope: "Predictive AI modeling, situational awareness simulation, and resource management."
    },
    {
      title: "Smart Quality Control (QC) Monitoring System",
      scope: "Automated real-time visual inspection and quality control monitoring."
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (statusFilter === 'All') return true;
    return project.status.toLowerCase() === statusFilter.toLowerCase();
  });

  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '800', 
        color: '#111827',
        margin: '0 0 0.5rem 0', 
        display: 'inline-block',
        borderBottom: '4px solid #111827',
        paddingBottom: '0.3rem'
      }}>
        Research Grants & ML/AI Projects
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0.8rem 0 2rem 0' }}>
        Funded research grants, PAIC ML/AI technology initiatives, and national R&D projects led by Prof. Dr. Abdul Majid.
      </p>

      {/* Total Research Grant Funding Summary Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '1.75rem 2.25rem',
        marginBottom: '2.5rem',
        boxShadow: '0 8px 20px rgba(6, 95, 70, 0.18)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.14em', color: '#a7f3d0', textTransform: 'uppercase' }}>
            RESEARCH GRANTS & FUNDING OVERVIEW
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', margin: '0.2rem 0 0.4rem 0', border: 'none', padding: 0 }}>
            Rs. 143.5 Million+ Total Research Grants
          </h2>
          <p style={{ margin: 0, color: '#ecfdf5', fontSize: '0.975rem', fontWeight: '500' }}>
            Funded by Strategic Plans Division (SPD), HEC Pakistan, PAEC, and NCP.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '0.75rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#ffffff' }}>7+</div>
            <div style={{ fontSize: '0.75rem', color: '#d1fae5', fontWeight: '700', textTransform: 'uppercase' }}>Grants Led</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', padding: '0.75rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#ffffff' }}>Rs. 100M</div>
            <div style={{ fontSize: '0.75rem', color: '#d1fae5', fontWeight: '700', textTransform: 'uppercase' }}>Max Single Grant</div>
          </div>
        </div>
      </div>

      {/* Filter Header Box */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        padding: '1.25rem 1.5rem',
        borderRadius: '14px',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#475569' }}>
          Filter Status
        </label>
        <select 
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            background: 'white',
            fontSize: '0.95rem',
            color: '#0f172a',
            outline: 'none',
            minWidth: '180px',
            cursor: 'pointer'
          }}
        >
          <option value="All">All Projects ({projects.length})</option>
          <option value="Ongoing">Ongoing ({projects.filter(p => p.status === 'ONGOING').length})</option>
          <option value="Completed">Completed ({projects.filter(p => p.status === 'COMPLETED').length})</option>
        </select>
      </div>

      {/* Projects List Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {filteredProjects.map((project) => (
          <div key={project.id} style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderLeft: '6px solid #059669',
            borderRadius: '16px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: '190px 1fr',
            gap: '2rem',
            transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
            alignItems: 'start',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)'; }}
          >
            {/* Left Column: Period, Status, Budget */}
            <div>
              <p style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                {project.period}
              </p>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '1px',
                color: project.status === 'COMPLETED' ? '#475569' : '#0284c7',
                textTransform: 'uppercase',
                background: project.status === 'COMPLETED' ? '#f1f5f9' : '#e0f2fe',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '0.75rem'
              }}>
                {project.status}
              </span>

              {/* Highlighted Grant Funding Badge */}
              {project.budget && (
                <div style={{
                  background: '#ecfdf5',
                  border: '1.5px solid #a7f3d0',
                  color: '#047857',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '10px',
                  fontSize: '0.875rem',
                  fontWeight: '800',
                  lineHeight: '1.3'
                }}>
                  <div style={{ fontSize: '0.7rem', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GRANT FUNDING</div>
                  {project.budget}
                </div>
              )}
            </div>

            {/* Right Column: Title, Funder & Details */}
            <div>
              <h2 style={{ 
                fontSize: '1.65rem', 
                fontWeight: '800', 
                color: '#0f172a', 
                margin: '0 0 0.8rem 0',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h2>

              {/* Highlighted Funder Agency Badge */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                <span style={{
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '8px'
                }}>
                  🏛️ Funding Agency: {project.funder}
                </span>

                <span style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#475569',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '8px'
                }}>
                  Role: {project.role}
                </span>
              </div>

              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic AI-TCC Collaborations & Initiatives */}
      <div style={{
        background: '#0f172a',
        color: 'white',
        borderRadius: '20px',
        padding: '2.5rem'
      }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.14em', color: '#38bdf8', textTransform: 'uppercase' }}>
          STRATEGIC R&D INITIATIVES
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: '0.4rem 0 1rem 0', border: 'none', padding: 0 }}>
          AI-TCC Strategic Organizations Collaborations
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Collaborating with AI-TCC on high-impact projects initiated for strategic national organizations and technological self-reliance:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {strategicCollaborations.map((item, idx) => (
            <div key={idx} style={{
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem'
            }}>
              <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 0.5rem 0' }}>
                {item.title}
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                {item.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
