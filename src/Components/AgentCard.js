import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function AgentCard(agent) {
  console.log("here", agent.background_photo.href);
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          className="agentsPhoto"
          src={agent.background_photo.href}
          //src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        ></img>
        <h4>{agent.full_name}</h4>
        <p>Real estate Agent</p>
        <p>{agent.description.slice(0, 150)}...</p>
        <div className="readMore">
          <a href="">...read more</a>
        </div>
        <div className="iconContainer">
          <AiFillTwitterCircle className="icon" />
          <FaFacebook className="icon" />
          <FaLinkedin className="icon" />
          <AiFillInstagram className="icon" />
        </div>
      </div>
    </div>
  );
}
