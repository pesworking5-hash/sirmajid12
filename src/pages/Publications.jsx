import React, { useState, useMemo } from 'react';

// Filtered ISI Journals with Impact Factor near 3+ (IF >= 2.5)
const isiJournals = [
  { id: 1, type: "ISI Journals", year: "2025", text: 'S.H. Khan, N.S. Shah, A. Majid, Asifullah Khan, "A Recent Survey of Vision Transformers for Medical Image Segmentation", IEEE Access, 2025, ISSN: 2169-3536, DOI: 10.1109/ACCESS.2025.3618215', ifValue: '3.0', doi: 'https://ieeexplore.ieee.org/document/11193758' },
  { id: 2, type: "ISI Journals", year: "2025", text: 'Imra Aqeel, A. Majid, Abdullah Albanyan & Hassan Wasfi, "Drug repurposing targeting COVID-19 3CL protease using molecular docking and machine learning regression approaches", Scientific Reports, 15(1), May 2025, 1-19', ifValue: '3.9', doi: 'https://doi.org/10.1038/s41598-025-02773-7' },
  { id: 3, type: "ISI Journals", year: "2025", text: 'Imra Aqeel, A. Majid, T.J. Alahmad, A. Althubaity, "In-silico study of approved drugs as potential inhibitors against 3CLpro and other viral proteins of CoVID-19", PLoS One 20(6): e0325707, June 25, 2025', ifValue: '3.24', doi: 'https://doi.org/10.1371/journal.pone.0325707' },
  { id: 4, type: "ISI Journals", year: "2022", text: 'Imra Aqeel, Muhammad Bilal, A. Majid, Tuba Majid, "Hybrid Approach to Identifying Druglikeness Leading Compounds against COVID-19 3CL Protease", Pharmaceuticals 2022, vol.15(11), 1333', ifValue: '5.21', doi: 'https://doi.org/10.3390/ph15111333' },
  { id: 5, type: "ISI Journals", year: "2022", text: 'M. Sattar, A. Majid, N. Kausar, M. Bilal, M. Kashif, "Lung cancer prediction using multi-gene genetic programming by selecting automatic features from amino acid sequences", Computational Biology and Chemistry, Elsevier, vol.44, pp.3197–3211, 1 June 2022', ifValue: '2.887', doi: 'https://doi.org/10.1016/j.compbiolchem.2022.107619' },
  { id: 6, type: "ISI Journals", year: "2018", text: 'S.G. Javed, A. Majid, and Yeon Soo Lee, "Developing a bio-inspired multi-gene genetic programming based intelligent estimator to reduce speckle noise from ultrasound images", Multimedia Tools and Applications, Springer, ISSN:1380-7501, Vol. 77 (12), pp 15657-15675, 29 June, 2018', ifValue: '2.757' },
  { id: 7, type: "ISI Journals", year: "2016", text: 'N. Kausar, A. Majid, and S.G. Javed, "Developing learning based intelligent fusion for deblurring confocal microscopic images", Engineering Applications of Artificial Intelligence, Elsevier, 0952-1976 vol. 56, pp. 339–352, 30 August 2016', ifValue: '6.212' },
  { id: 8, type: "ISI Journals", year: "2016", text: 'S.G. Javed, A. Majid, Safdar Ali, and N. Kausar, "A bio-inspired parallel framework based multi-gene genetic programming approach to denoise biomedical images", Cognitive Computation, Springer, Vol.8 (4), pp 776–793 ISSN 1866-9956, 21 May 2016', ifValue: '5.418' },
  { id: 9, type: "ISI Journals", year: "2016", text: 'Safdar Ali, A. Majid, S.G. Javed, and M. Sattar, "Can-CSC-GBE: developing cost-sensitive classifier with GentleBoost Ensemble for breast cancer classification using protein amino acids and imbalanced data", Computers in Biology and Medicine, ISSN 0010-4825, Elsevier, vol.73, pp. 38–46, 5 April, 2016', ifValue: '4.589' },
  { id: 10, type: "ISI Journals", year: "2016", text: 'S. G. Javed, A. Majid, Anwar M. Mirza, and A. Khan, "Multi-denoising based impulse noise removal from images using robust statistical features and genetic programming", Multimedia Tools and Applications, Springer ISSN:1380-7501, vol.75(10), pp 5887–5916, 01 May 2016', ifValue: '2.757' },
  { id: 11, type: "ISI Journals", year: "2016", text: 'N. Kausar, A. Majid, and S.G. Javed, "A novel ensemble approach using individual features for multi-focus image fusion", Computers & Electrical Engineering, Elsevier, ISSN:0045-7906, vol.54, pp. 393-405, 08 Feb. 2016', ifValue: '3.818' },
  { id: 12, type: "ISI Journals", year: "2016", text: 'N. Kausar and A. Majid, "Random forest based scheme using feature and decision levels information for multi-focus image fusion", Pattern Analysis and Applications, 1433-7541, Springer, vol. 19(1), pp 221-236, 06 Feb. 2016', ifValue: '2.58' },
  { id: 13, type: "ISI Journals", year: "2015", text: 'Safdar Ali and A. Majid, "Can-Evo-Ens: classifier stacking based evolutionary ensemble system for prediction of human breast cancer using amino acid sequences", Journal of Biomedical Informatics, 1532-0464, Elsevier, Vol. 54, pp. 256-269, 21 January 2015', ifValue: '6.317' },
  { id: 14, type: "ISI Journals", year: "2015", text: 'A. Majid, S.B. Ahsan, and Naeem-ul H. Tariq, "Modeling the glass-forming ability of bulk metallic glasses using Computational intelligence Techniques", Applied Soft Computing, Elsevier, (ISSN: 1568-4946), vol.28, pp 569-578, 01 March (2015)', ifValue: '6.727' },
  { id: 15, type: "ISI Journals", year: "2015", text: 'A. Majid, Safdar Ali, "HBC-Evo: Predicting human breast cancer by exploiting amino acid sequence based feature spaces and evolutionary ensemble", Amino Acids, Springer, vol. 47(1), pp. 217-221, Dec. 2015', ifValue: '3.52' },
  { id: 16, type: "ISI Journals", year: "2014", text: 'Safdar Ali, A. Majid, and A. Khan, "IDM-PhyChm-Ens: Intelligent decision making ensemble methodology for classification of human breast cancer using physicochemical properties of amino acids", Amino Acids, Springer (ISSN: 0939-4451), vol. 46(4), pp. 977-993, 12 April 2014', ifValue: '3.52' },
  { id: 17, type: "ISI Journals", year: "2014", text: 'A. Majid, Safdar Ali, M. Iqbal, and N. Kausar, "Prediction of human breast and colon cancers from imbalanced data using nearest neighbor and support vector machines", Computer Methods and Programs in Biomedicine, ISSN: 0169-2607, Elsevier, vol.113 (3), pp. 792-808, 01 March 2014', ifValue: '5.428', doi: 'https://doi.org/10.1016/j.cmpb.2013.11.006' },
  { id: 18, type: "ISI Journals", year: "2013", text: 'M. Tahir, A. Khan, A. Majid, and A. Lumini, "Subcellular localization using fluorescence imagery: utilizing ensemble classification with diverse feature extraction strategies and data balancing", Applied Soft Computing (ISSN: 1568-4946), Elsevier, vol. 13(11), PP. 4231–4243, 15 Nov. 2013', ifValue: '6.725' },
  { id: 19, type: "ISI Journals", year: "2013", text: 'M.T. Mahmood, A. Majid, S.-H. Jeong, J. W. Han, Y.-K. Choi, "Genetic programming based blind image deconvolution for surveillance systems", Engineering Applications of Artificial Intelligence (ISSN: 0952-1976), Elsevier, vol. 26 (3), pp. 1115 – 1123, 15 March 2013', ifValue: '6.212' },
  { id: 20, type: "ISI Journals", year: "2012", text: 'A. Majid, C.-Hwan Lee, M.T. Mahmood, and T.-S. Choi, "Impulse noise filtering based on noise-free pixels using genetic programming", Knowledge Information Systems (ISSN: 0219-1377), Springer, vol. 32 (3), pp. 505-526, 15 Sep. 2012', ifValue: '2.822' },
  { id: 21, type: "ISI Journals", year: "2012", text: 'M. Tahir, A. Khan, and A. Majid, "Protein subcellular localization of fluorescence imagery using spatial and transform domain features", Bioinformatics (ISSN: 1367-4803), Oxford, vol. 28 (1), pp. 91-97, 1 Jan. 2012', ifValue: '6.991' },
  { id: 22, type: "ISI Journals", year: "2011", text: 'A. Khan, A. Majid, and M. Hayat, "CE-PLoc: an ensemble classifier for predicting protein subcellular locations by fusing different modes of pseudo amino acid composition", Computational Biology and Chemistry (ISSN: 1476-9271), Elsevier, vol. 35(4), pp. 218-229, 10 August 2011', ifValue: '2.877' },
  { id: 23, type: "ISI Journals", year: "2011", text: 'A. Majid, A. Khan, and T.-S. Choi, "Predicting lattice constant of complex cubic perovskites using computational intelligent approaches", Computational Materials Science, Elsevier Science (ISSN: 0927-0256), vol. 50(6), pp. 1879-1888, 15 April 2011', ifValue: '3.54' },
  { id: 24, type: "ISI Journals", year: "2011", text: 'M.T. Mahmood, A. Majid, and T.-S. Choi, "Optimal depth estimation by combining focus measures using genetic programming", Information Sciences (ISSN:0020-0255), Elsevier Science, vol. 181 (7), pp. 1249–1263, 01 April 2011', ifValue: '6.795' },
  { id: 25, type: "ISI Journals", year: "2010", text: 'A. Majid, A. Khan, S.G. Javed, and Anwar M. Majid, "Lattice constant prediction of cubic and monoclinic perovskites using neural networks and support vector regression", Computational Materials Science, Elsevier Science (ISSN: 0927-0256), vol. 50(2), pp. 363-372, 16 Dec. 2010', ifValue: '2.53' },
  { id: 26, type: "ISI Journals", year: "2010", text: 'A. Majid, M. T. Mahmood, and T.-S. Choi, "Optimal composite depth function for 3D shape recovery of microscopic objects", Microscopy Research and Technique, ISSN:1059-910X, Wiley online, vol. 73, pp. 657-661, 27 April 2010', ifValue: '2.769' },
  { id: 27, type: "ISI Journals", year: "2010", text: 'A. Khan, A. Majid, and T.-S. Choi, "Predicting protein subcellular location: exploiting amino acid based sequence of feature spaces and fusion of diverse classifiers", Amino Acids (ISSN: 0939-4451), Springer Wien, vol. 38(1), pp. 347-350, 1 Jan. 2010', ifValue: '2.906' },
  { id: 28, type: "ISI Journals", year: "2008", text: 'A. Khan, S. F. Tahir, A. Majid, and T.-S. Choi, "Machine learning based adaptive watermark decoding in view of an anticipated attack", Pattern Recognition, Elsevier Science, ISSN: 0031-3203, vol. 41 (8), pp. 2594-2610, 15 August 2008', ifValue: '3.962' },
  { id: 29, type: "ISI Journals", year: "2007", text: 'S.G. Javed, A. Khan, A. Majid, Anwar M. Majid, and J. Bashir, "Lattice constant prediction of orthorhombic ABO3 perovskites using support vector machines", Computational Materials Science, Elsevier Science (ISSN: 0927-0256), vol. 39(3), pp. 627-634, 15 May 2007', ifValue: '2.53' },
  { id: 30, type: "ISI Journals", year: "2009", text: 'A. Majid, M. Farooq and T.-S. Choi, "Lattice constant prediction of A2BB\'O6 Type double perovskites", Lecture Notes in Computer Science, ISSN: 0302-9743, Springer Berlin/ Heidelberg, LNCS 5593, vol. 5593, pp. 82-92, 12 June 2009', ifValue: '2.53' },
  { id: 31, type: "ISI Journals", year: "2009", text: 'W.-J. Choi, A. Majid, and T.-S. Choi, "Computerized detection of pulmonary nodule based on two-dimensional PCA", Lecture Notes in Computer Science, ISSN: 0302-9743, Springer Berlin/ Heidelberg, vol. 5593, pp. 693-702, 12 June 2009', ifValue: '2.53' }
];

