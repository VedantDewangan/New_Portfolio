import React from "react";
import "./SkillCard.css"
import { useNavigate } from "react-router";

export const SkillCard = ({ name, value }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="skill-card" onClick={()=>{
        // navigate(`/pdf/${value}`)
      }}>{name}</div>
    </>
  );
};
