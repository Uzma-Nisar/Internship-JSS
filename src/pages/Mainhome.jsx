import React, { useState } from 'react';
import './Mainhome.css';
import heroImg from '../assets/hero.png';
import { useNavigate } from "react-router-dom";
import PricingModal from './PricingModal'; 


import { FiClock, FiMap, FiAward, FiPlayCircle, FiCpu, FiGlobe } from 'react-icons/fi';
import {
  LuMonitor,
  LuNetwork,
  LuCloud,
  LuShieldAlert,
  LuCpu,
  LuBriefcase,
  LuCode,
  LuDatabase,
  LuArrowUpRight,
  LuClock,
  LuGraduationCap,
  LuFileText,
  LuMonitorPlay,
  LuBadgeCheck,
  LuRocket,
  LuBuilding2,
  LuTrendingUp,
  LuUsers,
  LuAward
} from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hadi from "../assets/hadi.jpg";
import yan from "../assets/marios.jpg";
import desktop from "../assets/mehwish.jpg";
import bradley from "../assets/bradley.jpg";
import nelson from "../assets/niel.jpg";
import mario from "../assets/dani.jpg";
import reetika from "../assets/Ali.jpg";
import haifa from "../assets/haifa.jpg";
import zeeshan from "../assets/zeeshan.jpg";


function Mainhome() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const learners = [
  {
    image: hadi,
    name: "Hadia Wali",
    role: "Cyber Security Engineer",
    company: "TikTok",
  },
  {
    image: yan,
    name: "Yan Lyu",
    role: "IT Support Engineer",
    company: "Amazon Web Services",
  },
  {
    image: desktop,
    name: "Mehwish Saeed",
    role: "Product Specialist",
    company: "Computacenter US",
  },
  {
    image: bradley,
    name: "Bradley Williams",
    role: "Systems Administrator",
    company: "RadNet",
  },
  {
    image: nelson,
    name: "Nelson J.",
    role: "Microsoft 365 Support Engineer",
    company: "Microsoft",
  },
  {
    image: mario,
    name: "Danyal",
    role: "Desktop Support Engineer",
    company: "A&O IT Group",
  },
  {
    image: reetika,
    name: "Reetika Dhiman",
    role: "IT Specialist",
    company: "Knix",
  },
  {
    image: haifa,
    name: "Haifa Shalabi",
    role: "System Administrator",
    company: "HR Service Partners",
  },
  {
    image: zeeshan,
    name: "Zeeshan B. Nasir",
    role: "Information Technology",
    company: "All Native Group",
  },
];

  return (
    <div className="mainhome-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content animate-fade-in">
          
          <div className="hero-badge">
            <FiAward className="badge-icon-svg" />
            <span>Hands-On Labs & Certifications</span>
          </div>

          <h1 className="hero-title">
            Job-ready Skills <br />
            <span className="text-blue animated-gradient-text"> with hands-on labs</span>
          </h1>
          <p className="hero-subtitle">
            Industry-focused programs with guided roadmaps, real-world labs, and expert support.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary"  style={{
    background: "#1a73e8",
    color: "white"
  }} onClick={() => window.location.href='#programs'}>Explore Programs &rarr;</button>
            <button className="btn-secondary"  style={{
    background: "white",
    color: "#1a73e8"
  }}onClick={() => window.location.href='#preview'}>
              <FiPlayCircle className="btn-icon" /> Watch Preview
            </button>
          </div>
          
          <div className="hero-features-row">
            <div className="feature-item">
              <div className="feature-icon-circle icon-pulse">
                <FiClock className="react-icon-svg" />
              </div>
              <div className="feature-text-block">
                <h4>24/7 Access</h4>
                <p>Learn anytime, anywhere</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-circle icon-pulse">
                <FiMap className="react-icon-svg" />
              </div>
              <div className="feature-text-block">
                <h4>Guided Roadmaps</h4>
                <p>Step-by-step learning</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-circle icon-pulse">
                <FiCpu className="react-icon-svg" />
              </div>
              <div className="feature-text-block">
                <h4>Hands-On Labs</h4>
                <p>Real-world simulations</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image-placeholder">
          <img 
            src={heroImg} 
            alt="EdTech 4D Learning and Labs Illustration" 
            className="hero-responsive-img" 
          />
        </div>
      </section>

      {/* 2. EXPLORE PROGRAMS */}
      <section className="programs-section" id="programs">
        <div className="section-header">
          <div>
            <h2>Explore Our Programs</h2>
            <p>Choose a path that matches your goals and start building job-ready skills.</p>
          </div>
          <button 
            className={`btn-view-all ${showAll ? 'active-btn' : ''}`}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Programs"}
          </button>
        </div>

        <div className="programs-grid">
          {/* Card 1: Modern IT */}
          <div className="program-card">
            <div className="card-top-layout">
              <div className="badge-meta-container">
                <span className="meta-badge-item"><LuGraduationCap /> Entry-Level</span>
                <span className="meta-badge-item"><LuClock /> ~96 hrs</span>
              </div>
              <div className="program-icon-wrapper bg-blue">
                <LuMonitor className="prog-card-icon" />
              </div>
              <h3
  style={{ cursor: "pointer" }}
  onClick={() => navigate("/programs/it-support")}
