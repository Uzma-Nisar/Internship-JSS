import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/wi.jpg";



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
  "Set up and configure workstations.",
  "Manage and troubleshoot software installations.",
  "Establish and maintain network configurations.",
  "Implement robust security measures.",
  "Utilize Active Directory for user management.",
  "Communicate effectively in professional settings."
];

const technicalSkills = [
  "Workstation Setup",
  "Software Installation",
  "Network Configuration",
  "Security Implementation",
  "Troubleshooting Techniques",
  "Active Directory Configuration"
];

const professionalSkills = [
  "Communication Techniques",
  "Listening Skills",
  "Teamwork",
  "Time Management",
  "Problems Solving",
  "Network and Build Professional Connections"
];

const reviews = [
  {
    name: "Learner",
    date: "August 6, 2026",
    course: "IT Support: Active Directory and Tech Skills",
    text: "I recommended"
  }
];

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>

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
    title: "Modern IT Support Training: Part 1 | A+ (220-1102)",
    duration: "35 hours 54 min",
    desc: "This course provides foundational IT support skills, emphasizing Windows OS management, networking, security, and troubleshooting.",
    tags: ["Operating Systems", "Network Fundamentals", "Security", "Software Troubleshooting"],
    skillsIntro: "Workstation Setup · Software Installation · Network Configuration · Security Implementation · Troubleshooting Techniques"
  },
  {
    no: 2,
    title: "Modern IT Support Training: Part 2 | A+ (220-1101)",
    duration: "12 hours 0 min",
    desc: "The course provides foundational understanding of IT support, focusing on mobile devices, networking, hardware, virtualization, cloud computing, and troubleshooting methodologies.",
    tags: ["Mobile Devices", "Networking", "Hardware", "Virtualization and Cloud Computing"],
    skillsIntro: "IT Support Skills · Troubleshooting Methods · Networking Basics"
  },
  {
    no: 3,
    title: "IT Support: Active Directory and Tech Skills",
    duration: "11 hours 0 min",
    desc: "This course focuses on IT support skills specific to Active Directory and system management, covering user management, group policies, and ticketing systems. It includes practical learning through sandbox labs.",
    tags: ["Active Directory", "Group Policy", "Ticketing Systems", "Safety in IT"],
    skillsIntro: "User Management · System Configuration · Security Management · Group Policy Implementation · Ticketing Systems Use · Safety Practices in IT"
  },
  {
    no: 4,
    title: "IT Support: People Skills for IT Professionals",
    duration: "9 hours 0 min",
    desc: "This course enhances IT support roles by focusing on people skills and professional communication. It covers essential skills like listening, managing difficult conversations, time management, teamwork, and troubleshooting in IT support.",
    tags: ["Professional Communication", "Listening Skills", "Difficult Conversations", "Phone and Remote Support"],
    skillsIntro: "Professional Communication · Effective Listening · Managing Difficult Conversations · Time Management · Teamwork · Troubleshooting"
  },
  {
    no: 5,
    title: "IT Support Resume, Applying for Jobs and Communities",
    duration: "8 hours 0 min",
    desc: "This course focuses on building resumes, job searching, interview preparation, and joining IT communities for aspiring IT support professionals.",
    tags: ["Resume Building", "Job Search Strategies", "Interview Preparation", "Joining IT Communities"],
    skillsIntro: "Networking · Resume building · Job searching · Interview techniques"
  }
];

const careers = [
  "IT Support Technician",
  "Help Desk Technician",
  "Junior System Administrator",
  "Network Administrator"
];

