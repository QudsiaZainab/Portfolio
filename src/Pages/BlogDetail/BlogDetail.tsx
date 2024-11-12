import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../Store/Store';
import './BlogDetail.css';

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = id ? parseInt(id, 10) : NaN;

  const blog = useSelector((state: RootState) =>
    state.blogs.blogs.find((blog) => blog.id === blogId)
  );

  console.log(blog?.image);
  

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <section className="blog-detail">
      <h2><span className='blg-t'>{blog.title}</span><span className='blg-c'>{blog.category}</span></h2>
      <img src={`/${blog.image}`} alt={blog.title} />
      <p>{blog.description}</p>
    </section>
  );
};