>Modern IT Support Certificate Program</h3>
              <p><strong>Best for:</strong> Help Desk, IT Support, Service Desk</p>
              <p className="tags">OS • Hardware • AD • Microsoft 365 • Troubleshooting</p>
            </div>
            <div className="card-bottom-layout">
              <button
  className="btn-card-link"
  onClick={() => navigate("/programs/it-support")}
>
                Open Program <LuArrowUpRight />
              </button>
            </div>
          </div>

          {/* Card 2: Cybersecurity */}
          <div className="program-card">
            <div className="card-top-layout">
              <div className="badge-meta-container">
                <span className="meta-badge-item"><LuGraduationCap /> Advanced</span>
                <span className="meta-badge-item"><LuClock /> ~90 hrs</span>
              </div>
              <div className="program-icon-wrapper bg-red">
                <LuShieldAlert className="prog-card-icon" />
              </div>
<h3
  style={{ cursor: "pointer" }}
  onClick={() => navigate("/cyber")}
>
  Cybersecurity Analyst Certificate Program
</h3>
              <p><strong>Best for:</strong> SOC Analyst, Security Operations</p>
              <p className="tags">Security • SIEM • Python • Incident Response</p>
            </div>
            <div className="card-bottom-layout">
              <button
  className="btn-card-link"
  onClick={() => navigate("/cyber")}
>
  Open Program <LuArrowUpRight />
