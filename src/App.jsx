import "./App.css";
import ProfileHeader from "./components/ProfileHeader";
import EducationCard from "./components/EducationCard";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="card-container">
        <ProfileHeader />
        <section className="profile-body">
        <div className="education">
            <h2>Education</h2>
            <EducationCard duration="October, 2023 - August, 2025" 
            degree="MS in Computer Science" institute="Assam University, Silchar" />

            <EducationCard duration="September, 2020 - August, 2023" 
            degree="B.Sc in Computer Science" institute="Gurucharan University, Silchar" />

            <EducationCard duration="June, 2018 - June, 2020" 
            degree="Science" institute="Vivekananda Junior College, Silchar" />
        </div>

        <div className="education">
            <h2>Experience</h2>
            
            <Experience duration='November, 2022 - May, 2023' 
            role='Programming & Development Lead' organization="GC CS Students' Club" 
            learning="I managed projects and facilitated teaching sessions, ensuring 
            seamless learning experiences. " />

            <Experience duration='November, 2022 - May, 2023' 
            role='Secretary' organization="GC CS Students' Club" 
            learning="I oversaw and organized all club activities and events, ensuring 
            successful execution of various initiatives." />

        </div>
        </section>
    </div>
)

}

export default App;