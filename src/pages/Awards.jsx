import React from 'react';

export default function Awards() {
  const featuredHonors = [
    {
      isDark: true,
      badge: "NATIONAL GOLD MEDAL",
      title: "Best Researcher Gold Medal in Computer Science",
      subtitle: "Pakistan Academy of Sciences & COMSTECH — 2014",
      description: "National recognition for distinguished contributions in Computer Science, Machine Learning, and academic excellence."
    },
    {
      isDark: true,
      badge: "NATIONAL RESEARCH AWARD",
      title: "HEC Outstanding Research Award",
      subtitle: "Higher Education Commission (HEC) Pakistan — 2016",
      description: "Performance research award granted by HEC for outstanding high-impact scientific research publications."
    },
    {
      isDark: false,
      badge: "HEC NATIONAL AWARD",
      title: "HEC Outstanding Research Award",
      subtitle: "Higher Education Commission (HEC) Pakistan — 2013",
      description: "Awarded by HEC for best research publication in machine learning based bioinformatics and image processing."
    },
    {
      isDark: false,
      badge: "RESEARCH PRODUCTIVITY AWARD",
      title: "Research Productivity Award (RPA 2012)",
      subtitle: "Pakistan Council for Science & Technology (PCST) — 2012",
      description: "Conferred by PCST for high-impact research output, ISI citations, and scientific achievements."
    },
    {
      isDark: false,
      badge: "RESEARCH PRODUCTIVITY AWARD",
      title: "Research Productivity Award (RPA 2011)",
      subtitle: "Pakistan Council for Science & Technology (PCST) — 2011",
      description: "Conferred by PCST for outstanding research publications and academic productivity."
    },
    {
      isDark: false,
      badge: "INTERNATIONAL FELLOWSHIP",
      title: "Brain Korea 21 Post-Doctoral Fellowship",
      subtitle: "Gwangju Institute of Science and Technology (GIST), S. Korea — 2010",
      description: "Awarded international research fellowship in Artificial Intelligence, Bioinformatics, and Pattern Recognition at GIST, South Korea."
    },
    {
      isDark: false,
      badge: "BEST PAPER AWARD",
      title: "Best Paper Award (ICET 2012)",
      subtitle: "IEEE International Conference on Emerging Technologies — 2012",
      description: "Awarded for best paper presentation on machine learning applications in signal and image processing."
    },
    {
      isDark: false,
      badge: "CIVIL HONOR",
      title: "Civil Award Tamgha-e-Baqa",
      subtitle: "Pakistan Atomic Energy Commission (PAEC) — 1998",
      description: "Conferred for distinguished service and technical excellence in electronics and research development."
    },
    {
      isDark: false,
      badge: "NATIONAL STATUS",
      title: "HEC Approved PhD Supervisor",
      subtitle: "Higher Education Commission (HEC) Pakistan — Since 2010",
      description: "Recognized as HEC Approved PhD Supervisor for doctoral research in Computer Science, AI, and Bioinformatics."
    }
  ];

  const achievementsTimeline = [
    {
      category: "RESEARCH INFRASTRUCTURE",
      year: "2024",
      title: "Development of Bioinformatics Research Lab under QC & AI Fund (SPD)",
      description: "Established Rs. 100M high-performance Bioinformatics & AI computing research lab under Quality Control & AI Technology Fund from Strategic Plans Division (SPD)."
    },
    {
      category: "RESEARCH INFRASTRUCTURE",
      year: "2023",
      title: "Development of Pattern Recognition Lab at DCIS, PIEAS",
      description: "Established state-of-the-art Pattern Recognition & Machine Learning research laboratory facilities at Department of Computer & Information Sciences (DCIS), PIEAS."
    },
    {
      category: "RESEARCH INFRASTRUCTURE",
      year: "2022",
      title: "High-Performance Computing Lab Establishment",
      description: "Established a high-performance computing laboratory for deep learning and AI research at PIEAS."
    },
    {
      category: "INSTITUTIONAL DEVELOPMENT",
      year: "2020",
      title: "Member & Key Contributor, PIEAS Artificial Intelligence Center (PAIC)",
      description: "Senior team member and lead researcher at PIEAS Artificial Intelligence Center, contributing to major national ML/AI projects, multi-modal technology development, and research infrastructure."
    },
    {
      category: "ACADEMIC LEADERSHIP",
      year: "2025",
      title: "Professor & Convener Disciplinary Committee",
      description: "Appointed Senior Professor at DCIS PIEAS and Convener of Academic Disciplinary & Student Conduct Committee."
    },
    {
      category: "NATIONAL POLICY",
      year: "2024",
      title: "10-Year AI Visionary Document Contribution for AITeC",
      description: "Contributed as key PAIC team expert to the national 10-year Artificial Intelligence visionary roadmap for AITeC."
    },
    {
      category: "ACADEMIC EXCELLENCE",
      year: "2020",
      title: "Supervision of 45+ PhD & MS Graduates",
      description: "Successfully supervised numerous doctoral and master scholars in AI, machine learning, and bioinformatics."
    },
    {
      category: "RESEARCH EXCELLENCE",
      year: "2016",
      title: "HEC Outstanding Research Award & 42 ISI Journals",
      description: "Recognized nationally by the Higher Education Commission of Pakistan for high-impact research publications (Cumulative IF = 170)."
    },
    {
      category: "INTERNATIONAL POSTDOC",
      year: "2010",
      title: "Brain Korea 21 Postdoctoral Fellowship at GIST",
      description: "Completed advanced postdoctoral research fellowship in AI and Bioinformatics at Gwangju Institute of Science and Technology, South Korea."
    }
  ];

  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      {/* Page Title */}
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '800', 
        color: '#111827', 
        margin: '0 0 0.5rem 0',
        display: 'inline-block',
        borderBottom: '4px solid #111827',
        paddingBottom: '0.3rem'
      }}>
        Honors & Awards
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0.8rem 0 2.5rem 0' }}>
        National gold medals, HEC research awards, international post-doc fellowships, and civil honors.
      </p>

      {/* Featured Honors Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
        {featuredHonors.map((honor, index) => (
          <div key={index} style={{
            background: honor.isDark ? '#18181b' : '#f4f4f5',
            color: honor.isDark ? '#ffffff' : '#09090b',
            borderRadius: '24px',
            padding: '2.25rem 2.5rem',
            position: 'relative',
            border: honor.isDark ? '1px solid #27272a' : '1px solid #e4e4e7',
            boxShadow: honor.isDark ? '0 10px 25px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.02)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <div style={{ maxWidth: '85%', zIndex: 2 }}>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: '800',
                color: honor.isDark ? '#ffffff' : '#09090b',
                margin: '0 0 0.4rem 0',
                border: 'none',
                padding: 0,
                lineHeight: '1.25',
                letterSpacing: '-0.5px'
              }}>
                {honor.title}
              </h2>

              <p style={{
                fontSize: '0.975rem',
                color: honor.isDark ? '#a1a1aa' : '#71717a',
                fontWeight: '500',
                margin: '0 0 1rem 0'
              }}>
                {honor.subtitle}
              </p>

              <p style={{
                color: honor.isDark ? '#e4e4e7' : '#3f3f46',
                fontSize: '1.025rem',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: '450'
              }}>
                {honor.description}
              </p>
            </div>

            {/* Right Ribbon Star Badge Watermark Icon */}
            <div style={{
              position: 'relative',
              width: '85px',
              height: '85px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg width="85" height="85" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: honor.isDark ? 0.25 : 0.18, color: honor.isDark ? '#ffffff' : '#09090b' }}>
                <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M8.21 13.89L7 21L12 18.5L17 21L15.79 13.88" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <polygon points="12 6 12.8 7.8 14.7 8 13.3 9.4 13.7 11.3 12 10.3 10.3 11.3 10.7 9.4 9.3 8 11.2 7.8" fill="currentColor"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements & Infrastructure Timeline Section (100% Matching Screenshots Design) */}
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ 
          fontSize: '2.2rem', 
          fontWeight: '800', 
          color: '#111827', 
          marginBottom: '2rem',
          letterSpacing: '-0.5px'
        }}>
          Achievements & Research Infrastructure
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {achievementsTimeline.map((item, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: '220px 1px 1fr',
              gap: '1.8rem',
              alignItems: 'center'
            }}>
              {/* Left Column: Category Label in UPPERCASE + Year */}
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  color: '#1e40af',
                  display: 'block',
                  textTransform: 'uppercase',
                  lineHeight: '1.4'
                }}>
                  {item.category}
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#94a3b8', marginTop: '0.3rem', display: 'block' }}>
                  {item.year}
                </span>
              </div>

              {/* Vertical Divider Line (Matching Screenshot) */}
              <div style={{ width: '1px', height: '100%', minHeight: '60px', background: '#cbd5e1' }} />

              {/* Right Column: Card with Thick Left Black Border (100% Screenshot Match) */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderLeft: '6px solid #0f172a',
                borderRadius: '16px',
                padding: '1.6rem 2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)'; }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.5rem 0', lineHeight: '1.3' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