const nonIsiJournals = [
  { id: 101, type: "Non-ISI Journals", year: "2024", text: 'Awais Raza Zaidi, Muhammad Bilal, Tuba Majid, A. Majid, "Developing MLP based prediction system for anticancer drug response using hybrid features of genomics and cheminformatics", LGU Research Journal of Computer Science & IT, ISSN: 2519-7991, doi: 10.54692/lgurjcsit.2024.081551, vol (8): Issue (1), March 2024' },
  { id: 102, type: "Non-ISI Journals", year: "2026", text: 'Imra Aqeel, Maham Iqbal, Zainab Khan, Abdul Majid, "DRUG REPURPOSING OF A POTENTIAL INHIBITOR FOR COVID-19 3CL USING MOLECULAR DOCKING", Spectrum of Engineering Sciences, Vol 4, Issue 1, Pages 298-311, Jan 2026' },
  { id: 103, type: "Non-ISI Journals", year: "2020", text: 'M. Nawaz, M. A. Paracha, A. Majid, H. Durad, "Attacks detection from Network Devices Information using Machine Learning", VFAST Transactions on Software Engineering, VFAST-Research Platform, Vol 8(1), pp. 01-07, Jan-Dec, 2020.' },
  { id: 104, type: "Non-ISI Journals", year: "2016", text: 'S. Ali Shah, A. Majid, Safdar Ali, "Modeling of Safety Parameters for Low Level Radioactive Waste Repository Using Machine Learning Approaches", Pakistan Journal of Computer and Information Systems (PJCIS), ISSN 2519-5395, vol. 1(1), pp. 57-71, 10 September 2016.' },
  { id: 105, type: "Non-ISI Journals", year: "2010", text: 'A. Majid, Y.S.Lee, "Correlating lattice constant of cubic perovskites to atomic parameters using support vector regression", International Journal of Advances in Information Sciences and Service Sciences (ISSN: 1976-3700), vol. 2(3), pp. 118-127, Sep. 2010.' },
  { id: 106, type: "Non-ISI Journals", year: "2010", text: 'A. Majid and T.-S. Choi, "A new ensemble scheme for predicting human proteins subcellular locations", International Journal of Signal Processing, Image Processing and Pattern Recognition (IJSIP), ISSN: 2005-4254, vol. 3 (2), pp. 1-8, 15 June 2010.' },
  { id: 107, type: "Non-ISI Journals", year: "2006", text: 'A. Majid, A. Khan and Anwar M. Mirza, "Combination of support vector machines using genetic programming", International Journal of Hybrid Intelligent Systems (ISSN: 1448-5869), vol. 3(2), pp. 109-125, 2 Nov. 2006.' },
  { id: 108, type: "Non-ISI Journals", year: "2006", text: 'S. F. Tahir, A. Khan, A. Majid, and Anwar M. Mirza, "Intelligent decoding of a watermark in view of an anticipated attack", Transactions on Engineering, Computing And Technology, ISSN: 1305-5313, vol. 15, pp. 175-180, 10 Jan. 2006.' },
  { id: 109, type: "Non-ISI Journals", year: "2008", text: 'S. F. Tahir, A. Khan, A. Majid, and Anwar M. Mirza, "Support Vector Machine based intelligent watermark decoding for anticipated attack", World Academy of Science, Engineering and Technology, ISSN: 1305-5313, Vol:2, No:9, pp. 7-12, 2008.' },
  { id: 110, type: "Non-ISI Journals", year: "2004", text: 'A. Khan, A. M. Mirza, A. Majid, "Optimizing perceptual shaping of a digital watermark using genetic programming", Iranian Journal of Electrical and Computer Engineering (IJECE) (ISSN:1682-0053), vol. 3, pp. 144-150, 12 July, 2004.' }
];

