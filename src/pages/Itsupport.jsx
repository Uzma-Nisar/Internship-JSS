import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/herosec.jpg";



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
  "Understand hardware configurations",
  "Address hardware issues",
  "Support mobile devices",
  "Install and upgrade operating systems",
  "Configure network settings",
  "Implement security protocols",
  "Deploy applications and system services",
  "Identify and remove malware",
  "Manage user and organizational details",
  "Configure and manage Active Directory",
];


const technicalSkills = [
  "Network Configuration",
  "Hardware Troubleshooting",
  "Operating System Deployment",
  "Security Protocol Configuration",
  "System Resource Management",
  "Using Command-line Tools",
];

const professionalSkills = [
  "Technical Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Professionalism",
];

const reviews = [
  {
    name: "Learner",
    date: "August 6, 2026",
    course: "IT Support: Active Directory and Tech Skills",
    text: "I would highly recommend this program to anyone looking to build practical IT skills. The hands-on labs and real-world focus made a huge difference in my learning journey."
  },

  {
    name: "Michael",
    date: "July 18, 2026",
    course: "Modern IT Support Training",
    text: "Excellent course structure with practical labs and clear explanations."
  },

  {
    name: "Sophia",
    date: "June 25, 2026",
    course: "Networking Fundamentals",
    text: "The networking modules were easy to follow and very informative."
  },

  {
    name: "Daniel",
    date: "June 10, 2026",
    course: "Windows Administration",
    text: "I gained confidence managing real IT environments."
  },

  {
    name: "Olivia",
    date: "May 28, 2026",
    course: "Cyber Security Essentials",
    text: "Security concepts were explained in a very practical way."
  },

  {
    name: "Emma",
    date: "May 15, 2026",
    course: "Hardware Troubleshooting",
    text: "Loved the hands-on troubleshooting exercises."
  },

  {
    name: "James",
    date: "April 20, 2026",
    course: "Professional Skills",
    text: "Resume building and interview preparation were extremely helpful."
  },

  {
    name: "William",
    date: "April 2, 2026",
    course: "IT Career Preparation",
    text: "The program prepared me well for entry-level IT positions."
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
    title: "Modern IT Support Training: 220-1201 (Core 1)",
    duration: "20 Hours",
    desc: "Build core IT support skills and lay a solid foundation.",
    tags: ["IT Fundamentals","Hardware","Software","Networking"]
  },
  {
    no: 2,
    title: "Modern IT Support Training: 220-1202 (Core 2)",
    duration: "22 Hours",
    desc: "Dive deeper into device configuration and security.",
    tags: ["OS Installation","Security","Troubleshooting"]
  },
  {
    no: 3,
    title: "IT Support: Active Directory and Tech Skills",
    duration: "18 Hours",
    desc: "Master Active Directory and user management.",
    tags: ["Active Directory","Permissions","Group Policy"]
  },
  {
    no: 4,
    title: "IT Support: People Skills for IT Professionals",
    duration: "18 Hours",
    desc: "Customer engagement and communication skills.",
    tags: ["Communication","Teamwork","Conflict Resolution"]
  },
  {
    no: 5,
    title: "Resume, Applying for Jobs and Communities",
    duration: "10 Hours",
    desc: "Interview preparation and networking.",
    tags: ["Resume","LinkedIn","Job Search"]
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
    q:"What are the prerequisites for this program?",
    a:"No prior experience is required."
  },
  {
    q:"How long do I have access?",
    a:"You get access according to your subscription plan."
  },
  {
    q:"Will I receive a certificate?",
    a:"Yes, after successful completion."
  },
  {
    q:"Are there exams?",
    a:"Practical assessments and quizzes are included."
  }
];

