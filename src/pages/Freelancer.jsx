import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/free.jpg";



import {
  FaBookOpen,
    FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
  FaThLarge,
  FaClock,
  FaChartBar,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaUser,
  FaServer,
  FaNetworkWired,
  FaUsers,
  FaWindows,
  FaLinux,
  FaShieldAlt,
  FaCloud,
  FaLock,
  FaDesktop,
  FaBriefcase,
  FaAward
} from "react-icons/fa";

import {
  HiOutlineHome,
  HiOutlineFlag,
  HiOutlineAcademicCap,
  HiOutlineFolder,
  HiOutlineStar,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";

import {
  HiOutlineBookOpen,
  HiOutlineUser,
  HiOutlineShieldCheck,
  HiOutlineUsers,
  HiOutlineSparkles,

  HiOutlineCheckCircle,
  HiOutlineBriefcase,
  HiOutlineArrowRight,

   HiOutlineComputerDesktop,
  HiOutlineUserGroup,
  HiOutlineCheck,
  HiOutlineChevronRight,
} from "react-icons/hi2";

import {
  Target,
  GraduationCap,
  Globe,
  Network,
  Users,
  Monitor,
  Cpu,
  Shield,
  Server,
  Cloud,
  ShieldAlert,
  Share2,
  Wrench,
  Laptop,
  Lock,
  Activity,
  MessageSquare,
  Lightbulb,
  Clock,
  Briefcase,
  Terminal
} from 'lucide-react';


import { FiTarget } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

const skills = [
  "Develop a freelancing business",
  "Optimize online profiles",
  "Create and market gigs",
  "Generate leads and find clients",
  "Develop a structured freelance system",
  "Create high-value services",
  "Price services effectively",
  "Maintain long-term client relationships",
  "Build a personal freelance brand"
];

const technicalSkills = [
  "Setting up online profiles",
  "Keyword research",
  "Using project management tools",
  "Creating SOPs",
  "Managing contracts digitally",
  "Time tracking and invoicing"
];
const professionalSkills = [
  "Client acquisition",
  "Personal branding",
  "Marketing outreach",
  "Client communication",
  "Sales negotiation",
  "Objection handling",
  "Client onboarding"
];

const reviews = [
  {
    name: "Learner",
    date: "May 24, 2026",
    course: "Freelancing – Sell Your Skills and Make Money Online",
    text: "Very nice."
  }
];

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`}>
      {/* Header / Clickable Area */}
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>

      {/* Answer Area (Card ke andar) */}
      {isOpen && (
        <div className="faq-answer">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

const courses = [
  {
    no: 1,
    title: "Freelancing – Sell Your Skills and Make Money Online",
    duration: "4 hours 0 min",
    desc: "Turn your skills into a sustainable income with a comprehensive guide to freelancing. From basics to advanced strategies, learn to navigate platforms like Fiverr, Upwork, and LinkedIn.",
    tags: ["Freelancing basics", "Platform navigation", "Profile optimization", "Keyword research", "Gig creation", "Marketing strategies"],
    skillsIntro: "Freelancing basics · Platform navigation · Profile optimization · Keyword research · Gig creation · Marketing strategies"
  },
  {
    no: 2,
    title: "The Complete Freelance Playbook (Advanced Edition)",
    duration: "11 hours 0 min",
    desc: "Master the art of advanced freelancing with a structured system to build and scale a career. Learn to create high-value services, price confidently, secure clients, and establish a sustainable business.",
    tags: ["Creating Freelance Systems", "Service Pricing", "Client Communication", "Proposal Writing", "Brand Building"],
    skillsIntro: "Creating Freelance Systems · Service Pricing · Client Communication · Proposal Writing · Brand Building"
  }
];

const jobs = [
  "Freelance Specialist",
  "Professional Consultant",
  "Client Relationship Manager"
];

const faqData = [
  {
    q:"Who is this program for?",
    a:"This program is ideal for individuals looking to build a freelancing business, with some experience in freelance work and basic digital skills."
  },
  {
    q:"What is the focus of the program?",
    a:"The focus is on enabling you to turn your skills into a sustainable freelance career, covering everything from setting up profiles to advanced client management."
  }
];

const careers = [
  "Freelance Specialist",
  "Professional Consultant",
  "Client Relationship Manager"
];

export default function ITSupport() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const [currentReview, setCurrentReview] = useState(0);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  if (isPricingOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isPricingOpen]);


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentReview((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

const nextReview = () => {
  setCurrentReview((prev) =>
    prev === reviews.length - 1 ? 0 : prev + 1
  );
};

const prevReview = () => {
  setCurrentReview((prev) =>
    prev === 0 ? reviews.length - 1 : prev - 1
  );
};
  return (
    <>
    <div className="it-support-page">
      {/* HERO */}
     <section className="itHero">
     
       <div className="heroContainer">
     
         {/* LEFT CONTENT */}
         <div className="heroContent">
     
           <div className="programBadge">
             <span>🎓</span>
             JOBSKILLSHARE CERTIFICATE PROGRAM
           </div>
     
           <h1>
             Become a Freelancer | <br />
             <span>Skills-to-Income Program</span>
           </h1>
     
           <div className="subHeading">
             <FaCheckCircle />
             <h3>Transform Your Skills into a Sustainable Freelance Career</h3>
           </div>
     
           <p>
             This program provides comprehensive training to help you start and grow
             a successful freelance business.
           </p>
     
           {/* STATS */}
           <div className="statsGrid">
     
             <div className="statCard">
               <div className="iconBox">
                 <FaBookOpen />
               </div>
     
               <div>
                 <h4>2</h4>
                 <span>Courses</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaThLarge />
               </div>
     
               <div>
                 <h4>63</h4>
                 <span>Lessons</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaClock />
               </div>
     
               <div>
                 <h4>15 hours 0 min</h4>
                 <span>Estimated time</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaChartBar />
               </div>
     
               <div>
                 <h4>Intermediate to Advanced</h4>
                 <span>Difficulty</span>
               </div>
             </div>
     
           </div>
     
           {/* BUTTONS */}
           <div className="heroButtons">
     
        <button
       className="primaryBtn"
       onClick={() => setIsPricingOpen(true)}
     >
       Create Free Account
       <FaArrowRight />
     </button>
     
     <button
       className="secondaryBtn"
       onClick={() => navigate("/login")}
     >
       Log In
       <FaUser />
     </button>
     
               <a href="/">
                 Preview the full curriculum ↓
                 <FaArrowRight />
               </a>
     
           </div>
     
           {/* FEATURES */}
           <div className="heroFeatures">
     
             <div>
               <FaCheckCircle />
               Preview before joining
             </div>
     
             <div>
               <FaCheckCircle />
               Recommended learning order
             </div>
     
             <div>
               <FaCheckCircle />
               Progress saved after login
             </div>
     
           </div>
     
         </div>
     
         {/* RIGHT SIDE IMAGE */}
         <div className="heroImageWrapper">
     
          <div> <img
             src={heroImage}
             alt="Become a Freelancer Certificate"
           />
          </div>
         </div>
     
       </div>
     
     </section>

      {/* NAV */}
      
      <section className="navigation">
 <div className="navigation-wrapper">
    
    <button className="jump-to-btn">
      <BsGrid3X3Gap />
      <span>JUMP TO</span>

    </button>

    <nav className="nav-links">
      <a href="#overview" className="nav-item">
        <HiOutlineHome />
        <span>Overview</span>
      </a>

      <a href="#outcomes" className="nav-item">
        <FiTarget />
        <span>Outcomes</span>
      </a>

      <a href="#roadmap" className="nav-item">
        <HiOutlineFlag />
        <span>Roadmap</span>
      </a>

      <a href="#courses" className="nav-item">
        <HiOutlineAcademicCap />
        <span>Courses</span>
      </a>

      <a href="#projects" className="nav-item">
        <HiOutlineFolder />
        <span>Projects</span>
      </a>

      <a href="#reviews" className="nav-item">
        <HiOutlineStar />
        <span>Reviews</span>
      </a>

      <a href="#faq" className="nav-item">
        <HiOutlineQuestionMarkCircle />
        <span>FAQ</span>
      </a>
    </nav>

 </div>
</section>




      {/* PROGRAM HIGHLIGHTS */}


<section id="overview" className="program-overview-section">

 <div className="overview-badge">
   <HiOutlineBookOpen />
   <span>PROGRAM OVERVIEW</span>
 </div>

 <p className="overview-text">
   The “Become a Freelancer | Skills-to-Income Program” is designed to equip you with the knowledge and skills needed to turn your talents into a profitable freelance career. Through a structured sequence of courses, you will learn to navigate and excel in online freelancing platforms, create high-value service offerings, and build a sustainable business.
 </p>

 <div className="highlights-header">
   <div className="highlight-icon">
     <HiOutlineSparkles />
   </div>

   <div>
     <h2>Program Highlights</h2>
     <div className="title-line"></div>
   </div>
 </div>

 <p className="highlights-description">
   * Introduction to freelancing and essential strategies for success.<br />
   * Comprehensive guide to platforms like Fiverr, Upwork, and LinkedIn.<br />
   * Advanced techniques in service creation and client retention.<br />
   * Personal branding and marketing outreach principles.
 </p>

</section>


      {/* SKILLS + CAREERS */}


<div id="outcomes" className="skills-career-section">

 <div className="skills-wrapper">

   <div className="section-heading">
     <div className="heading-icon">
       <HiOutlineSparkles />
     </div>

     <div>
       <span className="heading-label">
         PROGRAM OUTCOMES
       </span>

       <h2>What You'll Be Able to Do</h2>
     </div>
   </div>

   <div className="skills-grid">
     {skills.map((item, index) => (
       <div className="skill-item" key={index}>
         <div className="skill-icon">
           <HiOutlineCheckCircle />
         </div>

         <span>{item}</span>
       </div>
     ))}
   </div>

 </div>

 <div className="career-box">

   <div className="career-header">
     <span>YOUR CAREER PATH</span>
     <h3>Career Opportunities</h3>
   </div>

   {careers.map((career, index) => (
     <div className="career-item" key={index}>

       <div className="career-left">
         <div className="career-icon">
           <HiOutlineBriefcase />
         </div>

         <span>{career}</span>
       </div>

       <HiOutlineArrowRight className="arrow-icon" />

     </div>
   ))}

 </div>

</div>



      {/* SKILLS BUILD */}
      

      <section className="skillsBuildSection">

 <div className="skillsBuildHeader">

   <div>
     <span className="skillsMiniTitle">
       <HiOutlineSparkles />
       CORE SKILL AREAS
     </span>

     <h2>Skills You'll Build</h2>

     <div className="titleLine"></div>
   </div>

   <div className="skillCounter">
     <div className="counterIcon">
       <HiOutlineSparkles />
     </div>

     <div>
       <h3>13</h3>
       <span>CORE SKILLS</span>
     </div>
   </div>

 </div>

 <div className="skillsCardsWrapper">

   {/* Technical Skills */}

   <div className="skillCard technicalCard">

     <div className="cardTop">

       <div className="cardHeading">

         <div className="cardIcon techIcon">
           <HiOutlineComputerDesktop />
         </div>

         <h3>Technical Skills</h3>

       </div>

       <div className="skillBadge">
         6 skills
       </div>

     </div>

     <div className="skillList">

       {technicalSkills.map((skill, index) => (
         <div className="skillRow" key={index}>

           <div className="skillLeft">

             <div className="checkIcon">
               <HiOutlineCheck />
             </div>

             <span>{skill}</span>

           </div>

           

         </div>
       ))}

     </div>

   </div>

   {/* Professional Skills */}

   <div className="skillCard professionalCard">

     <div className="cardTop">

       <div className="cardHeading">

         <div className="cardIcon proIcon">
           <HiOutlineUserGroup />
         </div>

         <h3>Professional Skills</h3>

       </div>

       <div className="skillBadge purpleBadge">
         7 skills
       </div>

     </div>

     <div className="skillList">

       {professionalSkills.map((skill, index) => (
         <div className="skillRow" key={index}>

           <div className="skillLeft">

             <div className="checkIcon purpleCheck">
               <HiOutlineCheck />
             </div>

             <span>{skill}</span>

           </div>

           

         </div>
       ))}

     </div>

   </div>

 </div>

</section>

{/* ===========================
   TECHNOLOGIES COVERED
=========================== */}

<section className="tech-stack-section">

 <div className="section-header">
   <span className="section-label">
     TECHNOLOGY STACK
   </span>

   <h2>Technologies Covered</h2>
 </div>

 <div className="tech-grid">

   <div className="tech-pill"><FaServer /><span>Fiverr</span></div>
   <div className="tech-pill"><FaNetworkWired /><span>Upwork</span></div>
   <div className="tech-pill"><FaUsers /><span>LinkedIn</span></div>
   <div className="tech-pill"><FaWindows /><span>Dribbble</span></div>
   <div className="tech-pill"><FaLinux /><span>Behance</span></div>
   <div className="tech-pill"><FaShieldAlt /><span>Asana</span></div>
   <div className="tech-pill"><FaCloud /><span>Trello</span></div>
   <div className="tech-pill"><FaCloud /><span>Slack</span></div>
   <div className="tech-pill"><FaLock /><span>Monday.com</span></div>
   <div className="tech-pill"><FaCloud /><span>Google Drive</span></div>
   <div className="tech-pill"><FaCloud /><span>Calendly</span></div>
   <div className="tech-pill"><FaCloud /><span>Zapier</span></div>
   <div className="tech-pill"><FaCloud /><span>Notion</span></div>
   <div className="tech-pill"><FaCloud /><span>Google Docs</span></div>
   <div className="tech-pill"><FaCloud /><span>Loom</span></div>
   <div className="tech-pill"><FaCloud /><span>DocuSign</span></div>
   <div className="tech-pill"><FaCloud /><span>Zoom</span></div>
   <div className="tech-pill"><FaCloud /><span>Google Meet</span></div>
   <div className="tech-pill"><FaCloud /><span>PandaDoc</span></div>
   <div className="tech-pill"><FaCloud /><span>Harvest</span></div>
   <div className="tech-pill"><FaCloud /><span>Bonsai</span></div>

 </div>

</section>

{/* ===========================
    PROGRAM ROADMAP (REDESIGNED)
=========================== */}
<section id="roadmap" className="program-roadmap">

  {/* Background Geometric Grid Shapes */}
  <div className="geo-bg-grid"></div>
  <div className="geo-shape shape-1"></div>
  <div className="geo-shape shape-2"></div>
  <div className="geo-shape shape-3"></div>

  {/* Clean Section Header */}
  <div className="roadmap-header">
    <span className="roadmap-subtitle">LEARNING ROADMAP</span>
    <h2 className="roadmap-title">
      Your Path Through The <span className="text-gradient">Program</span>
    </h2>
    <div className="title-bar"></div>
  </div>

  <div className="roadmap-body">

    {/* LEFT SIDE: TIMELINE */}
     <div className="timeline-container">
         
          <div className="timeline-step">
            <div className="timeline-marker">
              <FaBookOpen />
            </div>
            <div className="timeline-card">
              <h4>Single Course Certification</h4>
              <p>Begin with a comprehensive guide to freelancing and establishing a successful gig presence.</p>
              <div className="skill-tags">
                <span>Freelancing – Sell Your Skills and Make Money Online</span>
              </div>
            </div>
          </div>
    
          <div className="timeline-step">
            <div className="timeline-marker">
              <FaShieldAlt />
            </div>
            <div className="timeline-card">
              <h4>Professional Development</h4>
              <p>Advance to structured systems for scaling and sustaining a freelance career.</p>
              <div className="skill-tags">
                <span>The Complete Freelance Playbook (Advanced Edition)</span>
              </div>
            </div>
          </div>
    
          <div className="timeline-step is-complete">
            <div className="timeline-marker complete-icon">
              <FaAward />
            </div>
            <div className="timeline-card">
              <h4>Certificate Program Complete</h4>
              <p>You have progressed through the complete course sequence and its combined skill set.</p>
            </div>
          </div>
    
        </div>

    {/* RIGHT SIDE: GLASS FEATURE CARD */}
    <div className="roadmap-side-card">
      <div className="card-pill">MILESTONE TRACKER</div>
      
      <h3>2 Phase Structured Learning</h3>
      <p>Designed step-by-step from beginner fundamentals to job readiness.</p>

      <div className="progress-widget">
        <div className="progress-labels">
          <span>Curriculum Coverage</span>
          <strong>100% Complete</strong>
        </div>
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
      </div>

      <ul className="feature-checklist">
        <li><span className="check-icon">✓</span> 2 Core Structured Phases</li>
        <li><span className="check-icon">✓</span> Hands-on Practical Projects</li>
        <li><span className="check-icon">✓</span> Industry Recognized Certificate</li>
      </ul>

      <button className="roadmap-btn">
        Start Journey <FaArrowRight />
      </button>
    </div>

  </div>

</section>
{/* ===========================
   COURSES
=========================== */}

<section id="courses" className="courses-section">

 <div className="section-header">
   <span className="section-label">
     PROGRAM STRUCTURE
   </span>

   <h2>Courses in This Certificate Program</h2>
 </div>

 <div className="courses-list">

   {courses.map((course, index) => (

     <div
       className={`course-card color-${index + 1}`}
       key={index}
     >

       <div className="course-number">
         {course.no}
       </div>

       <div className="course-content">

         <span className="course-label">
           COURSE {course.no}
         </span>

         <h3>{course.title}</h3>

         <p>{course.desc}</p>

         <div className="course-tags">

           {course.tags.map((tag, tagIndex) => (

             <span key={tagIndex}>
               {tag}
             </span>

           ))}

         </div>

       </div>

       <div className="course-side">

         <div className="course-hours">
           <FaClock />
           <strong>{course.duration}</strong>
         </div>

       </div>

     </div>

   ))}

 </div>

</section>
<section id="projects" className="ph-section">
  {/* Background Dots Pattern */}
  <div className="ph-bg-dots"></div>

  {/* Top Right Decorative Illustration Graphic */}
  <div className="ph-illustration-wrapper">
    <div className="ph-circle-bg"></div>
    <div className="ph-window-card">
      <div className="ph-window-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="ph-window-body">
        <div className="ph-code-box">
          <span className="code-symbol">&lt;/&gt;</span>
        </div>
        <div className="ph-code-lines">
          <div className="line long"></div>
          <div className="line medium"></div>
          <div className="line short"></div>
        </div>
      </div>
    </div>
    <div className="ph-gear-card">
      <div className="ph-gear-icon">⚙</div>
    </div>
  </div>

  {/* Main Container Content */}
  <div className="ph-container">
    
    {/* Section Header */}
    <div className="ph-header">
      <div className="ph-subtitle-wrapper">
        <div className="ph-target-icon">
          <Target size={18} />
        </div>
        <span className="ph-subtitle">PRACTICE WHAT YOU LEARN</span>
        <div className="ph-subtitle-line"></div>
      </div>
      <h2 className="ph-title">Projects &amp; Hands-on Activities</h2>
      <p className="ph-description">
        Strengthen your skills through real-world projects and practical exercises.
      </p>
    </div>

    {/* Skills Card */}
    <div className="ph-skills-card">
      <div className="ph-skills-card-header">
        <div className="ph-icon-box-dark">
          <GraduationCap size={24} color="#ffffff" />
        </div>
        <div className="ph-skills-titles">
          <h3>Skills Practiced</h3>
          <p>24 curriculum-grounded skills</p>
        </div>
      </div>

      {/* Skills Badges Grid */}
      <div className="ph-badges-grid">
         <div className="ph-badge"><Globe size={15} className="ph-badge-icon" /><span>Fiverr</span></div>
         <div className="ph-badge"><Network size={15} className="ph-badge-icon" /><span>Upwork</span></div>
         <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>LinkedIn</span></div>
         <div className="ph-badge"><Monitor size={15} className="ph-badge-icon" /><span>Dribbble</span></div>
         <div className="ph-badge"><Cpu size={15} className="ph-badge-icon" /><span>Behance</span></div>
         <div className="ph-badge"><Shield size={15} className="ph-badge-icon" /><span>Asana</span></div>
         <div className="ph-badge"><Server size={15} className="ph-badge-icon" /><span>Trello</span></div>
         <div className="ph-badge"><Cloud size={15} className="ph-badge-icon" /><span>Slack</span></div>
         <div className="ph-badge"><ShieldAlert size={15} className="ph-badge-icon" /><span>Monday.com</span></div>
         <div className="ph-badge"><Share2 size={15} className="ph-badge-icon" /><span>Google Drive</span></div>
         <div className="ph-badge"><Wrench size={15} className="ph-badge-icon" /><span>Calendly</span></div>
         <div className="ph-badge"><Laptop size={15} className="ph-badge-icon" /><span>Zapier</span></div>
         <div className="ph-badge"><Lock size={15} className="ph-badge-icon" /><span>Notion</span></div>
         <div className="ph-badge"><Activity size={15} className="ph-badge-icon" /><span>Google Docs</span></div>
         <div className="ph-badge"><MessageSquare size={15} className="ph-badge-icon" /><span>Loom</span></div>
         <div className="ph-badge"><Lightbulb size={15} className="ph-badge-icon" /><span>DocuSign</span></div>
         <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>Zoom</span></div>
         <div className="ph-badge"><Clock size={15} className="ph-badge-icon" /><span>Google Meet</span></div>
         <div className="ph-badge"><Briefcase size={15} className="ph-badge-icon" /><span>PandaDoc</span></div>
         <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Harvest</span></div>
         <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Bonsai</span></div>
         <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Setting up online profiles</span></div>
         <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Keyword research</span></div>
         <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Using project management tools</span></div>
      </div>
    </div>

    {/* Cloud Services Note Section */}
    <div className="ph-cloud-note-card">
      <div className="ph-cloud-note-left">
        <div className="ph-icon-box-navy">
          <Cloud size={24} color="#ffffff" />
        </div>
        <div className="ph-cloud-note-text">
          <h4>Cloud Services Note</h4>
          <p>
            AWS, Azure, and other cloud subscriptions are not included with membership. Members use their own cloud accounts to follow cloud-specific courses. For some beginner-level courses, JobSkillShare provides limited Azure and AWS subscriptions for basic hands-on tasks.
          </p>
        </div>
      </div>

      {/* Decorative Cloud Graphic */}
      <div className="ph-cloud-graphic">
        <div className="ph-cloud-shape">
          <Lock size={20} className="ph-lock-icon" />
        </div>
      </div>
    </div>

  </div>
</section>
<section id="reviews" className="reviews-section">
  {/* YEH WALA NEW HEADER AREA APKE JSX MEIN MISSING THA - AB ADD KAR DIYA HAI */}
  <div className="reviews-top">
    <div>
      <span className="mini-title">FEEDBACK ACROSS THE CURRICULUM</span>
      <h2>Program Reviews</h2>
      <p className="reviews-subtitle">Real experiences. Real impact.</p>
    </div>
    <div className="rating-box">
      <h3>★ 5.0</h3>
      <span>Program average across all Course ratings</span>
    </div>
  </div>

  {/* BAQI KA APKA EXISTING CODE IS DIV MEIN HAI - STRUCTURE SAME HAI */}
  <div className="review-slider">
    <button className="review-arrow left" onClick={prevReview}>
      <FaChevronLeft />
    </button>
    <button className="review-arrow right" onClick={nextReview}>
      <FaChevronRight />
    </button>

    <div className="review-stars">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>

    {/* Dynamic content ko safe rakha hai - mapping as a placeholder */}
    <p className="review-text">
      "{reviews[currentReview].text}"
    </p>

    <div className="review-course">
      <FaDesktop />
      <span>{reviews[currentReview].course}</span>
    </div>

    <div className="review-user">
      <div className="avatar">
        <FaUserCircle />
      </div>
      <div>
        <h4>{reviews[currentReview].name}</h4>
        <span>{reviews[currentReview].date}</span>
      </div>
    </div>
  </div>

  {/* Bottom Pagination */}
  <div className="pagination-wrapper">
    <div className="pagination-count">
      <FaChevronLeft /> {currentReview + 1} / {reviews.length} <FaChevronRight />
    </div>
    <div className="review-dots">
      {reviews.map((_, index) => (
        <span
          key={index}
          className={currentReview === index ? "dot active" : "dot"}
          onClick={() => setCurrentReview(index)}
        />
      ))}
    </div>
  </div>
</section>
<section id="faq" className="faq-section">
  <div className="faq-header">
    <span className="faq-badge">Got Questions?</span>
    <h2>Frequently Asked Questions</h2>
    <p className="faq-subtitle">Find answers to the most common questions about our program.</p>
  </div>

  <div className="faq-list">
    {faqData.map((item, index) => (
      <FAQItem
        key={index}
        q={item.q}
        a={item.a}
      />
    ))}
  </div>
</section>

{/* 11. FOOTER */}
      <footer className="main-footer">
        <div className="footer-links-grid">
          <div className="footer-brand">
            <h3>EdTech 4D</h3>
            <p>Empowering learners with hands-on labs and industry-recognized certifications.</p>
             <div className="footer-social">
                                    <a href="https://www.jobskillshare.org/affiliate-program/" className="social-btn fb"><Facebook size={18} /></a>
                                    <a href="https://www.jobskillshare.org/affiliate-program/" className="social-btn ig"><Instagram size={18} /></a>
                                    <a href="https://www.jobskillshare.org/affiliate-program/" className="social-btn tw"><Twitter size={18} /></a>
                                  </div>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              <li>IT Support</li>
              <li>Systems Engineer</li>
              <li>Cloud Engineer</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Preview</li>
              <li>Success Stories</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>info@edtech4d.com</p>
            <p>+92 300 1234567</p>
            <p>123, Tech Street, Lahore</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EdTech 4D. All rights reserved.</p>
        </div>
      </footer>

    </div>

<PricingModal
  isOpen={isPricingOpen}
  onClose={() => setIsPricingOpen(false)}
/>

    
    </>
  );
}
