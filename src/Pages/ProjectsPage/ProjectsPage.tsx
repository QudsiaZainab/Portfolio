import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Features/ProjectsSlice';
import { RootState } from '../../Store/Store';
import { useState } from 'react';
import './ProjectsPage.css';
import { Project } from '../../Types/ProjectType';

export const ProjectsPage = () => {
  const dispatch = useDispatch();
  const { projects, filter } = useSelector((state: RootState) => state.projects);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const handleFilter = (filterValue: 'all' | 'web' | 'android') => {
    dispatch(setFilter(filterValue));
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when search changes
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

  // Pagination Logic
  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="portfolio" id="portfolio-page">
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
        {currentProjects.map((project) => (
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

      {/* Conditional Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {currentPage > 1 && (
            <button className="page-btn" onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className="page-btn" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      )}
    </section>
  );
};
