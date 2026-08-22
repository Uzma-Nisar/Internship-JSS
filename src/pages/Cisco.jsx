import React from "react";
import "./Itsupport.css";
import { useState, useEffect } from "react";
import PricingModal from './PricingModal'; 
import Signup from "./Signup"; 
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "react-feather";

//import heroImage from "../assets/It-support-hero.png";
import heroImage from "../assets/cisco.jpg";



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
  "Set up and manage network configurations",
  "Understand TCP/IP and OSI models",
  "Configure Cisco Routers and Switches",
  "Design and configure routing strategies",
  "Deploy VPNs using IPSEC",
  "Troubleshoot network and system issues",
  "Implement network security measures",
  "Implement and troubleshoot VLANs",
  "Implement security with ACLs"
];

const technicalSkills = [
  "Configuring Routers and Switches",
  "Troubleshooting Networks",
  "Subnetting",
  "Inter-VLAN Routing",
  "Routing Protocol Deployment"
];
const professionalSkills = [
  "Configuring Network Security",
  "Access Control Lists",
  "Implementing IPSEC VPNs"
];

const sysAdminSkills = [
  "Network Configuration",
  "System Setup",
  "Troubleshooting Cisco Devices"
];

const cloudAdminSkills = [
  "Implementing Cloud Solutions"
];

