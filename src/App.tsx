import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Recipes from './pages/Recipes';
import ExerciseLibrary from './pages/ExerciseLibrary';
import Team from './pages/Team';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/exercise-video-library" element={<ExerciseLibrary />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
