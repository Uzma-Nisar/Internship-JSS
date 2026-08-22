import React from "react";
import "./System.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/systeme.jpg";



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
 "Configure and troubleshoot networks",
"Utilize network analysis tools like Wireshark",
"Implement network security protocols",
"Set up and manage cloud-based solutions",
"Install and configure Windows Server environments",
"Manage Active Directory services",
"Deploy and manage virtual machines",
];


const technicalSkills = [
 "Network Configuration",
      "Network Security",
      "Switching and Routing"
];


const server = [
"Server Installation",
      "Active Directory Management",
      "Windows Server Administration"
];


const clouds = [
 "Azure Management",
      "Cloud Deployment Models",
      "Virtual Machine Management"
];

const professionalSkills = [
 "Linux OS Configuration",
      "Shell Scripting",
      "File System Navigation"
];

const reviews = [
  {
    name: "Ayesha",
    date: "August 6, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "I would highly recommend this program to anyone looking to build practical IT skills. The hands-on labs and real-world focus made a huge difference in my learning journey."
  },
  {
    name: "Muhammad",
    date: "July 18, 2026",
    course: "Windows Server Administrator | Certificate",
    text: "Excellent course structure with practical labs and clear explanations."
  },
  {
    name: "Fatima",
    date: "June 25, 2026",
    course: "Cloud Administrator | Basics",
    text: "The networking and cloud modules were easy to follow and very informative."
  },
  {
    name: "Ali",
    date: "June 10, 2026",
    course: "Windows Server Administrator | Certificate",
    text: "I gained confidence managing real IT environments and Active Directory."
  },
  {
    name: "Zainab",
    date: "May 28, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "Security concepts and firewall management were explained in a very practical way."
  },
  {
    name: "Hamza",
    date: "May 15, 2026",
    course: "CompTIA Linux+ (XK0-005)",
    text: "Loved the hands-on Linux system configuration and troubleshooting exercises."
  },
  {
    name: "Zain",
    date: "April 20, 2026",
    course: "Powershell Basics & Skills",
    text: "PowerShell scripting and automation techniques were extremely helpful."
  },
  {
    name: "Bilal",
    date: "April 2, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "The program prepared me well for entry-level systems engineering positions."
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
    title: "Network & Systems Administration Core Skills",
    duration: "28 hours 0 min",
    desc: "This course provides essential skills in network and systems administration for entry-level IT roles.",
    tags: ["Networking Basics", "Network Cabling and Hardware Devices", "Network Addressing and Services", "Network Security", "Firewalls and Intrusion Detection"]
  },
  {
    no: 2,
    title: "Windows Server Administrator | Certificate",
    duration: "15 hours 43 min",
    desc: "The Windows Server Administrator Certificate course is designed for IT professionals aiming to enhance their server management skills through practical labs and real-world scenarios.",
    tags: ["Installation and Administration", "Identity Services", "Network Infrastructure Services", "Storage Management"]
  },
  {
    no: 3,
    title: "Cloud Administrator | Basics",
    duration: "19 hours 56 min",
    desc: "The Cloud Administrator Basics course provides a comprehensive introduction to cloud computing with a focus on Microsoft Azure. It covers core cloud concepts, Azure architecture, services, and management tools, ideal for beginners and those transitioning to cloud roles.",
    tags: ["Core Cloud Concepts", "Azure Architecture", "Azure Services", "Management and Governance"]
  },
  {
    no: 4,
    title: "CompTIA Linux+ (XK0-005)",
    duration: "14 hours 0 min",
    desc: "This course provides hands-on experience in managing, configuring, and maintaining Linux operating systems, aligning with the CompTIA Linux+ (XK0-005) certification exam.",
    tags: ["Linux Lab Setup", "File and Directory Management", "File Editing", "Access Control"]
  },
  {
    no: 5,
    title: "Powershell Basics & Skills",
    duration: "14 hours 0 min",
    desc: "Explore PowerShell fundamentals and advanced skills for hybrid system administration.",
    tags: ["PowerShell Basics", "PowerShell Skills"]
  }
];

const jobs = [
  "Network Engineer",
"System Administrator",
"Cloud Administrator",
"Windows Administrator",
"Linux System Administrator"
];

