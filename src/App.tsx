
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './Pages/About-me';
import Portfolio from './Pages/Portfolio';
import Education from './Pages/Education';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;