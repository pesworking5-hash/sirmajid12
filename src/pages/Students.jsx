import { useState } from 'react';

export default function Students() {
  const [degreeFilter, setDegreeFilter] = useState('All Degrees');
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const studentsList = [
    // PhD Current
    { id: 1, name: "Naila Kauser", degree: "PhD", status: "Ongoing", year: "2025 - Present", topic: "Development of AI based drug design system", role: "Supervisor", inst: "DPAM PIEAS" },
    { id: 2, name: "Awais Raza Zaidi", degree: "PhD", status: "Ongoing", year: "2019 - Present", topic: "Anticancer Drug Response Prediction Using Machine Learning Techniques", role: "Supervisor", inst: "DCIS PIEAS", email: "awaisraza.zaidi@yahoo.com" },
    { id: 3, name: "Muhammad Ismail", degree: "PhD", status: "Ongoing", year: "2019 - Present", topic: "Molecular Docking using Machine Learning Approaches for COVID-19", role: "Supervisor", inst: "DCIS PIEAS", email: "ismail0307@gmail.com" },
    { id: 4, name: "M. Naeem", degree: "PhD", status: "Ongoing", year: "2021 - Present", topic: "Developing Deep Learning based Brain Tumor Detection and Classification system", role: "Supervisor", inst: "DCIS PIEAS", email: "naeemaslam_20@pieas.edu.pk" },

    // PhD Completed (Past & Co-supervision)
    { id: 5, name: "Mohsin Sattar", degree: "PhD", status: "Completed", year: "2014 - 2019", topic: "Lung cancer classification with discriminant features of mutated genes using machine learning", role: "Supervisor (HEC Scholar)", inst: "AICenTch / PIEAS", email: "mohsin08@gmail.com" },
    { id: 6, name: "Iqra Aqeel", degree: "PhD", status: "Completed", year: "2019 - 2024", topic: "Design of Intelligent Computational Models for Drug Repurposing", role: "Supervisor", inst: "DCIS PIEAS", email: "imraaqeel@gmail.com" },
    { id: 7, name: "S. Javed Gibran", degree: "PhD", status: "Completed", year: "2011 - 2017", topic: "Developing genetic programming based image denoising systems", role: "Supervisor (HEC Scholar)", inst: "NESCOM / PIEAS", email: "gibran.javed@gmail.com" },
    { id: 8, name: "Safdar Ali", degree: "PhD", status: "Completed", year: "2011 - 2015", topic: "Intelligent decision-making ensemble system for breast cancer prediction", role: "Supervisor", inst: "DGNFC / PIEAS", email: "safdarkotla@gmail.com" },
    { id: 9, name: "Nabeela Kauser", degree: "PhD", status: "Completed", year: "2010 - 2016", topic: "Machine-learning ensemble systems for image fusion", role: "Supervisor (HEC Scholar)", inst: "IQRA University / PIEAS", email: "nabeelaashraf@gmail.com" },
    { id: 10, name: "Muhammad Tahir", degree: "PhD", status: "Completed", year: "2010 - 2014", topic: "Protein subcellular classification using machine learning approaches", role: "Co-Supervisor (HEC Scholar)", inst: "PIEAS", email: "tahir.peshawar@gmail.com" },
    { id: 11, name: "Imran Usman", degree: "PhD", status: "Completed", year: "2006 - 2010", topic: "Digital watermarking using machine learning approaches", role: "Co-Supervisor (HEC Scholar)", inst: "PIEAS", email: "imran.usman@gmail.com" },
    { id: 12, name: "Muhammad Rafiullah", degree: "PhD", status: "Completed", year: "2006 - 2010", topic: "Digital watermarking for image authentication and recovery", role: "Co-Supervisor (HEC Scholar)", inst: "PIEAS", email: "chamlawi@gmail.com" },

    // MS Students
    { id: 13, name: "M. Nadeem", degree: "MS", status: "Completed", year: "2023 - 2025", topic: "Digital Image Forensics: Investigating the Authenticity and Integrity of Digital Images", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 14, name: "Asma Gull", degree: "MS", status: "Completed", year: "2023 - 2025", topic: "Adversarial Mimicry: Disguising Malicious PDFs Harmless Documents", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 15, name: "Aarzoo Ibrahim", degree: "MS", status: "Completed", year: "2023 - 2025", topic: "Prediction of binding site similarity for drug repositioning", role: "Supervisor", inst: "DPAM PIEAS" },
    { id: 16, name: "Ali Adil", degree: "MS", status: "Completed", year: "2021 - 2022", topic: "Development of Anticancer Drug Prediction system using Deep Learning for gene expression Data", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 17, name: "Aourang Zeb", degree: "MS", status: "Completed", year: "2021 - 2022", topic: "Real-Time Human Activities Monitoring and Face Recognition", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 18, name: "Waqar Ahmad", degree: "MS", status: "Completed", year: "2020 - 2021", topic: "Development of leukemia cancer prediction system using Protein Sequential Data", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 19, name: "Ali Raza", degree: "MS", status: "Completed", year: "2019 - 2020", topic: "Development of RBP Seq-Structured based predictor using Deep Learning Approach", role: "Supervisor", inst: "DCIS PIEAS", email: "alirazaghuman33@yahoo.com" },
    { id: 20, name: "Tahira Shehzadi", degree: "MS", status: "Completed", year: "2019 - 2020", topic: "Intelligent predictor using cancer related biologically information extraction from cancer transcriptomes", role: "Supervisor", inst: "DCIS PIEAS", email: "tahirashehzadi9@gmail.com" },
    { id: 21, name: "S. Taimoor Hussain", degree: "MS", status: "Completed", year: "2017 - 2018", topic: "Hyperspectral image segmentation and classification using computational intelligence technique", role: "Supervisor", inst: "DCIS PIEAS", email: "taimoor.hussain1259@gmail.com" },
    { id: 22, name: "Muhammad Umer Javed", degree: "MS", status: "Completed", year: "2016 - 2017", topic: "Image Quality Improvements of Gamma-rays Cargo Scanners’ Images using Image Processing Techniques", role: "Supervisor", inst: "DCIS PIEAS", email: "muhammadumerjaved44@gmail.com" },
    { id: 23, name: "Muhammad Zain Azam", degree: "MS", status: "Completed", year: "2014 - 2015", topic: "Development of image denoising system for medical diagnosis", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 24, name: "Sarmad Shahab Mir", degree: "MS", status: "Completed", year: "2011 - 2012", topic: "Pulse code detection system for laser guided projectiles using microcontrollers", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 25, name: "Sardar Ali Shaw", degree: "MS", status: "Completed", year: "2013 - 2014", topic: "Nuclear repository development of Fuzzy Inference System in the application of safety assessment of Low-Level radioactive waste repository", role: "Supervisor", inst: "DPAM PIEAS" },
    { id: 26, name: "Fahad Ali", degree: "MS", status: "Completed", year: "2013 - 2014", topic: "Developing rock fracture image segmentation and recognition technique", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 27, name: "Sohaib Afzal", degree: "MS", status: "Completed", year: "2012 - 2013", topic: "Development of medical images fusion system using machine learning based approaches", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 28, name: "Ghulam Mustafa", degree: "MS", status: "Completed", year: "2011 - 2012", topic: "Video surveillance system: human identification and tracking in videos", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 29, name: "Zaeem-ul Haq", degree: "MS", status: "Completed", year: "2011 - 2012", topic: "Object position stabilization using electro-mechanical platform system", role: "Supervisor", inst: "System Eng PIEAS" },
    { id: 30, name: "Ambreen Sultan", degree: "MS", status: "Completed", year: "2021 - 2022", topic: "Recurrent neural networks based solar energy prediction model", role: "Co-Supervisor", inst: "DCIS PIEAS" },
    { id: 31, name: "Maryam Nawaz", degree: "MS", status: "Completed", year: "2017 - 2019", topic: "Design and development of SEIM component for network devices", role: "Co-Supervisor", inst: "DCIS PIEAS" },
    { id: 32, name: "Tahir Azam", degree: "MS", status: "Completed", year: "2013 - 2014", topic: "Data-set development and ANN modeling of Pakistan coal and biomass combustion", role: "Co-Supervisor", inst: "Chemical Eng PIEAS" },
    { id: 33, name: "Muhamad Adan", degree: "MS", status: "Completed", year: "2012 - 2013", topic: "Development and testing of databases to predict combustions characteristics of Thar coal using ANN", role: "Co-Supervisor", inst: "Chemical Eng PIEAS" },
    { id: 34, name: "Muhammad Kashif", degree: "MS", status: "Completed", year: "2011 - 2012", topic: "Thermal coal combustion rate modeling using ANN", role: "Co-Supervisor", inst: "Material Eng PIEAS" },
    { id: 35, name: "Sardar Asif Rehman", degree: "MS", status: "Completed", year: "2012 - 2013", topic: "Optimization of wide band spectrum parameter for cognitive radio using swarm algorithm", role: "Co-Supervisor", inst: "System Eng PIEAS" },
    { id: 36, name: "Asadullah Omar", degree: "MS", status: "Completed", year: "2011 - 2012", topic: "Optimal utilization of wide band spectrum for cognitive radio using machine learning techniques", role: "Co-Supervisor", inst: "System Eng PIEAS" },
    { id: 37, name: "Fahad Tahir", degree: "MS", status: "Completed", year: "2006 - 2007", topic: "Intelligent decoding of watermark in view of an anticipated attack", role: "Co-Supervisor", inst: "GIK Institute" },
    { id: 38, name: "S. Javed", degree: "MS", status: "Completed", year: "2006 - 2007", topic: "Lattice constant prediction of orthorhombic types of perovskites materials using machine learning techniques", role: "Co-Supervisor", inst: "GIK Institute" },

    // BS Projects
    { id: 39, name: "Muhammad Asim Nawaz & Syed Hassan Raza", degree: "BS", status: "Completed", year: "2022 - 2026", topic: "Web App development for Drug-Target Interactions using ML/AI techniques (FYP Group 20)", role: "Supervisor", inst: "BSCIS PIEAS" },
    { id: 40, name: "Muhammad Naveed Akhtar & Shahzaib Khan", degree: "BS", status: "Completed", year: "2022 - 2026", topic: "Development of AI/ML based Fake video detection system (FYP Group 03)", role: "Supervisor", inst: "BSCIS PIEAS" },
    { id: 41, name: "Hafiz Shoaib Mehmood", degree: "BS", status: "Completed", year: "2022 - 2026", topic: "Development of eyestrike drone for dynamic target engagement (FYP Group 14)", role: "Supervisor", inst: "BSCIS PIEAS" },
    { id: 42, name: "Haider Ali & M. Hamza Azhar", degree: "BS", status: "Completed", year: "2021 - 2025", topic: "Development of DNN based Deepfake video detection system using multi-modality features", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 43, name: "Hamza Sultan & Umar Afzal Khan", degree: "BS", status: "Completed", year: "2021 - 2025", topic: "Earth’s Satellites Orbital Motion Prediction and Tracking", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 44, name: "Abdul Wahab & Huzaiz Khalid", degree: "BS", status: "Completed", year: "2021 - 2025", topic: "Social Media Platform Development", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 45, name: "Eman Asad", degree: "BS", status: "Completed", year: "2021 - 2025", topic: "Skin Cancer Detection of 3D images using DNN models", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 46, name: "Syeda Kisaa Fatima & Tehreem Zubair", degree: "BS", status: "Completed", year: "2021 - 2025", topic: "Development of an Interactive Web Portal for Crime Data Analysis System Using Deep Learning", role: "Co-Supervisor", inst: "BS DCIS PIEAS" },
    { id: 47, name: "Sharjeel Ahmed", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Prediction of Binding Affinity using Deep Learning", role: "Supervisor", inst: "DPAM PIEAS" },
    { id: 48, name: "M. Haris", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Mutation detection in Leukemia cancer prediction in proteomic domain/data using machine learning", role: "Supervisor", inst: "DPAM PIEAS" },
    { id: 49, name: "Maria Hameed & Abdullah Alamgir", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Blood Flow viewer", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 50, name: "Abdullah Bashir, Moaz Tasneem & M. Umer", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Development of Single Page Website Generator", role: "Supervisor", inst: "BSCIS PIEAS" },
    { id: 51, name: "Abdullah Zulfiqar, M. Hamza & M. Rafeh", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Generative User Interface Design using Machine Learning", role: "Supervisor", inst: "BSCIS PIEAS" },
    { id: 52, name: "M. Abdullah & Usman Nasir", degree: "BS", status: "Completed", year: "2020 - 2024", topic: "Development of drowns detection system using deep CNN and Vision Transformers for Security/Surveillance", role: "Supervisor (Collab with AITeC, ICCC)", inst: "BSCIS PIEAS" },
    { id: 53, name: "Muhammad Bilal", degree: "BS", status: "Completed", year: "2019 - 2023", topic: "Development of cancerous diagnosis system using proteomic and genomic sequential data", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 54, name: "Inaam Elahi", degree: "BS", status: "Completed", year: "2017 - 2021", topic: "Calculation of digit ratio using smart phone", role: "Supervisor", inst: "BS DCIS PIEAS" },
    { id: 55, name: "Awais Zahur", degree: "BS", status: "Completed", year: "2011 - 2012", topic: "Predicting protein subcellular location of bacteria using machine learning techniques", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 56, name: "Sayyad Bilal", degree: "BS", status: "Completed", year: "2011 - 2012", topic: "Modeling the glass-forming ability of glass alloys using machine-learning techniques", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 57, name: "Mubashar Iqbal", degree: "BS", status: "Completed", year: "2011 - 2012", topic: "Predicting of human breast and colon cancer-related proteins using genetic programming-based ensemble classifiers", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 58, name: "Tariq Bashir", degree: "BS", status: "Completed", year: "2011 - 2012", topic: "Super-Resolution of CT-Scan images using frequency domain approach", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 59, name: "Adnan Asif", degree: "BS", status: "Completed", year: "2011 - 2012", topic: "Facial expression recognition using ensemble classifiers approaches", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 60, name: "Sana Mujeeb", degree: "BS", status: "Completed", year: "2010 - 2011", topic: "Gender classification based on human facial images", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 61, name: "Soban Mahmood", degree: "BS", status: "Completed", year: "2010 - 2011", topic: "Virtual character guided learning in augmented reality", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 62, name: "Muhammad Tamoor", degree: "BS", status: "Completed", year: "2008 - 2009", topic: "Classification of crystal structure of perovskites materials using machine-learning techniques", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 63, name: "Aqeel Mumtaz", degree: "BS", status: "Completed", year: "2008 - 2009", topic: "Fusion of IR and visible region images using support vector machines and artificial neural classifiers", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 64, name: "Waqas Arshad", degree: "BS", status: "Completed", year: "2008 - 2009", topic: "Genetic algorithm based audio watermarking", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 65, name: "Numan Ali", degree: "BS", status: "Completed", year: "2008 - 2009", topic: "Classification of medical disease data using machine learning techniques", role: "Supervisor", inst: "DCIS PIEAS" },
    { id: 66, name: "Muhammad Waqas Khan", degree: "BS", status: "Completed", year: "2008 - 2009", topic: "Ultimus–Auto-Messenger: A product for ULTIMUS", role: "Supervisor", inst: "DCIS PIEAS" }
  ];

  // Filtering logic
  const filteredStudents = studentsList.filter(student => {
    const matchesDegree = degreeFilter === 'All Degrees' || student.degree === degreeFilter;
    const matchesStatus = statusFilter === 'All' || student.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.inst.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDegree && matchesStatus && matchesSearch;
  });

  const degreesPresent = ['PhD', 'MS', 'BS'];

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
        Research Supervision
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0.8rem 0 2rem 0' }}>
        Complete portfolio of PhD, MS, and BS research students supervised by Prof. Dr. Abdul Majid.
      </p>

      {/* Filter Control Bar */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        padding: '1.25rem 1.5rem',
        borderRadius: '16px',
        marginBottom: '2.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        alignItems: 'end'
      }}>
        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '0.4rem' }}>
            Degree Program
          </label>
          <select 
            value={degreeFilter} 
            onChange={e => setDegreeFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '0.55rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: 'white',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All Degrees">All Degrees ({studentsList.length})</option>
            <option value="PhD">PhD ({studentsList.filter(s => s.degree === 'PhD').length})</option>
            <option value="MS">MS ({studentsList.filter(s => s.degree === 'MS').length})</option>
            <option value="BS">BS ({studentsList.filter(s => s.degree === 'BS').length})</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '0.4rem' }}>
            Status
          </label>
          <select 
            value={statusFilter} 
            onChange={e => setStatusFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '0.55rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: 'white',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="All">All Statuses</option>
            <option value="Ongoing">Ongoing / Current</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '0.4rem' }}>
            Search Student / Thesis
          </label>
          <input 
            type="text" 
            placeholder="Search by name, topic..." 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.55rem 0.9rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: 'white',
              fontSize: '0.95rem',
              color: '#0f172a',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Degrees Sections */}
      {degreesPresent.map(deg => {
        const degStudents = filteredStudents.filter(s => s.degree === deg);
        if (degStudents.length === 0) return null;

        return (
          <div key={deg} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.2rem' }}>
              {deg} Supervision ({degStudents.length})
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.25rem'
            }}>
              {degStudents.map(student => (
                <div key={student.id} style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '170px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'transform 0.2s ease'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                        <span style={{
                          background: '#f3e8ff',
                          color: '#7e22ce',
                          fontWeight: '700',
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px'
                        }}>
                          {student.degree}
                        </span>
                        <span style={{
                          background: student.status === 'Ongoing' ? '#e0f2fe' : '#f1f5f9',
                          color: student.status === 'Ongoing' ? '#0284c7' : '#475569',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px'
                        }}>
                          {student.status}
                        </span>
                      </div>
                      <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: '600' }}>
                        {student.year}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0f172a', margin: '0 0 0.4rem 0' }}>
                      {student.name}
                    </h3>
                    <div style={{ fontSize: '0.825rem', color: '#64748b', fontWeight: '600', marginBottom: '0.6rem' }}>
                      {student.role} • {student.inst}
                    </div>

                    <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                      <strong>Thesis:</strong> {student.topic}
                    </p>
                  </div>

                  {student.email && (
                    <div style={{ marginTop: '0.8rem', paddingTop: '0.6rem', borderTop: '1px solid #f1f5f9', fontSize: '0.8rem', color: '#2563eb' }}>
                      📧 {student.email}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
