import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css'
import Home from './Pages/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import { ProjectsPage } from './Pages/ProjectsPage/ProjectsPage';
import { BlogDetail } from './Pages/BlogDetail/BlogDetail';
import { BlogsPage } from './Pages/BlogsPage/BlogsPage';

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
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
