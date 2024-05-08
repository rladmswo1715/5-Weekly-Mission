import { Routes, Route } from "react-router-dom";
import IncludeLayoutStructure from "./components/layout/IncludeLayoutStructure";
import GlobalStyle from "./style/Global.styled";

import Shared from "./pages/Shared";
import Folder from "./pages/Folder";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<IncludeLayoutStructure />} />
        <Route path="/shared" element={<IncludeLayoutStructure />}>
          <Route index element={<Shared />} />
        </Route>
        <Route path="/folder" element={<IncludeLayoutStructure />}>
          <Route index element={<Folder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