const careers = [
  "IT Support Specialist",
  "Technical Support Associate",
  "Systems Administrator",
  "Desktop Support Technician",
  "Help Desk Technician",
  "Remote IT Technician",
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
        IT Support <br />
        <span>Certificate</span> Program
      </h1>

      <div className="subHeading">
        <FaCheckCircle />
        <h3>Empower Your IT Support Career</h3>
      </div>

      <p>
        Gain comprehensive skills in IT support, from networking
        configurations to security protocols, enhancing both technical
        and professional proficiencies.
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
            <h4>419</h4>
            <span>Lessons</span>
          </div>
        </div>

        <div className="statCard">
          <div className="iconBox">
            <FaClock />
          </div>

          <div>
            <h4>56h 0m</h4>
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
    The IT Support Certificate Program equips learners with the essential
    skills required for a successful career in IT support. Spanning five
    intensive courses, this program focuses on both foundational and
    professional development, preparing students for real-world
    challenges in IT support roles.
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
    Begin with core concepts in networking and hardware, advance through
    operating system management and security protocols, and conclude with
    career preparation in job searching and community networking. This
    comprehensive curriculum ensures that participants are not only
    technically proficient but also adept in professional communication
    and teamwork.
  </p>

  <div className="highlights-grid">

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineBookOpen />
      </div>

      <div>
        <h4>Comprehensive Curriculum</h4>
        <p>
          5 intensive courses covering essential IT support skills.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUser />
      </div>

      <div>
        <h4>Career Focused</h4>
        <p>
          Designed to prepare you for real-world IT support roles.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineShieldCheck />
      </div>

      <div>
        <h4>Practical Learning</h4>
        <p>
          Hands-on experience with tools and troubleshooting.
        </p>
      </div>
    </div>

    <div className="highlight-card">
      <div className="card-icon">
        <HiOutlineUsers />
      </div>

      <div>
        <h4>Professional Growth</h4>
        <p>
          Develop communication, teamwork and problem-solving skills.
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
        <h3>11</h3>
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
          5 skills
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
      <span>DNS</span>
    </div>

    <div className="tech-pill">
      <FaNetworkWired />
      <span>DHCP</span>
    </div>

    <div className="tech-pill">
      <FaUsers />
      <span>Active Directory</span>
    </div>

    <div className="tech-pill">
      <FaWindows />
      <span>Windows 11</span>
    </div>

    <div className="tech-pill">
      <FaLinux />
      <span>Ubuntu Linux</span>
    </div>

    <div className="tech-pill">
      <FaShieldAlt />
      <span>Windows Defender</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>ServiceNow</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Spiceworks Cloud</span>
    </div>

    <div className="tech-pill">
      <FaLock />
      <span>Firewall Management</span>
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
          <p>Build a strong base in IT fundamentals, hardware and software troubleshooting.</p>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaShieldAlt />
        </div>
        <div className="timeline-card">
          <h4>Technical Development</h4>
          <p>Dive deeper into OS, networking, and security concepts.</p>
          <div className="skill-tags">
            <span>Operating Systems</span>
            <span>Networking</span>
            <span>Security</span>
            <span>Troubleshooting</span>
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaDesktop />
        </div>
        <div className="timeline-card">
          <h4>Advanced</h4>
          <p>Master advanced tools and services used in real IT settings.</p>
          <div className="skill-tags">
            <span>Tools</span>
            <span>Services</span>
            <span>Best Practices</span>
          </div>
        </div>
      </div>

      <div className="timeline-step">
        <div className="timeline-marker">
          <FaBriefcase />
        </div>
        <div className="timeline-card">
          <h4>Career Preparation</h4>
          <p>Get ready for real-world roles with practical skills & resume building.</p>
          <div className="skill-tags">
            <span>Resume</span>
            <span>LinkedIn</span>
            <span>Interview Skills</span>
          </div>
        </div>
      </div>

      <div className="timeline-step is-complete">
        <div className="timeline-marker complete-icon">
          <FaAward />
        </div>
        <div className="timeline-card">
          <h4>Certificate Program Complete</h4>
          <p>You'll earn a certificate of completion and be equipped with job-ready IT skills.</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE: GLASS FEATURE CARD */}
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
          <span>DNS</span>
        </div>
        <div className="ph-badge">
          <Network size={15} className="ph-badge-icon" />
          <span>DHCP</span>
        </div>
        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>Active Directory</span>
        </div>
        <div className="ph-badge">
          <Monitor size={15} className="ph-badge-icon" />
          <span>Windows 11</span>
        </div>
        <div className="ph-badge">
          <Cpu size={15} className="ph-badge-icon" />
          <span>Ubuntu Linux</span>
        </div>
        <div className="ph-badge">
          <Shield size={15} className="ph-badge-icon" />
          <span>Windows Defender</span>
        </div>
        <div className="ph-badge">
          <Server size={15} className="ph-badge-icon" />
          <span>ServiceNow</span>
        </div>
        <div className="ph-badge">
          <Cloud size={15} className="ph-badge-icon" />
          <span>Spiceworks Cloud</span>
        </div>
        <div className="ph-badge">
          <ShieldAlert size={15} className="ph-badge-icon" />
          <span>Firewall Management</span>
        </div>
        <div className="ph-badge">
          <Share2 size={15} className="ph-badge-icon" />
          <span>Network Configuration</span>
        </div>
        <div className="ph-badge">
          <Wrench size={15} className="ph-badge-icon" />
          <span>Hardware Troubleshooting</span>
        </div>
        <div className="ph-badge">
          <Laptop size={15} className="ph-badge-icon" />
          <span>Operating System Deployment</span>
        </div>
        <div className="ph-badge">
          <Lock size={15} className="ph-badge-icon" />
          <span>Security Protocol Configuration</span>
        </div>
        <div className="ph-badge">
          <Activity size={15} className="ph-badge-icon" />
          <span>System Resource Management</span>
        </div>
        <div className="ph-badge">
          <MessageSquare size={15} className="ph-badge-icon" />
          <span>Technical Communication</span>
        </div>
        <div className="ph-badge">
          <Lightbulb size={15} className="ph-badge-icon" />
          <span>Problem Solving</span>
        </div>
        <div className="ph-badge">
          <Users size={15} className="ph-badge-icon" />
          <span>Teamwork</span>
        </div>
        <div className="ph-badge">
          <Clock size={15} className="ph-badge-icon" />
          <span>Time Management</span>
        </div>
        <div className="ph-badge">
          <Briefcase size={15} className="ph-badge-icon" />
          <span>Professionalism</span>
        </div>
        <div className="ph-badge">
          <Terminal size={15} className="ph-badge-icon" />
          <span>Using Command-line Tools</span>
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
