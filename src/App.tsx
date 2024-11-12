import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import Loader from './Components/Loader/Loader';

const Home = lazy(() => import('./Pages/Home/Home'));
const ProjectsPage = lazy(() => import('./Pages/ProjectsPage/ProjectsPage'));
const BlogsPage = lazy(() => import('./Pages/BlogsPage/BlogsPage'));
const BlogDetail = lazy(() => import('./Pages/BlogDetail/BlogDetail'));

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <Header />
      <Suspense fallback={<div><Loader/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
