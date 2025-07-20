import React from 'react';
import Layout from '../components/Layout';
import { useScrollToTop } from '../hooks/useScrollToTop';

const N8nWorkflowBasics: React.FC = () => {
  useScrollToTop();
  return (
    <Layout
      title="Introduction to n8n Workflow Basics"
      description="A simple workflow demonstrating how to build a recruitment form that saves resumes to OneDrive and updates records in Microsoft Excel"
    >
      <section className="section">
        <div className="section-content">
          <h2>Workflow Overview</h2>
          <p>This tutorial walks through creating an automated recruitment workflow using n8n that:</p>
          <ul className="step-list">
            <li>Collects job applicant information through a web form</li>
            <li>Saves submitted resumes to a designated OneDrive folder</li>
            <li>Updates a centralized Excel spreadsheet with applicant details</li>
            <li>Sends confirmation emails to applicants</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Prerequisites</h2>
          <p>Before starting this tutorial, you'll need:</p>
          <ul className="step-list">
            <li>An n8n account (cloud or self-hosted)</li>
            <li>Microsoft Office 365 account with OneDrive access</li>
            <li>Basic understanding of workflow automation concepts</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Time Required</h2>
          <p>Approximately 2 hours to complete the entire workflow setup and testing</p>
        </div>
      </section>
    </Layout>
  );
};

export default N8nWorkflowBasics; 