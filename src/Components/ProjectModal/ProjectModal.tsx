import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './ProjectModal.css'

interface ProjectModalProps {
  title: string;
  description: string;
  projectLink: string;
  sourceCodeLink: string;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ title, description, projectLink, sourceCodeLink, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="project-modal-top">
        <button className=" btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>
      <div className="modal-buttons">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
      </div>
    </div>
  </div>
);
