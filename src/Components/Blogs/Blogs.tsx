import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../Features/BlogsSlice';
import { RootState } from '../../Store/Store';
import { useState } from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';

export const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, filter } = useSelector((state: RootState) => state.blogs);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (filterValue: 'all' | 'web' | 'android') => {
    dispatch(setFilter(filterValue));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    dispatch(setFilter(filter)); 
  };




  const filteredBlogs = blogs.filter(
    (blog) =>
      (filter === 'all' || blog.category === filter) &&
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const limitedProjects = filteredBlogs.slice(0, 6);

  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Latest <span>Blogs</span>
      </h2>

      <input
        type="text"
        placeholder="Search blogs..."
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
        {limitedProjects.map((blog) => (
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

      <div id="more-projects-btn">
        <Link to="/blogs" className="btn">View More</Link>
      </div>

    </section>
  );
};
