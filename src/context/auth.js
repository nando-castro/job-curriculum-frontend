import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [idResume, setIdResume] = useState(null);
  const [experienceItems, setExperienceItems] = useState([]);
  const [formationItems, setFormationItems] = useState([]);
  const [skillItems, setSkillItems] = useState([]);
  const [languageItems, setLanguageItems] = useState([]);
  const [resumeItems, setResumeItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      let person = localStorage.getItem("userLogged");
      person = JSON.parse(person);
      setUser(person);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        idResume,
        setIdResume,
        resumes,
        setResumes,
        experienceItems,
        setExperienceItems,
        formationItems,
        setFormationItems,
        skillItems,
        setSkillItems,
        languageItems,
        setLanguageItems,
        resumeItems,
        setResumeItems,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