const faqData = [
  {
    q: "What are the prerequisites for this program?",
    a: "Basic understanding of IT concepts and experience with Windows operating systems are required."
  },
  {
   q: "What roles can I pursue after completing the program?",
    a: "You can pursue roles such as Network Engineer, System Administrator, or Cloud Administrator."
  },
  
];

const careers = [
 "Network Engineer",
"System Administrator",
"Cloud Administrator",
"Windows Administrator",
"Linux System Administrator",
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
        Systems Engineer  <br />
        <span>Certificate</span> Program
      </h1>

      <div className="subHeading">
        <FaCheckCircle />
        <h3>Build a Solid Foundation in Systems Engineering</h3>
      </div>

      <p>
       Develop critical skills in network administration, server management, and cloud services to excel as a systems engineer.
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
            <h4>589</h4>
            <span>Lessons</span>
          </div>
        </div>

        <div className="statCard">
          <div className="iconBox">
            <FaClock />
          </div>

          <div>
            <h4>91h 39min</h4>
            <span>Estimated Time</span>
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
          Preview the full curriculum
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
        alt="IT Support Certificate"
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
    he Systems Engineer Certificate Program is crafted to provide a comprehensive pathway for those seeking careers in systems engineering and administration. This program covers essential and advanced topics including network and systems administration, cloud services, and server management.
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
    Begin with foundational skills in network and systems administration, progressing through server management and cloud services, supplemented by Linux systems and PowerShell scripting. This comprehensive curriculum ensures that participants gain an integrated understanding of the systems engineering discipline.
  </p>

  <div className="highlights-grid">

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineBookOpen />
      </div>

      <div>
        <h4>Core Courses</h4>
        <p>
          Students begin with foundational skills in network and systems administration, progressing through server management and cloud services.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUser />
      </div>

      <div>
        <h4>Learning Pathway</h4>
        <p>
          Each course is strategically designed to build upon the previous, ensuring a deep and integrated understanding of the systems engineering discipline.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineShieldCheck />
      </div>

      <div>
        <h4>Practical Experiance</h4>
        <p>
         Engage in real-world projects like configuring DHCP and DNS servers, deploying virtual machines, and integrating cloud solutions to gain hands-on experience.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUsers />
      </div>

      <div>
        <h4>Advanced Tools</h4>
        <p>
         Supplemented heavily with Linux systems and PowerShell scripting to prepare you for modern IT infrastructure environments.
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

    {/* Networking Skills */}

    <div className="skillCard technicalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon techIcon">
            <HiOutlineComputerDesktop />
          </div>

          <h3>Networking  Skills</h3>

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

       {/* Server Management */}

    <div className="skillCard technicalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon techIcon">
            <HiOutlineComputerDesktop />
          </div>

          <h3>Server Management </h3>

        </div>

        <div className="skillBadge">
          3 skills
        </div>

      </div>

      <div className="skillList">

        {server.map((skill, index) => (
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


       {/* Cloud Administration */}

    <div className="skillCard technicalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon techIcon">
            <HiOutlineComputerDesktop />
          </div>

          <h3>Cloud Administration </h3>

        </div>

        <div className="skillBadge">
          3 skills
        </div>

      </div>

      <div className="skillList">

        {clouds.map((skill, index) => (
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

    {/* Linux Systems */}

    <div className="skillCard professionalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon proIcon">
            <HiOutlineUserGroup />
          </div>

          <h3>Linux Systems</h3>

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
      <span>Cisco IOS</span>
    </div>

    <div className="tech-pill">
      <FaNetworkWired />
      <span>Wireshark</span>
    </div>

    <div className="tech-pill">
      <FaUsers />
      <span>Windows Server 2019</span>
    </div>

    <div className="tech-pill">
      <FaWindows />
      <span>Azure</span>
    </div>

    <div className="tech-pill">
      <FaLinux />
      <span>Active Directory</span>
    </div>

    <div className="tech-pill">
      <FaShieldAlt />
      <span>PowerShell</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Hyper-V</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Ubuntu</span>
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
          <h4>Foundations</h4>
          <p>Begin with fundamental skills in network and systems administration.</p>
            <span>Network & Systems Administration Core Skills</span>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaShieldAlt />
        </div>
        <div className="timeline-card">
          <h4>Skills Enhancement</h4>
          <p>Advance server management skills with practical labs and scenarios.</p>
          <div className="skill-tags">
            <span>Windows Server Administrator | Certificate</span>
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaDesktop />
        </div>
        <div className="timeline-card">
          <h4>Introduction</h4>
          <p>Learn the basics of cloud administration, focusing on Microsoft Azure.</p>
          <div className="skill-tags">
            <span>Cloud Administrator | Basics</span>
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaBriefcase />
        </div>
        <div className="timeline-card">
          <h4>Certificate Program</h4>
          <p>Gain proficiency in Linux systems as per CompTIA Linux+ standards.</p>
          <div className="skill-tags">
            <span>CompTIA Linux+ (XK0-005)</span>
          </div>
        </div>
      </div>

        <div className="timeline-step">
        <div className="timeline-marker">
          <FaDesktop />
        </div>
        <div className="timeline-card">
          <h4>Foundational</h4>
          <p>Master PowerShell for hybrid system administration.</p>
          <div className="skill-tags">
            <span>Powershell Basics & Skills</span>
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
          <p>24 curriculum-grounded skills</p>
        </div>
      </div>

      {/* Skills Badges Grid */}
      <div className="ph-badges-grid">
        <div className="ph-badge">
          <Globe size={15} className="ph-badge-icon" />
          <span>Cisco IOS</span>
        </div>
        <div className="ph-badge">
          <Network size={15} className="ph-badge-icon" />
          <span>Wireshark</span>
        </div>
        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>Windows Server 2019</span>
        </div>
        <div className="ph-badge">
          <Monitor size={15} className="ph-badge-icon" />
          <span>Azure</span>
        </div>
        <div className="ph-badge">
          <Cpu size={15} className="ph-badge-icon" />
          <span>Active Directory</span>
        </div>
        <div className="ph-badge">
          <Shield size={15} className="ph-badge-icon" />
          <span>PowerShell</span>
        </div>
        <div className="ph-badge">
          <Server size={15} className="ph-badge-icon" />
          <span>Hyper-V</span>
        </div>
        <div className="ph-badge">
          <Cloud size={15} className="ph-badge-icon" />
          <span>Ubuntu</span>
        </div>
        <div className="ph-badge">
          <ShieldAlert size={15} className="ph-badge-icon" />
          <span>Network Setup</span>
        </div>
        <div className="ph-badge">
          <Share2 size={15} className="ph-badge-icon" />
          <span>Server Installation</span>
        </div>
        <div className="ph-badge">
          <Wrench size={15} className="ph-badge-icon" />
          <span>Active Directory Management</span>
        </div>
        <div className="ph-badge">
          <Laptop size={15} className="ph-badge-icon" />
          <span>Azure Resource Management</span>
        </div>
        <div className="ph-badge">
          <Lock size={15} className="ph-badge-icon" />
          <span>Linux OS Configuration</span>
        </div>
        <div className="ph-badge">
          <Activity size={15} className="ph-badge-icon" />
          <span>Problem Solving</span>
        </div>
        <div className="ph-badge">
          <MessageSquare size={15} className="ph-badge-icon" />
          <span>Technical Communication</span>
        </div>
        <div className="ph-badge">
          <Lightbulb size={15} className="ph-badge-icon" />
          <span>Troubleshooting</span>
        </div>
        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>System Administration</span>
        </div>
        <div className="ph-badge">
          <Clock size={15} className="ph-badge-icon" />
          <span>Network Configuration</span>
        </div>
        <div className="ph-badge">
          <Briefcase size={15} className="ph-badge-icon" />
          <span>Network Security</span>
        </div>
        <div className="ph-badge">
          <Terminal size={15} className="ph-badge-icon" />
          <span>Switching and Routing</span>
        </div>
        <div className="ph-badge">
          <Server size={15} className="ph-badge-icon" />
          <span>Windows Server Administration</span>
        </div>
        <div className="ph-badge">
          <Cloud size={15} className="ph-badge-icon" />
          <span>Azure Management</span>
        </div>
        <div className="ph-badge">
          <ShieldAlert size={15} className="ph-badge-icon" />
          <span>Cloud Deployment Models</span>
        </div>
        <div className="ph-badge">
          <Activity size={15} className="ph-badge-icon" />
          <span>Virtual Machine Management</span>
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

    </div>

<PricingModal
  isOpen={isPricingOpen}
  onClose={() => setIsPricingOpen(false)}
/>

    
    </>
  );
}
