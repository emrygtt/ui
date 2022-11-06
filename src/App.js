import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./components/contexts/AppContext";

const ListView = React.lazy(() => import("./components/views/ListView"))
const DetailsView = React.lazy(() => import("./components/views/DetailsView"))

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/details/:title' element={<DetailsView />} />
          <Route path='/' element={<ListView />} />
        </Routes>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
