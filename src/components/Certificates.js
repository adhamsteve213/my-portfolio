import React, { useEffect, useState } from 'react';
import './Certificates.css';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import adrek3omrakCertificate from '../assets/certificates/adrek 3omrak certificate.pdf';
import aiAgentCertificate from '../assets/certificates/ai agent vanderbilt.pdf';
import aiAutomationCertificate from '../assets/certificates/Ai Automation certificate.pdf';
import aiAutomationCourse from '../assets/certificates/Ai automation.pdf';
import aiAwitCertificate from '../assets/certificates/ai AWIT AND ANTHROPIC.pdf';
import aiFullGuideCertificate from '../assets/certificates/Ai Full Guide.pdf';
import aiMcpCertificate from '../assets/certificates/ai MCP Vanderbilt.pdf';
import anthropicCertificate from '../assets/certificates/anthropic.pdf';
import promptEngineeringCertificate from '../assets/certificates/Certificate - Prompt Engineering - Adham Medhat Elsaeed.pdf';
import nodeCourseCertificate from '../assets/certificates/certificate-of-completion-for-the-complete-node-js-course.pdf';
import chatGptCertificate from '../assets/certificates/chat gpt.pdf';
import chatgptAstraCertificate from '../assets/certificates/chatgpt astra-6.pdf';
import claudeCertificate from '../assets/certificates/claude ai courssat.pdf';
import claudeCodeCertificate from '../assets/certificates/claude code opus 5.5 certificate courssat.com';
import communicationSkillsCertificate from '../assets/certificates/communication skills courssat.com';
import deepseekCertificate from '../assets/certificates/deepseek certificate.pdf';
import devopsCertificate from '../assets/certificates/devops pic (1).pdf';
import googleAiCertificate from '../assets/certificates/google ai certificate.pdf';
import googleAiEssentialsCertificate from '../assets/certificates/google ai essentials.pdf';
import googleAiPromptCertificate from '../assets/certificates/google Ai prompt.pdf';
import javaSpringCertificate from '../assets/certificates/java spring boot certificate.pdf';
import mediaBuyCertificate from '../assets/certificates/media buy.pdf';
import metaBackendCertificate from '../assets/certificates/meta backend.pdf';
import metaFrontendCertificate from '../assets/certificates/Meta Front End Certificate.pdf';
import negotiationCertificate from '../assets/certificates/negotiation skills courssat.com';
import promptEngineeringCourse from '../assets/certificates/prompt engineering.pdf';
import coursatMarketingCertificate from '../assets/certificates/coursat plus marketing content creation.pdf';
import coursatUiUxCertificate from '../assets/certificates/coursatplus uiux certificate.pdf';
import englishBusinessCertificate from '../assets/certificates/courssat english business.pdf';
import salesCertificate from '../assets/certificates/courssat sales person certificate.pdf';
import customerServicesCertificate from '../assets/certificates/customer services satisfactions.pdf';
import digitalMarketingCertificate from '../assets/certificates/digital marketing courrsat.com';
import mernStackCertificate from '../assets/certificates/MERN Stack packt-coursera.pdf';
import microsoftCopilotCertificate from '../assets/certificates/microsoft copilot prompt.pdf';
import notionCertificate from '../assets/certificates/notion coursera.pdf';
import flutterCertificate from '../assets/certificates/packt flutter certificate.pdf';
import reactNativeCertificate from '../assets/certificates/packt react native coursera.pdf';
import problemSolvingCertificate from '../assets/certificates/problem solving courssat.com';
import systemAnalysisCertificate from '../assets/certificates/sys analysis and design pic.pdf';
import uiuxCalartsCertificate from '../assets/certificates/uiux calarts - coursera.pdf';
import courssatPlusCertificate from '../assets/certificates/شهادة CRS-2026-G2N1WO4H5L — Courssat Plus.pdf';
import productivitySimplifiedCertificate from '../assets/certificates/Notion ,Ai , Personal brand skillshare.pdf';
import uiuxArabicCertificate from '../assets/certificates/Microsoft UX design.pdf';
import cSharpDotNetCertificate from '../assets/certificates/.net certificate.pdf';
import businessStrengtheningCertificate from '../assets/certificates/business savvy harvard original.pdf';
import financeCertificate from '../assets/certificates/university of pensylvenia financial accounting.pdf';
import businessStrategyCertificate from '../assets/certificates/business savvy harvard.pdf';
import meanStackCertificate from '../assets/certificates/MEAN STACK CERTIFICATE.pdf';
import aiNoCodeCertificate from '../assets/certificates/vanderbilt university build Ai project no code.pdf';
import claudeAiAgentsCertificate from '../assets/certificates/generative  ai software engineer.pdf';
import programmingFoundationsCertificate from '../assets/certificates/university of london intro to computer science.pdf';
import computingMathematicsCertificate from '../assets/certificates/University of london Math for cs.pdf';
import softwareEngineeringCertificate from '../assets/certificates/Coursera XTG1VHV2U1VC.pdf';
import devopsHandsOnCertificate from '../assets/certificates/devops pro.pdf';
import awsFundamentalsCertificate from '../assets/certificates/AWS Fundamentals.pdf';
import awsSolutionsArchitectCertificate from '../assets/certificates/aws cloud architect.pdf';
import geminiDevelopersCertificate from '../assets/certificates/google deepmind ai.pdf';
import businessEnglishCertificate from '../assets/certificates/business english arizona state university.pdf';
import digitalMarketingStrategyCertificate from '../assets/certificates/Advanced digital marketing.pdf';
import whartonBusinessCertificate from '../assets/certificates/business foundation wharton.pdf';
import adobeGraphicDesignerCertificate from '../assets/certificates/adobe graphic designer.pdf';
import excelCopilotCertificate from '../assets/certificates/Microsoft Excel Certificate.pdf';
import generativeAiCertificate from '../assets/certificates/AI Automation Vanderbilt university.pdf';
import aiAgenticLeadersCertificate from '../assets/certificates/Ai Agentic & Leaders.pdf';
import aiMasteryCertificate from '../assets/certificates/Ai Mastery Vanderbilt.pdf';
import businessEnglishCaliforniaCertificate from '../assets/certificates/business english university of california.pdf';
import azureCloudCertificate from '../assets/certificates/cloud azure.pdf';
import digitalMarketingInstituteCertificate from '../assets/certificates/digital marketing institute certificate.pdf';
import generativeAiAssistantsCertificate from '../assets/certificates/Generative Ai Assisstants.pdf';
import ibmSoftSkillsCertificate from '../assets/certificates/IBM Soft Skills.pdf';
import kodeCloudCertificate from '../assets/certificates/kode cloud.pdf';
import nonAccountantBasicsCertificate from '../assets/certificates/non accountant basics.pdf';
import edxAgileDevopsCertificate from '../assets/certificates/Professional Certificate _ edX Credentials ibm agile and devops and clpud.pdf';
import strategicDigitalMarketingCertificate from '../assets/certificates/strategic digital marketing.pdf';



pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const certificates = [
  { name: 'Adrek 3omrak', file: adrek3omrakCertificate, description: 'Completed the Adrek 3omrak training program.' },
  { name: 'AI Agent', file: aiAgentCertificate, description: 'A certificate focused on building AI agents with Vanderbilt University.' },
  { name: 'AI Automation', file: aiAutomationCertificate, description: 'A certificate in practical AI automation workflows.' },
  { name: 'AI Automation Course', file: aiAutomationCourse, description: 'Completed coursework in AI automation and applied tools.' },
  { name: 'AI AWIT and Anthropic', file: aiAwitCertificate, description: 'Completed training in AI workflows and Anthropic technologies.' },
  { name: 'AI Full Guide', file: aiFullGuideCertificate, description: 'Completed a comprehensive guide to artificial intelligence.' },
  { name: 'AI MCP', file: aiMcpCertificate, description: 'A certificate in Model Context Protocol concepts and applications.' },
  { name: 'Anthropic', file: anthropicCertificate, description: 'Completed training focused on Anthropic AI technologies.' },
  { name: 'Prompt Engineering', file: promptEngineeringCertificate, description: 'A certificate in writing effective prompts for AI systems.' },
  { name: 'Prompt Engineering Course', file: promptEngineeringCourse, description: 'Completed a course in prompt engineering techniques.' },
  { name: 'ChatGPT', file: chatGptCertificate, description: 'Completed training in ChatGPT and its practical applications.' },
  { name: 'ChatGPT Astra', file: chatgptAstraCertificate, description: 'Completed training in ChatGPT tools and workflows.' },
  { name: 'Claude AI', file: claudeCertificate, description: 'Completed training focused on Claude AI.' },
  { name: 'Claude Code', file: claudeCodeCertificate, description: 'Completed training in Claude Code and AI-assisted development.' },
  { name: 'Communication Skills', file: communicationSkillsCertificate, description: 'Completed training in professional communication skills.' },
  { name: 'DeepSeek', file: deepseekCertificate, description: 'A certificate focused on DeepSeek and generative AI tools.' },
  { name: 'DevOps', file: devopsCertificate, description: 'Completed training in DevOps practices and tools.' },
  { name: 'Google AI', file: googleAiCertificate, description: 'Completed training in Google AI concepts and tools.' },
  { name: 'Google AI Essentials', file: googleAiEssentialsCertificate, description: 'Completed Google AI Essentials training.' },
  { name: 'Google AI Prompt', file: googleAiPromptCertificate, description: 'Completed Google training in AI prompting.' },
  { name: 'Meta Backend Developer', file: metaBackendCertificate, description: 'A certificate in backend development from Meta.' },
  { name: 'Meta Front-End Developer', file: metaFrontendCertificate, description: 'A certificate in front-end development from Meta.' },
  { name: 'Java Spring Boot', file: javaSpringCertificate, description: 'Completed training in Java and Spring Boot application development.' },
  { name: 'Node.js Course', file: nodeCourseCertificate, description: 'Completed a comprehensive Node.js development course.' },
  { name: 'Media Buying', file: mediaBuyCertificate, description: 'Completed training in media buying and digital advertising.' },
  { name: 'Marketing Content Creation', file: coursatMarketingCertificate, description: 'Completed training in marketing content creation.' },
  { name: 'Negotiation Skills', file: negotiationCertificate, description: 'Completed training in negotiation skills.' },
  { name: 'UI/UX Design', file: coursatUiUxCertificate, description: 'Completed training in UI/UX design principles.' },
  { name: 'English for Business', file: englishBusinessCertificate, description: 'Completed English language training for business communication.' },
  { name: 'Sales', file: salesCertificate, description: 'Completed training in sales skills and practices.' },
  { name: 'Customer Service', file: customerServicesCertificate, description: 'Completed training in customer service and satisfaction.' },
  { name: 'Digital Marketing', file: digitalMarketingCertificate, description: 'Completed training in digital marketing.' },
  { name: 'MERN Stack', file: mernStackCertificate, description: 'Completed training in full-stack MERN development.' },
  { name: 'Microsoft Copilot Prompting', file: microsoftCopilotCertificate, description: 'Completed training in prompting with Microsoft Copilot.' },
  { name: 'Notion', file: notionCertificate, description: 'Completed training in Notion and digital productivity workflows.' },
  { name: 'Flutter', file: flutterCertificate, description: 'Completed training in Flutter mobile application development.' },
  { name: 'React Native', file: reactNativeCertificate, description: 'Completed training in React Native mobile application development.' },
  { name: 'Problem Solving', file: problemSolvingCertificate, description: 'Completed training in problem-solving skills.' },
  { name: 'System Analysis and Design', file: systemAnalysisCertificate, description: 'Completed training in system analysis and design.' },
  { name: 'UI/UX Design at CalArts', file: uiuxCalartsCertificate, description: 'Completed UI/UX design coursework from CalArts.' },
  { name: 'Courssat Plus', file: courssatPlusCertificate, description: 'Completed training through the Courssat Plus program.' },
  { name: 'Productivity Simplified', file: productivitySimplifiedCertificate, description: 'Completed training in productivity, AI tools, and Notion databases.' },
  { name: 'UI/UX Design Foundations', file: uiuxArabicCertificate, description: 'Completed additional coursework in UI/UX design.' },
  { name: 'Mastering C# and .NET', file: cSharpDotNetCertificate, description: 'Completed training in C# programming and .NET application development.' },
  { name: 'Strengthen Your Business', file: businessStrengtheningCertificate, description: 'Completed business strategy, finance, leadership, and technology coursework.' },
  { name: 'Finance', file: financeCertificate, description: 'Completed coursework in finance, accounting, and corporate finance.' },
  { name: 'Introduction to Business Strategy', file: businessStrategyCertificate, description: 'Completed training in customer value and competitive business strategy.' },
  { name: 'MEAN Stack', file: meanStackCertificate, description: 'Completed training in Angular, Node.js, Express, and MEAN stack development.' },
  { name: 'Building with AI', file: aiNoCodeCertificate, description: 'Completed training in building applications with AI and no-code tools.' },
  { name: 'Claude AI and Agentic AI', file: claudeAiAgentsCertificate, description: 'Completed advanced training in Claude Code, AI agents, and generative AI.' },
  { name: 'Computer Programming Foundations', file: programmingFoundationsCertificate, description: 'Completed foundational coursework in programming and computer science.' },
  { name: 'Mathematical Foundations for Computing', file: computingMathematicsCertificate, description: 'Completed coursework in mathematics, logic, and algorithms for computing.' },
  { name: 'Software Engineering', file: softwareEngineeringCertificate, description: 'Completed training in software modeling, implementation, testing, and design.' },
  { name: 'DevOps Hands-On', file: devopsHandsOnCertificate, description: 'Completed practical training in DevOps, CI/CD, containers, and infrastructure automation.' },
  { name: 'AWS Fundamentals', file: awsFundamentalsCertificate, description: 'Completed training in AWS cloud fundamentals and architecture.' },
  { name: 'AWS Solutions Architect', file: awsSolutionsArchitectCertificate, description: 'Completed advanced training for AWS Solutions Architect concepts.' },
  { name: 'Gemini for Developers', file: geminiDevelopersCertificate, description: 'Completed training in the Gemini API, Google AI Studio, and Gemini development.' },
  { name: 'Business English', file: businessEnglishCertificate, description: 'Completed advanced Business English coursework.' },
  { name: 'Digital Marketing Strategy', file: digitalMarketingStrategyCertificate, description: 'Completed advanced training in digital marketing strategy and customer value.' },
  { name: 'Wharton Business Foundations', file: whartonBusinessCertificate, description: 'Completed coursework in business, finance, accounting, operations, and management.' },
  { name: 'Adobe Graphic Designer', file: adobeGraphicDesignerCertificate, description: 'Completed training in graphic design and generative AI content creation.' },
  { name: 'Excel and Copilot', file: excelCopilotCertificate, description: 'Completed training in Excel, Microsoft Copilot, data analysis, and automation.' },
  { name: 'Generative AI', file: generativeAiCertificate, description: 'Completed advanced coursework in generative AI and ChatGPT applications.' },
  { name: 'Agentic AI for Leaders', file: aiAgenticLeadersCertificate, description: 'Completed training in agentic AI, AI agents, and prompt engineering.' },
  { name: 'AI Mastery', file: aiMasteryCertificate, description: 'Completed advanced training in AI agents, leadership skills, and prompt engineering.' },
  { name: 'Business English at UC Irvine', file: businessEnglishCaliforniaCertificate, description: 'Completed Business English coursework from the University of California, Irvine.' },
  { name: 'Azure Cloud', file: azureCloudCertificate, description: 'Completed training in Azure cloud services, identity, networking, and monitoring.' },
  { name: 'Digital Marketing Institute', file: digitalMarketingInstituteCertificate, description: 'Completed training in digital marketing strategy and execution.' },
  { name: 'Generative AI Assistants', file: generativeAiAssistantsCertificate, description: 'Completed training in prompt engineering, custom GPTs, and trustworthy generative AI.' },
  { name: 'IBM Professional Skills', file: ibmSoftSkillsCertificate, description: 'Completed training in professional communication, collaboration, and problem-solving.' },
  { name: 'DevOps Foundations', file: kodeCloudCertificate, description: 'Completed practical training in DevOps tools, CI/CD, containers, and infrastructure.' },
  { name: 'Non-Accountant Financial Basics', file: nonAccountantBasicsCertificate, description: 'Completed training in essential financial concepts for non-accountants.' },
  { name: 'IBM Agile and DevOps', file: edxAgileDevopsCertificate, description: 'Completed an edX professional certificate in agile, DevOps, and cloud practices.' },
  { name: 'Strategic Digital Marketing', file: strategicDigitalMarketingCertificate, description: 'Completed training in digital marketing foundations, channels, and data-driven strategy.' },
];