</button>
            </div>
          </div>
        
          
          {/* Card 3: Systems Engineer */}
          <div className="program-card">
            <div className="card-top-layout">
              <div className="badge-meta-container">
                <span className="meta-badge-item"><LuGraduationCap /> Entry-Level</span>
                <span className="meta-badge-item"><LuClock /> ~96 hrs</span>
              </div>
              <div className="program-icon-wrapper bg-green">
                <LuNetwork className="prog-card-icon" />
              </div>
              <h3 style={{cursor: 'pointer'}} onClick={() => navigate("/System")}>Systems Engineer Certificate Program</h3>
              <p><strong>Best for:</strong> IT Operations, Infrastructure Support</p>
              <p className="tags">Linux • Bash • Networking • AWS • Virtualization</p>
            </div>
            <div className="card-bottom-layout">
              <button className="btn-card-link" onClick={() =>  navigate("/System")}>
                Open Program <LuArrowUpRight />
              </button>
            </div>
          </div>

          {/* Card 4:azure Cloud Engineer */}
          <div className="program-card">
            <div className="card-top-layout">
              <div className="badge-meta-container">
                <span className="meta-badge-item"><LuGraduationCap /> Intermediate</span>
                <span className="meta-badge-item"><LuClock /> ~95 hrs</span>
              </div>
              <div className="program-icon-wrapper bg-purple">
                <LuCloud className="prog-card-icon" />
              </div>
              <h3 style={{cursor: 'pointer'}}  onClick={() => navigate("/Azure")}>Azure Cloud Engineer Certificate Program</h3>
              <p><strong>Best for:</strong> Cloud Operations, Infrastructure</p>
              <p className="tags">AWS • Azure • DevOps • Terraform • Automation</p>
            </div>
            <div className="card-bottom-layout">
              <button className="btn-card-link"onClick={() => navigate("/Azure")}>
                Open Program <LuArrowUpRight />
              </button>
            </div>
          </div>

          

          {/* Expanded Dynamic Cards */}
          {showAll && (
            <>
             {/* Card 1: AWS Cloud Engineer */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Basic to Advanced</span>
      <span className="meta-badge-item"><LuClock /> 36 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}}  onClick={() => navigate("/Awscloud")}>AWS Cloud Engineer Certificate Program</h3>
    <p><strong>Best for:</strong> Become an AWS Certified Cloud Engineer</p>
    <p className="tags">AWS • EC2 • Elastic Block Storage • VPC • S3</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() =>  navigate("/Awscloud")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>

{/* Card 2: Cisco Network Engineer */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Basic to Advanced</span>
      <span className="meta-badge-item"><LuClock /> 68 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() => navigate("/Cisco")}>Cisco Network Engineer Certificate Program</h3>
    <p><strong>Best for:</strong> Become a Certified Cisco Network Engineer</p>
    <p className="tags">Wireshark • Cisco IOS • Ethernet • DHCP • DNS</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Cisco")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>


{/* Card 7: Freelancer */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Intermediate to Advanced</span>
      <span className="meta-badge-item"><LuClock /> 15 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-orange">
      <LuBriefcase className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() => navigate("/Freelancer")}>Become a Freelancer | Skills-to-Income Program</h3>
    <p><strong>Best for:</strong> Transform Your Skills into a Sustainable Freelance Career</p>
    <p className="tags">Fiverr • Upwork • LinkedIn • Dribbble • Behance</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Freelancer")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>



{/* Card 3: Data Analytics */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Beginner-Friendly</span>
      <span className="meta-badge-item"><LuClock /> 5 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() => navigate("/Dataana")}>Data Analytics Certificate Program</h3>
    <p><strong>Best for:</strong> Transform Data into Insights with Power BI</p>
    <p className="tags">Microsoft Power BI • Power Query • DAX</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Dataana")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>




{/* Card 4: Data Science */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Beginner</span>
      <span className="meta-badge-item"><LuClock /> 6 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() =>navigate("/Datasc")}>Data Science Certificate Program</h3>
    <p><strong>Best for:</strong> Become proficient in Python for data science applications</p>
    <p className="tags">Python</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Datasc")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>

{/* Card 5: AI Engineering */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Beginner to Intermediate</span>
      <span className="meta-badge-item"><LuClock /> 31 hours 0 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() =>navigate("/Ai")}>AI Engineering certificate program</h3>
    <p><strong>Best for:</strong> Unlock the World of AI with Python Expertise</p>
    <p className="tags">Python • PyGame</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Ai")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>

{/* Card 6: IT Support Technician */}
<div className="program-card fade-in-animation">
  <div className="card-top-layout">
    <div className="badge-meta-container">
      <span className="meta-badge-item"><LuGraduationCap /> Beginner to Intermediate</span>
      <span className="meta-badge-item"><LuClock /> 71 hours 54 min</span>
    </div>
    <div className="program-icon-wrapper bg-indigo">
      <LuCpu className="prog-card-icon" />
    </div>
    <h3 style={{cursor: 'pointer'}} onClick={() => navigate("/Wi")}>Working as an IT Support Technician</h3>
    <p><strong>Best for:</strong> Build a career in IT Support with foundational skills</p>
    <p className="tags">Windows OS • MacOS • Linux • Azure • Active Directory</p>
  </div>
  <div className="card-bottom-layout">
    <button className="btn-card-link" onClick={() => navigate("/Wi")}>
      Open Program <LuArrowUpRight />
    </button>
  </div>
</div>


              {/* Card 7: Web Development (Coming Soon) */}
              <div className="program-card coming-soon-card fade-in-animation">
                <div className="card-top-layout">
                  <span className="absolute-coming-soon-ribbon">Coming Soon</span>
                  <div className="badge-meta-container">
                    <span className="meta-badge-item"><LuGraduationCap /> Basic</span>
                  </div>
                  <div className="program-icon-wrapper bg-pink">
                    <LuCode className="prog-card-icon" />
                  </div>
                  <h3>Executive Web Development</h3>
                  <p><strong>Best for:</strong> Frontend & Backend roles, freelancing, junior developer jobs</p>
                  <p className="tags">HTML • CSS • JavaScript • APIs • Git • Deployment</p>
                </div>
              </div>

              {/* Card 8: Data Science (Coming Soon) */}
              <div className="program-card coming-soon-card fade-in-animation">
                <div className="card-top-layout">
                  <span className="absolute-coming-soon-ribbon">Coming Soon</span>
                  <div className="badge-meta-container">
                    <span className="meta-badge-item"><LuGraduationCap /> Basic</span>
                  </div>
                  <div className="program-icon-wrapper bg-soft-blue">
                    <LuDatabase className="prog-card-icon" />
                  </div>
                  <h3>Data Science</h3>
                  <p><strong>Best for:</strong> Data Analyst, BI, Python data projects, entry data roles</p>
                  <p className="tags">Python • Pandas • SQL • Visualization • ML basics</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="how-it-works">
        <div className="hiw-wrapper">
          <h2>How It Works</h2>
          <div className="hiw-grid">
            {[
              { num: "1", icon: <LuFileText />, title: "Choose a Program", desc: "Select the program that fits your goals" },
              { num: "2", icon: <LuCloud />, title: "Follow Roadmap", desc: "Step-by-step learning path designed for you" },
              { num: "3", icon: <LuMonitorPlay />, title: "Watch & Learn", desc: "High-quality lessons by industry experts" },
              { num: "4", icon: <LuNetwork />, title: "Practice in Labs", desc: "Hands-on labs to build real skills" },
              { num: "5", icon: <LuBadgeCheck />, title: "Anytime Access", desc: "Learn at your pace, anytime, anywhere" }
            ].map((item, index) => (
              <div className="hiw-card" key={index}>
                <div className="step-badge">{item.num}</div>
                <div className="icon-circle">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {index < 4 && (<div className="connector-line"></div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO PREVIEW */}
      <VideoPreview/>

      {/* 5. PREMIUM MEMBERSHIP */}
      <section className="premium-section">
  <div className="premium-card">
    {/* Left Side: Icon and Badge */}
    <div className="premium-left">
      <div className="premium-icon-box">
        <LuCpu size={40} />
      </div>
      <p className="badge-text">Premium + Bulk Options</p>
    </div>
    
    {/* Right Side: Content and Buttons */}
    
    <div className="premium-right">
      <div className="top-badge">
        <LuGraduationCap /> Premium Membership
      </div>
      <h2>Become a <span>Premium Member</span></h2>
      <p>Unlock full access to all JobSkillShare labs, real-world simulations, and guided career roadmaps to accelerate your IT journey — from your first support job to advanced Cloud, Cybersecurity, and AI roles.</p>
      
      <div className="business-info">
        <LuShieldAlert /> <strong>For Businesses • Institutions • Government</strong>
        <p>Looking for <strong>bulk licenses</strong> and discounted pricing for teams or large-scale skills programs? Contact our sales team for enterprise options.</p>
      </div>

      <div className="action-buttons">
        <button className="btn-premium" onClick={() => window.open('https://www.jobskillshare.org', '_blank')}>
          <LuRocket /> Become a Premium Member
        </button>
        <button className="btn-bulk" onClick={() => window.open('mailto:sales@jobskillshare.org')}>
          <LuBuilding2 /> Request Bulk License
        </button>
      </div>

      <p className="footer-link">
        <FiGlobe /> Individuals: Premium membership. Organizations: Bulk licensing — <a href="mailto:sales@jobskillshare.org">sales@jobskillshare.org</a>
      </p>
    </div>
  </div>
</section>

   {/* 7. SUCCESS STORIES */}

<section className="success-section" id="success">

    <div className="success-badge">
        <LuTrendingUp />
        Career Success
    </div>

    <h2>
        Real <span>Career Outcomes</span>
    </h2>

    <p className="success-subtitle">
        Our success stories speak volumes: members, including those without prior IT
        education or facing challenges, have landed thriving IT careers. We go beyond
        entry-level roles, offering intermediate to advanced roadmaps for long-term
        career growth.
    </p>

    <div className="stats-container">

        <div className="stat-box">
            <LuUsers />
            <h3>50,000+</h3>
            <p>Active Learners</p>
        </div>

        <div className="stat-box">
            <LuAward />
            <h3>95%</h3>
            <p>Success Rate</p>
        </div>

        <div className="stat-box">
            <LuTrendingUp />
            <h3>10,000+</h3>
            <p>Career Placements</p>
        </div>

    </div>

</section>
<section className="learners-working-section" id="testimonials">

    <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop={true}
        breakpoints={{
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }}
    >

        {learners.map((item, index) => (

            <SwiperSlide key={index}>

                <div className="learner-card">

                    <img src={item.image} alt={item.name} />

                    <h3>{item.name}</h3>

                    <p>{item.role}</p>

                    <span>{item.company}</span>

                </div>

            </SwiperSlide>

        ))}

    </Swiper>

</section>

      {/* 8. CTA BANNER */}
     <section className="cta-banner-section">
  <div className="cta-banner-card">

    <div className="cta-banner-content">
      <h2>Ready to Start Your Journey?</h2>

      <p>
        Join thousands of learners building job-ready skills
        and advancing their careers with expert-led training.
      </p>
    </div>

    <button 
      className="btn-cta-light" 
      onClick={() => window.open('https://www.jobskillshare.org/affiliate-program/', '_blank')}
    >
      Get Started Now →
    </button>
    <PricingModal isOpen={isPricingOpen} onClose={() =>window.open('https://www.jobskillshare.org/affiliate-program/', '_blank')} />

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
  );
}

const VideoPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Play status ke liye

  const videoList = [
    { title: "Role and Careers of Power BI", url: "https://player.vimeo.com/video/1096918910?h=535de35205&autoplay=1" },
    { title: "LinkedIn Profile Optimization for Freelancers", url: "https://player.vimeo.com/video/1096918910?h=535de35205&autoplay=1" },
    { title: "COMPTIA A+ Lab Demo", url: "https://player.vimeo.com/video/1096918910?h=535de35205&autoplay=1" },
    { title: "Project 01: DNS", url: "https://player.vimeo.com/video/1096918910?h=535de35205&autoplay=1" },
    { title: "Route53 Demo", url: "https://player.vimeo.com/video/1096918910?h=535de35205&autoplay=1" }
  ];

  return (
    <section className="video-preview-section" id="preview">
      <div className="video-preview-container">
        
        <div className="video-header">
          <span className="preview-badge">Preview Our Content</span>
          <h2>Video <span>Preview</span></h2>
          <p>Lecture + Labs examples. Watch sample lectures and lab demonstrations to experience our teaching style firsthand.</p>
        </div>

        <div className="featured-video-card">
          
          
          {/* Click to play logic */}
          {!isPlaying ? (
  <div className="video-placeholder" onClick={() => setIsPlaying(true)}>
    <div className="play-icon-circle">
       <div className="play-triangle"></div>
    </div>
  </div>
) :  (
            <div className="video-frame fade-video">
              <iframe 
                src={videoList[activeIndex].url}
                className="w-full h-full" 
                allow="autoplay; fullscreen" 
                allowFullScreen 
                title={videoList[activeIndex].title}
              ></iframe>
            </div>
          )}
          
          <h3 className="featured-title">{videoList[activeIndex].title}</h3>
        </div>

        {/* Controls and Thumbnails */}
        <div className="slider-controls">
          <div className="dots">
            {videoList.map((_, i) => <span key={i} className={activeIndex === i ? 'dot active' : 'dot'}></span>)}
          </div>
          <div className="nav-buttons">
            <button onClick={() => { setActiveIndex(prev => Math.max(0, prev - 1)); setIsPlaying(false); }}>&lt;</button>
            <button onClick={() => { setActiveIndex(prev => Math.min(videoList.length - 1, prev + 1)); setIsPlaying(false); }}>&gt;</button>
          </div>
        </div>

        <div className="preview-thumbnails">
          {videoList.map((video, index) => (
            <button key={index} onClick={() => { setActiveIndex(index); setIsPlaying(false); }} className={`thumb-card ${activeIndex === index ? "thumb-active" : ""}`}>
              <div className="thumb-play">▶</div>
              <span>{video.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mainhome;