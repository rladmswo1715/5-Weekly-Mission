import './App.css';
import './style/form.css';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer.js';
import Folder from './pages/Folder';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/folder" element={<Folder />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
