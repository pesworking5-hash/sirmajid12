export default function Collaborators() {
  const collaboratorGroups = [
    {
      country: "Pakistan",
      flag: "🇵🇰",
      members: [
        { name: "Department of CIS", location: "PIEAS, Islamabad", role: "Institutional Partner" },
        { name: "Bioinformatics Research Cell", location: "University of Agriculture, Faisalabad", role: "Academic Collaborator" },
        { name: "Department of Computer Science", location: "COMSATS University, Islamabad", role: "Research Partner" },
        { name: "Faculty of Computing", location: "IQRA University, Islamabad", role: "Academic Collaborator" }
      ]
    }
  ];

  return (
    <div className="container">
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: '800', 
        color: '#111827', 
        margin: '0 0 0.5rem 0',
        display: 'inline-block',
        borderBottom: '4px solid #111827',
        paddingBottom: '0.3rem'
      }}>
        Collaborators
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0.8rem 0 2.5rem 0' }}>
        National academic and research collaborators in Pakistan.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {collaboratorGroups.map((group, index) => (
          <div key={index}>
            {/* Country Header with Flag Emoji and Underline Accent */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{group.flag}</span>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '800', 
                color: '#0f172a', 
                margin: 0,
                display: 'inline-block',
                borderBottom: '3px solid #0f172a',
                paddingBottom: '0.2rem'
              }}>
                {group.country}
              </h2>
            </div>

            {/* Cards Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem',
              marginTop: '0.5rem'
            }}>
              {group.members.map((member, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '140px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = '#94a3b8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.3rem 0' }}>
                      {member.name}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                      {member.location}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.2rem', paddingTop: '0.8rem', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '0.825rem', color: '#64748b', fontWeight: '500' }}>
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
