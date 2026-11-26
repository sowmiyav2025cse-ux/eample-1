import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import StatCard from "./components/StatCard";
import Footer from "./components/Footer";
import "./App.css";

const people = [
  { name: "Aarav Kumar", role: "Frontend Developer", initials: "AK", color: "blue", skills: ["React", "CSS", "JavaScript"], location: "Chennai" },
  { name: "Meera S", role: "UI Designer", initials: "MS", color: "pink", skills: ["Figma", "Design Systems", "Prototyping"], location: "Coimbatore" },
  { name: "Dev Raj", role: "Backend Developer", initials: "DR", color: "green", skills: ["Node.js", "SQL", "APIs"], location: "Bengaluru" }
];

export default function App() {
  return <div className="page"><Header />
    <main className="container">
      <section className="intro"><p className="eyebrow">TEAM DIRECTORY</p><h1>People make<br/><span>great work happen.</span></h1><p>Meet the people, skills and ideas behind our student developer community.</p></section>
      <section className="stats"><StatCard value="12" label="Team members"/><StatCard value="08" label="Projects"/><StatCard value="15+" label="Skills shared"/></section>
      <div className="section-heading"><div><p className="eyebrow">OUR PEOPLE</p><h2>Featured members</h2></div><span className="count">03 MEMBERS</span></div>
      <section className="profiles">{people.map(person => <ProfileCard key={person.name} person={person}/>)}</section>
    </main><Footer />
  </div>;
}