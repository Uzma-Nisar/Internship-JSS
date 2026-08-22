import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

import heroImage from "../assets/aws.jpg";

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
  "Understand AWS core services and architecture",
  "Manage and configure virtual networks and storage",
  "Implement security groups and access controls",
  "Deploy and manage AWS instances",
  "Secure management environments",
  "Optimize computing resources",
  "Manage and monitor AWS infrastructure",
  "Enable network security and connectivity",
  "Utilize AWS serverless computing"
];

const technicalSkills = [
  "AWS Service Management",
  "Cloud Computing",
  "Virtual Networking",
  "Data Storage Management",
  "AWS Infrastructure Management"
];

const professionalSkills = [
  "Problem-solving",
  "Analytical Thinking",
  "Infrastructure Optimization",
  "Security Best Practices",
  "Project Management",
  "Collaboration"
];

const reviews = [
  {
    name: "Learner",
    date: "July 16, 2026",
    course: "AWS Cloud Administrator Course | Advance",
    text: "I just wanna appreciate you for this course and I know haven't get a job but one everything will settle and I will be working as Cloud engineer by his Grace and I really enjoy this course very well,and you know nobody knows everything.I will advice people to take the course at least I learnt how to create NACL that control inbound and outbound..."
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
    title: "AWS Cloud Administrator | Fundamentals",
    duration: "6 hours 0 min",
    desc: "This course provides a foundational understanding of AWS services, focusing on practical application through hands-on labs.",
    tags: ["AWS Fundamentals", "VPC Subnet Routing", "EC2 Elastic Compute", "EBS Storage"],
    skillsIntro: "AWS Management · Networking · Storage Solutions · Backup and Restore · Instance Management · Security Implementation"
  },
  {
    no: 2,
    title: "AWS Cloud Administrator Course | Advance",
    duration: "10 hours 0 min",
    desc: "The AWS Cloud Administrator Course | Advance equips professionals with in-depth skills to manage AWS infrastructure effectively, focusing on cloud engineering tasks rather than DevOps practices.",
    tags: ["IAM Identity and Access Management", "EC2 Elastic Compute", "Multi Factor Authentication", "AWS Billing"],
    skillsIntro: "User and group configuration · Computing resource management · Implementing MFA · Cost management and billing analysis · Policy and role management · Monitoring and logging"
  },
  {
    no: 3,
    title: "AWS DevOps Engineer Certificate",
    duration: "20 hours 0 min",
    desc: "AWS DevOps Engineer Certification focuses on mastering DevOps tools and methodologies with AWS, covering key technologies and practical projects.",
    tags: ["Version Control with Git", "Microservices with Docker", "Infrastructure as Code with Terraform", "Configuration Management with Ansible"],
    skillsIntro: "Version Control · Containerization · Infrastructure as Code · Continuous Integration/Delivery · Container Orchestration · System Monitoring"
  }
];

const careers = [
  "Entry-level AWS Cloud Administrator",
  "Junior Cloud Engineer",
  "AWS Cloud Engineer",
  "Cloud Administrator"
];