const conferencePapers = [
  { id: 201, type: "Conference Papers", year: "2024", text: 'Awais Raza Zaidi and A. Majid, "RNNDRP: Developing Recurrent Neural Network based anticancer drug response prediction model", IBCAST 2024: Biosciences (BS) (20–22 August 2024)' },
  { id: 202, type: "Conference Papers", year: "2023", text: 'Awais Raza Zaidi and Abdul Majid, "Machine Learning based prediction system for anticancer drug response prediction", 5th International Conference of Computer Science and Allied Technologies, Lahore Garrison University, Nov. 2023.' },
  { id: 203, type: "Conference Papers", year: "2023", text: 'Imra Aqeel, Maham Iqbal, M. Bilal and A. Majid, "Drug Repurposing of Potential Inhibitor for CoVID-19 3CL Using Molecular Docking", 20th International Bhurban Conference on Applied Sciences and Technology (IBCAST)' },
  { id: 204, type: "Conference Papers", year: "2022", text: 'Waqas Ahmad, M. Hameed, M. Bilal and A. Majid, "ML-Pred-CLL: Machine Learning based prediction of Chronic Lymphocytic Leukemia using protein sequential data", RAEE & CS 2022, pp. 1-7' },
  { id: 205, type: "Conference Papers", year: "2022", text: 'M. Ismail, I. Aqeel, M. Bilal and A. Majid, "In silico study to find a potent inhibitor, Vilazodone, to cure COVID-19 using molecular docking", RAEE & CS 2022, pp. 1-5' },
  { id: 206, type: "Conference Papers", year: "2022", text: 'I. Aqeel, S. Zafar, M. Bilal and A. Majid, "Drug Repurposing for CoVID-19 Spike Protein through Molecular Docking", RAEE & CS 2022, pp. 1-7' },
  { id: 207, type: "Conference Papers", year: "2022", text: 'Aqeel, I.; Majid, A.; Ismail, M.; Bashir, H, "Drug Repurposing for SARS-COV-2 Using Molecular Docking", 19th IBCAST 2022, 364-369, 2022.' },
  { id: 208, type: "Conference Papers", year: "2020", text: 'T. Shehzadi, A. Majid, A. Farooq, A. Yousaf and M. Hameed, "Intelligent predictor using cancer-related biologically information extraction from cancer transcriptomes", RAEE& CS\'20, PIEAS, Islamabad' },
  { id: 209, type: "Conference Papers", year: "2019", text: 'T. Hussain A. Majid, S. G. Javed, S. Ahmed Qureshi, "Novel Classification Technique for Hyperspectral Imaging using Multinomial Logistic Regression and Morphological Profiles with Composite Kernels", 16th IBCAST 2019' },
  { id: 210, type: "Conference Papers", year: "2016", text: 'N. Kausar, A. Majid, S. G. Javed, "Developing multi-focus image fusion system with random forest learning algorithm for real-blurred images", 13th IBCAST 2016, pp. 219 - 224.' },
  { id: 211, type: "Conference Papers", year: "2014", text: 'Safdar Ali, Fahad Ahmed, and A. Majid, "Segmentation of Fractures in Rock Images for Radioactive Waste Repository", FIT 2014, Islamabad Pakistan.' },
  { id: 212, type: "Conference Papers", year: "2015", text: 'S. Gibran Javed, A. Majid, N. Kausar, "Combining robust statistical and 1D Laplacian operators using genetic programming to detect and remove impulse noise from images", FIT 2015, Islamabad, pp. 18-23.' },
  { id: 213, type: "Conference Papers", year: "2013", text: 'M. Sarmad Mir, J. Z. Shah, A. Majid, "Developing LIDAR pulse code detection system using PRF", IEEE 1st American Control Conference (ACC), Washington, DC, USA, 2013.' },
  { id: 214, type: "Conference Papers", year: "2012", text: 'M. Kashif, M. T. Javed, A. Khan, A. Majid, "Prediction of Thar coal combustion characteristics using Artificial Neural Network", 34th International Symposium on Combustion, Warsaw, Poland, 2012.' },
  { id: 215, type: "Conference Papers", year: "2010", text: 'A. Majid, M.T. Mehmood, and T.-S. Choi, "A novel noise-free pixels based Impulse noise filtering", IEEE ICIP 2010, Hong Kong, pp. 125–128, 2010.' }
];