const reviews = [
  {
    name: "Learner",
    date: "July 15, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "This course provided a comprehensive understanding of core networking concepts, including IPv4 Subnetting, routing protocols like EIGRP and OSPF, and practical experience with Packet Tracer. It was very helpful for my skill development."
  },
  {
    name: "Ayesha Khan",
    date: "July 20, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "The CCNA preparation modules were extremely clear. Configuring routers, switches, and VLAN implementations in the lab helped me clear my core concepts effortlessly."
  },
  {
    name: "David Miller",
    date: "July 22, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "An exceptional entry point into networking! The lessons on network cabling, addressing, and basic security setups built a rock-solid foundation for my IT career."
  },
  {
    name: "Bilal Ahmed",
    date: "July 25, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "Packet Tracer labs made learning static and dynamic routing so intuitive. Being able to visualize data packets moving across networks cleared up all my doubts."
  },
  {
    name: "Sarah Jenkins",
    date: "July 28, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "Comprehensive and straight to the point. The deep dive into Access Control Lists (ACLs) and NAT configuration gave me the exact skills I needed for my new role."
  },
  {
    name: "Hamza Malik",
    date: "August 2, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "Very well-structured curriculum. The troubleshooting modules taught me how to approach system administration errors logically and systematically."
  },
  {
    name: "Emma Watson",
    date: "August 5, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "I loved the hands-on approach. Setting up OSPF and EIGRP routing protocols step-by-step gave me immense confidence in handling enterprise-level architecture."
  },
  {
    name: "Zainab Farooq",
    date: "August 8, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "The IP addressing and virtualization segments are top-notch. This program bridges the gap between theoretical networking and real-world implementation seamlessly."
  },
  {
    name: "Michael Brown",
    date: "August 10, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "Great pace and clear explanations. The coverage on network security safeguards and hardware management is something every beginner should study."
  },
  {
    name: "Usman Tariq",
    date: "August 12, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "IPv4 subnetting used to be my biggest weakness, but the practical examples and Packet Tracer exercises made it crystal clear. Highly recommended!"
  },
  {
    name: "Jessica Taylor",
    date: "August 14, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "A stellar course bundle! The focus on switching fundamentals and inter-VLAN routing layout is precisely what the industry demands today."
  },
  {
    name: "Tariq Mehmood",
    date: "August 16, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "The transition from basic network concepts to actual system configurations was smooth. The instructor explanations are brilliant."
  },
  {
    name: "Hannah Cooper",
    date: "August 18, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "Packet Tracer simulations felt so realistic. Testing configurations and troubleshooting link failures prepared me well for live network environments."
  },
  {
    name: "Omar Farooq",
    date: "August 20, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "Covered all exam domains thoroughly. The sections on network security and firewall setups added massive value to my technical profile."
  },
  {
    name: "Sophia Martinez",
    date: "August 22, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "Very thorough instruction on network services and hardware. It gave me the foundational edge I needed to transition into IT support and administration."
  },
  {
    name: "Ali Raza",
    date: "August 24, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "The routing protocol labs (EIGRP and OSPF) are designed brilliantly. Every network engineering student should take this course."
  },
  {
    name: "Chloe Bennett",
    date: "August 26, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "Clear, concise, and deeply practical. Mastering VLAN implementations and router configs here was a game-changer for my certification goals."
  },
  {
    name: "Fatima Noor",
    date: "August 28, 2026",
    course: "Network & Systems Administration Core Skills",
    text: "An amazing starting block. The labs on system setup and network administration utilities are clear and easy to follow."
  },
  {
    name: "Daniel Evans",
    date: "August 30, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "Extremely detailed labs. Working through complex network topologies in Packet Tracer built up my problem-solving speed significantly."
  },
  {
    name: "Noman Siddiqui",
    date: "September 1, 2026",
    course: "Cisco CCNA (200-301) Networking Skills",
    text: "The configuration walkthroughs for switches and routers are top-tier. Essential training for anyone serious about networking."
  },
  {
    name: "Grace Kelly",
    date: "September 3, 2026",
    course: "Cisco Core Networking | Packet Tracer",
    text: "Fantastic learning structure! Subnetting and dynamic routing modules are explained in the simplest yet most comprehensive way possible."
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
    duration: "20 hours 0 min",
    desc: "This course provides foundational skills for aspiring Network Engineers and System Administrators, covering network configurations, systems setup, and troubleshooting.",
    tags: ["Network Basics", "Network Cabling and Hardware", "Network Addressing and Services", "Network Security"],
    skillsIntro: "Network Configuration - System Setup - Troubleshooting - Security Setup - Routing - Switching"
  },
  {
    no: 2,
    title: "Cisco Core Networking | Packet Tracer",
    duration: "30 hours 0 min",
    desc: "Master Cisco networking concepts and skills using Packet Tracer through intensive hands-on labs and theoretical learning.",
    tags: ["IPv4 Subnetting", "Inter-VLAN Routing", "IP Routing (Static vs Dynamic)", "EIGRP"],
    skillsIntro: "Subnetting - Inter-VLAN Routing - Static and Dynamic Routing - Configuring EIGRP and OSPF - Access Control Lists - Configuring NAT"
  },
  {
    no: 3,
    title: "Cisco CCNA (200-301) Networking Skills",
    duration: "18 hours 0 min",
    desc: "Master essential skills to pass the Cisco CCNA (200-301) exam through comprehensive networking training.",
    tags: ["Networking Concepts", "IP Addressing and Virtualization Concepts", "Switching Fundamentals", "Configuring VLANs"],
    skillsIntro: "Router and Switch Configuration - Firewall Setup - IP Addressing - VLAN Implementation - Routing Principles - NAT Configuration"
  }
];

const jobs = [
  "Network Engineer",
  "System Administrator",
  "Cloud Administrator",
  "Cybersecurity Specialist",
  "Network Technician"
];

const faqData = [
  {
    q:"What are the prerequisites for this program?",
    a:"Basic computer knowledge and a basic understanding of networking concepts are required."
  },
  {
    q:"What career opportunities are available after completing this program?",
    a:"Graduates can pursue roles like Network Engineer, System Administrator, Cloud Administrator, and Cybersecurity Specialist."
  }
];

