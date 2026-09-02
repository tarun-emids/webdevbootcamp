import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Posts from './pages/Posts.jsx';
import PostDetail from './pages/PostDetails.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />

        <div className='flex-grow-1'>
          <div className='container mt-4 mb-5'>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
            
              <Route path="*" element={<NotFound />} />
            </Routes>

          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