const bookChapters = [
  { id: 301, type: "Book Chapters", year: "2016", text: 'A. Majid, "Optimization of Classifiers using Genetic Programming: Developing Optimal Composite Classifiers using Genetic Programming for Pattern Classification problems", Lambert Academic Publishing, ISBN-13: 978-3659934926, 2016.' },
  { id: 302, type: "Book Chapters", year: "2018", text: 'S.T. Gul, A.U. Omer, A. Majid, "Machine Learning Techniques for Wideband Spectrum Sensing in Cognitive Radio Networks", Networks of the Future, Taylor & Francis, 2018, pp. 1-26.' },
  { id: 303, type: "Book Chapters", year: "2012", text: 'A. Majid, A. Khan, "Lattice constant prediction of perovskites using machine learning approaches", Advances in Materials Science Research, Vol. 4, Nova Science Publishers, NY, 2012.' },
  { id: 304, type: "Book Chapters", year: "2008", text: 'I. Usman, A. Khan, Rafiullah and A. Majid, "Towards a better robustness-imperceptibility tradeoff in digital watermarking", Innovations and Advanced Techniques in Systems, Springer, 2008.' }
];

const allPublicationsMaster = [...isiJournals, ...nonIsiJournals, ...conferencePapers, ...bookChapters];

export default function Publications() {
  const [activeTab, setActiveTab] = useState('ISI Journals');
  
  // Search & Filter State (Matching Screenshot)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const highlightAuthor = (text) => {
    let formattedText = text.replace(/(A\. Majid|Abdul Majid|A\.Majid)/gi, '<strong>$1</strong>');
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  // Filter Logic
  const filteredList = useMemo(() => {
    return allPublicationsMaster.filter(pub => {
      const matchesSearch = searchTerm === '' || pub.text.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === 'All' || pub.year === selectedYear;
      const matchesType = selectedType === 'All' || (
        selectedType === 'ISI Journals' ? pub.type === 'ISI Journals' :
        selectedType === 'Non-ISI Journals' ? pub.type === 'Non-ISI Journals' :
        selectedType === 'Conference Papers' ? pub.type === 'Conference Papers' :
        selectedType === 'Book Chapters' ? pub.type === 'Book Chapters' : true
      );
      
      // If user hasn't searched or used drop-down filter, respect current Tab
      if (searchTerm === '' && selectedYear === 'All' && selectedType === 'All') {
        return pub.type === activeTab;
      }

      return matchesSearch && matchesYear && matchesType;
    });
  }, [searchTerm, selectedYear, selectedType, activeTab]);

  const isFilteringActive = searchTerm !== '' || selectedYear !== 'All' || selectedType !== 'All';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear('All');
    setSelectedType('All');
  };

  const availableYears = ['All', '2026', '2025', '2024', '2023', '2022', '2020', '2019', '2018', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004'];

  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: '#111827', 
          margin: '0 0 0.5rem 0',
          display: 'inline-block',
          borderBottom: '4px solid #111827',
          paddingBottom: '0.3rem'
        }}>
          Publications
        </h1>
        <div style={{
          marginTop: '0.8rem',
          padding: '1rem 1.5rem',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          borderRadius: '12px',
          borderLeft: '4px solid #2563eb',
          color: '#1e40af',
          fontWeight: '600',
          fontSize: '1.05rem',
          boxShadow: '0 2px 6px rgba(37, 99, 235, 0.08)'
        }}>
          Total 42 ISI journals papers with cumulative IF =170, JCR 2025
        </div>
      </div>

      {/* Real-time Search & Multi-Filter Component (100% Matching Uploaded Screenshot Design) */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        padding: '1.75rem',
        marginBottom: '2.5rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.25rem'
        }}>
          {/* Search Input Box */}
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '700', color: '#64748b', marginBottom: '0.4rem' }}>
              Search
            </label>
            <input
              type="text"
              placeholder="Title, author, or venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                background: '#ffffff',
                color: '#0f172a',
                outline: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
              }}
            />
          </div>

          {/* Year Dropdown Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '700', color: '#64748b', marginBottom: '0.4rem' }}>
              Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                background: '#ffffff',
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {availableYears.map(yr => (
                <option key={yr} value={yr}>
                  {yr === 'All' ? 'All Years' : yr}
                </option>
              ))}
            </select>
          </div>

          {/* Type Dropdown Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: '700', color: '#64748b', marginBottom: '0.4rem' }}>
              Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem',
                border: '1px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.95rem',
                background: '#ffffff',
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="All">All Types</option>
              <option value="ISI Journals">ISI Journals</option>
              <option value="Non-ISI Journals">Non-ISI Journals</option>
              <option value="Conference Papers">Conference Papers</option>
              <option value="Book Chapters">Book Chapters</option>
            </select>
          </div>
        </div>

        {/* Divider & Counter Bar */}
        <div style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.8rem'
        }}>
          <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: '600' }}>
            {filteredList.length} publications {isFilteringActive ? 'found' : ''}
          </span>

          {isFilteringActive && (
            <button
              onClick={resetFilters}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#2563eb',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Reset Filters ↺
            </button>
          )}
        </div>
      </div>

      {/* Featured Publications Section */}
      {!isFilteringActive && (
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px'
          }}>
            Featured Publications
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                type: "JOURNAL",
                year: "2025",
                title: "A Recent Survey of Vision Transformers for Medical Image Segmentation",
                authors: "S.H. Khan, N.S. Shah, A. Majid, Asifullah Khan",
                journal: "IEEE Access, 2025, ISSN: 2169-3536, DOI: 10.1109/ACCESS.2025.3618215; (IF = 3.0)",
                link: "https://ieeexplore.ieee.org/document/11193758"
              },
              {
                type: "JOURNAL",
                year: "2025",
                title: "Drug repurposing targeting COVID-19 3CL protease using molecular docking and machine learning regression approaches",
                authors: "Imra Aqeel, A. Majid, Abdullah Albanyan & Hassan Wasfi",
                journal: "Scientific Reports (Nature Portfolio), 15(1), May 2025, 1-19; (IF = 3.9)",
                link: "https://doi.org/10.1038/s41598-025-02773-7"
              },
              {
                type: "JOURNAL",
                year: "2022",
                title: "Hybrid Approach to Identifying Druglikeness Leading Compounds against COVID-19 3CL Protease",
                authors: "Imra Aqeel, Muhammad Bilal, A. Majid, Tuba Majid",
                journal: "Pharmaceuticals 2022, vol.15(11), 1333; (IF = 5.21)",
                link: "https://doi.org/10.3390/ph15111333"
              },
              {
                type: "JOURNAL",
                year: "2015",
                title: "Can-Evo-Ens: classifier stacking based evolutionary ensemble system for prediction of human breast cancer using amino acid sequences",
                authors: "Safdar Ali and A. Majid",
                journal: "Journal of Biomedical Informatics, Elsevier, Vol. 54, pp. 256-269; (IF = 6.317)",
                link: "https://doi.org/10.1016/j.jbi.2015.01.006"
              },
              {
                type: "JOURNAL",
                year: "2012",
                title: "Protein subcellular localization of fluorescence imagery using spatial and transform domain features",
                authors: "M. Tahir, A. Khan, and A. Majid",
                journal: "Bioinformatics, Oxford Academic, vol. 28 (1), pp. 91-97; (IF = 6.991)",
                link: "https://academic.oup.com/bioinformatics"
              }
            ].map((pub, idx) => (
              <div key={idx} style={{
                background: '#f4f4f5',
                border: '1px solid #d4d4d8',
                borderRadius: '20px',
                padding: '1.6rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#18181b'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#d4d4d8'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', color: '#71717a', textTransform: 'uppercase' }}>
                      {pub.type}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#a1a1aa' }}>
                      {pub.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.18rem', fontWeight: '700', color: '#18181b', margin: '0 0 0.8rem 0', lineHeight: '1.4' }}>
                    {pub.title}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: '#71717a', fontWeight: '500', margin: '0 0 0.6rem 0' }}>
                    {pub.authors}
                  </p>

                  <p style={{ fontSize: '0.925rem', color: '#3f3f46', fontWeight: '600', margin: 0, lineHeight: '1.4' }}>
                    {pub.journal}
                  </p>
                </div>

                {pub.link && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#2563eb',
                      textDecoration: 'none'
                    }}>
                      View Paper Link ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Styled Tabs Navigation Bar (Shown when not actively searching) */}
      {!isFilteringActive && (
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
            { label: 'ISI Journals', count: isiJournals.length },
            { label: 'Non-ISI Journals', count: nonIsiJournals.length },
            { label: 'Conference Papers', count: conferencePapers.length },
            { label: 'Book Chapters', count: bookChapters.length }
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              style={{
                flex: 1,
                minWidth: '140px',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: 'none',
                fontWeight: '700',
                fontSize: '0.925rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: activeTab === tab.label ? '#ffffff' : 'transparent',
                color: activeTab === tab.label ? '#1d4ed8' : '#64748b',
                boxShadow: activeTab === tab.label ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      )}

      {/* Filtered Publications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
        {filteredList.map((pub, index) => (
          <div key={pub.id} style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '14px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1.5rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#2563eb', background: '#eff6ff', padding: '0.15rem 0.6rem', borderRadius: '6px' }}>
                  {pub.type}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>
                  {pub.year}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.975rem', color: '#1e293b', lineHeight: '1.6' }}>
                <span style={{ fontWeight: '700', color: '#64748b', marginRight: '0.6rem' }}>{index + 1}.</span>
                {highlightAuthor(pub.text)}
              </p>
              {pub.doi && (
                <div style={{ marginTop: '0.5rem' }}>
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '0.85rem',
                    color: '#2563eb',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}>
                    View Paper Link ↗
                  </a>
                </div>
              )}
            </div>
            {pub.ifValue && (
              <span style={{
                background: '#ecfdf5',
                color: '#047857',
                border: '1px solid #a7f3d0',
                padding: '0.35rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                boxShadow: '0 1px 3px rgba(4, 120, 87, 0.1)'
              }}>
                IF = {pub.ifValue}
              </span>
            )}
          </div>
        ))}

        {filteredList.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>No publications found matching your search criteria.</p>
            <button
              onClick={resetFilters}
              style={{
                marginTop: '1rem',
                background: '#0f172a',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1.4rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Research Impact & Profiles (Matching Image 2 Design) */}
      <div style={{ marginTop: '3.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
          Research Impact & Scholar Profiles
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          {/* Card 1: Citations (Dark) */}
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

          {/* Card 2: H-Index (Light) */}
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
              H-INDEX
            </span>
            <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
              23
            </div>
          </div>

          {/* Card 3: i10-Index (Dark) */}
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
              I10-INDEX
            </span>
            <div style={{ fontSize: '3.2rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: 1, marginTop: '1rem' }}>
              38
            </div>
          </div>

          {/* Card 4: Publications (Light) */}
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
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          <a href="https://orcid.org/0009-0002-0983-7029" target="_blank" rel="noopener noreferrer" style={{
            background: '#18181b',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            ORCID Profile ↗
          </a>
          <a href="https://www.scopus.com/authid/detail.uri?authorId=57222878143" target="_blank" rel="noopener noreferrer" style={{
            background: '#18181b',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            Scopus Profile ↗
          </a>
          <a href="https://scholar.google.com.pk/citations?user=t5zKCYEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{
            background: '#18181b',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.9rem',
            fontWeight: '700',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            Google Scholar ↗
          </a>
        </div>
      </div>
    </div>
  );
}
