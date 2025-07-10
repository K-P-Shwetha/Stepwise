// src/pages/Category.jsx

import { useLocation, useNavigate } from "react-router-dom";
import '../components/category.css' ;
const careerMap = {
  interests: ["Art", "Gaming", "Sports"],
  studies: ["Engineering", "CA", "BSc"],
  Engineering: ["ComputerScience", "Mechanical", "ECE"],
  ComputerScience: ["WebDeveloper", "AI", "CyberSecurity"],
  WebDeveloper: ["Frontend", "Backend"],
  Frontend: ["React Developer", "UI Designer"],
  Backend: ["Node.js Developer", "Database Admin"],
  Art:["Dance","Painting","Drawing","Music"]
};

const Category = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get path after '/category/'
  const path = location.pathname.replace("/category/", "");
  const levels = path.split("/").filter((seg) => seg.length > 0);
  const currentLevel = levels.length > 0 ? levels[levels.length - 1] : null;
   
  let options = ["interests", "studies"];

  if (careerMap[currentLevel]) {
    options = careerMap[currentLevel]; // Get next options from map
  }
  
  return (
    <div className="body">
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>
        {currentLevel ? `Choose a path from ${currentLevel}` : "Start your career path"}
      </h1>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {options.map((opt, i) => (
          <button className="B"
            key={i}
            onClick={() => navigate(`${location.pathname}/${opt}`)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Category;
