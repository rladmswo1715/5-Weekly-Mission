import './App.css';
import './style/form.css';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/layout/header/Header.jsx';
import Footer from './components/layout/footer/Footer.jsx';
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
