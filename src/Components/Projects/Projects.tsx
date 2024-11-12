import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Features/ProjectsSlice';
import { RootState } from '../../Store/Store';
import { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import { Project } from '../../Types/ProjectType';

export const Projects = () => {
  const dispatch = useDispatch();
  const { projects, filter } = useSelector((state: RootState) => state.projects);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFilter = (filterValue: 'all' | 'web' | 'android') => {
    dispatch(setFilter(filterValue));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(setFilter(filter)); 
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };


  const filteredProjects = projects.filter(
    (project) =>
      (filter === 'all' || project.category === filter) &&
      (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const limitedProjects = filteredProjects.slice(0, 6);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div id="filter-btns">
        <div
          className={`btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          All
        </div>
        <div
          className={`btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => handleFilter('web')}
        >
          Web
        </div>
        <div
          className={`btn ${filter === 'android' ? 'active' : ''}`}
          onClick={() => handleFilter('android')}
        >
          Android
        </div>
      </div>

      <div className="portfolio-container">
        {limitedProjects.map((project) => (
          <div className={`portfolio-box ${project.category}`} key={project.id}>
            <img src={project.image} alt="Project" />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <div className="portfolio-box-btns">
                <button className="btn" onClick={() => openModal(project)}>
                  View Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="more-projects-btn">
        <Link to="/projects" className="btn">View More</Link>
      </div>
      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          projectLink={selectedProject.projectLink}
          sourceCodeLink={selectedProject.sourceCodeLink}
          onClose={closeModal}
        />
      )}
    </section>
  );
};
