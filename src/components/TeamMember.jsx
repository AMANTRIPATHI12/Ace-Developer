import React from "react";
import { useParams } from "react-router-dom"; // To get the team member's ID
import styles from "./TeamMember.module.css";
import { teamMembers } from "../assets/teamData"; // Import team data

const TeamMember = () => {
  const { id } = useParams(); // Get team member's ID from URL
  const member = teamMembers.find((m) => m.id === id); // Find the correct team member

  if (!member) {
    return <h2 className={styles.notFound}>Team member not found.</h2>;
  }

  return (
    <div className={styles.teamMember}>
      <img src={member.image} alt={member.name} />
      <h1>{member.name}</h1>
      <p>{member.description}</p>
      <a href={member.resume} download className={styles.downloadButton}>
        Download Resume
      </a>
    </div>
  );
};

export default TeamMember;