const faqData = [
  {
    q: "What is the primary focus of the program?",
    a: "The program focuses on mastering AWS services for cloud engineering and DevOps roles."
  },
  {
    q: "What skills will I gain?",
    a: "You will gain technical skills in AWS management, networking, security, DevOps practices, and infrastructure optimization."
  },
  {
    q: "Are there any prerequisites?",
    a: "Yes, basic computer skills, networking concepts, and AWS knowledge are recommended prerequisites."
  },
  {
    q: "What career opportunities can this program lead to?",
    a: "The program prepares you for roles such as AWS Cloud Administrator, Junior Cloud Engineer, and AWS Cloud Engineer."
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
                AWS Cloud Engineer <br />
                <span>Certificate Program</span>
              </h1>

              <div className="subHeading">
                <FaCheckCircle />
                <h3>Become an AWS Certified Cloud Engineer</h3>
              </div>

              <p>
                Master the skills needed for AWS Cloud engineering and management,
                gaining expertise in architectural, operational, and DevOps tools.
              </p>

              {/* STATS */}
              <div className="statsGrid">
                <div className="statCard">
                  <div className="iconBox">
                    <FaBookOpen />
                  </div>
                  <div>
                    <h4>3</h4>
                    <span>Courses</span>
                  </div>
                </div>

                <div className="statCard">
                  <div className="iconBox">
                    <FaThLarge />
                  </div>
                  <div>
                    <h4>177</h4>
                    <span>Lessons</span>
                  </div>
                </div>

                <div className="statCard">
                  <div className="iconBox">
                    <FaClock />
                  </div>
                  <div>
                    <h4>36 hours 0 min</h4>
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
              <div>
                <img
                  src={heroImage}
                  alt="AWS Cloud Engineer Certificate"
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
            The AWS Cloud Engineer Certificate Program is designed to develop comprehensive expertise in managing and optimizing AWS infrastructure. The program progresses through foundational cloud administration to specialized DevOps engineering capabilities, with a strong emphasis on practical application and real-world scenarios.
          </p>

          <div className="highlights-header">
            <div className="highlight-icon">
              <HiOutlineSparkles />
            </div>
            <div>
              <h2>Programs Highlights</h2>
              <div className="title-line"></div>
            </div>
          </div>

          <p className="highlights-description">
            Students will begin by understanding the core components of AWS, continue with advanced strategies for cloud resource management, and culminate with specialized skills in DevOps practices using AWS technologies.
          </p>

         <div className="highlights-grid">
         
             <div className="highlight-card">
               <div className="card-icon">
                 <HiOutlineBookOpen />
               </div>
         
               <div>
                 <h4>Structured Curriculum</h4>
                 <p>
                   2 courses covering core and specialized Azure skills.
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
                   Designed to prepare you for roles like Azure Specialist or DevOps Engineer.
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
                   Hands-on experience through practical labs and real-world case studies.
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
                   Build expertise in cloud infrastructure and DevOps automation.
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
                  5 skills
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
            <div className="tech-pill"><FaServer /><span>AWS</span></div>
            <div className="tech-pill"><FaServer /><span>EC2</span></div>
            <div className="tech-pill"><FaServer /><span>Elastic Block Storage</span></div>
            <div className="tech-pill"><FaNetworkWired /><span>VPC</span></div>
            <div className="tech-pill"><FaServer /><span>S3</span></div>
            <div className="tech-pill"><FaServer /><span>RDS</span></div>
            <div className="tech-pill"><FaShieldAlt /><span>IAM</span></div>
            <div className="tech-pill"><FaCloud /><span>CloudWatch</span></div>
            <div className="tech-pill"><FaCloud /><span>CloudTrail</span></div>
            <div className="tech-pill"><FaLinux /><span>Docker</span></div>
            <div className="tech-pill"><FaServer /><span>Terraform</span></div>
            <div className="tech-pill"><FaServer /><span>Jenkins</span></div>
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
                  <h4>Foundational</h4>
                  <p>Gain a foundational understanding of AWS services with practical application through hands-on labs.</p>
                  <div className="skill-tags">
                    <span>AWS Cloud Administrator | Fundamentals</span>
                  </div>
                </div>
              </div>

              <div className="timeline-step">
                <div className="timeline-marker">2</div>
                <div className="timeline-card">
                  <h4>Course Completion</h4>
                  <p>Build advanced skills for managing AWS infrastructure, focusing on engineering tasks and configuration.</p>
                  <div className="skill-tags">
                    <span>AWS Cloud Administrator Course | Advance</span>
                  </div>
                </div>
              </div>

              <div className="timeline-step">
                <div className="timeline-marker">3</div>
                <div className="timeline-card">
                  <h4>Specialized</h4>
                  <p>Master AWS DevOps tools and methodologies, including version control and continuous deployment.</p>
                  <div className="skill-tags">
                    <span>AWS DevOps Engineer Certificate</span>
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
              <h3>3 Phase Structured Learning</h3>
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
                <li><span className="check-icon">✓</span> 3 Core Structured Phases</li>
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
            <span className="section-label">PROGRAM STRUCTURE</span>
            <h2>Courses in This Certificate Program</h2>
          </div>

          <div className="courses-list">
            {courses.map((course, index) => (
              <div className={`course-card color-${index + 1}`} key={index}>
                <div className="course-number">{course.no}</div>
                <div className="course-content">
                  <span className="course-label">COURSE {course.no}</span>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <div className="course-tags">
                    {course.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
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
                  <p>24 curriculum-grounded skills</p>
                </div>
              </div>

              <div className="ph-badges-grid">
                <div className="ph-badge"><Globe size={15} className="ph-badge-icon" /><span>AWS</span></div>
                <div className="ph-badge"><Network size={15} className="ph-badge-icon" /><span>EC2</span></div>
                <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>Elastic Block Storage</span></div>
                <div className="ph-badge"><Monitor size={15} className="ph-badge-icon" /><span>VPC</span></div>
                <div className="ph-badge"><Cpu size={15} className="ph-badge-icon" /><span>S3</span></div>
                <div className="ph-badge"><Shield size={15} className="ph-badge-icon" /><span>RDS</span></div>
                <div className="ph-badge"><Server size={15} className="ph-badge-icon" /><span>IAM</span></div>
                <div className="ph-badge"><Cloud size={15} className="ph-badge-icon" /><span>CloudWatch</span></div>
                <div className="ph-badge"><ShieldAlert size={15} className="ph-badge-icon" /><span>CloudTrail</span></div>
                <div className="ph-badge"><Share2 size={15} className="ph-badge-icon" /><span>Docker</span></div>
                <div className="ph-badge"><Wrench size={15} className="ph-badge-icon" /><span>Terraform</span></div>
                <div className="ph-badge"><Laptop size={15} className="ph-badge-icon" /><span>Jenkins</span></div>
                <div className="ph-badge"><Lock size={15} className="ph-badge-icon" /><span>AWS Service Management</span></div>
                <div className="ph-badge"><Activity size={15} className="ph-badge-icon" /><span>Cloud Computing</span></div>
                <div className="ph-badge"><MessageSquare size={15} className="ph-badge-icon" /><span>Virtual Networking</span></div>
                <div className="ph-badge"><Lightbulb size={15} className="ph-badge-icon" /><span>Data Storage Management</span></div>
                <div className="ph-badge"><Users size={15} className="ph-badge-icon" /><span>AWS Infrastructure Management</span></div>
                <div className="ph-badge"><Clock size={15} className="ph-badge-icon" /><span>IAM Configuration</span></div>
                <div className="ph-badge"><Briefcase size={15} className="ph-badge-icon" /><span>EC2 Management</span></div>
                <div className="ph-badge"><Terminal size={15} className="ph-badge-icon" /><span>Implementing CI/CD Pipelines</span></div>
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
              <h3>★ 4.5</h3>
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
    </>
  );
}