import "./App.css";
import EducationalBackground from "./components/EducationalBackground";
import PersonalInfo from "./components/PersonalInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkExperience from "./components/WorkExperience";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState("iceman");
  // Switches the theme
  const switchTheme = () => {
    if (theme === "iceman") {
      setTheme("fiesta");
    } else {
      setTheme("iceman");
    }
  };
  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col align-items-center text-center">
            <button onClick={switchTheme}>Switch Theme</button>
            <header className="App-header">Hannu Salmi</header>

            <img
              className="hannu"
              src="./hannu_salmi_kuva.png"
              alt="Image where Hannu Salmi looks happy"
            />
            {theme === "fiesta" && (
              <img
                className="hat"
                src="./sombreroHans.png"
                alt="Image for Fiesta theme"
              />
            )}
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="row">
          <div className="col-12 col-md">
            <PersonalInfo></PersonalInfo>
          </div>
          <div className="col-12 col-md">
            <EducationalBackground />
          </div>
          <div className="col-12 col-md">
            <WorkExperience />
          </div>
          <div className="col-12 col-md">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