const faqData = [
  {
    q: "Are there any prerequisites for this program?",
    a: "Basic IT knowledge is recommended but not required."
  },
  {
    q: "What kind of careers can I pursue after completing this program?",
    a: "Graduates can pursue roles as IT Support Technicians, Help Desk Technicians, or Junior System Administrators."
  }
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
        <div className="breadcrumb-container">
    <a href="/" className="breadcrumb-item">Home</a>
    <span className="breadcrumb-separator">›</span>
    <span className="breadcrumb-item active"> Working As an IT support Technician Program</span>
  </div>
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
             Working as an IT <br />
             Support Technician | <span>Free Online Program</span>
           </h1>
   
           <div className="subHeading">
             <FaCheckCircle />
             <h3>Build a career in IT Support with foundational skills.</h3>
           </div>
   
           <p>
             This program provides essential IT support skills, core technical
             knowledge, and professional development for aspiring IT support
             technicians.
           </p>
   
           {/* STATS */}
           <div className="statsGrid">
   
             <div className="statCard">
               <div className="iconBox">
                 <FaBookOpen />
               </div>
               <div>
                 <h4>5</h4>
                 <span>Courses</span>
               </div>
             </div>
   
             <div className="statCard">
               <div className="iconBox">
                 <FaThLarge />
               </div>
               <div>
                 <h4>528</h4>
                 <span>Lessons</span>
               </div>
             </div>
   
             <div className="statCard">
               <div className="iconBox">
                 <FaClock />
               </div>
               <div>
                 <h4>71 hours 54 min</h4>
                 <span>Known course time</span>
               </div>
             </div>
   
             <div className="statCard">
               <div className="iconBox">
                 <FaChartBar />
               </div>
               <div>
                 <h4>Beginner to Intermediate</h4>
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
           <div>
             <img
               src={heroImage}
               alt="IT Support Technician Certificate"
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
          The Working as an IT Support Technician program is designed to equip learners with the essential skills and knowledge required for a successful career in IT support. This comprehensive program covers foundational topics such as operating systems, network fundamentals, security, software troubleshooting, and hardware configuration.
        </p>

        <div className="highlights-header">
          <div className="highlight-icon">
            <HiOutlineSparkles />
          </div>
          <div>
            <h2>Program Structure</h2>
            <div className="title-line"></div>
          </div>
        </div>

        <p className="highlights-description">
          The program includes five courses, each focusing on a critical area of IT support. From understanding operating systems to mastering people skills essential for professional growth, learners will be prepared for various challenges in the IT support domain.
        </p>

        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="card-icon">
              <HiOutlineBookOpen />
            </div>
            <div>
              <h4>Hands-On Experience</h4>
              <p>
                To ensure practical learning, the program includes sandbox lab exercises, ticketing simulations, and hands-on demos, providing real-world scenarios to develop troubleshooting techniques and system management skills.
              </p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="card-icon">
              <HiOutlineUser />
            </div>
            <div>
              <h4>Career Preparation</h4>
              <p>
                Upon completion, learners will be equipped to pursue entry-level roles in IT support, help desk positions, and junior system administration. The program also offers guidance in resume building, job searching, and interview preparation.
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
              <h3>12</h3>
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
                6 skills
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

      {/* TECHNOLOGIES COVERED */}
      <section className="tech-stack-section">
        <div className="section-header">
          <span className="section-label">TECHNOLOGY STACK</span>
          <h2>Technologies Covered</h2>
        </div>

        <div className="tech-grid">
          <div className="tech-pill">
            <FaWindows />
            <span>Windows OS</span>
          </div>
          <div className="tech-pill">
            <FaDesktop />
            <span>macOS</span>
          </div>
          <div className="tech-pill">
            <FaLinux />
            <span>Linux</span>
          </div>
          <div className="tech-pill">
            <FaCloud />
            <span>Azure</span>
          </div>
          <div className="tech-pill">
            <FaUsers />
            <span>Active Directory</span>
          </div>
        </div>
      </section>

      {/* PROGRAM ROADMAP */}
      <section id="roadmap" className="program-roadmap">
        <div className="geo-bg-grid"></div>
        <div className="geo-shape shape-1"></div>
        <div className="geo-shape shape-2"></div>
        <div className="geo-shape shape-3"></div>

        <div className="roadmap-header">
          <span className="roadmap-subtitle">LEARNING ROADMAP</span>
          <h2 className="roadmap-title">
            Your Path Through the <span className="text-gradient">Program</span>
          </h2>
          <div className="title-bar"></div>
        </div>

        <div className="roadmap-body">
          <div className="timeline-container">
            <div className="timeline-step">
              <div className="timeline-marker">1</div>
              <div className="timeline-card">
                <h4>Foundation</h4>
                <p>Gain foundational IT support skills focusing on operating systems, networking, and security.</p>
                <div className="skill-tags">
                  <span>Modern IT Support Training: Part 1 | A+ (220-1102)</span>
                </div>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-marker">2</div>
              <div className="timeline-card">
                <h4>Part 2 of IT Support Training Series</h4>
                <p>Deepen knowledge in mobile devices, hardware, virtualization, and cloud computing.</p>
                <div className="skill-tags">
                  <span>Modern IT Support Training: Part 2 | A+ (220-1101)</span>
                </div>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-marker">3</div>
              <div className="timeline-card">
                <h4>Foundational</h4>
                <p>Master Active Directory, group policies, and ticketing systems with practical labs.</p>
                <div className="skill-tags">
                  <span>IT Support Active Directory and Tech Skills</span>
                </div>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-marker">4</div>
              <div className="timeline-card">
                <h4>Professional Development</h4>
                <p>Develop crucial people skills, including professional communication and teamwork.</p>
                <div className="skill-tags">
                  <span>IT Support People Skills for IT Professionals</span>
                </div>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-marker">5</div>
              <div className="timeline-card">
                <h4>Pre-professional</h4>
                <p>Prepare for IT job applications with resume building and interview preparation.</p>
                <div className="skill-tags">
                  <span>IT Support Resume, Applying for Jobs and Communities</span>
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

          <div className="roadmap-side-card">
            <div className="card-pill">MILESTONE TRACKER</div>
            <h3>5 Phase Structured Learning</h3>
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
              <li><span className="check-icon">✓</span> 5 Core Structured Phases</li>
              <li><span className="check-icon">✓</span> Hands-on Practical Projects</li>
              <li><span className="check-icon">✓</span> Industry Recognized Certificate</li>
            </ul>

            <button className="roadmap-btn">
              Start Journey <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* COURSES */}
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

      {/* PROJECTS */}
      <section id="projects" className="ph-section">
        <div className="ph-bg-dots"></div>

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

        <div className="ph-container">
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

            <div className="ph-badges-grid">
              <div className="ph-badge"><Globe size={15} className="ph-badge-icon" /><span>Windows OS</span></div>
              <div className="ph-badge"><Network size={15} className="ph-badge-icon" /><span>macOS</span></div>
              <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>Linux</span></div>
              <div className="ph-badge"><Monitor size={15} className="ph-badge-icon" /><span>Azure</span></div>
              <div className="ph-badge"><Cpu size={15} className="ph-badge-icon" /><span>Active Directory</span></div>
              <div className="ph-badge"><Shield size={15} className="ph-badge-icon" /><span>Network Configuration</span></div>
              <div className="ph-badge"><Server size={15} className="ph-badge-icon" /><span>Software Troubleshooting</span></div>
              <div className="ph-badge"><Cloud size={15} className="ph-badge-icon" /><span>Security Implementation</span></div>
              <div className="ph-badge"><ShieldAlert size={15} className="ph-badge-icon" /><span>Active Directory Management</span></div>
              <div className="ph-badge"><Share2 size={15} className="ph-badge-icon" /><span>Virtualization</span></div>
              <div className="ph-badge"><Wrench size={15} className="ph-badge-icon" /><span>Communication Techniques</span></div>
              <div className="ph-badge"><Laptop size={15} className="ph-badge-icon" /><span>Problem Solving</span></div>
              <div className="ph-badge"><Lock size={15} className="ph-badge-icon" /><span>Teamwork</span></div>
              <div className="ph-badge"><Activity size={15} className="ph-badge-icon" /><span>Time Management</span></div>
              <div className="ph-badge"><MessageSquare size={15} className="ph-badge-icon" /><span>Workstation Setup</span></div>
              <div className="ph-badge"><Lightbulb size={15} className="ph-badge-icon" /><span>Software Installation</span></div>
              <div className="ph-badge"><Clock size={15} className="ph-badge-icon" /><span>Troubleshooting Techniques</span></div>
              <div className="ph-badge"><Briefcase size={15} className="ph-badge-icon" /><span>Active Directory Configuration</span></div>
              <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Listening Skills</span></div>
              <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>Network and Build Professional Connections</span></div>
            </div>
          </div>

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

            <div className="ph-cloud-graphic">
              <div className="ph-cloud-shape">
                <Lock size={20} className="ph-lock-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
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

      {/* FAQ */}
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

      {/* FOOTER */}
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
