import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/shared.css';

const N8nWorkflowBasics: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Smooth scrolling for navigation - only intercept hash links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
        // else allow normal navigation
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020917' }}>
      {/* Navigation */}
      <nav className="nav" style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#000000',
        padding: '1rem 0',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
      }}>
        <div className="container nav-container">
          <Link to="/">
            <img 
              src="/lovable-uploads/a4fc7853-2ebb-4b66-bb30-8a3a378f59d3.png" 
              alt="flowinternals logo" 
              className="logo"
              style={{ height: '87px', width: 'auto', display: 'block' }}
            />
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
            <a href="#usecase" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Use Case</a>
            <a href="#prerequisites" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Prerequisites</a>
            <a href="#instructions" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Instructions</a>
            <a href="#tips" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Tips</a>
            <a href="#variations" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Variations</a>
            <Link to="/" className="nav-link" style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Home</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="header" style={{
        padding: '8rem 0 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)'
      }}>
        <div className="container">
          <h1 style={{ 
            color: '#10B981', 
            fontSize: '3rem', 
            marginBottom: '1rem',
            animation: 'fadeIn 1s ease'
          }}>Submit Job Application</h1>
          <p style={{ 
            color: '#D1D5DB', 
            fontSize: '1.2rem', 
            maxWidth: '800px',
            margin: '0 auto'
          }}>A simple workflow demonstrating how to build a recruitment form that saves resumes to OneDrive and updates records in Microsoft Excel</p>
          <div className="badge-container">
            <span className="badge badge-beginner">Beginner</span>
            <span className="badge badge-tutorial">Tutorial</span>
            <span className="badge badge-free">Free</span>
          </div>
        </div>
      </header>

      <main>
        <section id="usecase" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Use Case Summary</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <p>This very simple workflow shows how to build a simple submit form for a recruitment user to add the name, resume and job role a candidate has applied for - which is subsequently saved to Onedrive and a record updated in Microsoft Excel.</p>
              <p style={{ marginTop: '1rem' }}>Whilst not really practical in a real-world scenario, this simple flow uncovered some great lessons for me in implementing Microsoft nodes and was my first flow using n8n Forms.</p>
              
              <div className="workflow-image-container">
                <img src="/submit job application workflow.png" alt="Submit Job Application Workflow Diagram" className="workflow-image" />
              </div>

              <div className="meta-info" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                <div className="meta-item" style={{
                  backgroundColor: '#111827',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h4 style={{ 
                    color: '#10B981', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem' 
                  }}>Expected Outcome</h4>
                  <p>In this mini-course, you will:</p>
                  <ul className="step-list" style={{ marginTop: '0.5rem' }}>
                    <li>Learn the basics about the n8n EDITOR and CANVAS</li>
                    <li>Learn the basics about NODES - what they are and some different types of nodes</li>
                    <li>Learn how to add a FORM TRIGGER NODE with simple data entry fields</li>
                    <li>Understand how one node can pass data of various data types to another node</li>
                    <li>Learn the basics of PARAMETERISATION - passing variable data between nodes</li>
                    <li>Learn how to setup CREDENTIALS for external applications</li>
                    <li>Learn how to test and debug your workflow</li>
                  </ul>
                </div>
                <div className="meta-item" style={{
                  backgroundColor: '#111827',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h4 style={{ 
                    color: '#10B981', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem' 
                  }}>Estimated Build Time</h4>
                  <p>Novice: 1/2 hour to 1 hour including carefully checking your work, file and record saves. Don't be stressed if it takes you much longer as there are a lot of important concepts to grasp and learn in these initial simple workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Tools Used</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div className="tools-grid" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '2rem 0',
                backgroundColor: '#111827',
                padding: '2rem',
                borderRadius: '8px'
              }}>
                <img src="/media/n8n_tutorial_apps.png" alt="n8n Tutorial Apps" className="tool-logo" style={{
                  maxHeight: '200px',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                  background: 'transparent',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.15)'
                }} />
              </div>
            </div>
          </div>
        </section>

        <section id="prerequisites" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Prerequisites</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                              <ul className="step-list" style={{
                  listStyle: 'none'
                }}>
                  <li style={{
                    marginBottom: '0.5rem',
                    paddingLeft: '2rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#10B981'
                    }}>→</span>
                    Must have Microsoft OneDrive and MS-Excel accessible (I used Microsoft Office 365 for this)
                  </li>
                  <li style={{
                    marginBottom: '0.5rem',
                    paddingLeft: '2rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#10B981'
                    }}>→</span>
                    Must have n8n Community Edition installed and setup on your local machine. This workflow was built in v1.88.0
                  </li>
                  <li style={{
                    marginBottom: '0.5rem',
                    paddingLeft: '2rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#10B981'
                    }}>→</span>
                    Note you could probably use Cloud edition however the setup and instructions for writing to your personal/company Onedrive and a local Excel file may be different
                  </li>
                </ul>
            </div>
          </div>
        </section>

        <section id="instructions" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Step-by-Step Instructions</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3>Trigger Setup</h3>
              <ul className="step-list">
                <li>On canvas, TAB key to open the nodes panel → Add another trigger → On forms submission</li>
                <li>Staying in TEST mode, Form Title = Submit Application, Form Description = optional (appears on the form so you can add instructions if you like)</li>
                <li>Add the following form elements (fields):
                  <ul style={{ margin: '0.5rem 0 0.5rem 1.5rem' }}>
                    <li>Field Name: Name, Type=Text, Placeholder blank), check Required on</li>
                    <li>Field Name: Email, Type=Email, Placeholder blank), check Required on</li>
                    <li>Field Mobile Number: Name, Type=Text, Placeholder blank), check Required on</li>
                    <li>Field Name: ResumeUpload, Type=File, Multiple files OFF, check Required on</li>
                    <li>Field Name: Job Role Name, Type=Text, Placeholder blank), check Required on</li>
                  </ul>
                </li>
                <li>Respond When → Form is Submitted</li>
                <li>I also turned OFF the n8n Attribution but this is optional</li>
              </ul>

              <h3>Node Configuration</h3>
              <ul className="step-list">
                <li><strong>1. Trigger Node</strong><br />
                  This node serves as a form trigger, initiating the workflow when a new application form is submitted. It is configured to listen for form submissions and triggers the workflow upon receiving new application data. The settings include specifying the form to monitor and any authentication required to access the form service. In the workflow, this node acts as the starting point, processing the submitted application data and passing it on to subsequent nodes for further processing.</li>
                
                <li><strong>2. Save to Onedrive Node</strong><br />
                  This node is responsible for saving the submitted resume to OneDrive as part of the job application process. It interacts with the Microsoft OneDrive API using the provided authentication credentials. The settings include the folder path where the resume should be saved and the name of the file. Once the resume is saved, the node outputs the file metadata, which can be used by subsequent nodes in the workflow.</li>
                
                <li><strong>3. Get OneDrive URL Node</strong><br />
                  This node performs an HTTP request to retrieve the URL of a file from OneDrive. It interacts with the OneDrive API using the provided authentication credentials and takes input parameters such as the file ID or name. In the workflow, it is used to fetch the URL of a specific file from OneDrive, which is then used as input for subsequent nodes.</li>
                
                <li><strong>4. Save Application Record to Excel Node</strong><br />
                  This node saves the submitted job application data to an Excel file. It interacts with the Microsoft Excel service to create or update the specified Excel file. The settings may include authentication details, file path, and data mapping configurations. In the workflow, it receives the job application data, processes it, and then saves it to the Excel file. The output is the updated Excel file, which can be used by subsequent nodes for further processing or storage.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="test-scenario" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Test Scenario</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <p>Watch video</p>
            </div>
          </div>
        </section>

        <section id="tips" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Configuration Tips</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3>Common Errors & Fixes</h3>
              <ul className="step-list">
                <li>Make sure your mapping of parameters between the OneDrive and Save to Excel are correctly mapped</li>
                <li>When testing - if you have 2 monitors - have n8n on one monitor and OneDrive and Excel in split-screen mode on the second. That way you can see the file and record saves in real time</li>
                <li>If you make changes to your workflow, make sure to SAVE your work before attempting the next test/run. There is no auto-save in n8n yet</li>
              </ul>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--bg-dark)' }}>
                <p><strong>OneDrive Tip:</strong> In the Onedrive node, I wrote the file to the Onedrive root directory (Parent ID = root). However if you want to write to another folder - you need to find that folders id (it won't work if you just put in the folder name or path). To find that id - open the folder in Onedrive online view and grab it from the URL. If you can't identify it - give the whole URL to ChatGPT/Claude and ask it to extract it for you. Then put that into the Parent ID field). Note that it can take some time for the file to appear due to sync speed. Note that if you change to a folder you will also need to change the next node (Get OneDrive File URL) to also retrieve from that folder.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="variations" className="section" style={{
          padding: '2rem 0',
          opacity: 1,
          transform: 'translateY(0)'
        }}>
          <div className="container">
            <h2 style={{ 
              color: '#10B981', 
              marginBottom: '2rem', 
              fontSize: '2rem' 
            }}>Suggested Variations</h2>
            <div className="section-content" style={{
              backgroundColor: '#1F2937',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <ul className="step-list">
                <li>Remove the Get URL node and map directly between OneDrive and Save to Excel</li>
                <li>Replace the n8n form with an external one created by yourself with Claude or another tool like Lovable or Cursor. Or hook an external form service like https://tally.so/</li>
                <li>Replace the Microsoft apps with the equivalent from the Google ecosystem (Google Drive and Google Sheets)</li>
                <li>Replace Excel/Sheets with a database back-end like Airtable or Supabase</li>
              </ul>

              <div className="meta-info" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                <div className="meta-item" style={{
                  backgroundColor: '#111827',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h4 style={{ 
                    color: '#10B981', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem' 
                  }}>Version</h4>
                  <p>1.88.0</p>
                </div>
                <div className="meta-item" style={{
                  backgroundColor: '#111827',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h4 style={{ 
                    color: '#10B981', 
                    marginBottom: '1rem', 
                    fontSize: '1.1rem' 
                  }}>Last Updated</h4>
                  <p>March 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{
        backgroundColor: '#1F2937',
        padding: '2rem 0',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <div className="container">
          <p>Download the complete resources for this workflow from the link below</p>
          <a href="download file.zip" className="download-button" style={{
            display: 'inline-block',
            backgroundColor: '#10B981',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            marginTop: '1.5rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}>
            FREE DOWNLOAD
          </a>
        </div>
      </footer>
    </div>
  );
};

export default N8nWorkflowBasics; 