const careers = [
  "Network Engineer",
  "System Administrator",
  "Cloud Administrator",
  "Cybersecurity Specialist",
  "Network Technician"
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
             Cisco Network Engineer <br />
             <span>Certificate Program</span>
           </h1>
     
           <div className="subHeading">
             <FaCheckCircle />
             <h3>Become a Certified Cisco Network Engineer</h3>
           </div>
     
           <p>
             Gain essential skills and hands-on experience to excel as a Cisco Network
             Engineer, mastering networking concepts, configurations, and security
             protocols.
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
                 <h4>286</h4>
                 <span>Lessons</span>
               </div>
             </div>
     
             <div className="statCard">
               <div className="iconBox">
                 <FaClock />
               </div>
     
               <div>
                 <h4>68 hours 0 min</h4>
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
             alt="Cisco Network Engineer Certificate"
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
   The Cisco Network Engineer Certificate Program equips aspiring network professionals with the essential skills needed to excel in the field of IT networking and systems administration. This comprehensive curriculum covers core topics and advanced concepts, preparing learners for the Cisco CCNA certification and careers in network engineering.
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
   This program is designed for those with a basic understanding of computer networks who wish to advance their careers as Cisco Network Engineers or related roles. Ideal for aspiring network administrators and cybersecurity specialists.
 </p>

 <div className="highlights-grid">

   <div className="highlight-card">
     <div className="card-icon">
       <HiOutlineBookOpen />
     </div>

     <div>
       <h4>Set up and manage network configurations</h4>
     </div>
   </div>

   <div className="highlight-card">
     <div className="card-icon">
       <HiOutlineUser />
     </div>

     <div>
       <h4>Troubleshoot network and system issues</h4>
     </div>
   </div>

   <div className="highlight-card">
     <div className="card-icon">
       <HiOutlineShieldCheck />
     </div>

     <div>
       <h4>Implement network security measures</h4>
     </div>
   </div>

   <div className="highlight-card">
     <div className="card-icon">
       <HiOutlineUsers />
     </div>

     <div>
       <h4>Configure Cisco Routers and Switches</h4>
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
        <h3>12</h3>
        <span>CORE SKILLS</span>
      </div>
    </div>

 </div>

 <div className="skillsCardsWrapper">

    {/* Networking */}

    <div className="skillCard technicalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon techIcon">
            <HiOutlineComputerDesktop />
          </div>

          <h3>Networking</h3>

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

    {/* Security */}

    <div className="skillCard professionalCard">

      <div className="cardTop">

        <div className="cardHeading">

          <div className="cardIcon proIcon">
            <HiOutlineUserGroup />
          </div>

          <h3>Security</h3>

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

    {/* Systems Administration */}
    <div className="skillCard professionalCard">
      <div className="cardTop">
        <div className="cardHeading">
          <div className="cardIcon proIcon">
            <HiOutlineUserGroup />
          </div>
          <h3>Systems Administration</h3>
        </div>
        <div className="skillBadge purpleBadge">
          3 skills
        </div>
      </div>
      <div className="skillList">
        {sysAdminSkills.map((skill, index) => (
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

    {/* Cloud Administration */}
    <div className="skillCard professionalCard">
      <div className="cardTop">
        <div className="cardHeading">
          <div className="cardIcon proIcon">
            <HiOutlineUserGroup />
          </div>
          <h3>Cloud Administration</h3>
        </div>
        <div className="skillBadge purpleBadge">
          1 skills
        </div>
      </div>
      <div className="skillList">
        {cloudAdminSkills.map((skill, index) => (
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
      <span>Wireshark</span>
    </div>

    <div className="tech-pill">
      <FaNetworkWired />
      <span>Cisco IOS</span>
    </div>

    <div className="tech-pill">
      <FaUsers />
      <span>Ethernet</span>
    </div>

    <div className="tech-pill">
      <FaWindows />
      <span>DHCP</span>
    </div>

    <div className="tech-pill">
      <FaLinux />
      <span>DNS</span>
    </div>

    <div className="tech-pill">
      <FaShieldAlt />
      <span>IPv4/IPv6</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Cisco Routers and Switches</span>
    </div>

    <div className="tech-pill">
      <FaCloud />
      <span>Packet Tracer</span>
    </div>

    <div className="tech-pill">
      <FaLock />
      <span>NAT</span>
    </div>

    <div className="tech-pill">
      <FaLock />
      <span>IPSEC</span>
    </div>

    <div className="tech-pill">
      <FaLock />
      <span>VLANs</span>
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
      Your Path Through the <span className="text-gradient">Program</span>
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
              <h4>Core</h4>
              <p>Learn foundational skills for network configuration and systems setup.</p>
              <div className="skill-tags">
                <span>Network & Systems Administration Core Skills</span>
              </div>
            </div>
          </div>
    
          <div className="timeline-step">
            <div className="timeline-marker">
              <FaShieldAlt />
            </div>
            <div className="timeline-card">
              <h4>Networking Specialist</h4>
              <p>Master Cisco networking concepts with Packet Tracer.</p>
              <div className="skill-tags">
                <span>Cisco Core Networking | Packet Tracer</span>
              </div>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-marker">
              <FaShieldAlt />
            </div>
            <div className="timeline-card">
              <h4>Professional Development</h4>
              <p>Prepare for Cisco CCNA certification with advanced networking skills.</p>
              <div className="skill-tags">
                <span>Cisco CCNA (200-301) Networking Skills</span>
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
         <div className="ph-badge">
                <Globe size={15} className="ph-badge-icon" />
                <span>Wireshark</span>
              </div>
              <div className="ph-badge">
                <Network size={15} className="ph-badge-icon" />
                <span>Cisco IOS</span>
              </div>
              <div className="ph-badge">
                <Users size={15} className="ph-badge-icon" />
                <span>Ethernet</span>
              </div>
              <div className="ph-badge">
                <Monitor size={15} className="ph-badge-icon" />
                <span>DHCP</span>
              </div>
              <div className="ph-badge">
                <Cpu size={15} className="ph-badge-icon" />
                <span>DNS</span>
              </div>
              <div className="ph-badge">
                <Shield size={15} className="ph-badge-icon" />
                <span>IPv4/IPV6</span>
              </div>
              <div className="ph-badge">
                <Server size={15} className="ph-badge-icon" />
                <span>Cisco Routers and Switches</span>
              </div>
              <div className="ph-badge">
                <Cloud size={15} className="ph-badge-icon" />
                <span>Packet Tracer</span>
              </div>
              <div className="ph-badge">
                <ShieldAlert size={15} className="ph-badge-icon" />
                <span>NAT</span>
              </div>
              <div className="ph-badge">
                <Share2 size={15} className="ph-badge-icon" />
                <span>IPSEC</span>
              </div>
              <div className="ph-badge">
                <Wrench size={15} className="ph-badge-icon" />
                <span>VLANs</span>
              </div>
              <div className="ph-badge">
                <Laptop size={15} className="ph-badge-icon" />
                <span>Configuring Routers and Switches</span>
              </div>
              <div className="ph-badge">
                <Lock size={15} className="ph-badge-icon" />
                <span>Configuring Network Security</span>
              </div>
              <div className="ph-badge">
                <Activity size={15} className="ph-badge-icon" />
                <span>Troubleshooting Networks</span>
              </div>
              <div className="ph-badge">
                <MessageSquare size={15} className="ph-badge-icon" />
                <span>Routing Protocol Deployment</span>
              </div>
              <div className="ph-badge">
                <Lightbulb size={15} className="ph-badge-icon" />
                <span>Dynamic Routing</span>
              </div>
              <div className="ph-badge">
                <Users size={15} className="ph-badge-icon" />
                <span>Analytical thinking</span>
              </div>
              <div className="ph-badge">
                <Clock size={15} className="ph-badge-icon" />
                <span>Problem-solving</span>
              </div>
              <div className="ph-badge">
                <Briefcase size={15} className="ph-badge-icon" />
                <span>Technical Communication</span>
              </div>
              <div className="ph-badge">
                <Terminal size={15} className="ph-badge-icon" />
                <span>Network Design</span>
              </div>
              <div className="ph-badge">
                <Terminal size={15} className="ph-badge-icon" />
                <span>Subnetting</span>
              </div>
              <div className="ph-badge">
                <Terminal size={15} className="ph-badge-icon" />
                <span>Inter-VLAN Routing</span>
              </div>
              <div className="ph-badge">
                <Terminal size={15} className="ph-badge-icon" />
                <span>Access Control Lists</span>
              </div>
              <div className="ph-badge">
                <Terminal size={15} className="ph-badge-icon" />
                <span>Implementing IPSEC VPNs</span>
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
    </>
  );
}