import React from "react";
import "./Cyber.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PricingModal from './PricingModal';
import { Facebook, Instagram, Twitter } from "react-feather";

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
  Terminal,
    BookOpen, 
  PlayCircle,  
  BarChart2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,   
  Sparkles, 
  
} from 'lucide-react';


import { FiTarget } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

const skills = [
  "Understand networking models and topologies",
  "Configure secure network environments",
  "Implement Linux-based system management",
  "Manage user access and system permissions",
  "Apply cryptographic and risk management strategies",
  ,
];


const technicalSkills = [
  "Router Configuration",
  "Switch Configuration",
  "Network Topology Identification",
];

const professionalSkills = [
  "Linux Administration",
  "Filesystem Management",
  "Container Orchestration",
];
 
const securitys =[
  "Firewall Management",
  "Encryption Solutions",
  "Incident Response",

];


const reviews = [
  {
    name: "Azlan",
    date: "August 6, 2026",
    course: "Cybersecurity Technical Skills by an Expert",
    text: "I would highly recommend this program to anyone looking to build practical cybersecurity skills. The hands-on labs with Kali Linux and SIEM tools made a huge difference in my learning journey."
  },

  {
    name: "Hashir",
    date: "July 18, 2026",
    course: "CompTIA Security+ Training (SY0-701) Part 2",
    text: "Excellent course structure with practical labs on threat analysis, risk mitigation, and clear security explanations."
  },

  {
    name: "Alina",
    date: "June 25, 2026",
    course: "Networking Fundamentals for Cybersecurity",
    text: "The networking modules, OSI model breakdowns, and IP addressing lessons were easy to follow and very informative."
  },

  {
    name: "Munaza",
    date: "June 10, 2026",
    course: "CompTIA Linux+ (XK0-005)",
    text: "I gained confidence configuring Linux systems, managing user permissions, and working with system security controls."
  },

  {
    name: "Muqadus",
    date: "May 28, 2026",
    course: "CompTIA Security+ Training (SY0-701) Part 1",
    text: "Security architecture and threat actor concepts were explained in a very practical and engaging way."
  },

  {
    name: "Raheel",
    date: "May 15, 2026",
    course: "Cybersecurity Technical Skills by an Expert",
    text: "Loved the hands-on ethical hacking and incident response exercises. Red teaming vs Blue teaming scenarios were super helpful!"
  },

  {
    name: "Mehwish",
    date: "April 20, 2026",
    course: "CompTIA Security+ Training (SY0-701) Part 2",
    text: "Learning practical cryptographic solutions and vulnerability identification was extremely valuable for my career growth."
  },

  {
    name: "Danish",
    date: "April 2, 2026",
    course: "Networking Fundamentals for Cybersecurity",
    text: "The program prepared me well for entry-level cybersecurity and network defense positions."
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
    stage: "FOUNDATIONAL",
    title: "Networking Fundamentals for Cybersecurity",
    duration: "16 hours 0 min",
    desc: "This course provides a foundational understanding of networking principles essential for a cybersecurity career.",
    tags: ["Networking Fundamentals", "Network Implementations", "Network Operations", "Network Security"],
    skillsIntroduced: "OSI and TCP-IP Models · IP Addressing (IPv4 & IPv6) · Virtualization · Wireless Encryption Standards · Security Policies · Cryptography"
  },
  {
    no: 2,
    stage: "CERTIFICATION PREPARATION",
    title: "CompTIA Linux+ (XK0-005)",
    duration: "14 hours 0 min",
    desc: "This course provides practical, hands-on experience managing and configuring Linux systems, preparing students for the CompTIA Linux+ (XK0-005) certification exam.",
    tags: ["Linux System Installation", "File and Directory Management", "File Editing", "Access Control"],
    skillsIntroduced: "Linux System Configuration · File System Navigation · User Account Management · Elevated Privilege Handling · Remote Connectivity Setup · Process Monitoring"
  },
  {
    no: 3,
    stage: "FOUNDATIONAL",
    title: "CompTIA Security+ Training (SY0-701) Part 1",
    duration: "32 hours 0 min",
    desc: "The CompTIA Security+ Training (SY0-701) Part 1 course focuses on the theoretical aspects of cybersecurity in preparation for Part 2, which is hands-on. This foundational course prepares learners for the CompTIA Security+ certification by covering essential security concepts and architectures.",
    tags: ["General Security Concepts", "Threats, Vulnerabilities, and Mitigations", "Security Architecture", "Security Operations"],
    skillsIntroduced: "Security Controls · Authentication and Authorization · Encryption Solutions · Threat Actor Identification · Vulnerability Recognition · Security Architecture Understanding"
  },
  {
    no: 4,
    stage: "MID-COURSE",
    title: "CompTIA Security+ Training (SY0-701) Part 2",
    duration: "14 hours 0 min",
    desc: "This course provides practical skills for detecting and mitigating security vulnerabilities in network infrastructures, covering areas such as cryptographic solutions, threat analysis, and data protection strategies.",
    tags: ["Security Concept Fundamentals", "Cryptographic Solutions", "Threat Vectors and Attack Surfaces", "Identifying Security Vulnerabilities"],
    skillsIntroduced: "Network security analysis · Mitigating vulnerabilities · Cryptographic techniques · Threat vector analysis · Security architecture · Data protection"
  },
  {
    no: 5,
    stage: "MID-STAGE",
    title: "Cybersecurity Technical Skills by an Expert",
    duration: "34 hours 0 min",
    desc: "The course provides comprehensive cybersecurity training, focusing on both theory and practical skills necessary for a career in cybersecurity.",
    tags: ["Kali Linux and Tools", "Network Security", "Web Application and Server Security", "SIEM"],
    skillsIntroduced: "Security Operations · Red Teaming · Blue Teaming · Ethical Hacking · Risk Management · Incident Response"
  }
];

