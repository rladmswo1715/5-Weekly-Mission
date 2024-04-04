import './App.css';
import { Routes, Route } from 'react-router-dom';
import IncludeLayoutStructure from './components/layout/IncludeLayoutStructure';
import GlobalStyle from './style/Global.styled';

import Shared from './pages/Shared';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<IncludeLayoutStructure />} />
        <Route path="/shared" element={<IncludeLayoutStructure />}>
          <Route index element={<Shared />}  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
