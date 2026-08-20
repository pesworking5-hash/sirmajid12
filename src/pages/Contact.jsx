export default function Contact() {
  return (
    <div className="container">
      <h2 style={{ border: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>Contact Information</h2>
      
      <div style={{ marginTop: '2rem' }}>
        <div className="contact-info">
          <div className="contact-card">
            <h3>📧 Email</h3>
            <p><strong>Primary:</strong> <a href="mailto:abdulmajid@pieas.edu.pk">abdulmajid@pieas.edu.pk</a></p>
            <p><strong>Secondary:</strong> <a href="mailto:abdulmajid@gmail.com">abdulmajid@gmail.com</a></p>
          </div>

          <div className="contact-card">
            <h3>📱 Phone</h3>
            <p><strong>Office (PIEAS Exchange):</strong> +92-51-48727</p>
            <p><strong>Fax:</strong> +92-51-48600</p>
          </div>

          <div className="contact-card">
            <h3>🏢 Office Address</h3>
            <p><strong>Room:</strong> 216, D-Block</p>
            <p><strong>Department:</strong> Computer and Information Sciences</p>
            <p><strong>Institution:</strong> Pakistan Institute of Engineering and Applied Sciences (PIEAS)</p>
            <p><strong>Address:</strong> P.O. Box 45650, Nilore, Islamabad, Pakistan</p>
          </div>

          <div className="contact-card">
            <h3>🌐 Online Profiles</h3>
            <p><a href="https://scholar.google.com.pk/citations?user=t5zKCYEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></p>
            <p><a href="https://www.researchgate.net/profile/Abdul-Majid" target="_blank" rel="noopener noreferrer">ResearchGate</a></p>
            <p><a href="http://faculty.pieas.edu.pk/abdulmajid/" target="_blank" rel="noopener noreferrer">PIEAS Faculty Profile</a></p>
            <p><a href="https://orcid.org/0009-0002-0983-7029" target="_blank" rel="noopener noreferrer">ORCID: 0009-0002-0983-7029</a></p>
            <p><a href="https://www.scopus.com/authid/detail.uri?authorId=57222878143" target="_blank" rel="noopener noreferrer">Scopus: Author ID 57222878143</a></p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#e3f2fd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#1565c0' }}>For Research Collaboration</h3>
        <p>
          Dr. Abdul Majid welcomes inquiries from researchers, students, and organizations interested in collaboration 
          on projects related to:
        </p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Bioinformatics and Drug Discovery</li>
          <li>Medical Image Analysis</li>
          <li>Disease Prediction and Biomarker Discovery</li>
          <li>Signal and Image Processing</li>
          <li>Data Security and Watermarking</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: '#f3e5f5', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#6a1b9a' }}>For PhD Supervision</h3>
        <p>
          As an HEC Approved PhD Supervisor, Dr. Majid accepts qualified candidates for PhD research in the following areas:
        </p>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Machine Learning and Deep Learning</li>
          <li>Computational Biology and Bioinformatics</li>
          <li>Medical Image Analysis and Processing</li>
          <li>Drug Discovery and Molecular Docking</li>
          <li>Pattern Recognition and Data Analysis</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Interested candidates should contact Dr. Majid directly with their CV, academic transcripts, and research interests.
        </p>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: '#fff3e0', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#e65100' }}>Office Hours</h3>
        <p>
          Dr. Majid is available for meetings and consultations during official office hours at PIEAS. 
          For scheduling appointments, please send an email with your preferred meeting time and topic.
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          <strong>Note:</strong> Please allow 2-3 working days for response to email inquiries.
        </p>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: '#e8f5e9', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#2e7d32' }}>Quick Links</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <a href="http://faculty.pieas.edu.pk/abdulmajid/" target="_blank" rel="noopener noreferrer" style={{
            padding: '1rem',
            background: 'white',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#4CAF50',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.target.style.background = '#4CAF50';
            e.target.style.color = 'white';
          }} onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4CAF50';
          }}>
            PIEAS Profile
          </a>
          <a href="https://scholar.google.com.pk/citations?user=t5zKCYEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{
            padding: '1rem',
            background: 'white',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#4CAF50',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.target.style.background = '#4CAF50';
            e.target.style.color = 'white';
          }} onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4CAF50';
          }}>
            Google Scholar
          </a>
          <a href="https://www.researchgate.net/profile/Abdul-Majid" target="_blank" rel="noopener noreferrer" style={{
            padding: '1rem',
            background: 'white',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#4CAF50',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.target.style.background = '#4CAF50';
            e.target.style.color = 'white';
          }} onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4CAF50';
          }}>
            ResearchGate
          </a>
          <a href="https://orcid.org/0009-0002-0983-7029" target="_blank" rel="noopener noreferrer" style={{
            padding: '1rem',
            background: 'white',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#4CAF50',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.target.style.background = '#4CAF50';
            e.target.style.color = 'white';
          }} onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4CAF50';
          }}>
            ORCID
          </a>
          <a href="https://www.scopus.com/authid/detail.uri?authorId=57222878143" target="_blank" rel="noopener noreferrer" style={{
            padding: '1rem',
            background: 'white',
            border: '2px solid #4CAF50',
            borderRadius: '4px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#4CAF50',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.target.style.background = '#4CAF50';
            e.target.style.color = 'white';
          }} onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4CAF50';
          }}>
            Scopus
          </a>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center' }}>
        <h3 style={{ marginTop: 0 }}>Get in Touch</h3>
        <p style={{ fontSize: '1.05rem', color: '#666' }}>
          For any inquiries, collaboration opportunities, or research discussions, 
          please don't hesitate to reach out.
        </p>
        <a href="mailto:abdulmajid@pieas.edu.pk" className="button" style={{ marginTop: '1rem' }}>
          Send Email
        </a>
      </div>
    </div>
  );
}
