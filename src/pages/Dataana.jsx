import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";


//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/Data.jpg";



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
  "Connect to various data sources",
  "Clean and transform data",
  "Create visual dashboards",
  "Model data relationships",
  "Use DAX for calculations"
];

const technicalSkills = [
  "Using Power Query",
  "Building Dashboards",
  "Data Modelling in Power BI",
  "Applying DAX"
];
const professionalSkills = [
  "Data Analysis",
  "Reporting"
];

const reviews = [
  {
    name: "Learner",
    date: "July 2, 2026",
    course: "Power BI Fundamentals | Certificate",
    text: "Course reviews will appear here as learners share feedback across the Program."
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
    title: "Power BI Fundamentals | Certificate",
    duration: "5 hours 0 min",
    desc: "This beginner-friendly course teaches how to use Microsoft Power BI to transform raw data into insights and dashboards, covering data sources, Power Query, visualizations, data modeling, and practical projects.",
    tags: ["5 hours 0 min", "Business Intelligence", "Power BI Basics", "Data Sources", "Power Query"],
    skillsIntro: "Data Cleaning - Dashboard Creation - Data Transformation - Data Visualization - Data Importing - Basic DAX Functions"
  }
];

const jobs = [
  "Business Intelligence Analyst",
  "Data Analyst"
];

const faqData = [
  {
    q: "What is the main focus of the program?",
    a: "The program focuses on teaching how to use Microsoft Power BI for data analysis and dashboard creation."
  },
  {
    q: "What projects will I work on?",
    a: "You will work on projects such as building a Supply Chain Dashboard and an HR Dashboard."
  }
];

const careers = [
  "Business Intelligence Analyst",
  "Data Analyst"
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
             Data Analytics <br />
             <span>Certificate Program</span>
           </h1>
     
           <div className="subHeading">
             <FaCheckCircle />
             <h3>Transform Data into Insights with Power BI</h3>
           </div>
     
           <p>
             Learn to harness the power of Microsoft Power BI to convert raw data into
             actionable insights and build interactive dashboards.
           </p>
     
           {/* STATS */}
           <div className="statsGrid">
     
             <div className="statCard">
               <div className="iconBox">
                 <FaBookOpen />
               </div>
     
               <div>
                 <h4>1</h4>
                 <span>Courses</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaThLarge />
               </div>
     
               <div>
                 <h4>46</h4>
                 <span>Lessons</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaClock />
               </div>
     
               <div>
                 <h4>5 hours 0 min</h4>
                 <span>Known course time</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaChartBar />
               </div>
     
               <div>
                 <h4>Beginner-friendly</h4>
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
              alt="Data Analytics Certificate"
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
    The Data Analytics Certificate Program introduces students to the essential skills and tools needed for effective data analysis using Microsoft Power BI. This course is designed for those new to data analytics, focusing on transforming raw data into comprehensive visual dashboards.
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
    Participants will learn to connect to various data sources, clean and transform datasets, and model data relationships. The curriculum also covers using DAX for advanced calculations, ensuring a comprehensive understanding of creating impactful data visualizations.
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

        <h2>What You'll Be Able To Do</h2>
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
        <h3>6</h3>
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
          4 skills
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
          2 skills
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

    <div className="tech-pill">
      <FaCloud />
      <span>Microsoft Power BI</span>
    </div>

    <div className="tech-pill">
      <FaServer />
      <span>Power Query</span>
    </div>

    <div className="tech-pill">
      <FaChartBar />
      <span>DAX</span>
    </div>

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
              <h4>Stage 1: Fundamentals</h4>
              <p>Introduction to Power BI fundamentals, focusing on data import, cleaning, and visualization basics.</p>
              <div className="skill-tags">
                <span>Power BI Fundamentals | Certificate</span>
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
      
      <h3>1 Phase Structured Learning</h3>
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
        <li><span className="check-icon">✓</span> 1 Core Structured Phase</li>
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

    <h2>Courses In This Certificate Program</h2>
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
            CERTIFICATE PROGRAM
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
          <p>9 curriculum-grounded skills</p>
        </div>
      </div>

      {/* Skills Badges Grid */}
      <div className="ph-badges-grid">
           <div className="ph-badge">
                <Globe size={15} className="ph-badge-icon" />
                <span>Microsoft Power BI</span>
              </div>
              <div className="ph-badge">
                <Network size={15} className="ph-badge-icon" />
                <span>Power Query</span>
              </div>
              <div className="ph-badge">
                <Users size={15} className="ph-badge-icon" />
                <span>DAX</span>
              </div>
              <div className="ph-badge">
                <Monitor size={15} className="ph-badge-icon" />
                <span>Using Power Query</span>
              </div>
              <div className="ph-badge">
                <Cpu size={15} className="ph-badge-icon" />
                <span>Building Dashboards</span>
              </div>
              <div className="ph-badge">
                <Shield size={15} className="ph-badge-icon" />
                <span>Data Modeling in Power BI</span>
              </div>
              <div className="ph-badge">
                <Server size={15} className="ph-badge-icon" />
                <span>Applying DAX</span>
              </div>
              <div className="ph-badge">
                <Cloud size={15} className="ph-badge-icon" />
                <span>Data Analysis</span>
              </div>
              <div className="ph-badge">
                <ShieldAlert size={15} className="ph-badge-icon" />
                <span>Reporting</span>
              </div>
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
  <div className="reviews-top">
    <div>
      <span className="mini-title">FEEDBACK ACROSS THE CURRICULUM</span>
      <h2>Program Reviews</h2>
      <p className="reviews-subtitle">Real experiences. Real impact.</p>
    </div>
    <div className="rating-box">
      <h3>★ 4.8</h3>
      <span>Program average across all Course ratings</span>
    </div>
  </div>

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
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}