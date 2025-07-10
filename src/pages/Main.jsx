import '../components/main.css';
import React from 'react';



const features = [
  { title: "🎯 Career Path Selector", desc: "Choose a field based on your interest and discover all possible career paths." },
  { title: "🧭 Stepwise Roadmap", desc: "Follow structured steps with resources, skills, and timelines." },
  { title: "💡 Daily Quotes", desc: "Stay inspired with curated motivational quotes." },
  { title: "📹 Video Suggestions", desc: "Get relevant YouTube content based on your selected path." },
  { title: "📝 Self Assessments", desc: "Quick quizzes to understand your strengths and direction." },
  { title: "📊 Goal Tracker", desc: "Track your learning, completed milestones, and progress." }
];
export default function Main() {
  return (
    <>
    <div id='head'>
      <div id="head1">
        <h1 className="h">
          Every great journey begins with a single step — and you're already taking yours.
        </h1>
        <p className="p">
          Stepwise is built on the belief that growth happens through small, intentional choices. 
          Whether you are a student seeking direction, a curious learner exploring possibilities, 
          or someone still figuring things out, this platform is designed to guide you.
          <br /><br />
          With each step forward, you're not just choosing a career path —
          you're building a future that reflects your passions, strengths, and purpose.
        </p>
      </div>
      <img id='pic' src='/pic.png' alt='Direction' />
    </div>
    <div className="snap-slider-wrapper">
      <div className="snap-slider">
        {features.map((item, i) => (
          <div className="snap-card" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
// components/FeatureSlider.jsx

// FeatureSlider.jsx