const CertificatePreview = ({ file, name, className = '' }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    let active = true;
    const renderPreview = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(file).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
        if (active) setImage(canvas.toDataURL('image/jpeg', 0.88));
      } catch (error) {
        if (active) setImage('');
      }
    };

    renderPreview();
    return () => { active = false; };
  }, [file]);

  return image ? <img className={className} src={image} alt={name} /> : (
    <div className="certificate-fallback"><i className="fas fa-file-pdf"></i><span>{name}</span></div>
  );
};

const Certificates = ({ language, translations }) => {
  const t = translations[language];
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCertificate ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCertificate]);

  return (
    <section id="certificates" className={`certificates ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.certificatesTag}</span>
          <h2 className="section-title">{t.certificatesTitle}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">{t.certificatesSubtitle}</p>
        </div>
        <div className="certificates-grid">
          {certificates.map(certificate => (
            <article className="certificate-card" key={certificate.name}>
              <button className="certificate-preview" type="button" onClick={() => setSelectedCertificate(certificate)} aria-label={`${t.openCertificate}: ${certificate.name}`}>
                <CertificatePreview file={certificate.file} name={certificate.name} className="certificate-image" />
                <span className="certificate-overlay"><i className="fas fa-expand-alt"></i>{t.openCertificate}</span>
              </button>
              <div className="certificate-info"><i className="fas fa-certificate"></i><h3>{certificate.name}</h3></div>
            </article>
          ))}
        </div>
      </div>
      <div className="section-number">05</div>
      {selectedCertificate && (
        <div className="certificate-modal-backdrop" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onClick={event => event.stopPropagation()}>
            <button className="certificate-modal-close" type="button" onClick={() => setSelectedCertificate(null)} aria-label={t.closeCertificate}>
              <i className="fas fa-times"></i>
            </button>
            <div className="certificate-modal-image"><CertificatePreview file={selectedCertificate.file} name={selectedCertificate.name} className="certificate-image" /></div>
            <div className="certificate-modal-content">
              <span className="section-tag">{t.certificatesTag}</span>
              <h2 id="certificate-modal-title">{selectedCertificate.name}</h2>
              <p>{selectedCertificate.description}</p>
              {selectedCertificate.link && <a className="certificate-action certificate-link" href={selectedCertificate.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>{t.certificateLink}</a>}
              <a className="certificate-action certificate-download" href={selectedCertificate.file} download><i className="fas fa-download"></i>{t.downloadCertificate}</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
