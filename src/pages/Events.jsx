import React, { useState } from 'react';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const presentations = [
    { title: "Training / Learning Workshop in Artificial Intelligence and Machine Learning", venue: "International Nathiagali Summer College (INSC)", date: "16 – 21 June, 2025", type: "Conference / Workshop" },
    { title: "Focal Person & Organizer: International Symposium on Advances in Computer and Information Sciences", venue: "PIEAS, Islamabad", date: "24-26 October 2017", type: "Symposium" },
    { title: "Poster: Lattice constant prediction of perovskites materials using machine learning approaches", venue: "AS-ICTP, Trieste, Italy (School on Large Scale Problems in Machine Learning)", date: "20-31 August 2012", type: "Poster / Talk" },
    { title: "6th IEEE International Conference on Emerging Technologies (ICET 2010)", venue: "FAST-NUCES, Islamabad", date: "18-19 Oct 2010", type: "Conference" },
    { title: "International Conference on Computational Science and Its Applications (ICCSA 2009)", venue: "Kyung Hee University, South Korea", date: "29-30 July 2009", type: "Conference" },
    { title: "International Conference on Signal Processing, Image Processing, and Pattern Recognition (SIP 2009)", venue: "Jeju Island, South Korea", date: "10-12 Dec 2009", type: "Conference" },
    { title: "2nd International Conference on Interaction Sciences: Information Technology, Culture & Human", venue: "Seoul, South Korea", date: "24-26 Dec 2009", type: "Conference" },
    { title: "International Conference on Mechatronics and Information Technology (ICMIT 2009)", venue: "GIST, South Korea", date: "3-5 Dec 2009", type: "Conference" },
    { title: "13th IEEE International Multi-topic Conference (INMIC 2009)", venue: "MAJU, Islamabad", date: "14-15 Dec 2009", type: "Conference" },
    { title: "9th IEEE International Multi-topic Conference (INMIC 2005)", venue: "Karachi University, Pakistan", date: "24-25 Dec 2005", type: "Conference" },
    { title: "7th International IEEE Conference (INMIC 2003)", venue: "MAJU, Islamabad", date: "9-10 Dec 2003", type: "Conference" }
  ];

  const invitedTalks = [
    { title: "How to prepare ICT R&D Grant Proposal", organizer: "Dr. Asifullah Khan", venue: "PIEAS", date: "August 25, 2016" },
    { title: "Recent development in the breast cancer prediction models using computational intelligence approaches", organizer: "FIT 2015", venue: "Islamabad", date: "Dec 14-16, 2015" },
    { title: "Future multimedia programming, applications & software", organizer: "Head of Brain Computer College", venue: "Peshawar", date: "March 2005" },
    { title: "Optimization of classifiers using genetic programming", organizer: "Dr. Masoor Ikram", venue: "PIEAS", date: "May 25, 2006" },
    { title: "Developing classification models for pattern recognition", organizer: "Dr. Masoor Ikram", venue: "PIEAS", date: "June 03, 2006" },
    { title: "ANN, SVM, GA, and GP based computational intelligent techniques: future research topics", organizer: "Head DCS (Daoud Khattak)", venue: "AIOU Islamabad", date: "May 2007" },
    { title: "Research topics in machine learning: SVM for classification and regression problems", organizer: "Head DCIS", venue: "PIEAS Islamabad", date: "Feb 20, 2008" },
    { title: "Combining support vector machine-based classifiers using genetic programming", organizer: "Prof. Dr. TS Choi", venue: "GIST, S. Korea", date: "Oct 23, 2008" },
    { title: "Protein subcellular prediction in bioinformatics", organizer: "Prof. Dr. TS Choi", venue: "GIST, S. Korea", date: "Jan 12, 2009" },
    { title: "Machine learning approaches in bioinformatics", organizer: "Prof. Dr. TS Choi", venue: "GIST, S. Korea", date: "March 27, 2009" }
  ];

  const trainingAndChaired = [
    { title: "Session Chair: 8th KIIT Based Convergence Service Workshop & Summer Conference", venue: "Korean Institute of Information Technology, South Korea", date: "12-13 July 2009", category: "Session Chair" },
    { title: "Session Chair: International Conference on Mechatronics and Information Technology (ICMIT 2009)", venue: "GIST, South Korea", date: "3-5 Dec 2009", category: "Session Chair" },
    { title: "Biostatistics- II for Biological and Health Sciences Training", venue: "PIEAS", date: "23 Sep - 16 Dec 2014", category: "Training" },
    { title: "International Research Workshop on Mastering Research Tools", venue: "PIEAS, Islamabad", date: "4-5 Dec 2013", category: "Training" },
    { title: "Large Scale Problems in Machine Learning & Statistical Physics School", venue: "AS-ICTP, Trieste, Italy", date: "20-31 Aug 2012", category: "Training" },
    { title: "Professional Competency Enhancement Program (PCEPT) for University Teachers", venue: "HEC / PIEAS, Islamabad", date: "Dec 29, 2010 - Jan 29, 2011", category: "Training" },
    { title: "FPGA based Digital System Design using Verilog", venue: "Pakistan Labor & Human Resource Dev Center", date: "1-30 Dec 2007", category: "Training" },
    { title: "Computer Vision using Hyper-Dimensional Image Representation Workshop", venue: "GIK Institute, Swabi", date: "12-20 Nov 2007", category: "Training" }
  ];

  const evalProposals = [
    { title: "Development of TOF Tool and Database for Storing Codon Frequency", pi: "Dr. Ahmed Ali", inst: "COMSATS Sahiwal", date: "Sep 2016" },
    { title: "Field Hockey Coach-Assist: On-Field Player Performance and Position Tracking System", pi: "Dr. Awais M Kamboh", inst: "SEECS NUST", date: "Dec 2016" },
    { title: "A Novel 3D Automated Live Cricket Batting Coach", pi: "Dr. Asad Naeem", inst: "Air University", date: "June 2016" },
    { title: "Object Detection & Categorization for Blind Using Deep Neural Learning", pi: "Dr. Ahmad Salman", inst: "NUST Islamabad", date: "June 2016" },
    { title: "Computer Vision-Based Auditory Assistance for Navigation in Indoor Semi Controlled Environments", pi: "Dr. Sehat Ullah", inst: "Univ of Malakand", date: "April 2016" },
    { title: "Management of Data Security and Privacy in Healthcare Systems (e-health. SECURE)", pi: "Dr. Muhammad Khurram Bhatti", inst: "ITU Lahore", date: "HEC Proposal" },
    { title: "Preservation of Hand-Written Pashto Scripts: A Cultural Heritage", pi: "Dr. Naveed Islam", inst: "Islamia College Peshawar", date: "HEC Proposal" },
    { title: "Fresh Water Biodiversity Estimation via Underwater Image Analysis", pi: "Dr. Faisal Shafait", inst: "SEECS NUST", date: "HEC Proposal" },
    { title: "Automated Analysis of Fundus and OCT Images for Early Detection of Macular Edema", pi: "Dr. Muhammad Usman", inst: "EME NUST", date: "May 2016" },
    { title: "Hyper Spectral Imaging for Document Forgery Detection", pi: "Dr. Faisal Shafait", inst: "SEECS NUST", date: "May 2016" }
  ];

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
        Events, Talks & Academic Engagements
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0.8rem 0 2rem 0' }}>
        Conference presentations, invited talks, technical workshops, sessions chaired, and ICT/HEC proposal evaluations.
      </p>

      {/* Filter Tabs */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '0.4rem',
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {[
          { label: 'All', count: presentations.length + invitedTalks.length + trainingAndChaired.length + evalProposals.length },
          { label: 'Conference Presentations', count: presentations.length },
          { label: 'Invited Talks & Seminars', count: invitedTalks.length },
          { label: 'Chaired & Training', count: trainingAndChaired.length },
          { label: 'HEC / ICT Evaluations', count: evalProposals.length }
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveCategory(tab.label)}
            style={{
              flex: 1,
              minWidth: '150px',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeCategory === tab.label ? '#ffffff' : 'transparent',
              color: activeCategory === tab.label ? '#1d4ed8' : '#64748b',
              boxShadow: activeCategory === tab.label ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Conference Presentations */}
        {(activeCategory === 'All' || activeCategory === 'Conference Presentations') && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>
              🎤 Conference Presentations & Posters ({presentations.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {presentations.map((item, idx) => (
                <div key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', marginBottom: '0.4rem' }}>{item.type}</div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.05rem', lineHeight: '1.4' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {item.venue} | 📅 {item.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Invited Talks & Seminars */}
        {(activeCategory === 'All' || activeCategory === 'Invited Talks & Seminars') && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1rem' }}>
              💡 Invited Talks, Keynotes & Seminars ({invitedTalks.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {invitedTalks.map((item, idx) => (
                <div key={idx} style={{ background: '#fdfefb', border: '1px solid #e2e8f0', borderLeft: '4px solid #f59e0b', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#d97706', marginBottom: '0.4rem' }}>Organizer: {item.organizer}</div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.05rem', lineHeight: '1.4' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {item.venue} | 📅 {item.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sessions Chaired & Training */}
        {(activeCategory === 'All' || activeCategory === 'Chaired & Training') && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1rem' }}>
              🏛️ Conference Sessions Chaired & Training Programs ({trainingAndChaired.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {trainingAndChaired.map((item, idx) => (
                <div key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderLeft: '4px solid #10b981', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#059669', marginBottom: '0.4rem' }}>{item.category}</div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.05rem', lineHeight: '1.4' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {item.venue} | 📅 {item.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HEC & ICT Proposal Evaluations */}
        {(activeCategory === 'All' || activeCategory === 'HEC / ICT Evaluations') && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem', marginTop: '1rem' }}>
              📝 Evaluation of ICT & HEC R&D Project Proposals ({evalProposals.length})
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {evalProposals.map((item, idx) => (
                <div key={idx} style={{ background: '#fcfcfd', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.025rem', lineHeight: '1.4' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '600' }}>PI: {item.pi} ({item.inst})</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>Date/Type: {item.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