const jobs = [
  "IT Support Specialist",
  "Help Desk Technician",
  "Desktop Support Technician",
  "Systems Support Associate",
  "Technical Support Representative",
  "Customer Support Specialist"
];

const faqData = [
  {
    q:"What certifications does the program prepare me for?",
    a:"Prepare for CompTIA Linux+ and Security+ certifications."
  },
  {
    q:"Are there any prerequisites?",
    a:"Basic IT knowledge and familiarity with command-line interfaces are recommended."
  },
];

const careers = [
   "Cybersecurity Analyst",
  "Network Security Analyst",
  "Security Engineer",
  "Systems Support Associate",
  "Technical Support Representative",
  "Linux System Administrator"
];

 function Cyber() {
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
      {/* BANNER SECTION */}
      <section>
        <div className="cyber-banner-container">
          {/* Top Right Badge */}
          <div className="program-badge">
            <Clock className="badge-icon" size={20} />
            <div>
              <span className="badge-title">SHORT TERM PROGRAM</span>
              <span className="badge-value">2–3 Months</span>
            </div>
          </div>

          <div className="cyber-content">
            {/* Left Section */}
            <div className="left-section">
              {/* Tagline Badge */}
              <div className="cert-tag">
                <ShieldCheck size={16} />
                <span>JOBSKILLSHARE CERTIFICATE PROGRAM</span>
              </div>

              {/* Main Title */}
              <h1 className="main-title">
                Cybersecurity <span className="highlight-text">Analyst</span> Certificate Program
              </h1>

              {/* Subtitle */}
              <p className="description">
                Advance your career in cybersecurity. Gain in-demand skills, 
                hands-on experience, and industry-recognized certifications.
              </p>

              {/* Stats Bar */}
              <div className="stats-grid">
                <div className="stat-card">
                  <BookOpen className="stat-icon" size={20} />
                  <div>
                    <span className="stat-num">5</span>
                    <span className="stat-label">Courses</span>
                  </div>
                </div>

                <div className="stat-card">
                  <PlayCircle className="stat-icon" size={20} />
                  <div>
                    <span className="stat-num">408</span>
                    <span className="stat-label">Lessons</span>
                  </div>
                </div>

                <div className="stat-card">
                  <Clock className="stat-icon" size={20} />
                  <div>
                    <span className="stat-num">109+ Hours</span>
                    <span className="stat-label">Estimated Time</span>
                  </div>
                </div>

                <div className="stat-card">
                  <BarChart2 className="stat-icon" size={20} />
                  <div>
                    <span className="stat-num">Intermediate</span>
                    <span className="stat-label">Difficulty</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button type="button" className="btn-primary" onClick={() => setIsPricingOpen(true)}>
                  Create Account
                  <span className="arrow-circle">
                    <ArrowRight size={16} />
                  </span>
                </button>

                <button type="button" className="btn-secondary" onClick={() => navigate("/login")}>Log In</button>

                <button type="button" className="btn-link">
                  <PlayCircle size={20} />
                  Preview Program
                </button>
              </div>

              {/* Bottom Features List */}
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Preview before joining</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Recommended learning order</span>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Progress saved after login</span>
                </div>
              </div>
            </div>

            {/* Right Section (3D Shield Graphic & Nodes) */}
            <div className="right-section">
              {/* Floating Nodes */}
              <div className="node-box node-threat">
                <ShieldAlert size={20} color="#a855f7" />
                <span>Threat Analysis</span>
              </div>

              <div className="node-box node-incident">
                <ShieldCheck size={20} color="#00e5ff" />
                <span>Incident Response</span>
              </div>

              <div className="node-box node-cloud">
                <Cloud size={20} color="#00e5ff" />
                <span>Cloud Security</span>
              </div>

              <div className="node-box node-ops">
                <Users size={20} color="#00e5ff" />
                <span>Security Operations</span>
              </div>

              {/* Main 3D Glowing Shield Display */}
              <div className="shield-display">
                <div className="pedestal-glow"></div>
                <div className="shield-3d">
                  <Lock size={64} className="lock-icon" />
                </div>
              </div>

              {/* Bottom Summary Card */}
              <div className="summary-card">
                <div className="summary-left">
                  <ShieldCheck size={28} className="summary-shield-icon" />
                  <p>
                    Your learning path to a successful cybersecurity career <span>starts here!</span>
                  </p>
                </div>
                <div className="summary-right">
                  <span>5 Courses</span>
                  <span>408 Lessons</span>
                </div>
              </div>
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
    The Cybersecurity Analyst Certificate Program equips learners with essential cybersecurity skills, including networking, Linux administration, security protocols, and threat mitigation, preparing them for successful careers and industry-recognized certifications.

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
    The program comprises five comprehensive courses, each targeting critical aspects of cybersecurity. Learners progress from understanding basic networking fundamentals to mastering security operations, incident response, and ethical hacking.
  </p>

  <div className="highlights-grid">

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineBookOpen />
      </div>

      <div>
        <h4>Foundational Skills</h4>
        <p>
          Begin with networking fundamentals and core cybersecurity principles. Learners explore the OSI and TCP/IP models while developing practical knowledge of networking concepts and essential security tools.
        </p>
      </div>
    </div>
    

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUser />
      </div>

      <div>
        <h4>Advanced Security Practices</h4>
        <p>
      Build advanced technical skills by working with Linux systems, file systems, user permissions, secure architectures, and cryptography. The program also introduces learners to common threat vectors and modern security practices.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineShieldCheck />
      </div>

      <div>
        <h4>Security & Threat Management</h4>
        <p>
          Develop a strong understanding of cybersecurity threats, vulnerabilities, and risk management. Learners explore security protocols, threat identification, incident response, and techniques used to protect systems and networks.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUsers />
      </div>

      <div>
        <h4>Practical Learning Experience</h4>
        <p>
         Apply your knowledge through hands-on exercises and real-world projects. Activities include configuring routers and switches, managing Linux servers, setting up secure environments, and solving practical cybersecurity challenges.
        </p>
      </div>
    </div>

  </div>

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
        <h3>09</h3>
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

          <h3>Networking</h3>

        </div>

        <div className="skillBadge">
          3 skills
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

          <h3>System Administration</h3>

        </div>

        <div className="skillBadge purpleBadge">
          3 skills
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


    {/* Technical Skills */}

    <div className="skillCard technicalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon techIcon">
            <HiOutlineComputerDesktop />
          </div>

          <h3>Security Engineering</h3>

        </div>

        <div className="skillBadge">
          3 skills
        </div>

      </div>

      <div className="skillList">

        {securitys.map((skill, index) => (
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

  </div>

</section>

{/* ===========================
   TECHNOLOGIES COVERED
=========================== */}

<section className="tech-stack-section">

  <div className="section-header">
    <span className="section-label">
    </span>

    <h2>Technologies Covered</h2>
  </div>

  <div className="tech-grid">

    <div className="tech-pill">
      <FaServer />
      <span>Ethernet Switching</span>
    </div>

    <div className="tech-pill">
      <FaNetworkWired />
      <span>802.11 Standards</span>
    </div>

    <div className="tech-pill">
      <FaUsers />
      <span>VPN</span>
    </div>



    <div className="tech-pill">
      <FaLinux />
      <span>Linux</span>
    </div>

    <div className="tech-pill">
      <FaShieldAlt />
      <span>Intrusion Detection System</span>
    </div>

     <div className="tech-pill">
      <FaCloud />
      <span>Contaniers</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Clouds</span>
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
    <span className="roadmap-subtitle">PROGRAM OUTCOMES</span>
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
          <h4>Foundational</h4>
          <p>Learn fundamental networking principles.</p>
          <div className="skill-tags">
            <span>Networking Fundamentals for Cybersecurity</span>
            
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaShieldAlt />
        </div>
        <div className="timeline-card">
          <h4>Certification Preparation</h4>
          <p>Master Linux systems for CompTIA Linux+ certification.</p>
          <div className="skill-tags">
            <span>CompTIA Linux+ (XK0-005)</span>
          </div>
        </div>
      </div>

        <div className="timeline-step">
        <div className="timeline-marker">
          <FaBookOpen />
        </div>
        <div className="timeline-card">
          <h4>Foundational</h4>
          <p>Understand security architectures and concepts.</p>
          <div className="skill-tags">
            <span>CompTIA Security+ Training (SY0-701) Part 1</span>

          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaDesktop />
        </div>
        <div className="timeline-card">
          <h4>Mid-course</h4>
          <p>Apply practical skills in threat analysis and mitigation.</p>
          <div className="skill-tags">
            <span>CompTIA Security+ Training (SY0-701) Part 2</span>
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaBriefcase />
        </div>
        <div className="timeline-card">
          <h4>Mid-stage</h4>
          <p>Gain expertise in security operations and ethical hacking.</p>
          <div className="skill-tags">
            <span>Cybersecurity Technical Skills by an Expert</span>
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
      
      <h3>6 Phase Structured Learning</h3>
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
        <li><span className="check-icon">✓</span> 6 Core Structured Phases</li>
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
      CERTIFICATE COURSES
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
          <p>20+ curriculum-grounded skills</p>
        </div>
      </div>

      {/* Skills Badges Grid */}
      <div className="ph-badges-grid">
        <div className="ph-badge">
          <Globe size={15} className="ph-badge-icon" />
          <span>Ethernet Switching</span>
        </div>
        <div className="ph-badge">
          <Network size={15} className="ph-badge-icon" />
          <span>802.11 Standards</span>
        </div>
       <div className="ph-badge">
          <Cpu size={15} className="ph-badge-icon" />
          <span>Linux</span>
        </div>
        <div className="ph-badge">
          <Monitor size={15} className="ph-badge-icon" />
          <span>VPN</span>
        </div>
    

        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>Intrusion Detection Systems</span>
        </div>

        <div className="ph-badge">
          <Shield size={15} className="ph-badge-icon" />
          <span>Contaniers</span>
        </div>
        <div className="ph-badge">
          <Server size={15} className="ph-badge-icon" />
          <span>Cloud</span>
        </div>
        <div className="ph-badge">
          <Cloud size={15} className="ph-badge-icon" />
          <span>Linux Administration</span>
        </div>
        <div className="ph-badge">
          <ShieldAlert size={15} className="ph-badge-icon" />
          <span>Router and Switch Configuration</span>
        </div>
        <div className="ph-badge">
          <Share2 size={15} className="ph-badge-icon" />
          <span>Encryption Solutions</span>
        </div>
        <div className="ph-badge">
          <Wrench size={15} className="ph-badge-icon" />
          <span>Incident Response</span>
        </div>
        <div className="ph-badge">
          <Laptop size={15} className="ph-badge-icon" />
          <span>Firewall Management</span>
        </div>
        <div className="ph-badge">
          <Lock size={15} className="ph-badge-icon" />
          <span>Security Policy Implementation</span>
        </div>
        <div className="ph-badge">
          <Activity size={15} className="ph-badge-icon" />
          <span>Risk Analysis</span>
        </div>
        <div className="ph-badge">
          <MessageSquare size={15} className="ph-badge-icon" />
          <span>Problem-solving</span>
        </div>
        <div className="ph-badge">
          <Lightbulb size={15} className="ph-badge-icon" />
          <span>Critical Thinking</span>
        </div>
        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>Router Configuration</span>
        </div>
        <div className="ph-badge">
          <Clock size={15} className="ph-badge-icon" />
          <span>Switch Configuration</span>
        </div>
        <div className="ph-badge">
          <Briefcase size={15} className="ph-badge-icon" />
          <span>Network Topology Identification</span>
        </div>
        <div className="ph-badge">
          <Terminal size={15} className="ph-badge-icon" />
          <span>Filesystem Management</span>
        </div>

       < div className="ph-badge">
          <Activity size={15} className="ph-badge-icon" />
          <span>Container Orchestration</span>
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


{/**Feedback */}
<section id="reviews" className="reviews-section">
  {/* YEH WALA NEW HEADER AREA APKE JSX MEIN MISSING THA - AB ADD KAR DIYA HAI */}
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

      <PricingModal
  isOpen={isPricingOpen}
  onClose={() => setIsPricingOpen(false)}
/>

    </div>
    

    
    </>
  );
}
export default Cyber;