import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Features/BlogsSlice';
import { RootState } from '../../Store/Store';
import { useState } from 'react';
import './BlogsPage.css';
import { Blog } from '../../Types/BlogType';
import { Link } from 'react-router-dom';

export const BlogsPage = () => {
  const dispatch = useDispatch();
  const { blogs, filter } = useSelector((state: RootState) => state.blogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const handleFilter = (filterValue: 'all' | 'web' | 'android') => {
    dispatch(setFilter(filterValue));
    setCurrentPage(1); 
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };



  const filteredProjects = blogs.filter(
    (blog) =>
      (filter === 'all' || blog.category === filter) &&
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
    <section className="blog" id="blog-page">
      <h2 className="heading">
        Latest <span>Blogs</span>
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
        {currentProjects.map((blog) => (
          <div className={`portfolio-box ${blog.category}`} key={blog.id}>
            <img src={blog.image} alt="Project" />
            <div className="portfolio-layer">
              <h4>{blog.title}</h4>
              <div className="portfolio-box-btns">
              <Link to={`/blog/${blog.id}`} className="btn">
                  View Blog
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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
